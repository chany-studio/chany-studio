# Corporate and Employer Brand Domain Playbook

Use this playbook to build an evidence-led corporate or employer-brand industry direction packet. It supports responsible creative decisions and does not replace current employment, privacy, accessibility, or advertising review.

## Canonical handoff

Return the packet under the single root `industry_direction` defined in `../SKILL.md`. Populate every canonical field: map the selected strategic job to `message_job`, policy, operational, workforce, role, and stakeholder evidence to `proof_objects`, required role and workplace evidence to `must_capture`, and employment or representation controls to `directing_rules`, `required_disclosures`, `prohibited_or_high_risk`, and `human_review_gate`. Keep the corporate promise or EVP, proof priority, representation boundary, and detailed compliance checklist under `domain_extensions`; do not revive the legacy `industry_direction_packet` root or rename shared fields.

## Strategic job

### Corporate-brand mode

Make organizational purpose credible through behavior, capability, and stakeholder evidence. Choose one job: `clarify identity`, `prove capability`, `earn stakeholder trust`, `explain change`, `support reputation`, or `mobilize participation`.

### Employer-brand mode

Help suitable candidates make an informed self-selection decision. Derive the EVP from actual employee research, policies, work conditions, and candidate experience. Choose one job: `build talent awareness`, `clarify role reality`, `differentiate the EVP`, `convert qualified applicants`, `improve candidate trust`, or `activate employee advocacy`.

Do not use employer branding to decorate unresolved workplace problems. Where promise and experience conflict, flag the operational gap rather than writing around it.

## Audience and journey

### Corporate-brand journey

| Stage | Stakeholder question | Trust signal |
|---|---|---|
| awareness | Who are they and why do they exist? | clear identity and relevance |
| credibility | Do their actions match the claim? | dated behavior and evidence |
| capability | Can they deliver? | people, systems, work, outcomes |
| engagement | What is my role or next step? | transparent participation path |
| advocacy | Is the relationship worth supporting? | consistent experience and accountability |

### Employer-brand journey

| Stage | Candidate question | Trust signal |
|---|---|---|
| awareness | Why consider this employer? | specific, current EVP |
| research | What is work actually like? | real employee and role evidence |
| role discovery | Is this job relevant and genuine? | complete factual job information |
| self-selection | Can I succeed and belong here? | realistic requirements and support |
| application/interview | Will my time and data be respected? | clear process, timing, accessibility, privacy |
| offer/onboarding | Do conditions match the promise? | consistent terms and preparation |
| employee advocacy | Is the story still true? | lived experience and voluntary voice |

Separate the applicant, hiring manager, employee advocate, executive, customer, investor, and community stakeholder.

## Proof architecture

```yaml
claim:
  text: ""
  type: "purpose | capability | impact | culture | compensation | benefit | diversity | award | ranking | employee-experience | hiring"
  evidence:
    source: ""
    owner: ""
    population_or_scope: ""
    period: ""
    method: ""
  limitation: ""
  review_owner: ""
  expiry: "YYYY-MM-DD"
  status: "approved | draft | blocked"
```

Proof priority is: current policy and contractual facts, operational behavior, workforce or stakeholder data with scope, authorized employee evidence, then external recognition. A polished workplace scene does not prove culture. State eligibility conditions for compensation and benefits.

## Visual narrative

### Corporate-brand

Use `purpose → people and systems → work in context → stakeholder evidence → next action`.

### Employer-brand

Use `role impact → real work → team interaction → support and trade-offs → candidate next step`.

Prefer actual work, decisions, tools, customers, sites, and role-specific details. Reject token diversity, all-young teams, permanent celebration, empty offices, staged brainstorming, fake employee quotes, and generic stock culture.

## Directing and capture

- Capture real role behavior, decision moments, craft details, team rituals, field or production context, leadership accountability, and accessibility.
- Invite voluntary employee participation; document release, intended channels, quote approval, and withdrawal process where offered.
- Do not expose customer data, unreleased products, security controls, badges, screens, candidate data, or confidential work.
- Show diversity through credible participation and varied authority, not visual counting or token placement.
- Mark documentary, reenacted, and synthetic scenes. Actors or synthetic people cannot be presented as actual employees or candidates.
- In employer mode, capture both attractive and realistic aspects of work so candidates can self-select.

## Channel deliverables

| Channel | Deliverable | Decision role |
|---|---|---|
| corporate site | purpose, capability, leadership, impact evidence | reputation and validation |
| careers site | EVP proof, role family, process, accessibility, privacy | candidate research and conversion |
| LinkedIn | company evidence, employee stories, factual jobs | awareness and engagement |
| job board | one bona fide, accurate, complete opportunity | application |
| video/social | role day-in-life, team craft, leadership context | realistic preview |
| event/PR | recruitment event kit, corporate story, media assets | trust and participation |
| internal lifecycle | employee advocacy kit, onboarding alignment | promise continuity |

Corporate measures may include qualified stakeholder engagement, message comprehension, reputation signals, and action completion. Employer measures should include qualified application, completion, offer acceptance, candidate experience, early retention, source quality, complaint rate, and promise-experience gaps—not applicant volume alone.

## Prompt kernel

```text
Create a [corporate-brand | employer-brand] direction for [organization] in [jurisdiction].
Audience and journey stage: [audience/stage]. Strategic job: [one job].
Corporate promise or EVP: [bounded statement]. Use only current approved evidence.
Show real people, work, systems, conditions, and an honest next step.
Do not invent culture, impact, compensation, benefits, diversity, awards, rankings, jobs, employee quotes, or urgency.
Mark representation, privacy, employment, accessibility, and platform checks that remain unresolved.
Return the canonical `industry_direction` object for the named downstream production skill.
```

## Claims and safety gates

- Truth gate: reconcile public promise with current policies, operations, employee research, and candidate experience.
- Bona fide role gate: confirm actual hiring intent, one genuine opportunity, factual responsibilities, qualifications, employment type, location, compensation conditions, and paid/unpaid status.
- Change gate: do not conceal or normalize a materially less favorable change from advertised conditions.
- Fairness gate: reject direct or proxy discrimination based on protected characteristics; route any claimed occupational exception to a qualified reviewer.
- Accessibility gate: include accommodation or contact paths and do not depict disabled people as inspiration props.
- Privacy gate: minimize applicant data, separate marketing consent, and clear employee, location, customer, and internal-information use.
- Representation gate: DEI and culture claims require real policy, participation, and outcome evidence.
- Platform gate: verify current job-posting and ad-targeting rules for every target market and platform.
- Synthetic media gate: no fake employee, candidate, executive, vacancy, testimonial, or endorsement.
- If current rules or evidence are unresolved, label the work `draft pending review`.

## Reference handoff

Use the central route in `chany-reference-board/references/industry-taxonomy.json`:

- domain: `corporate-employer`
- required first query: `Corporate Branding`
- optional direct L2: `Employer Branding`, `Recruitment Campaign Design`, `Corporate Report Design`, or `Corporate Culture Campaign Design`

Run the exact L1 once per approved provider before any L2. Use zero or one exact direct L2 only. No synonym query, second L2, or appended industry, style, lens, location, color, emotion, audience, platform, brand, campaign, or layout modifier is allowed. If no direct subtype is confidently applicable, stop after L1. Treat all creative attributes as post-search ranking criteria.

## Authority sources

Recheck these sources rather than copying their current wording into an ad:

- Korea, Fair Hiring Procedure Act, Article 4: https://www.law.go.kr/DRF/lawService.do?MST=218301&OC=unicpla&efYd=20200526&mobileYn=Y&target=law&type=HTML
- Korea, Equal Employment Opportunity and Work-Family Balance Assistance Act, Article 7: https://www.law.go.kr/LSW/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1025587289
- Korea, Act on Prohibition of Age Discrimination in Employment, Article 4-4: https://www.law.go.kr/LSW/lsLinkCommonInfo.do?lsJoLnkSeq=1015647385
- Korea, Act on the Prohibition of Discrimination against Persons with Disabilities, Article 10: https://www.law.go.kr/LSW/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1017943279
- LinkedIn Jobs Policies, effective 2025-01-07: https://www.linkedin.com/legal/l/jobs-policies
- LinkedIn Talent Solutions, Employer Branding guide, 2023-08-14: https://www.linkedin.com/business/talent/blog/talent-acquisition/employer-branding
- Google Ads, current Employment in personalized advertising policy: https://support.google.com/adspolicy/answer/16700442?hl=en

Last source review for this playbook: 2026-09-04. The controlling rules depend on organization size, role, jurisdiction, medium, platform, and publication date.
