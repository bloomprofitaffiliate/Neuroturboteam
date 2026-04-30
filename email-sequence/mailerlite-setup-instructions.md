# MailerLite Setup Instructions — Neuro-Turbo Brain Quiz

---

## PART 1 — Account & Sender Setup

1. Log into **app.mailerlite.com**
2. Go to **Settings** → **Sender domains**
   - Confirm **mybloomvault.com** shows a green **Verified** badge
3. Go to **Settings** → **General**
   - Set Default sender name: `Neuro-Turbo Team`
   - Set Default sender email: `info@mybloomvault.com`
4. Click **Save changes**

---

## PART 2 — Create Your Subscriber Group

The quiz already creates this group automatically when someone subscribes, but you need to confirm it exists:

1. Go to **Subscribers** → **Groups**
2. Look for **"Neuro-Turbo Brain Quiz Leads"**
   - If it's there — great, move to Part 3
   - If it's not there yet — click **Create group**, name it exactly: `Neuro-Turbo Brain Quiz Leads`

---

## PART 3 — Add a Custom Field for Brain Type

This lets you see each subscriber's brain type (Turbo, Zen, Spirals, Foggy) on their profile:

1. Go to **Subscribers** → **Fields**
2. Click **Add new field**
3. Field name: `brain_type`
4. Field type: **Text**
5. Click **Save**

---

## PART 4 — Create the Automation (Email Sequence)

1. Go to **Automations** → **Create automation**
2. Name it: `Neuro-Turbo Brain Quiz — 15 Day Sequence`
3. Click **Add trigger**
   - Choose: **When subscriber joins a group**
   - Group: **Neuro-Turbo Brain Quiz Leads**
4. Click **Save**

---

## PART 5 — Build Your 15 Emails Inside the Automation

Repeat these steps for each of the 15 emails:

### For Email 1 (sent immediately):
1. Click the **+** button below your trigger
2. Choose **Email**
3. Click **Create email**
4. Enter the subject line from your email sequence file
5. Choose a template — **Minimal** or **Plain text** works best for this style
6. Paste the email body from your sequence file
7. Replace `{name}` with MailerLite's variable: click **Personalize** → select **Subscriber name**
8. Replace the 👉 link with your affiliate link: `https://tinyurl.com/2kc2mta4`
9. Click **Save & close**
10. Back in the automation, the delay for Email 1 = **immediately** (no delay needed)

### For Emails 2–15 (each one day apart):
1. Click the **+** below the previous email step
2. Choose **Delay**
   - Set to: **1 day**
3. Click the **+** below the delay
4. Choose **Email** → **Create email**
5. Paste subject + body from your sequence file
6. Repeat the personalisation and link steps above
7. Save & close
8. Repeat for all 15 emails

---

## PART 6 — Using Jasper to Write or Improve Emails

Jasper does not live inside MailerLite directly. Here is the simplest workflow:

1. Open **Jasper** (jasper.ai) in a separate tab
2. Use the **Email** template or **Long-form editor**
3. Give Jasper this brief for each email:
   - "Write a short, punchy email for a brain health quiz audience. Subject: [paste subject line]. The tone is friendly, science-backed, slightly cheeky. End with a call to action linking to a brain supplement. 150-200 words."
4. Copy Jasper's output
5. Paste it into the MailerLite email editor (replacing or improving the draft from the sequence file)
6. Add the personalisation tag and affiliate link before saving

**Tip:** Use Jasper mainly for emails where you want to A/B test a different angle — your sequence file already has strong copy ready to go.

---

## PART 7 — Set Up a Regular Campaign (Optional Broadcast)

If you ever want to send a one-off email to your whole list (not part of the automation):

1. Go to **Campaigns** → **Create campaign**
2. Choose **Regular campaign**
3. Name it (e.g. `Brain Tip — May 2026`)
4. Choose sender: `info@mybloomvault.com`
5. Write your subject line and email
6. Under **Recipients** → select **Neuro-Turbo Brain Quiz Leads** group
7. Schedule or send immediately

---

## PART 8 — Test Before Going Live

1. Inside your automation, click **Preview**
2. Click **Send test email** → enter your own email address
3. Check that:
   - Your name personalisation shows correctly (not blank or `{subscriber.name}`)
   - The affiliate link opens correctly: `https://tinyurl.com/2kc2mta4`
   - Email renders well on mobile (check Gmail app on your phone)
4. Once happy — click **Activate** on the automation

---

## PART 9 — Go Live Checklist

- [ ] Domain verified (mybloomvault.com) ✅
- [ ] Sender set to info@mybloomvault.com ✅
- [ ] Group "Neuro-Turbo Brain Quiz Leads" exists ✅
- [ ] Custom field "brain_type" created ✅
- [ ] All 15 emails added to automation ✅
- [ ] Each email has correct subject, body, personalisation tag, and affiliate link ✅
- [ ] Delays set: Email 1 immediate, Emails 2–15 each +1 day ✅
- [ ] Test email sent and checked on mobile ✅
- [ ] Automation set to **Active** ✅

Once the automation is active, every new quiz subscriber is automatically enrolled and receives all 15 emails with no further action needed from you.
