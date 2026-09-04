# Static Advertising and Promotion Formats

## Objective and message

Choose one objective before layout:

- `awareness`: product and brand recognition dominate
- `consideration`: one differentiating approved benefit or use context dominates
- `conversion`: one approved offer and CTA dominate
- `retargeting`: product, offer, urgency, and CTA dominate without invented scarcity

Every asset has one primary message, one dominant focal point, and one CTA. Record exact approved content:

```yaml
headline: ""
offer_or_event: ""
supporting_copy: []
price: ""
event_period: ""
approved_benefits: []
cta: ""
legal_copy: ""
copy_status: "draft | approved"
```

Preserve spelling, numerals, currency, percentages, units, punctuation, line grouping, and mandatory legal text. Never invent an offer, claim, date, urgency, comparison, or condition.

## Formats and templates

Common planning ratios:

| Ratio | Typical static use |
|---|---|
| 1:1 | square ad or thumbnail |
| 3:4 or 4:5 | portrait feed |
| 4:3 | store or content banner |
| 9:16 | story or full-screen static ad |
| 16:9 | wide advertising banner |

Use the user's actual pixel specification when supplied. Ratios are layout requirements, not video requests.

Template types:

- `basic`: balanced product and copy
- `emphasis`: one dominant offer or benefit
- `copy-led`: message area dominates and the product supports it
- `image-led`: product or scene dominates with minimal copy

Maintain clear product–headline–offer–CTA hierarchy and sufficient safe area. Do not shrink every available claim onto one canvas.

## Promotional poster prompt

```text
작업 유형: [CHANNEL]용 정적 홍보 포스터 제작.

[권위]
- 이미지 1은 실제 제품 원본입니다.
- 이미지 2가 있다면 승인된 캠페인 마스터입니다.
[SUBJECT LOCK]

[승인 문구]
[EXACT COPY LOCK]
- 철자, 숫자, 통화, 퍼센트, 단위, 기간, CTA, 법적 문구와 줄 구성을 바꾸지 않습니다.

[레이아웃]
- 출력과 안전 영역: [SIZE, RATIO, SAFE AREA].
- 템플릿: [BASIC / EMPHASIS / COPY-LED / IMAGE-LED].
- 위계: [HEADLINE → PRODUCT → OFFER → SUPPORT → CTA].
- 캠페인 마스터의 [PALETTE, LIGHT, MATERIAL, PROP, TYPE PLAN]을 유지합니다.

[출력]
- 정확한 조판이 가능한 경우 한 장의 완성 포스터.
- 이미지 생성만 가능한 경우 임의 문구를 만들지 말고 텍스트 없는 비주얼 플레이트와 깨끗한 카피 영역.
```

## Static ad prompt

```text
작업 유형: [PLACEMENT]용 정적 광고소재 제작.

목표: [AWARENESS / CONSIDERATION / CONVERSION / RETARGETING].
핵심 메시지: [ONE APPROVED MESSAGE].
CTA: [EXACT CTA].
비율, 안전 영역과 예상 표시 크기: [FORMAT].

이미지 1의 제품과 승인된 캠페인 마스터·카피 잠금을 유지합니다. 제품, 핵심 메시지, CTA가 모바일 크기에서도 즉시 읽히는 위계를 만듭니다. 여러 혜택이나 CTA를 경쟁시키지 않습니다. 요청한 배치 한 개의 광고소재만 출력하고 플랫폼 UI, 휴대폰 목업, 보드와 임의 문구를 만들지 않습니다.
```

## Channel adaptation

Adapt from the accepted master rather than regenerating unrelated concepts. Preserve product, approved copy meaning, palette, light, material, props, campaign device, and typography plan. Change only canvas ratio, deliberate placement, approved line wrapping, and safe-area treatment.

Never stretch the product, distort logos, blind-crop the focal point, or treat a new ratio as authority to redesign the campaign.

## Higgsfield Marketing Studio boundary

Treat Marketing Studio or a one-click advertising template as an execution backend, not a separate strategy skill. Inspect the active MCP tool list and schema. If the requested template is available only in the Higgsfield web interface, prepare the exact product input, copy lock, format, template choice, and creative direction for handoff; do not claim the interface action ran.

## QA

| Criterion | Weight |
|---|---:|
| source-product fidelity | 20 |
| exact approved copy | 25 |
| message and CTA hierarchy | 20 |
| ratio, safe area, and display-size legibility | 15 |
| brand and campaign consistency | 10 |
| clean composition and artifacts | 10 |

Accept at 90 or higher with no critical failure. One wrong digit, price, percentage, date, unit, CTA, or required legal line fails the asset. Unapproved claims, an unsafe crop, changed product identity, unreadable mobile hierarchy, or a wrong format also fail it automatically.

For a channel set, score each asset and then the family. A strong average cannot hide one failed member.
