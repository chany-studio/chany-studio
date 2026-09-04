# Product and Food Asset Preparation

## Authority locks

For products, record count, silhouette, proportions, orientation, structure, materials, color, transparency, gloss, texture, logo, label, package geometry, and readable text. For food, also record visible ingredients, their relative position and amount, cooking state, sauce flow, toppings, and irregular silhouette.

Record hidden sides, occlusions, glare-distorted colors, and unreadable text as uncertain. Never rebuild them as facts.

## Output rules

### Transparent cutout

- remove the complete background, floor, previous shadow, hands, and unrelated props
- preserve holes, transparent sections, fine edges, leaves, toppings, and thin parts
- leave no halo, fringe, color spill, torn edge, generated floor, contact shadow, or glow
- retain the original product or food pixels whenever possible

### White packshot

- use pure opaque `#FFFFFF`
- center the subject with approximately 10% crop-safe margin
- preserve the original orientation unless minimal capture correction is necessary
- use a subtle physically plausible contact shadow for a catalog image unless the user requests a flat shadowless asset
- do not add copy, props, reflections, mockups, or decorative effects

### Capture correction

Correct tilt, vertical convergence, perspective, or lens distortion only when requested or when a clear defect impairs commercial use. Do not change true height-to-width ratio, cap size, curvature, label layout, ingredient structure, or irregular natural shape.

## Positive, measurable instruction

State the required end state, not the thing to avoid. A prohibition tends to be ignored; a measurable target is checkable.

- Replace a negation with a proportion, dimension, count, or position: "폭은 기준 물체의 1/3" instead of "너무 크게 하지 마", "제품 1개" instead of "여러 개 만들지 마", "뚜껑이 위, 병은 바로 선 상태" instead of "뒤집지 마".
- Anchor scale to something visible in the frame or to a real-world measurement supplied by the user. Do not invent a dimension the user has not given.
- Convert each observed defect into one positive clause before retrying, and keep the clauses that already passed unchanged.
- Reserve the exclusion list for whole categories that must never appear at all (reference brand marks, unapproved people, watermarks, invented copy). Everything else belongs in the positive spec.

A retry prompt that only adds another "do not" is a failed correction. Rewrite it as a measurable state. This prompting rule does not weaken non-negotiable rights, safety, factual, regulatory, disclosure, or authority exclusions.

## Generative fallback prompt

Use background removal without a prompt when possible. If the connected editor requires a prompt, assemble:

```text
작업 유형: 원본 [제품/음식]의 정체성을 보존하는 [투명 누끼/순백 팩샷] 편집.

이미지 1은 최종 결과의 권위 원본입니다. 이미지 1의 피사체 한 개만 사용합니다.

[원본 잠금]
[VISIBLE SUBJECT LOCK]
- 형태, 비율, 색, 재질, 라벨·로고·인쇄 정보 또는 음식 구성을 바꾸지 않습니다.
- 보이지 않거나 읽히지 않는 면과 글자를 새로 만들지 않습니다.

[분리와 보정]
- 원래 배경, 손, 소품, 바닥과 기존 그림자를 제거합니다.
- [REQUESTED CAPTURE CORRECTION] 외의 원근과 형상은 유지합니다.
- 가장자리, 투명부와 미세 구조에 헤일로, 프린지, 잘린 흔적을 남기지 않습니다.

[출력]
- 배경: [transparent / pure #FFFFFF].
- [transparent: 바닥, 반사, 그림자와 글로우 없음.]
- [white: 요청된 경우에만 매우 은은한 자연 접지 그림자.]
- 안전 여백을 둔 한 장의 완성 이미지만 출력합니다.
```

## QA

Score out of 100:

| Criterion | Weight |
|---|---:|
| identity and geometry fidelity | 30 |
| label, print, or ingredient fidelity | 25 |
| edge and transparency quality | 20 |
| color, material, and texture fidelity | 15 |
| framing and output cleanliness | 10 |

Accept at 88 or higher with no critical failure. Automatic failures include changed label or geometry, changed ingredients, extra or missing subjects, retained hands or background, strong halo, torn edges, false transparency, invented hidden content, or fidelity claims that cannot be visually verified.

For one retry, convert the highest-impact observed defect into one positive, measurable target, reuse the original authority, and keep every passed property fixed.
