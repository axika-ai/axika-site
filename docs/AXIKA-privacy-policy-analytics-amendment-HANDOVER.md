# AXIKA website — Privacy Policy amendment request: adding analytics

**From:** Website/dev (requested by Pina Schlombs, pina@axika.ai)
**To:** Legal
**Date:** 14 September 2026
**References:** "AXIKA — legal page copy for the website build", Version 1 · 3 September 2026 (the "v1 handoff")
**Status:** Awaiting legal review — nothing ships until approved copy comes back

Section 7 of the v1 handoff instructs us to check back before **adding any analytics tool**, because the published Privacy Policy states in writing that the site has none, and before adding **any new third-party service that touches visitor data**, which must be named in the policy first. This document is that check-back. It covers one change: adding **Plausible Analytics** to axika.ai.

---

## 1. What we want to add, and why

A single privacy-focused analytics service, **Plausible Analytics**, on all three pages (`/`, `/privacy`, `/terms`), to understand in aggregate: how many people visit, where they come from, how they move through the site, how far down the landing page they read, and how many submit the contact form.

The tool was chosen specifically so that the policy's standing commitments survive intact. The current policy promises that if analytics is ever added, it will be a service "that does not set cookies or track you across other websites" (§2). Plausible is that service. **No cookie banner is required or planned** — build rules 2–4 of the v1 handoff (no reCAPTCHA, no cookie banner, no cookies) continue to hold.

## 2. The service — facts for verification

| Item | Fact |
|---|---|
| Provider | Plausible Insights OÜ, Västriku tn 2, 50403 Tartu, **Estonia (EU)** |
| Roles | AXIKA AI Inc. = controller · Plausible = processor |
| Hosting / data location | EU only (EU-owned infrastructure; provider states data does not leave the EU) |
| Mechanism | One JavaScript file (~1 KB) loaded from `plausible.io` on each page; each page view sends one request to Plausible's EU servers |
| Data received per page view | Page URL, referrer, browser + OS (from user agent), device class (from screen width), country/region/city (derived from IP) |
| IP addresses | Used transiently to derive location and to count unique visitors via a **daily-rotating salted hash** (salt + domain + IP + user agent); the raw IP and user agent are **not stored**, and the hash cannot link a visitor across days |
| Cookies / device storage | **None.** No cookies, no localStorage, no fingerprinting beyond the daily hash above |
| Cross-site tracking | None — data is scoped to axika.ai only |
| Custom events we will send | Section-visibility events on the landing page (event name + section id only, e.g. "Section View: technology") and a "Contact Form Submit" event (event name only — **no form field contents are ever sent to Plausible**) |
| What we see | Aggregated dashboards only; individual visitors cannot be looked up or identified |
| DPA | Self-serve data processing agreement offered by the provider (plausible.io/dpa) — we will execute it |
| Reference documents | plausible.io/data-policy · plausible.io/privacy-focused-web-analytics · plausible.io/dpa |

*Dev has verified the technical claims against the provider's documentation; legal may wish to verify independently against the DPA and data policy before approving.*

## 3. Published policy statements affected

Quotes are verbatim from the live `/privacy` page (v1 copy, effective 3 September 2026).

**Must change — becomes false the moment analytics runs:**

1. **§2 "What we collect" → "Analytics." paragraph:**
   > "We do not currently use any website analytics. If we add analytics in future, we will update this policy before doing so, and we will choose a service that does not set cookies or track you across other websites."
   
   This is also the paragraph whose promise (update first; cookieless; no cross-site) this process is fulfilling.

2. **§4 "Who else sees it" — provider list:** Plausible must be added (v1 handoff §7 naming rule).

3. **§3 "Why we use it" table:** analytics processing needs a row with a legal basis.

4. **§5 "International transfers":**
   > "AXIKA is based in the United States and our service providers process data in the United States."
   
   Becomes partially inaccurate: the analytics provider processes **only in the EU**. (This is a favorable exception worth stating — for EEA visitors, analytics data does not leave the EU.)

5. **Effective date** at the top of the page, per §12's change mechanism.

**Remains true — no change proposed, but please confirm:**

- **§2 "What we do not collect":** "We do not use advertising, analytics or tracking cookies." — still accurate; Plausible sets no cookies of any kind.
- **§8 Do Not Track:** "We do not track you across third-party websites" — still accurate.
- **§9 Cookies:** "This site does not set advertising, analytics or tracking cookies." — still accurate; no consent banner is being added.
- **§6 Retention:** no personal analytics data is retained (aggregates only). Optional: add a line saying so — your call.

## 4. Proposed draft wording

**Drafts only** — per v1 handoff §7 the words are yours, not ours. Written in the policy's existing voice to save you a pass.

**§2 — replace the "Analytics." paragraph with:**

> **Analytics.** We use Plausible Analytics to understand, in aggregate, how this website is used — which pages people visit, where they come from, and how they move through the site. Plausible operates from the European Union, does not set cookies, does not store your IP address, and does not follow you across other websites. The statistics we see are aggregated: we cannot identify or look up any individual visitor.

**§3 — add a table row:**

> | Analytics data | To understand, in aggregate, how the site is used, and to improve it | Art. 6(1)(f) — our legitimate interest in understanding use of our website |

**§4 — add to the provider list (suggested position: after Netlify):**

> - **Plausible Insights OÜ** (Estonia, European Union) — provides our website analytics. For each page view it receives the page address, the referring site, your browser and device type, and your IP address, which it uses only to derive your country and to count unique visitors within a single day; the IP address itself is not stored. Analytics data is processed and stored in the European Union.

**§5 — append:**

> One exception: our analytics provider, Plausible, processes analytics data only in the European Union, so that data is not transferred to the United States.

**§6 — optional addition:**

> **Analytics:** only aggregated statistics are kept; nothing that identifies you is retained.

**Top of page:** new effective date on publication.

## 5. Questions for legal

1. **Legal basis** — is Art. 6(1)(f) legitimate interest acceptable for cookieless aggregate analytics, consistent with the existing server-logs row?
2. **Consent position** — please confirm no consent banner is required. Relevant angle: German visitors are a core audience, so the ePrivacy implementation in **TDDDG §25** (storage of / access to information on terminal equipment) is the provision to check. Plausible's position is that it neither stores nor accesses information on the device; we would like your confirmation since German DPA guidance in this area is strict.
3. **§5 wording** — comfortable with stating the EU-only exception as drafted?
4. **California** — we assume no CCPA/CPRA change is needed (aggregate data, no sale/share). Please confirm.
5. **DPA** — any requirements on how the Plausible DPA is executed/archived on our side?

## 6. Sequencing (per v1 handoff §7 and policy §2's own promise)

1. Legal returns approved copy (redline or replacement text for the passages above).
2. Dev updates `/privacy` with the approved copy and the new effective date.
3. **Only in the same release or after** does the analytics script go live. The policy will never say "no analytics" while analytics runs.
4. Target: before public launch. The site is currently deployed behind access protection with the `axika.ai` domain connection still pending, so there is a natural window — but analytics is wanted at launch, so a prompt review keeps it off the critical path.

**What we need back:** approved wording for the five points in section 4 (or your own), answers to section 5, and a go/no-go. Contact: pina@axika.ai.
