---
name: auto-photo-production
description: Turn an uploaded product or food photo into a faithful cutout, a six-image reference board, or a reference-directed commercial image. Use for 누끼, packshots, product or food photography, campaign images, reference search, and source-locked revisions.
---

# Auto Photo Production

Create production-ready assets from a real source photograph. The source controls subject identity; references control only photographic direction.

## Capability routing

Prefer this stack when it is connected:

- native vision for source and result inspection
- image search with domain filtering, or a reference-search connector, for the two approved source pools
- the bundled Higgsfield MCP server for upload, background removal, and reference-directed editing

If Higgsfield authentication is required, ask the user to select the connection or login button shown by the host, complete the Higgsfield authorization page, and then return to the same chat. Never ask the user to paste a password, access token, API key, or authorization code into the conversation. After authentication, resume the interrupted step instead of restarting the workflow.

If Higgsfield is unavailable, use another connected image editor only when it can accept the source and, for staged work, the chosen reference. Preserve the same identity lock and QA rules. If no suitable editor exists, complete the source analysis, reference board, and production prompt, then state the single missing connection. Never invent search results, source URLs, generated assets, or QA scores.

Read [references/reference-search-mcp-contract.md](references/reference-search-mcp-contract.md) only when implementing or connecting the dedicated reference-search tool.

## Choose the job and operating mode

Infer the smallest job that satisfies the request:

- `cutout`: transparent cutout or clean white packshot only
- `reference-board`: six reference candidates only; do not generate an asset
- `staged`: one reference-directed commercial image; create a source-preserving cutout first when it improves fidelity
- `full`: cutout, reference selection, and staged image

Use `semi-auto` unless the user explicitly requests automatic selection.

- `semi-auto`: present six references and wait for one number or `자동 선택` before any paid staged generation.
- `auto`: rank the candidates, choose the best viable reference, and continue.
- A user-supplied reference is already selected; skip search and the selection checkpoint.

Read [references/production-modes.md](references/production-modes.md) when job scope, defaults, or checkpoints need routing.

## Workflow

### 1. Acquire and inspect the source

Use the original attachment at the highest available resolution. If the production connector cannot read it directly, open its upload control immediately and retain the returned media handle.

Do not ask the user to describe visible facts. Ask only when a missing business choice would materially change the deliverable, such as required copy, a mandatory ratio, or whether automatic reference selection is allowed. Otherwise use the defaults in `production-modes.md` and state them in the delivery note.

### 2. Build the subject lock

Record only visible facts and separate them into:

- `immutable`: subject count, silhouette, proportions, orientation, camera angle, visible structure, materials, colors, transparency, gloss, texture, and every legible identity detail
- `editable`: background, set, support surface, lighting, shadow, framing, copy space, and only the minimum requested capture correction
- `uncertain`: unreadable text, hidden sides, occluded details, uncertain ingredients, ambiguous edges, or color affected by glare

For products, transcribe visible label text, line breaks, logo, and printed marks exactly. For food, inventory visible ingredients, amounts, distribution, doneness, sauce flow, and irregular shape.

Never present hidden or unreadable details as known. Reconstruct only the smallest necessary missing area from visible symmetry and adjacent material cues.

### 3. Protect identity before creating

Use non-generative background removal for transparent cutouts whenever possible. This is the preferred path for text-bearing packaging, exact logos, intricate food edges, and any source whose pixel identity matters.

Do not use generative correction merely to make a product straighter or more symmetrical. Apply angle, perspective, or lens correction only when the user asks for a clean packshot or the capture defect is materially distracting, and treat any changed text, geometry, ingredients, or surface detail as a failed result.

For a white packshot, prefer placing the source-derived cutout on pure white without redrawing the subject. Use generative editing only when the connected tool cannot produce the requested output otherwise.

### 4. Find and choose a reference

Skip this step for `cutout` jobs and user-supplied references. Otherwise read [references/search-policy.md](references/search-policy.md).

Generate at most two English queries:

1. `"<Broad category> Photography"`
2. `"<Direct subtype> Photography"`

Run each valid semantic query against both approved source pools: `Behance + Pinterest` and `Unsplash + Pexels`. Do not use general-web or other-domain results as silent fallbacks. Merge and deduplicate results, reject unusable sources, rank them, then choose six visually diverse candidates. Treat domain scope as a search filter rather than a style modifier added to the semantic query.

In `semi-auto`, show a compact numbered board containing source pool, thumbnail, source link, query, fit note, and one-sentence Visual DNA. Target three viable candidates from each source pool. Ask for one number or `자동 선택`; this is the only default human checkpoint.

In `auto`, choose the highest-ranked viable candidate after diversity, rights, accessibility, and contamination checks. Retain its source-page URL and search query.

Import a selected web reference through the production connector before generation. Never pass an unverified raw web URL as an image input when the connector requires an uploaded media handle.

### 5. Extract reference Visual DNA

Describe transferable photographic direction:

- composition, subject scale, and negative space
- camera height, angle, and perspective character
- background and support-surface relationship
- key-light direction, size, hardness, fill, and shadow behavior
- palette and contrast hierarchy
- supporting geometry, props, liquid, particles, or human interaction
- depth of field, texture, and commercial mood

Explicitly exclude the reference subject, recipe, packaging, logo, copy, price, people, and branded design. Preserve a human interaction pose only when the user requests it.

### 6. Create the requested assets

Before the first paid generation, inspect the current tool or model schema and pass only supported parameters. Read [references/prompt-templates.md](references/prompt-templates.md) before assembling an edit prompt.

- Cutout: remove the background from the source; do not add a contact shadow to a transparent asset.
- White packshot: use a source-derived subject on pure `#FFFFFF`; keep the source crop unless the user requested reframing.
- Staged image: pass the source-derived subject first and the selected reference second. State that image 1 controls immutable subject identity and image 2 provides photographic direction only.

Create one final asset per requested deliverable by default. When the user requests variations, keep the same subject lock and selected reference unless they explicitly ask to explore different directions.

### 7. Validate and retry once

Read [references/qa-rubric.md](references/qa-rubric.md). Compare the output against the original source at high zoom and, for staged work, against the selected reference direction.

Any critical failure is an automatic rejection, regardless of score. Make one corrective retry that names only observed defects, reattaches or reuses the original source, and restates the affected immutable facts. Keep accepted composition and lighting fixed unless they caused the defect.

After the corrective retry, return the best viable result with a concise defect note if anything remains. Do not hide uncertainty or claim exact label fidelity that cannot be visually verified.

### 8. Deliver and preserve revision context

Read [references/delivery-and-revision.md](references/delivery-and-revision.md) before final delivery or a follow-up revision.

Return the requested assets, selected reference source and query when applicable, the effective ratio, and a compact production note covering identity preservation, borrowed Visual DNA, QA status, and remaining uncertainty. Do not expose internal media IDs, job IDs, or raw tool payloads.

For follow-up edits, keep the original source as the identity authority. Local lighting, color, crop, copy-space, prop, or background changes may use the accepted result as the edit target, but identity-sensitive repairs must be checked against the original source. A new reference starts a new staged render from the source-derived subject rather than repeatedly transforming the old render.
