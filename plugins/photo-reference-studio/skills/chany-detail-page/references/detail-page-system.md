# Detail-Page and Conversion-Landing System

Before selecting modules, import the canonical industry packet's `message_job`, `proof_objects`, `claim_ledger`, `must_capture`, `directing_rules`, `required_disclosures`, `prohibited_or_high_risk`, and `human_review_gate`. Keep these exact field meanings through every module; a layout decision must not erase a claim limitation, disclosure, capture requirement, or publication gate.

## Operating modes

- `plan`: create the decision narrative, evidence-coverage matrix, capture gaps, module plan, copy state, and production order without generating media.
- `audit`: map an existing page to the same matrix, flag missing or duplicated message jobs, unsupported claims, stale transaction facts, weak close/wide coverage, and publication blockers without silently rewriting the page.
- `produce`: generate or assemble only the approved named modules after their required evidence and authority inputs are available.

If no mode is named, infer it from the requested output. A request to “improve” an existing page begins with `audit`; a new page with uncertain inputs begins with `plan`; a request for named ready-to-make modules uses `produce`.

## Evidence coverage and capture gaps

Create this matrix before production. One source may support more than one module, but every factual message must point to a real source and every must-capture item must be visually available at a useful scale.

| Module/job | One message or claim | Evidence/source | Required view | Available asset/version | Coverage | Gap action | Publication status |
|---|---|---|---|---|---|---|---|
| named module | one approved job | first-party record or authority image | wide / medium / close / screen / document | stable identifier | full / partial / missing | use / recapture / request record / remove claim | draft / gated |

Use wide views to establish context and truthful scale, medium views to show use or process, and close views to prove material, construction, label, interface state, ingredient, credential, or other relevant detail. This is a coverage principle, not a mandatory three-shot formula. Never synthesize a missing credential, interface state, room feature, package detail, result, or close-up and then cite the generated image as proof.

Before `produce`, resolve each row by supplying evidence, planning a real capture, narrowing or removing the message, or keeping the module out of the publishable set. Do not hide a coverage gap with decorative imagery.

## Module selection

Build only the modules needed for the sales narrative:

- `hero`: authority subject, approved headline, primary proposition, and CTA
- `clean-product`: source-faithful catalog view
- `feature` or `benefit`: one approved fact or claim with supporting visual
- `detail`: source-visible material, texture, ingredient, control, or construction close-up
- `lifestyle`: staged use context or static fashion try-on
- `process`: a truthful service, learning, care, onboarding, booking, or implementation step
- `proof`: one qualified credential, result, review, workflow, facility, data, or case-study object
- `experience`: one truthful visit, stay, dining, event, work, or use context
- `booking`: verified availability path, required conditions, and one action
- `comparison`: only user-supplied variants and factual differences
- `closing-cta`: one final approved message and channel action

If modules are not named, propose the smallest coherent plan and confirm its asset count before generation. Do not assume a full-length page from the word `상세페이지` alone. Module count follows the decision journey and evidence coverage, never a rigid page template.

When a lifestyle module requires a consistent adult model or source-locked garment, keep `chany-detail-page` as the module owner and use `chany-model-fashion` to produce that image under its consent, model-authority, and garment-authority rules.

## Fact and copy ledger

For every module, map each factual statement to user-provided text, a visible source, or approved documentation. Preserve the industry packet's claim, evidence, limitation, reviewer, and recheck date. Unsupported benefits, outcomes, specifications, efficacy, qualifications, certifications, numerical claims, comparison superiority, availability, testimonials, and legal statements remain excluded.

```yaml
module_type: ""
module_purpose: ""
decision_role: ""
audience_objection_or_question: ""
approved_fact_or_message: ""
evidence_source: ""
evidence_version_id: ""
coverage_status: "full | partial | missing"
required_view: "wide | medium | close | screen | document | not-applicable"
source_visibility: "photo-visible | diagram-from-approved-data | text-record | not-applicable"
gap_action: ""
exact_copy: ""
required_consumer_information: []
disclosure_copy_and_location: []
platform_adapter_checked_at: ""
product_authority: ""
industry_and_mode: ""
journey_stage: ""
proof_object: ""
claim_limitation: ""
must_capture: []
directing_rules: []
required_disclosures: []
prohibited_or_high_risk: []
human_review_gate: ""
campaign_master: ""
ratio_or_dimensions: ""
hierarchy: ""
```

## Family lock

Keep these coherent across modules:

- source subject, space, UI, vehicle, person, event, and evidence identity and scale logic
- palette and background family
- light, shadow, material, and photographic treatment
- typography roles, grid, spacing, and copy hierarchy
- model and garment identity when used
- CTA language and approved business values

Composition may change to serve the module. Do not reuse one layout mechanically or collect several reduced modules into a single image unless the user specifically requests a presentation board.

## Module prompt

```text
작업 유형: 동일 캠페인 시스템의 상세페이지 [MODULE TYPE] 이미지 제작.

[목적과 승인 정보]
- 이 모듈의 역할: [ONE PURPOSE].
- 전달할 승인 사실 또는 메시지: [ONE APPROVED FACT OR MESSAGE].
- 고객 여정과 업종별 근거: [JOURNEY STAGE, PROOF OBJECT, LIMITATION AND REVIEW GATE].
- 정확한 문구: [EXACT COPY OR NONE].

[권위와 잠금]
- 권위 원본과 캠페인 마스터 역할: [INPUT ROLE MAP].
[SUBJECT, SPACE, UI, VEHICLE, PERSON, EVENT, EVIDENCE, COPY, MODEL AND GARMENT LOCKS AS NEEDED]
- 제공되지 않은 사양, 효능, 결과, 시설, 기능, 수치, 비교 우위, 자격, 인증, 후기와 법적 주장을 만들지 않습니다.

[캠페인 시스템]
- 팔레트와 배경: [PALETTE AND BACKGROUND].
- 조명과 소재 언어: [LIGHT AND MATERIAL].
- 타이포그래피, 그리드와 여백: [TYPE, GRID, SPACING].
- 권위 주제의 스케일과 이미지 스타일: [SUBJECT SCALE AND STYLE].

[출력]
- 규격: [RATIO OR PIXELS].
- 주제, 근거, 정보, 문구 위계: [HIERARCHY].
- 한 장의 완성 모듈만 출력합니다.
```

Use a layout-capable editor for exact text. If unavailable, produce a clean plate and copy map and mark typesetting as pending.

For Korean output, lock all names, quotations, dates, prices, quantities, percentages, units, specifications, qualifications, disclosures, and legal text before improving surrounding phrasing. Recompare those anchors exactly after layout; naturalization may not change factual meaning. Check current platform requirements through [../../chany-studio/references/platform-publication-adapter.md](../../chany-studio/references/platform-publication-adapter.md) rather than a remembered marketplace template.

## QA

Inspect each module against its authority and purpose, then inspect the family:

| Criterion | Weight |
|---|---:|
| authority source, evidence, model, garment, and copy consistency | 30 |
| shared campaign system | 25 |
| module purpose and factual fitness | 20 |
| format-specific composition and safe areas | 15 |
| cross-module spacing and hierarchy | 10 |

Accept the family at 88 or higher only if every member has no critical failure. Automatic failures include invented facts, outcomes, facilities, UI states, testimonials, availability, or claims; changed authority or garment identity; incorrect approved copy; a missed industry review gate; a module that does not serve its named purpose; or inconsistent CTA and offer values.

Before publication, route the exact final page copy, each rendered module and crop, current offer and destination through `chany-publication-review` whenever the industry, claim, transaction, endorsement, rights, disclosure, platform, or channel gate applies. A plan, audit, passing visual score, or approved source file is not publication clearance.
