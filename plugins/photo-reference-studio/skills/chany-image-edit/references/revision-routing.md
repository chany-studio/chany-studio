# Bounded Revision Routing

## Classify the change

| Class | Examples | Authority |
|---|---|---|
| `scene-local` | background luminance, color balance, prop amount, shadow softness | accepted asset plus original subject |
| `identity-sensitive` | label, logo, geometry, ingredient, edge, material, transparency | original product or food source |
| `copy-sensitive` | word, numeral, price, percentage, date, CTA, legal line, line break | approved copy lock |
| `model-sensitive` | face, hair, proportions, skin, anatomy, identity consistency | original model or accepted fictional-model master |
| `garment-sensitive` | silhouette, construction, seam, pattern, color, material, logo | corresponding garment source |
| `layout-local` | copy scale, product position, spacing, safe area, ratio recomposition | accepted asset and campaign lock |
| `new-direction` | new reference, offer, camera, set concept, or core composition | route to original production owner |

A ratio adaptation that changes placement deliberately may remain `layout-local`. A substantially new composition is `new-direction`.

## Revision state

```yaml
accepted_asset: ""
edit_region_or_mask: ""
one_requested_change: ""
source_authority: ""
copy_authority: ""
model_authority: ""
garment_authorities: []
campaign_lock: []
fixed_properties: []
remaining_uncertainties: []
```

Use up to three user-supplied references only when the active editor supports them and every reference has one declared role.

## Positive, measurable instruction

State the required end state, not the thing to avoid. A prohibition tends to be ignored; a measurable target is checkable.

- Replace a negation with a proportion, dimension, count, or position: "폭은 기준 물체의 1/3" instead of "너무 크게 하지 마", "제품 1개" instead of "여러 개 만들지 마", "뚜껑이 위, 병은 바로 선 상태" instead of "뒤집지 마".
- Anchor scale to something visible in the frame or to a real-world measurement supplied by the user. Do not invent a dimension the user has not given.
- Convert each observed defect into one positive clause before retrying, and keep the clauses that already passed unchanged.
- Reserve the exclusion list for whole categories that must never appear at all (reference brand marks, unapproved people, watermarks, invented copy). Everything else belongs in the positive spec.

A retry prompt that only adds another "do not" is a failed correction. Rewrite it as a measurable state. This prompting rule does not weaken non-negotiable rights, safety, factual, regulatory, disclosure, or authority exclusions.

## Edit prompt

```text
작업 유형: 승인 이미지의 지정 영역만 수정하는 국소 편집.

[입력 역할]
- 이미지 1은 승인된 현재 결과입니다.
- 수정 영역 또는 마스크: [EXACT REGION].
- 원본 권위 이미지: [AUTHORITY ROLE MAP].

[한 가지 수정]
- [ONE REQUESTED CHANGE].

[반드시 고정]
[PRODUCT, COPY, MODEL, GARMENT, COMPOSITION, CAMERA, LIGHT, BACKGROUND AND CAMPAIGN PROPERTIES]
- 수정 영역 밖의 픽셀과 승인 요소를 다시 생성하지 않습니다.

[경계와 물리 연결]
- 마스크 경계에 이음새, 반복, 색 번짐, 헤일로, 노이즈와 해상도 차이를 남기지 않습니다.
- 새 표면의 원근, 빛, 그림자, 반사와 질감을 주변과 일치시킵니다.

[출력]
- 지정 영역만 수정된 한 장의 완성 이미지.
```

For a short conversational change, use:

```text
이 작업은 승인 이미지의 국소 수정입니다. [FIXED PROPERTIES]는 그대로 유지하고 [ONE PROPERTY]만 [TARGET STATE]로 바꾸세요. 다른 영역을 다시 생성하지 말고 한 장의 수정 결과만 출력하세요.
```

## Exact-copy repair

Copy changes use the approved string rather than OCR from a generated image. Prefer a layout editor that can typeset text exactly. Preserve spelling, numerals, currency, percentages, units, punctuation, line grouping, hierarchy, and legal copy. If no accurate text tool is available, return a clean plate and exact copy map and mark the render as pending.

## QA and retry

Compare the result with both the accepted asset and the relevant original authority. Automatic failures include any unrequested pixel or layout change, altered product/model/garment identity, incorrect copy, visible mask seam, inconsistent light or texture, or a claim that cannot be verified visually.

For the single corrective retry:

1. list observable defects
2. select the highest-impact defect and state one positive, measurable target
3. retain every passed property
4. restate only authority facts affected by the defect
5. repair only the named region
6. compare again with the original authority, not the failed edit

After a second failure, return the best still-useful result only with unresolved defects stated plainly.
