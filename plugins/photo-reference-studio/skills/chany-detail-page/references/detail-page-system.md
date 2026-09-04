# Product Detail-Page System

## Module selection

Build only the modules needed for the sales narrative:

- `hero`: product, approved headline, primary proposition, and CTA
- `clean-product`: source-faithful catalog view
- `feature` or `benefit`: one approved fact or claim with supporting visual
- `detail`: source-visible material, texture, ingredient, control, or construction close-up
- `lifestyle`: staged use context or static fashion try-on
- `comparison`: only user-supplied variants and factual differences
- `closing-cta`: one final approved message and channel action

If modules are not named, propose the smallest coherent plan and confirm its asset count before generation. Do not assume a full-length page from the word `상세페이지` alone.

When a lifestyle module requires a consistent adult model or source-locked garment, keep `chany-detail-page` as the module owner and use `chany-model-fashion` to produce that image under its consent, model-authority, and garment-authority rules.

## Fact and copy ledger

For every module, map each factual statement to user-provided text, a visible source, or approved documentation. Unsupported benefits, specifications, efficacy, certifications, numerical claims, comparison superiority, and legal statements remain excluded.

```yaml
module_type: ""
module_purpose: ""
approved_fact_or_message: ""
evidence_source: ""
exact_copy: ""
product_authority: ""
campaign_master: ""
ratio_or_dimensions: ""
hierarchy: ""
```

## Family lock

Keep these coherent across modules:

- source product identity and scale logic
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
- 정확한 문구: [EXACT COPY OR NONE].

[권위와 잠금]
- 제품 원본과 캠페인 마스터 역할: [INPUT ROLE MAP].
[SUBJECT, COPY, MODEL AND GARMENT LOCKS AS NEEDED]
- 제공되지 않은 사양, 효능, 수치, 비교 우위, 인증과 법적 주장을 만들지 않습니다.

[캠페인 시스템]
- 팔레트와 배경: [PALETTE AND BACKGROUND].
- 조명과 소재 언어: [LIGHT AND MATERIAL].
- 타이포그래피, 그리드와 여백: [TYPE, GRID, SPACING].
- 제품 스케일과 이미지 스타일: [PRODUCT SCALE AND STYLE].

[출력]
- 규격: [RATIO OR PIXELS].
- 제품, 정보, 문구 위계: [HIERARCHY].
- 한 장의 완성 모듈만 출력합니다.
```

Use a layout-capable editor for exact text. If unavailable, produce a clean plate and copy map and mark typesetting as pending.

## QA

Inspect each module against its authority and purpose, then inspect the family:

| Criterion | Weight |
|---|---:|
| source, model, garment, and copy consistency | 30 |
| shared campaign system | 25 |
| module purpose and factual fitness | 20 |
| format-specific composition and safe areas | 15 |
| cross-module spacing and hierarchy | 10 |

Accept the family at 88 or higher only if every member has no critical failure. Automatic failures include invented facts or claims, changed product or garment identity, incorrect approved copy, a module that does not serve its named purpose, or inconsistent CTA and offer values.
