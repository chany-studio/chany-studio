# Professional Services Domain Playbook

Use this playbook to turn a service brief into an evidence-led industry direction packet. It is a strategy and safety overlay, not a substitute for current professional or legal review.

## Canonical handoff

Return the packet under the single root `industry_direction` defined in `../SKILL.md`. Populate every canonical field: map the selected strategic job to `message_job`, concrete evidence artifacts to `proof_objects`, capture requirements to `must_capture`, profession-specific controls to `directing_rules`, and publication controls to `required_disclosures`, `prohibited_or_high_risk`, and `human_review_gate`. Keep the promise, proof priority, message boundary, and detailed compliance checklist under `domain_extensions`; do not revive the legacy `industry_direction_packet` root or rename shared fields.

## Strategic job

Professional-services marketing reduces information asymmetry and perceived decision risk. Position the practice around a specific client, problem, method, and boundary rather than generic claims of excellence.

- Low awareness or new practice: lead with verified credentials, process clarity, and diagnostic usefulness.
- High-intent local demand: lead with fit, availability, response expectations, scope, and price logic.
- Long-cycle or B2B work: use point-of-view education, contextual case evidence, consultation, and stakeholder enablement.
- High-consequence work: prefer qualified claims and informed choice over urgency or emotional pressure.

Choose one primary strategic job: `diagnose`, `reduce risk`, `differentiate method`, `prove fit`, `convert consultation`, or `retain and refer`.

## Audience and journey

| Stage | Audience question | Useful content | Primary trust signal |
|---|---|---|---|
| problem recognition | Do I understand the problem? | diagnostic guide, checklist, myth correction | specificity and usefulness |
| shortlist | Is this practice relevant and legitimate? | service scope, expert profile, eligibility | verified identity and credentials |
| validation | Can they handle a case like mine? | contextual case study, method, work sample | evidence with boundaries |
| consultation | What will happen and what will it cost? | agenda, fee logic, timeline, responsibilities | process transparency |
| onboarding | Can I work with them confidently? | steps, communication standard, change policy | predictability and care |
| retention/referral | Was value delivered responsibly? | outcome review, follow-up, authorized review request | documented delivery |

For a multi-stakeholder purchase, distinguish the user, economic buyer, approver, and risk reviewer.

## Proof architecture

Use this record for every objective or implied claim:

```yaml
claim:
  text: ""
  type: "credential | capability | performance | comparison | price | testimonial | affiliation"
  evidence:
    source: ""
    owner: ""
    scope: ""
    method: ""
  limitation: ""
  review_owner: ""
  expiry: "YYYY-MM-DD"
  status: "approved | draft | blocked"
```

Proof priority is: legally valid identity or credential, actual delivery process, representative empirical evidence, authorized client evidence, then aesthetic polish. One exceptional case never establishes a typical result. Disclose a material relationship behind a recommendation or endorsement clearly and near the claim.

## Visual narrative

Build a sequence of `person → process → proof object → client value → next step`.

- Person: accountable expert or team in a real working context
- Process: diagnosis, review, workshop, fieldwork, or decision-making
- Proof object: plans, models, marked-up documents, dashboards, or work samples with confidential data removed
- Client value: clarity, progress, reduced friction, or a completed service moment; not an invented result
- Next step: consultation, assessment, or scoped inquiry

Avoid interchangeable handshake, empty-boardroom, staged phone-call, trophy-wall, and laptop-only imagery.

## Directing and capture

- Capture environmental portraits, real gestures, collaboration, review moments, tools, and legible process details.
- Keep client documents, screens, addresses, and case identifiers out of frame or irreversibly masked before use.
- Direct calm competence and attentive interaction; do not stage authority through intimidation, luxury, or government-like symbols.
- Record subject releases, location releases, logo permissions, and whether each scene is documentary, reenacted, or synthetic.
- If a reenactment is used, do not let copy or context imply that the actor is an actual client.

## Channel deliverables

| Channel | Deliverable | Decision role |
|---|---|---|
| service website | service page, expert profile, methodology, FAQ | shortlist and validation |
| search/local | intent ad, local profile set, focused landing | demand capture |
| LinkedIn or thought leadership | expert article, carousel, webinar clip | category authority |
| case enablement | contextual case page or PDF | proof and internal sharing |
| consultation | diagnostic form, agenda, confirmation | fit and expectation setting |
| lifecycle | onboarding guide, progress note, review request | retention and referral |

Measure qualified consultation rate, show rate, proposal acceptance, time to confidence, retention, referral, complaints, and claim rework. Do not optimize lead volume alone.

## Prompt kernel

```text
Create a [general-service | licensed-professional] direction for [service] in [jurisdiction].
Audience and journey stage: [audience/stage]. Strategic job: [one job].
Use only approved facts and the attached claim ledger. Build trust through [proof priority].
Visual narrative: accountable people, real process, cleared proof objects, and a proportionate next step.
Do not invent credentials, outcomes, rankings, comparisons, affiliations, prices, testimonials, or urgency.
Mark unresolved claims and current profession/platform review requirements.
Return the canonical `industry_direction` object for the named downstream production skill.
```

## Claims and safety gates

- General gate: screen for false, exaggerated, deceptive, unfairly comparative, or disparaging implications.
- Testimonial gate: verify actual experience, representative framing, consent, and material-connection disclosure.
- Licensed mode gate: identify the governing profession, title rules, solicitation rules, required disclosures, record-retention duties, and responsible reviewer.
- Confidentiality gate: exclude client identity, protected facts, privileged material, and identifying work artifacts unless explicitly cleared.
- Synthetic media gate: no fake expert, fake client, fabricated review, or implied endorsement.
- Publication gate: recheck the target jurisdiction and platform at publication time; if not verified, label the work `draft pending review`.

## Reference handoff

Use the central route in `chany-reference-board/references/industry-taxonomy.json`:

- domain: `professional-services`
- required first query: `Professional Services Branding`
- optional direct L2: `Law Firm Branding`, `Accounting Firm Branding`, `Consulting Firm Branding`, or `Architecture Firm Branding`

Run the exact L1 once per approved provider before any L2. Use zero or one exact direct L2 only. No synonym query, second L2, or appended style, lens, location, color, emotion, audience, platform, brand, campaign, or layout modifier is allowed. If the subject lacks a confident direct subtype, stop after L1. Treat all creative attributes as post-search ranking criteria.

## Authority sources

Recheck these sources rather than copying their current wording into an ad:

- Korea, Fair Labeling and Advertising Act, Article 3: https://www.law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1029943751
- Korea Fair Trade Commission, Guidelines on Review of Endorsements and Testimonials, effective 2026-06-01: https://www.law.go.kr/LSW/admRulInfoP.do?admRulSeq=2100000280130&chrClsCd=010201
- Korean Bar Association, current lawyer-advertising rules list: https://www.koreanbar.or.kr/pages/board/law_list.asp?category=3&page=1&searchstr=%EA%B4%91%EA%B3%A0&types=6
- American Bar Association, Model Rule 7.1 commentary as a comparative professional-ethics reference: https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_7_1_communication_concerning_a_lawyer_s_services/comment_on_rule_7_1/
- Google Ads, current misrepresentation policy: https://support.google.com/adspolicy/answer/15936666?hl=en-GB

Last source review for this playbook: 2026-09-04. The controlling rules depend on the profession, jurisdiction, medium, and publication date.
