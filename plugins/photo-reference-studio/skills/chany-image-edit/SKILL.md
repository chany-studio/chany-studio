---
name: chany-image-edit
description: Make bounded local edits to accepted or generated commerce compositions while preserving all unrequested pixels, identity, copy, layout, and campaign properties. Use for inpainting, replacement, copy repair, or “change only this”; not for raw-source background removal or a new creative direction.
---

# Chany Image Edit

Revise an accepted product, campaign, advertising, detail-page, or model asset without allowing a local request to regenerate the whole design.

A product source plus "이 레퍼런스처럼 만들어줘" is not inherently a local edit. Route that new scene to its production owner using [reference-led design](../chany-studio/references/reference-led-design.md); preserve product identity without locking the original camera/pose. This skill retains the existing view only within an explicitly bounded edit request.

Every user-facing turn follows the shared [beginner experience contract](../chany-studio/references/beginner-experience.md): quick start by default, plain Korean without internal field names, and one confirmation card before any paid generation.

Translate everyday look words into professional photo and film direction, and offer the plain-words guided card when the user wants control, following [plain-language direction](../chany-studio/references/plain-language-direction.md).

Read [references/revision-routing.md](references/revision-routing.md) to classify the change, choose its authority source, assemble the edit prompt, and validate the result.

Read the surgical-edit section of the shared [creative-direction system](../chany-studio/references/creative-direction-system.md). State the exact target, one requested change, and the repeated preserve list on every correction; never use a broad style refresh to disguise a local edit.

Before a generative still-image edit, read and follow the shared [image model default](../chany-studio/references/image-generation-runtime.md). Use GPT Image 2.5 (`gpt_image_2_5`) unless a scoped override meets that contract. Execute and resume generated edits through `chany-media-production-loop`, which owns the stable job record, paid preflight, inline inspection, and bounded correction; keep this skill as the edit owner.

## Workflow

Interpret everyday revisions as the smallest affected change: "더 밝게" is not permission to redesign the composition; "글자만 크게" should prefer editable typography; "덜 광고 같게" may need one short choice about copy density versus visual styling. Compare unchanged regions after editing. Generative preservation is a target to verify, never a guarantee of pixel identity; if the request requires exact untouched pixels, use a supported mask/composite workflow or disclose the limitation before execution.

1. Identify the accepted asset, exact mask or named region, one requested change, and every property that must stay fixed.
2. Reattach the original authority when the edit touches a product, food, label, approved copy, model, garment, or accessory.
3. Use a mask or an unambiguous target region when supported. Change only the named property and preserve all other pixels and locks.
4. Repair exact copy with a layout-capable tool when possible rather than asking an image model to guess text.
5. Compare against both the accepted asset and the relevant original authority, then run the shared bounded creative quality loop. The default bound is one initial edit plus at most one defect-specific correction within the approved attempt and credit ceiling; stop when the shared escalation conditions apply.

If the request changes the reference, core composition, offer, campaign concept, or several independent properties, classify it as a new direction and route it back to the owning production skill.

Inspect the connected tool schema before use. If masked editing is unavailable, return the exact mask description and edit prompt and state the missing capability.

Paid submission, recovery, and scope changes follow the shared runtime contract exactly. Never blindly resubmit after a timeout, disconnect, or unknown charge state; inspect the original job or receipt first. A changed request requires a new paid-generation preflight and approval under that contract.
