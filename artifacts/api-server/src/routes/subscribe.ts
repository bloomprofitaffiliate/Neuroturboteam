import { Router, type IRouter } from "express";

const router: IRouter = Router();

const ML_API = "https://connect.mailerlite.com/api";
const GROUP_NAME = "Neuro-Turbo Brain Quiz Leads";

async function mlFetch(path: string, options: RequestInit = {}) {
  return fetch(`${ML_API}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(options.headers ?? {}),
    },
  });
}

async function getOrCreateGroupId(): Promise<string | null> {
  const res = await mlFetch("/groups?limit=100");
  if (!res.ok) return null;
  const data = (await res.json()) as { data: { id: string; name: string }[] };
  const existing = data.data.find((g) => g.name === GROUP_NAME);
  if (existing) return existing.id;

  const create = await mlFetch("/groups", {
    method: "POST",
    body: JSON.stringify({ name: GROUP_NAME }),
  });
  if (!create.ok) return null;
  const created = (await create.json()) as { data: { id: string } };
  return created.data?.id ?? null;
}

router.post("/subscribe", async (req, res) => {
  const { name, email } = req.body as { name?: string; email?: string };

  if (!email || !email.includes("@")) {
    res.status(400).json({ error: "Valid email required" });
    return;
  }

  if (!process.env.MAILERLITE_API_KEY) {
    res.status(500).json({ error: "MailerLite not configured" });
    return;
  }

  try {
    const groupId = await getOrCreateGroupId();

    const payload: Record<string, unknown> = {
      email,
      fields: { name: name ?? "" },
    };
    if (groupId) payload.groups = [groupId];

    const mlRes = await mlFetch("/subscribers", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (mlRes.ok || mlRes.status === 200 || mlRes.status === 201) {
      req.log.info({ email }, "Subscriber added to MailerLite");
      res.json({ success: true });
    } else {
      const err = await mlRes.json();
      req.log.error({ err }, "MailerLite error");
      res.status(500).json({ error: "Could not subscribe" });
    }
  } catch (e) {
    req.log.error({ e }, "Subscribe route error");
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
