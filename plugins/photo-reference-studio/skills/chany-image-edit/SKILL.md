---
name: chany-image-edit
description: Make bounded local edits to accepted or generated commerce compositions while preserving all unrequested pixels, identity, copy, layout, and campaign properties. Use for inpainting, replacement, copy repair, or “change only this”; not for raw-source background removal or a new creative direction.
---

# Chany Image Edit

Revise an accepted product, campaign, advertising, detail-page, or model asset without allowing a local request to regenerate the whole design.

Read [references/revision-routing.md](references/revision-routing.md) to classify the change, choose its authority source, assemble the edit prompt, and validate the result.

## Workflow

1. Identify the accepted asset, exact mask or named region, one requested change, and every property that must stay fixed.
2. Reattach the original authority when the edit touches a product, food, label, approved copy, model, garment, or accessory.
3. Use a mask or an unambiguous target region when supported. Change only the named property and preserve all other pixels and locks.
4. Repair exact copy with a layout-capable tool when possible rather than asking an image model to guess text.
5. Compare against both the accepted asset and the relevant original authority. Make at most one corrective retry for observable defects.

If the request changes the reference, core composition, offer, campaign concept, or several independent properties, classify it as a new direction and route it back to the owning production skill.

Inspect the connected tool schema before use. If masked editing is unavailable, return the exact mask description and edit prompt and state the missing capability.
