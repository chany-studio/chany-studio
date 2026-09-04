---
name: chany-model-fashion
description: Create consistent adult commercial model imagery and source-locked fashion try-on for product marketing. Use when human identity, garments, or accessories must remain consistent; not for product-only scenes or testimonial-style UGC video.
---

# Chany Model Fashion

Create polished static campaign imagery in which adult model identity and every supplied garment or accessory remain consistent.

Read [references/model-fashion-production.md](references/model-fashion-production.md) for authority roles, locks, prompts, and QA.

Before any paid operation, read and follow the shared [Higgsfield runtime contract](../chany-studio/references/higgsfield-runtime-contract.md). Read and follow the shared [creative quality loop](../chany-studio/references/creative-quality-loop.md) when defining acceptance, inspecting results, correcting defects, and deciding QA.

## Workflow

1. Confirm that any identifiable real person may be used for the requested purpose. Never use this workflow to impersonate, deceive, or sexualize a person, or to depict a minor as a commercial adult model.
2. Assign every input one role: model authority, garment authority, accessory authority, or direction-only reference.
3. Build a model lock and a separate lock for each garment and accessory. Never merge design details across sources.
4. Record the action, shot size, camera, environment, light, mood, channel, and intended crop.
5. Generate one requested image by default, compare it with every authority image at high zoom, and run the shared bounded creative quality loop. The default bound is one initial attempt plus at most one defect-specific correction within the approved attempt and credit ceiling; stop when the shared escalation conditions apply.

Use this skill for editorial, lookbook, PDP, or campaign stills. Route talking reviews, demonstrations, testimonials, unboxing, or localized avatar video to `chany-ugc-ads`.

Inspect the connected tool schema before use. If the required identity or try-on capability is unavailable, return the locked brief and production prompt and state the missing capability.

Paid submission, recovery, and scope changes follow the shared runtime contract exactly. Never blindly resubmit after a timeout, disconnect, or unknown charge state; inspect the original job or receipt first. A changed request requires a new paid-generation preflight and approval under that contract.
