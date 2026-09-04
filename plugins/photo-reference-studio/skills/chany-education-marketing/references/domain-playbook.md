# Education Marketing Domain Playbook

Use this playbook to turn an education brief into an evidence-led industry direction packet. It supports responsible creative decisions and does not replace current education, privacy, or advertising review.

## Canonical handoff

Return the packet under the single root `industry_direction` defined in `../SKILL.md`. Populate every canonical field: map the selected strategic job to `message_job`, curriculum, instructor, registration, assessment, price, or representative learner artifacts to `proof_objects`, the required learning moments to `must_capture`, and learner-protection controls to `directing_rules`, `required_disclosures`, `prohibited_or_high_risk`, and `human_review_gate`. Keep education type, learner-age and payer detail, learning promise, proof priority, message boundary, and the detailed compliance checklist under `domain_extensions`; do not revive the legacy `industry_direction_packet` root or rename shared fields.

## Strategic job

Education marketing should help a learner judge fit and understand the path to progress. Sell the learning system, feedback, effort, support, and credible evidence rather than guaranteed status or fear of falling behind.

- New or unfamiliar program: make audience fit, curriculum, instructor, sample experience, and recognition legible.
- High-consideration program: show prerequisites, workload, outcomes methodology, student support, and total cost.
- Parent-paid program: respect the learner as a decision participant; resolve parent risk without shaming the child.
- Career-linked program: distinguish learning outcomes from placement or earnings and qualify every employment claim.

Choose one primary strategic job: `clarify fit`, `demonstrate learning`, `reduce enrollment risk`, `convert trial`, `support persistence`, or `build institutional trust`.

## Audience and journey

| Stage | Learner question | Payer or influencer question | Trust signal |
|---|---|---|---|
| aspiration | Is this goal meaningful and realistic? | Is the need genuine? | specific, non-fearful framing |
| fit discovery | Is this for my level and context? | Is it appropriate and safe? | prerequisites and audience definition |
| evidence | How will I learn and improve? | Is the institution credible? | curriculum, instructor, sample, assessment |
| trial/counsel | Can I experience the method? | What support and effort are required? | transparent trial and consultation |
| enrollment | What am I committing to? | What is the full cost and refund rule? | complete price and policy facts |
| activation | What happens first? | How is progress communicated? | onboarding and feedback cadence |
| progress/outcome | What changed and what is next? | Was the promise delivered? | measured progress with context |

Do not collapse student, parent, employer, school counselor, and institutional buyer into one persona.

## Proof architecture

```yaml
claim:
  text: ""
  type: "learning-outcome | admission | completion | employment | income | ranking | accreditation | affiliation | price | testimonial"
  evidence:
    source: ""
    cohort: ""
    period: ""
    denominator: ""
    method: ""
  limitation: ""
  review_owner: ""
  expiry: "YYYY-MM-DD"
  status: "approved | draft | blocked"
```

Proof priority is: valid registration or recognition, instructor and curriculum evidence, assessment method, representative learner evidence, then testimonial. For every rate, retain cohort, denominator, period, source, exclusions, and verification method. A learner story may illustrate experience but cannot substantiate a typical result by itself.

## Visual narrative

Build a sequence of `goal → active learning → feedback → progress artifact → next step`.

- Goal: an authentic learner context, not panic or status anxiety
- Active learning: questions, practice, demonstration, collaboration, and concentration
- Feedback: instructor observation, critique, revision, or coaching
- Progress artifact: work, prototype, rubric, or reflection with personal data removed
- Next step: sample lesson, level check, open day, or enrollment information

Show learning as effort plus support. Avoid passive lecture rows, celebratory caps as generic proof, fake certificates, scoreboards without context, or stereotyped “genius” imagery.

## Directing and capture

- Prioritize real instruction, practice, feedback, peer interaction, accessible spaces, and educator accountability.
- Obtain appropriate authorization before showing a minor, student name, grade, learning record, screen, voice, artwork, or identifiable location pattern.
- Frame diverse learners as active participants rather than symbolic background representation.
- Record whether scenes are documentary, reenacted, or synthetic; never imply that a reenacted learner achieved a stated result.
- Capture vertical-safe, landscape-safe, and text-safe compositions only after references are selected; these attributes never enter the reference query.

## Channel deliverables

| Channel | Deliverable | Decision role |
|---|---|---|
| course or school site | fit page, curriculum map, instructor profile, price/refund facts | evidence and enrollment |
| search/Naver | intent ad and matched landing | demand capture |
| YouTube | sample lesson, educator explainer, learner-process story | method demonstration |
| short-form social | one concept, one practice moment, one next step | discovery |
| event | open-class or information-session kit | trial and counsel |
| lifecycle | onboarding, progress communication, completion pathway | activation and persistence |

Measure qualified inquiry, trial attendance, enrollment after informed review, activation, persistence, completion, learner progress, refund reason, complaint rate, and claim rework. Do not optimize clicks or applications alone.

## Prompt kernel

```text
Create an education marketing direction for [program] in [jurisdiction].
Learner, payer, influencer, and learner age: [roles]. Journey stage: [stage].
Strategic job: [one job]. Learning promise: [bounded promise].
Use only approved curriculum, instructor, registration, price, and outcome evidence.
Show active learning, feedback, progress evidence, and a proportionate next step.
Do not invent accreditation, affiliation, ranking, admission, grade, employment, income, or testimonial claims.
Mark minor consent, privacy, local education, and platform checks that remain unresolved.
Return the canonical `industry_direction` object for the named downstream production skill.
```

## Claims and safety gates

- Outcome gate: require cohort, denominator, period, method, and limitations for rates or performance claims.
- Recognition gate: verify registration, accreditation, qualification, university partnership, and logo rights with the issuing body.
- Cost gate: verify tuition, additional charges, refund terms, availability, and mandatory disclosures for the jurisdiction.
- Minor gate: verify the lawful basis and any required legal-representative consent; use clear, age-appropriate notices.
- Youth advertising gate: recheck current platform restrictions and avoid behavioral personalization of minors.
- Dignity gate: reject fear, humiliation, parental guilt, or social exclusion as conversion devices.
- Synthetic media gate: no fake learner, educator, certificate, result, or testimonial.
- Publication gate: if current jurisdiction or platform rules are not verified, label the work `draft pending review`.

## Reference handoff

Use the central route in `chany-reference-board/references/industry-taxonomy.json`:

- domain: `education`
- required first query: `Education Campaign Design`
- optional direct L2: `University Campaign Design`, `Academy Campaign Design`, `Online Course Campaign Design`, or `Education Technology Campaign Design`

Run the exact L1 once per approved provider before any L2. Use zero or one exact direct L2 only. No synonym query, second L2, or appended style, lens, location, color, emotion, audience, platform, brand, campaign, or layout modifier is allowed. If the subject lacks a confident direct subtype, stop after L1. Treat all creative attributes as post-search ranking criteria.

## Authority sources

Recheck these sources rather than copying their current wording into an ad:

- Korea, Act on the Establishment and Operation of Private Teaching Institutes and Extracurricular Lessons, Article 15: https://law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1023885543
- Korea, Personal Information Protection Act, Article 22-2: https://www.law.go.kr/LSW/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1029335257
- Google Ads, current ad-serving protections for teens: https://support.google.com/adspolicy/answer/12205906?hl=en-GB
- NACAC, Guide to Ethical Practice in College Admission, updated August 2026: https://www.nacacnet.org/who-we-are/what-we-do/guiding-ethics/nacacs-guide-to-ethical-practice-in-college-admission/
- ASA/CAP, current Instructional Courses rules as a comparative advertising standard: https://www.asa.org.uk/type/broadcast/code_section/25.html

Last source review for this playbook: 2026-09-04. The controlling rules depend on education type, learner age, jurisdiction, medium, and publication date.
