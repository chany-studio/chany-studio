# Production Modes and Defaults

Use the smallest mode that fulfills the request. Do not turn a reference request into paid image generation.

## Job routing

| User intent | Job | Deliverables |
|---|---|---|
| 누끼, 배경 제거, 투명 PNG | `cutout` | transparent subject-only asset |
| 흰 배경, 상세페이지용 팩샷 | `cutout` | clean white packshot |
| 레퍼런스, 무드, 촬영 방향 | `reference-board` | six traceable reference candidates |
| 연출컷, 캠페인 이미지 | `staged` | one staged image; source-derived cutout when useful |
| 처음부터 끝까지, 누끼와 연출 | `full` | cutout, reference selection, staged image |

If the request names several deliverables, combine only those named. Preserve a user-supplied reference, ratio, background, copy, count, and platform requirement.

## Defaults

- Selection: `semi-auto`.
- Cutout crop: preserve the source framing and add safe margin only when needed to prevent clipping.
- Transparent output: no background, floor, glow, or contact shadow.
- White packshot: pure `#FFFFFF`, no gradient or floor unless requested.
- Staged output ratio: use the source ratio when it is compositionally viable; otherwise use `4:5` for a vertical commercial image and state the choice.
- Output count: one asset per requested deliverable.
- Generation quality: use the highest practical setting supported by the connected production tool; do not claim a resolution the tool did not return.
- Copy space: infer it only when the request mentions copy, layout, a platform, or a placement direction. Do not invent marketing copy.

## Checkpoints and cost control

`semi-auto` has one default checkpoint: reference selection before staged generation. Search, analysis, and subject-lock construction may happen before it.

Do not pause for a reference selection when:

- the job is `cutout` or `reference-board`
- the user supplied a reference
- the user asked for `auto` or `자동 선택`

If a user asks for multiple generated variations, confirm the effective count in the pre-generation summary when practical. Do not generate unrequested alternatives after a result passes QA.

## Minimal pre-generation summary

Before staged generation, preserve this compact record internally and show it when a checkpoint is needed:

```yaml
job: staged | full
selection_mode: semi-auto | auto | user-reference
subject_lock: ""
selected_reference: ""
ratio: ""
deliverable_count: 1
required_copy: ""
uncertainties: []
```
