---
name: chany-model-fashion
description: Create consistent adult commercial model imagery and source-locked fashion try-on for product marketing. Use when human identity, garments, or accessories must remain consistent; not for product-only scenes or presenter-led video.
---

# Chany Model Fashion

Create polished static campaign imagery in which adult model identity and every supplied garment or accessory remain consistent.

Read [references/model-fashion-production.md](references/model-fashion-production.md) for authority roles, locks, prompts, and QA.

Read the shared [creative-direction system](../chany-studio/references/creative-direction-system.md) and [current creative signals](../chany-studio/references/current-creative-signals.md). Apply trend signals only after identity, age, consent, garment, accessory, fit, and body-integrity locks; never make a person look current by changing who they are or what they are wearing.

Before generating or generatively editing a still image, read and follow the shared [image model default](../chany-studio/references/image-generation-runtime.md). Use GPT Image 2 (`gpt-image-2`) unless a scoped override meets that contract. Execute and resume generated fashion stills through `chany-media-production-loop`, which owns the stable job record, paid preflight, inline inspection, and bounded correction; keep this skill as the identity and wardrobe owner.

## Workflow

1. Confirm that any identifiable real person may be used for the requested purpose. Never use this workflow to impersonate, deceive, or sexualize a person, or to depict a minor as a commercial adult model.
2. Assign every input one role: model authority, garment authority, accessory authority, or direction-only reference.
3. Build a model lock and a separate lock for each garment and accessory. Never merge design details across sources.
4. Record the action, shot size, camera, environment, light, mood, channel, and intended crop.
5. Generate one requested image by default, compare it with every authority image at high zoom, and run the shared bounded creative quality loop. The default bound is one initial attempt plus at most one defect-specific correction within the approved attempt and credit ceiling; stop when the shared escalation conditions apply.

Use this skill for editorial, lookbook, PDP, or campaign stills. Presenter-led or demonstration video is outside this skill and belongs to `chany-campaign-video` only when it is a concept-led, authorized campaign asset.

Inspect the connected tool schema before use. If the required identity or try-on capability is unavailable, return the locked brief and production prompt and state the missing capability.

Paid submission, recovery, and scope changes follow the shared runtime contract exactly. Never blindly resubmit after a timeout, disconnect, or unknown charge state; inspect the original job or receipt first. A changed request requires a new paid-generation preflight and approval under that contract.
