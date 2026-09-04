---
name: chany-campaign-visual
description: Create authority-faithful staged commercial imagery and master campaign key visuals using the applicable industry direction packet, with reusable palette, lighting, material, copy-zone, and crop-safe rules. Use for hero imagery and campaign art direction; not for finished text-heavy ads or page-module sets.
---

# Chany Campaign Visual

Create one commercially useful staged image or master key visual from authoritative subject, place, interface, person, or event sources. The result should define a reusable campaign system, not merely an attractive isolated render.

Read [references/visual-production.md](references/visual-production.md) for formulas, prompt structure, campaign locks, and QA.

Before generative still-image work, read and follow the shared [image model default](../chany-studio/references/image-generation-runtime.md). Use GPT Image 2 (`gpt-image-2`) unless a scoped override meets that contract. Before any paid operation, also read and follow the shared [paid-media runtime contract](../chany-studio/references/higgsfield-runtime-contract.md). Read and follow the shared [creative quality loop](../chany-studio/references/creative-quality-loop.md) when defining acceptance, inspecting results, correcting defects, and deciding QA.

## Workflow

1. Read the applicable industry direction packet and carry forward its journey stage, proof objects, must-capture list, directing rules, claims gates, and human-review requirement.
2. Build the subject lock from the original source and separate visible facts from uncertainty.
3. Record a six-element production brief: subject, mood, composition and camera, light, environment, and output use.
4. Use a selected reference only for composition, camera, light, palette, material, props, depth, and mood. Exclude its subject, person, packaging, logo, copy, price, and branded layout.
5. For a master key visual, establish one campaign idea, palette, lighting logic, material or prop device, copy zones, and crop-safe area.
6. Generate only the requested asset, inspect it against the original source and industry failure gates, and run the shared bounded creative quality loop. The default bound is one initial attempt plus at most one defect-specific correction within the approved attempt and credit ceiling; stop and return a labeled draft when its escalation conditions apply.

When downstream assets are planned, approve the master direction before sending its campaign lock to `chany-ad-creative`, `chany-detail-page`, or `chany-ugc-ads`.

Inspect the connected tool schema before use. If authentication is required, use the host login flow and never request secrets. If the connected tool cannot produce the requested result, return the complete brief and prompt and state the exact missing capability.

Paid submission, recovery, and scope changes follow the shared runtime contract exactly. Never blindly resubmit after a timeout, disconnect, or unknown charge state; inspect the original job or receipt first. A changed request requires a new paid-generation preflight and approval under that contract.
