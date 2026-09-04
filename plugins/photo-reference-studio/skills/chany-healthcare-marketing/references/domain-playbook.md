# Healthcare Marketing Domain Playbook

Use this playbook to build a safety-first healthcare industry direction packet. It is not medical or legal advice, and no output becomes publishable without authorized human review.

## Canonical handoff and draft boundary

Return the packet under the single root `industry_direction` defined in `../SKILL.md`. Populate every canonical field: map the selected strategic job to `message_job`, accountable clinical, process, access, facility, and evidence artifacts to `proof_objects`, necessary patient-information scenes to `must_capture`, and healthcare controls to `directing_rules`, `required_disclosures`, `prohibited_or_high_risk`, and `human_review_gate`. Keep provider, clinician, patient-information, benefit-risk, and detailed compliance data under `domain_extensions`; do not revive the legacy `industry_direction_packet` root or rename shared fields.

If the reviewer is not yet named, add that decision to `unresolved_decisions`, retain `human_review_gate: "before publication"`, and keep the publication status `draft-only`. Continue producing clearly labelled planning, copy, layout, prompt, image, video, and landing-page drafts when the other inputs are sufficient. Never publish, label work publish-ready, or imply medical-ad approval until a named qualified human reviewer has reviewed the exact version for the current jurisdiction, medium, and platform.

## Strategic job

Healthcare communication should help people understand options, assess fit, and access appropriate care without manufacturing fear or certainty. Optimize informed choice and continuity rather than procedure volume or click-through rate.

- Low-literacy or unfamiliar service: prioritize plain language, navigation, eligibility, and what happens next.
- Elective or high-cost service: explain alternatives, material risks, realistic variability, cost logic, and recovery obligations.
- Chronic or sensitive condition: prioritize dignity, privacy, ongoing support, and non-personalized reach.
- Institutional reputation: demonstrate accountable clinicians, systems, safety process, access, and follow-up rather than prestige alone.

Choose one primary strategic job: `improve understanding`, `reduce access friction`, `clarify suitability`, `build clinical trust`, `support continuity`, or `promote public-health action`.

## Audience and journey

| Stage | Patient or caregiver question | Useful content | Trust signal |
|---|---|---|---|
| awareness | What might this mean and when is help urgent? | general education and escalation signs | accuracy and clarity |
| exploration | What options and providers exist? | service scope, alternatives, clinician profile | accountable expertise |
| suitability | Could this be relevant to me? | eligibility, non-eligibility, risks, variability | balanced explanation |
| consultation | What will happen and what should I prepare? | visit flow, questions, price facts, privacy | transparency and dignity |
| treatment | How are decisions made? | consent, process, safety and support | shared decision-making |
| follow-up | What recovery or continuity is expected? | aftercare, warning signs, contact route | dependable care |

Keep patient, caregiver, referring professional, and payer roles distinct. General content must not be framed as an individual diagnosis.

## Proof architecture

```yaml
claim:
  text: ""
  type: "efficacy | safety | eligibility | comparison | exclusivity | credential | certification | experience | price"
  evidence:
    source: ""
    evidence_level: ""
    population: ""
    intervention_or_service: ""
    outcome_and_period: ""
  limitation: ""
  review_owner: ""
  expiry: "YYYY-MM-DD"
  status: "approved | draft | blocked"
```

Proof priority is: lawful provider identity, authoritative clinical or regulatory evidence, institution-specific process and capacity, representative service data, then authorized human story. Match the evidence population, intervention, outcome, and period to the exact claim. A disclaimer cannot repair a dominant misleading impression.

## Visual narrative

Build a sequence of `orientation → accountable care team → understandable process → safety/support → next step`.

- Orientation: entrance, wayfinding, accessibility, preparation
- Care team: real accountable professionals in appropriate roles
- Process: consultation, explanation, equipment preparation, coordination
- Safety/support: hygiene, checks, privacy, caregiver support, follow-up
- Next step: information, consultation, or appointment—not a promised result

Do not use direct invasive procedure imagery, sensational symptoms, dehumanizing body crops, miracle transformation, unsupported before-and-after comparison, or luxurious imagery that substitutes for clinical evidence.

## Directing and capture

- Prefer clinicians explaining, listening, checking, coordinating, and preparing over staged treatment claims.
- Obtain specific permission and publication scope for any identifiable patient; ordinary care consent is not assumed to authorize advertising.
- Remove names, dates, identifiers, records, monitor data, prescriptions, labels, and reflections that can identify a patient.
- Record whether each person is staff, authorized patient, actor, or synthetic. Never blur these roles in copy.
- Use plain, non-alarming diagrams and captions; preserve accessibility, subtitles, alt text, and readable risk information.
- Do not expose surgery or direct procedure scenes in Korean medical advertising drafts.

## Channel deliverables

| Channel | Deliverable | Decision role |
|---|---|---|
| service-line site | patient information, eligibility, risk/alternative FAQ, clinician profile | understanding and suitability |
| search/local | bounded intent ad, location/access landing | access |
| video | clinician explainer, visit walkthrough, aftercare education | comprehension |
| social | preventive education and service navigation | awareness, non-personalized reach |
| print/out-of-home | reviewed public information and access message | local awareness |
| review package | claim ledger, evidence links, copy/visual versions, media list | human and ad review |

Measure qualified booking, show rate, comprehension, appropriate referral, continuity, complaint rate, privacy incidents, ad disapproval, and review rework. Never optimize fear response, vulnerable-condition targeting, or unnecessary procedure demand.

## Prompt kernel

```text
Create a draft healthcare direction for [provider/service] in [jurisdiction].
Accountable reviewer: [name/role or unresolved]. Audience and journey stage: [audience/stage].
Strategic job: [one job]. Patient information need: [need].
Use only evidence approved for the exact population, service, outcome, and period.
Explain suitability, benefits, material risks, alternatives, variability, privacy, and the next step in plain language.
Do not diagnose, guarantee, compare, imply exclusivity, use patient-result testimonials, or invent credentials or approvals.
Return the canonical `industry_direction` object marked draft pending authorized human review.
```

## Claims and safety gates

- Human publication gate: a named authorized reviewer must review the exact copy, visual, targeting, landing page, medium, and version.
- Draft-continuation rule: a missing reviewer is an unresolved publication decision, not a reason to stop draft creative production.
- Medical-ad gate: verify who may advertise, prohibited content, required pre-review, approved media, and whether execution matches the reviewed version.
- Evidence gate: assess express and implied claims; require evidence relevant to the exact service and audience.
- Benefit-risk gate: do not omit material risks, limitations, variability, alternatives, or eligibility conditions.
- Privacy gate: treat health information as sensitive; verify the lawful basis, separate consent where required, security, and publication scope.
- Testimonial gate: Korean drafts should not use patient treatment experiences to imply effect; do not use synthetic or reenacted outcomes.
- Targeting gate: do not build advertiser-curated audiences from sensitive health signals; recheck current platform policy and jurisdiction.
- Dignity gate: reject shame, panic, coercive urgency, graphic exposure, and stigmatizing representation.
- If any gate is unresolved, publication status remains `draft-only`.

## Reference handoff

Use the central route in `chany-reference-board/references/industry-taxonomy.json`:

- domain: `healthcare`
- required first query: `Healthcare Advertising Design`
- optional direct L2: `Hospital Advertising Design`, `Clinic Advertising Design`, `Dental Advertising Design`, or `Wellness Advertising Design`

Run the exact L1 once per approved provider before any L2. Use zero or one exact direct L2 only. No synonym query, second L2, or appended condition, style, lens, location, color, emotion, audience, platform, brand, campaign, or layout modifier is allowed. If the service lacks a confident direct subtype, stop after L1. Treat all creative attributes as post-search ranking criteria.

## Authority sources

Recheck these sources rather than copying their current wording into an ad:

- Korea, Medical Service Act, Article 56, effective 2026-04-07: https://law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1018923417
- Korea, Medical Service Act, Article 57, effective 2026-04-07: https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032064243
- Korea, Personal Information Protection Act, Article 23: https://www.law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1027416043
- Korea, Medical Service Act, Article 19: https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1016494729
- Google Ads, current Healthcare and medicines policy: https://support.google.com/adspolicy/answer/176031/healthcare-and-medicines
- Google Ads, current Health in personalized advertising policy: https://support.google.com/adspolicy/answer/16701855?hl=en-GB
- WHO, Principles for Effective Communications: https://www.who.int/about/communications/principles
- AMA Code of Medical Ethics, Advertising & Publicity, as a comparative ethics reference: https://code-medical-ethics.ama-assn.org/ethics-opinions/advertising-publicity

Last source review for this playbook: 2026-09-04. The controlling rules depend on provider type, jurisdiction, medium, platform, review status, and publication date.
