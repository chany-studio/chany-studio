---
name: chany-ad-variants
description: Create ordered, controlled video-ad variants from one approved 4–30 second source while preserving timing, motion, audio, branding, captions, and all untargeted content. Use for Ad Multiplier, 광고 여러 버전, 소재 증식, or explicit replace/add/remove/background/wardrobe/text variants; not for a new campaign concept or ordinary one-off video generation.
---

# Chany Ad Variants

Multiply a proven or approved source ad without turning each output into an unrelated remake. Read the shared [performance-ad contract](../chany-studio/references/performance-ad-contract.md), [latest model routing](../chany-studio/references/latest-model-routing.md), [paid runtime contract](../chany-studio/references/higgsfield-runtime-contract.md), and [creative quality loop](../chany-studio/references/creative-quality-loop.md).

Follow the shared [beginner experience contract](../chany-studio/references/beginner-experience.md) for plain-Korean intake, one confirmation card, paid-generation approval, and concise recovery.

Use `chany-jtbd-persona`, `chany-meta-ad-research`, or `chany-marketing-brief` only when the requested variable, customer decision, evidence, or winner status is unresolved. Do not restart research for a source whose strategy and winning variable are already documented.

## Contract

- Accept exactly one source video. Ad Multiplier currently requires a measured 4–30 second source; inspect the live model contract before quoting or submitting.
- Preserve camera, cuts, timing, motion, performance, lighting, aspect ratio, default audio, captions, UI, labels, logos, and untargeted text. Change only the approved variable for each output.
- Keep outputs ordered and independent. `N` means final videos, not assets or operations. Never create a Cartesian product unless the user explicitly requests and approves that expanded count.
- Use the connected host's dedicated Ad Multiplier workflow when callable. Do not imitate it with unrelated generation or silently fall back to another model.
- If the source is outside the live duration range, identity/reference mapping is ambiguous, or the provider cannot preserve required audio/text, stop before paid work and return the smallest correction.

## Workflow

1. Lock the source, requested output count, one variable per output, target mapping, reference-image authority, resolution, and whether any on-screen text is intentionally targeted.
2. Analyze the source once. Record scenes and natural edit ranges; do not create repeated analyses for each output.
3. Build an ordered variant table: output label, hypothesis, exact change, preserved elements, required reference, acceptance gate, and tracking name.
4. Inspect the live `ad_multiplier` schema and obtain the current cost for the exact count, duration, resolution, and inputs. Show one confirmation card; approval covers only that table.
5. Submit stable-index batches within the live tool limit. Freeze completed indices and retry only a failed index once after its original state is known.
6. Restore or preserve the source's default audio when the connected workflow renders silent edits. Verify duration, ratio, audio, target replacement across cuts/occlusions/reflections, captions, logos, labels, and every preserved element before delivery.
7. Return outputs in approved order with their hypothesis and tracking name. Performance claims require observed data and `chany-marketing-brief`; generation success is not a winning-ad result.

Read [references/variant-plan.md](references/variant-plan.md) when planning two or more outputs.
