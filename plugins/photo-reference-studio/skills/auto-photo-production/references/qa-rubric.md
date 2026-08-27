# Quality-Control Rubric

Compare the result with the original source at high zoom before delivery. Do not validate identity against an earlier generated result. Score normal criteria, but treat any critical failure as an automatic rejection.

## Critical failures

- product label, logo, line break, printed mark, or package geometry changed
- food ingredient, amount, distribution, or dish geometry changed materially
- extra, missing, duplicated, or merged subject
- reference product, recipe, brand, text, or price leaked into the result
- hand, finger, skin reflection, original background, or unwanted object remains
- strong halo, clipped fine detail, transparency error, or torn edge
- impossible floating, sinking, contact, reflection, refraction, or shadow direction
- hallucinated hidden side or unreadable text presented as fact
- exact label or ingredient fidelity claimed when the output is too small, blurred, or occluded to verify

## Cutout score

| Criterion | Weight |
|---|---:|
| Identity and geometry fidelity | 30 |
| Label or ingredient fidelity | 25 |
| Edge and transparency quality | 20 |
| Color, material, and texture fidelity | 15 |
| Framing and output cleanliness | 10 |

Accept at 88 or higher with no critical failure.

For a transparent cutout, also inspect the alpha edge, holes between fine structures, retained small toppings or parts, and the absence of any generated floor or contact shadow.

## Staged-image score

| Criterion | Weight |
|---|---:|
| Source-subject identity | 30 |
| Reference Visual DNA transfer | 20 |
| Physical light, shadow, and contact | 20 |
| Composition and commercial hierarchy | 15 |
| Material or food realism | 10 |
| Clean output and artifact control | 5 |

Accept at 85 or higher with no critical failure.

If the source label or ingredients were readable but the staged composition makes them impossible to verify, do not report a clean pass. Reframe or retry when legibility is required by the request; otherwise mark that field as unverified.

## Retry policy

1. List observable defects, not general dissatisfaction.
2. Keep the accepted scene direction fixed.
3. Restate only immutable facts affected by the defects.
4. Run one corrective retry using the original source as identity authority.
5. Re-score against the original source, not against the failed generation.
6. If the initial result and corrective retry both fail, deliver the best viable candidate only when it is still useful, with unresolved defects stated plainly.

## Production note

Use this compact format:

```text
보존: [identity facts preserved]
참고: [Visual DNA borrowed from reference]
검수: [pass and numeric score, unverified field, or unresolved defect]
레퍼런스: [source link]
```
