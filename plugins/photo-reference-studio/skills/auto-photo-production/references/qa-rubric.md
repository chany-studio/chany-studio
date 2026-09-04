# Quality-Control Rubric

Compare the result with the original source at high zoom before delivery. Do not validate identity against an earlier generated result. Score normal criteria, but treat any critical failure as an automatic rejection.

## Reference-board acceptance gate

Before asking for a reference number, confirm all of the following:

- every candidate is represented by an actual image visible in the current conversation
- Claude Cowork candidates use native image content or a host-rendered image attachment, not URL-only metadata
- discovery evidence shows that candidate number, visible image, provider page, query, fit note, and Visual DNA map to the same source; the connector cross-checks Behance asset IDs but Pinterest mapping still depends on discovery evidence
- the six candidates are distinct and meet the provider, provenance, quality, and diversity rules
- no HTML file, contact sheet, artifact, filename, placeholder, or link-only list is being counted as direct display

If any item fails, replace the affected candidate or report that inline display is unavailable. Do not proceed through the semi-auto checkpoint or report a passing reference board.

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
- approved promotional copy, numeral, percentage, price, unit, date, CTA, or legal line changed or misspelled
- unapproved claim, discount, price, urgency, comparison, or legal statement added
- locked model identity or body proportions changed materially across a requested sequence
- garment silhouette, length, construction, color, pattern, material, logo, or accessory changed
- impossible anatomy, fused limbs, broken hands, floating clothing, or physically implausible garment contact
- wrong output ratio, clipped required copy, unsafe channel crop, or unreadable message hierarchy

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

## Key-visual score

| Criterion | Weight |
|---|---:|
| Source-subject identity | 25 |
| Single campaign idea and focal hierarchy | 20 |
| Brand, palette, and material coherence | 15 |
| Composition and downstream crop flexibility | 15 |
| Physical light, shadow, contact, and realism | 15 |
| Artifact and contamination control | 10 |

Accept at 86 or higher with no critical failure.

The key visual must establish a reusable campaign system, not just an attractive isolated image. Record palette, lighting logic, material or prop language, copy zones, and crop-safe area before downstream adaptations.

## Poster, banner, and ad-creative score

| Criterion | Weight |
|---|---:|
| Source-subject fidelity | 20 |
| Exact approved copy | 25 |
| Message and CTA hierarchy | 20 |
| Target ratio, safe areas, and legibility | 15 |
| Brand and campaign consistency | 10 |
| Clean composition and artifact control | 10 |

Accept at 90 or higher with no critical failure. Exact copy is binary at the critical-error level: a single wrong digit, percentage, price, date, unit, CTA, or required legal line fails the asset.

Inspect the asset at its expected display size, not only at full resolution. A visually attractive banner that becomes unreadable as a feed thumbnail does not pass.

## Model and fashion score

| Criterion | Weight |
|---|---:|
| Model identity and proportion consistency | 25 |
| Garment and accessory fidelity | 30 |
| Anatomy, fit, folds, contact, and gravity | 20 |
| Pose, camera, scene, and commercial direction | 15 |
| Skin, fabric, and artifact realism | 10 |

Accept at 88 or higher with no critical failure.

For a generated fictional model, compare with the accepted model master and profile. For a source model, compare with the original source. Compare each garment with its own authority image rather than an earlier generated fashion result.

## Detail-page and channel-set score

Score each asset individually using its relevant rubric, then score the family:

| Criterion | Weight |
|---|---:|
| Source, model, garment, and copy consistency | 30 |
| Shared campaign system | 25 |
| Module purpose or placement fitness | 20 |
| Ratio-specific recomposition and safe areas | 15 |
| Cross-asset spacing and hierarchy coherence | 10 |

Accept the family at 88 or higher only when every critical business value is consistent. Do not pass a set by averaging away a failed member.

## Retry policy

1. List observable defects, not general dissatisfaction.
2. Keep the accepted scene direction fixed.
3. Restate only immutable facts affected by the defects.
4. Run one corrective retry using the original source as identity authority.
5. Re-score against the original source, not against the failed generation.
6. If the initial result and corrective retry both fail, deliver the best viable candidate only when it is still useful, with unresolved defects stated plainly.
7. For text failures, repair from the approved copy lock or typeset with a layout-capable tool; do not ask the image model to guess.
8. For model or garment failures, reattach the original model and garment authority images and name only the affected traits.

## Production note

Use this compact format:

```text
보존: [identity facts preserved]
참고: [Visual DNA borrowed from reference]
문구: [exact-copy pass, pending typesetting, or not applicable]
검수: [rubric, pass and numeric score, unverified field, or unresolved defect]
레퍼런스: [source link]
```
