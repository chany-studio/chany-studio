---
name: chany-product-assets
description: Prepare source-faithful product or food assets for commerce, including transparent cutouts, white packshots, cleanup, and capture correction. Use for foundational source preparation; not for staged campaign scenes or text-heavy layouts.
---

# Chany Product Assets

Prepare clean, reusable product or food sources for advertising, detail pages, and promotion. The original attachment is the identity authority.

Read [references/asset-prep.md](references/asset-prep.md) for prompts, source locks, and QA.

When this workflow needs a generative still-image edit, read and follow the shared [image model default](../chany-studio/references/image-generation-runtime.md). Use GPT Image 2 (`gpt-image-2`) unless a scoped override meets that contract; this does not replace the non-generative preference below. Execute and resume the generated edit through `chany-media-production-loop`, which owns the stable job record, paid preflight, inline inspection, and bounded correction; keep this skill as the source-fidelity owner.

## Workflow

1. Inspect the highest-resolution original and record visible shape, proportions, orientation, materials, colors, transparency, gloss, texture, logo, label, package geometry, or food composition. Record unreadable or hidden details as uncertain.
2. Choose only the requested result: transparent cutout, pure-white packshot, cleanup, or minimal capture correction.
3. Prefer non-generative background removal when exact pixels, text, fine edges, or ingredients matter.
4. Preserve the source framing and geometry unless the user requested correction or a clear capture defect prevents commercial use.
5. Compare the result with the original at high zoom and run the shared bounded creative quality loop. The default bound is one initial attempt plus at most one defect-specific correction within the approved attempt and credit ceiling; stop and return a labeled draft when its escalation conditions apply.

Transparent cutouts have no floor, glow, contact shadow, or generated background. White packshots use pure `#FFFFFF`, safe margin, and at most a subtle natural contact shadow unless a shadowless output was requested.

Inspect the connected tool schema before calling it. If external authentication is required, direct the user to the host-provided login flow and never ask for credentials or tokens. If no suitable edit tool is available, return the source lock and production prompt and state the missing capability.

Paid submission, recovery, and scope changes follow the shared runtime contract exactly. Never blindly resubmit after a timeout, disconnect, or unknown charge state; inspect the original job or receipt first. A changed request requires a new paid-generation preflight and approval under that contract.
