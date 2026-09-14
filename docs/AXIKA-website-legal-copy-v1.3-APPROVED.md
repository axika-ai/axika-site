# AXIKA — legal page copy, amendment 3: analytics, provider categories, CRM + billing

**Version 1.3 · 14 September 2026 · APPROVED — ship it**
**Supersedes:** v1.2 and v1.1 (both 14 September 2026) · **Amends:** v1 handoff (3 September 2026)

> ⚠️ **Read this first.** This version **replaces v1.1 and v1.2 entirely.**
> - Not yet applied either? Ignore them, apply this file.
> - Applied one of them already, deployed or not? Apply the changes below over it.
>
> Every passage is written as final text, not as a diff, so you never need to work out what was applied when.

**What changed from v1.2:** two further service provider categories added (CRM, and payment/billing), plus the
matching legal-basis and retention lines. Everything else is as v1.2.

`/terms` and the footer are **unchanged**. Do not touch them.

---

## Sequencing — unchanged and not negotiable

1. Publish the updated `/privacy` with the new effective date.
2. **Only then, or in the same release**, switch on the analytics script.

---

## Change 1 — `/privacy` effective date

> **Effective 14 September 2026**

---

## Change 2 — §2 "What we collect", the **Analytics.** paragraph

Replace the whole paragraph with:

> **Analytics.** We use a privacy-focused analytics service to understand, in aggregate, how this website is used — which pages people visit, where they arrived from, which sections of a page people read, and how many people send us a message. Our analytics provider is based in the European Union and processes this data there. It sets no cookies, does not store your IP address, and does not follow you across other websites. To work out roughly what kind of device you are using, it reads the details your browser reports and your screen width. The statistics we see are aggregated: we cannot identify or look up an individual visitor.

---

## Change 3 — §3 "Why we use it, and our legal basis"

Replace the table with this one (two new rows at the end):

> | What | Why | Legal basis (GDPR Art. 6) |
> |---|---|---|
> | Contact form submissions | To read your message and reply to you | Art. 6(1)(b) — steps taken at your request before entering a contract; or Art. 6(1)(f) — our legitimate interest in responding to people who contact us |
> | Server logs | Security, troubleshooting, keeping the site available | Art. 6(1)(f) — legitimate interest in operating a secure website |
> | Analytics data | To understand in aggregate how our website is used, and to improve it | Art. 6(1)(f) — our legitimate interest in understanding how our website is used |
> | Our record of business contacts and correspondence | To keep track of our conversations with you and manage our business relationship | Art. 6(1)(f) — our legitimate interest in managing our business contacts and correspondence |
> | Billing and payment information, if you become a customer | To take payment, issue invoices and keep accounting records | Art. 6(1)(b) — performance of our contract with you; and Art. 6(1)(c) — our legal obligation to keep accounting records |

---

## Change 4 — §4 "Who else sees it" — replace the ENTIRE section body

Replace everything under the heading **"4. Who else sees it"** with:

> We share personal information only with service providers who process it on our instructions. They are:
>
> - **Website hosting and contact form services** (United States) — host this website, generate server logs, and receive and store contact form submissions
> - **Spam filtering services** (United States) — automatically check every contact form submission for spam. To do this they receive the content of the submission and the sender's IP address
> - **Email and productivity services** (United States) — our email; contact form messages are also delivered to our inbox
> - **Website analytics services** (European Union) — for each page view they receive the page address, the site you arrived from, the details your browser reports, your screen width, and your IP address. The IP address is used only to work out your approximate location and to count unique visitors within a single day, and is not stored
> - **Customer relationship management (CRM) services** (United States) — hold our record of business contacts and correspondence, including enquiries sent through this website, so that we can manage our conversations with you
> - **Payment, billing and accounting services** (United States) — process payments, issue invoices and maintain accounting records if you become a customer. These services are not used for information collected through this website's contact form
>
> **If you would like to know which specific companies these are, email hello@axika.ai and we will tell you.**
>
> Our domain name is registered through a domain registrar. A registrar operates the domain name system record and does not receive or process any information about visitors to this site.
>
> We may also disclose information where we are legally required to, or to establish or defend legal claims.
>
> **We do not sell your personal information, and we do not share it for cross-context behavioural advertising** — as those terms are used in California law.

⚠️ **The "email us and we will tell you" sentence is not optional and must not be cut.** It is what makes this
section work without company names. If anyone wants it removed, tell legal before shipping.

⚠️ **The final clause of the payment bullet — "These services are not used for information collected through this
website's contact form" — must not be cut either.** Without it the page implies that visitor data goes to a payment
processor, which is not the case.

---

## Change 5 — §5 "International transfers"

Append as a new paragraph at the end of the section:

> One exception: our website analytics provider processes and stores analytics data only in the European Union, so that data is not transferred to the United States.

---

## Change 6 — §6 "How long we keep it"

Two edits in this section.

**(a)** In the paragraph beginning **"In our form provider's dashboard:"** — if it currently reads "from the Netlify
dashboard", change it to "from our form provider's dashboard" so the section carries no provider name.

**(b)** Add these two paragraphs before the closing line "You can ask us to delete your message sooner at any time":

> **In our record of business contacts:** for as long as we have an active business relationship with you, and for up to 24 months after our last exchange.
>
> **Analytics:** our analytics provider keeps aggregated statistics only. Nothing that identifies you is retained.

---

## Change 7 — new, at the very bottom of `/privacy`

Add a small changelog block below section 13:

> ---
>
> **Changes to this policy**
>
> - **14 September 2026** — added website analytics; described our service providers by category; added customer relationship management and billing services.
> - **3 September 2026** — first published.

Style it smaller / muted. Add a dated line here every time this page changes.

---

## Check: no provider names left on the page

Search `/privacy` for each of these. **None should appear anywhere on the page:**

Netlify · Akismet · Automattic · Google · Google Workspace · Plausible · Namecheap

---

## Unchanged — do not edit

- §2 "What we do not collect" · §7 Your rights · §8 Do Not Track · §9 Cookies
- §10 Security · §11 Children · §12 Changes · §13 Contact
- All of `/terms` · the footer block

---

## Build rules

All v1 build rules still apply, with rule 3 as replaced in v1.1:

- 🔴 **No reCAPTCHA**, anywhere on the site
- ✅ **No cookie banner** — confirmed not required. Do not add one, and do not add a consent management platform
- 🔴 **No cookies, no localStorage, no fingerprinting scripts** beyond the analytics script itself
- **Analytics = the approved provider only.** Custom events limited to section-visibility events (event name +
  section id) and a "Contact Form Submit" event (event name only). **No form field contents, names, email addresses
  or message text may ever be sent as an event property or URL parameter.** No other analytics, tag manager,
  heatmap, session-recording or A/B testing tool is approved.
- **No CRM or payment code on the website itself.** This release declares those categories in the policy; it does
  not add any embedded CRM form, tracking script, chat widget or checkout to the site. If a CRM form embed or
  payment flow is wanted later, that is a new change and needs legal sign-off first.

---

## Before you ship — checklist

- [ ] All seven changes applied, effective date 14 September 2026
- [ ] §4 contains **no company names** — run the word check above
- [ ] The "email hello@axika.ai and we will tell you" sentence is present in §4
- [ ] The payment bullet still ends with the contact-form carve-out sentence
- [ ] §3 table has all five rows
- [ ] §6 has both new paragraphs and no provider name
- [ ] Privacy page deployed **before or with** the analytics script — never after
- [ ] Analytics script loads on `/`, `/privacy` and `/terms`
- [ ] Custom events verified with a real test submission — **no form field contents in the payload**
- [ ] No cookie banner added · no cookies set (verify in dev tools)
- [ ] No CRM embed, chat widget, or payment code added to the site in this release
- [ ] `/terms` and footer untouched

---

## If something else needs to change

The copy is approved as written — **do not edit, shorten, summarise or "improve" it.**

Check back before:

- adding **any** other analytics, tracking, testing or session-recording tool
- adding **any** third-party service that touches visitor data — chat widget, scheduling embed, **CRM form embed**,
  newsletter tool, embedded video, embedded map, third-party-hosted fonts
- sending **any** new data to the analytics provider as a custom event or event property
- changing what the contact form collects
- adding a service that does something **not** covered by the six categories in §4 — that is a new category and a
  new bullet. Categories only work while they actually describe everything in use.
