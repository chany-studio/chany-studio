---
name: auto-photo-production
description: This skill should be used when the user asks for a source-faithful product or food cutout, packshot, reference board, commerce key visual, promotional poster, ad creative, banner, detail-page image, consistent model, fashion try-on, local image edit, channel variation, complete commerce image suite, "누끼", "키비주얼", "연출컷", "광고소재", "광고 배너", "상세페이지", "착장샷", or "부분 수정".
---

# Auto Photo Production

Create production-ready commerce images from real source photographs. The source controls product, food, model, and garment identity. References and briefs control only art direction, layout, and capture style.

## Capability routing

Prefer this stack when it is connected:

- native vision for source and result inspection
- image search with domain filtering, or a reference-search connector, limited to Behance and Pinterest
- the bundled Higgsfield MCP server for upload, background removal, and reference-directed editing
- a layout-capable image editor when exact promotional copy must be typeset

If Higgsfield authentication is required, ask the user to select the connection or login button shown by the host, complete authorization, and return to the same chat. Never ask for a password, access token, API key, or authorization code. Resume the interrupted step after authentication.

If no suitable production tool is available, complete the source analysis, six-element brief, layout plan, reference board when requested, and production prompt, then state the single missing capability. Never invent source URLs, generated assets, copy accuracy, or QA scores.

Read [references/reference-search-mcp-contract.md](references/reference-search-mcp-contract.md) only when implementing or connecting the dedicated reference-search tool.

## User-facing onboarding

Make the plugin usable without requiring the user to learn its internal terminology. A source image plus a plain-language outcome is enough to begin. Inspect visible facts yourself; never ask the user to re-describe what can be seen in an attachment.

When the user asks what this plugin can do, how to use it, or has not yet chosen a deliverable, give a compact Korean-first menu covering:

1. transparent cutout or white packshot
2. six-image Behance and Pinterest reference board
3. master key visual
4. detail-page image modules
5. promotional poster, banner, or channel ad set
6. adult model or source-locked fashion shot
7. bounded local edit
8. complete commerce suite

Then provide one copy-ready starter request that matches the user's likely need. Do not front-load the full internal workflow, tool names, or QA rubric unless the user asks for them.

For a first production request, accept reasonable defaults and begin source analysis immediately. Ask only for a missing choice that changes the commercial result materially, especially exact approved copy, target channel, required ratio, or the requested deliverable list. If exact copy was not supplied, offer either a clean visual plate with reserved copy space or clearly marked draft copy; never silently invent approved claims or offers.

For a broad request such as `커머스 이미지 전부 만들어줘`, propose this default suite before paid generation: one transparent cutout, one white packshot, one master key visual, five detail-page modules, and 1:1, 4:5, and 9:16 static ad assets. State the proposed list compactly, then follow the normal semi-auto reference checkpoint. If the user explicitly says to choose automatically or continue without checkpoints, use `auto` and proceed within the named scope.

When explaining installation or updates, point users to the repository guide at `https://github.com/junphoto1008-tech/photo-reference-studio`. The current public marketplace input is the same URL, with `junphoto1008-tech/photo-reference-studio` accepted on surfaces that require `owner/repo` format.

## Choose the smallest job

- `prompt-brief`: a production-ready prompt or brief only
- `cutout`: transparent cutout or clean white packshot
- `reference-board`: six traceable reference candidates only
- `staged`: one source-faithful lifestyle or campaign image
- `key-visual`: one master commerce visual that establishes the campaign system
- `promo-poster`: product image plus exact promotional copy and layout
- `ad-creative`: a static performance or awareness ad for a named placement
- `model-shot`: an adult commercial model image with a reusable consistency lock
- `fashion-shot`: a locked model wearing source-locked garments or accessories
- `local-edit`: a masked or clearly bounded one-property edit to an accepted image
- `banner`: one ad layout at a requested channel ratio and template type
- `detail-page`: a coherent set of requested commerce-page image modules
- `channel-set`: one campaign adapted across named ratios or channels
- `commerce-suite`: the named packshots, key visual, detail modules, and ad assets as one locked campaign family
- `full`: cutout, reference selection, and one staged image

Do not add deliverables that were not requested. A poster is not automatically a detail page, and a banner or vertical ratio is not a video request.

Use `semi-auto` for reference discovery unless the user explicitly requests automatic selection. Present six candidates and wait for one number or `자동 선택` before paid reference-directed generation. A user-supplied reference is already selected.

Read [references/production-modes.md](references/production-modes.md) when routing scope, defaults, ratios, templates, or checkpoints.

## Workflow

### 1. Acquire sources and build a six-element brief

Use original attachments at the highest available resolution. Upload them to the production connector only when needed and retain their roles.

Structure the request as:

1. subject
2. style and mood
3. composition and camera
4. lighting
5. background and environment
6. quality, ratio, channel, and intended use

Put the subject and non-negotiable output requirements first. Write the desired state positively. Treat the first result as the start of an iterative production flow, not a promise of one-shot perfection.

For promotional work, also record category, product name, exact offer or event copy, supporting copy, CTA, brand palette, target channel, ratio, and layout type. Never invent a discount, date, product claim, price, or legal line. If the user asks Claude to draft marketing copy, mark it as draft until approved.

For model or fashion work, record the model source or profile, adult age range, expression and action, shot size and angle, location, lighting, mood, and every supplied garment or accessory.

Ask only when a missing business choice would materially change the deliverable. Do not ask the user to describe visible facts.

Read [references/commerce-formats.md](references/commerce-formats.md) for job formulas, banner templates, channel ratios, and detail-page structure.

### 2. Build the required locks

Record visible facts and uncertainty separately.

- `subject_lock`: count, silhouette, proportions, orientation, structure, materials, colors, transparency, gloss, texture, logo, label, package design, or visible food composition
- `copy_lock`: exact approved wording, line grouping, hierarchy, CTA, offer, date, and legal copy
- `model_lock`: source identity or fictional model profile, facial proportions, hair, body proportions, skin appearance, and fixed styling traits
- `garment_lock`: garment count, silhouette, length, construction, collar, sleeves, seams, closures, pattern, color, material, drape, logos, and accessories
- `editable`: set, props, pose, crop, background, lighting, shadow, copy space, and only requested corrections
- `uncertain`: unreadable text, hidden sides, occluded construction, ambiguous edges, or color distorted by glare

Transcribe visible product text exactly. Inventory visible food ingredients and garment construction. Never present hidden or unreadable details as known. For a generated fictional model, create one adult profile and reuse it consistently; do not silently change identity between outputs.

### 3. Protect source identity

Use non-generative background removal for transparent cutouts whenever possible. Do not redraw text-bearing packaging, exact logos, fine food edges, or garment details merely to make them neater.

- Transparent cutout: no floor, glow, or contact shadow.
- White catalog packshot: source-derived subject on pure `#FFFFFF`, centered with safe margin; use a subtle natural contact shadow unless the user requests a flat shadowless asset.
- Staged, poster, banner, and detail-page work: create or reuse a clean source-derived subject before compositing when that improves identity fidelity.

Apply perspective or capture correction only when requested or materially necessary. Any changed text, geometry, ingredients, model identity, or garment construction is a failed result.

### 4. Find and choose a reference when needed

Skip this step for `prompt-brief`, `cutout`, a user-supplied reference, or a layout job that already has a complete brand direction. Otherwise read [references/search-policy.md](references/search-policy.md).

Use at most two English taxonomy queries and run each against both approved providers: Behance and Pinterest. Present six candidates as directly visible inline images in the conversation, not as a link-only list. Under each image, retain its provider, source-page link, query, fit note, and Visual DNA. Reject or replace any candidate whose preview cannot be displayed directly. In `auto`, choose the highest-ranked viable candidate. Import the selected reference through the production connector instead of passing an unverified raw URL.

### 5. Convert the brief into production direction

Read [references/prompt-templates.md](references/prompt-templates.md). Apply the appropriate formula:

- staged image: source identity + brand mood + scene + capture settings + exclusions
- key visual: source identity + campaign idea + brand codes + focal composition + channel-safe master layout
- promo poster: source identity + approved copy + brand mood + background + layout + output quality
- ad creative: source identity + message objective + approved copy + placement + hierarchy + output quality
- model shot: model lock + expression/action + shot/camera + location + light + commercial mood
- fashion shot: model lock + garment lock + pose + scene + capture settings + exclusions
- local edit: accepted asset + target region + one requested change + fixed-property list
- banner: category/product + ratio/template + approved copy + image hierarchy
- detail page: source lock + module purpose + copy/image hierarchy + coherent campaign system

Reference Visual DNA may control composition, camera, light, palette, props, depth, and mood. It may not contribute another product, recipe, model identity, garment, package, logo, copy, price, or branded layout.

### 6. Create only the requested assets

Inspect the current tool schema before generation and pass only supported parameters.

- `prompt-brief`: return the brief and assembled prompt without generating.
- `cutout`: remove the background or compose the white packshot.
- `staged`: pass the source-derived subject first and selected reference second.
- `key-visual`: establish one accepted master composition, palette, light, surface, prop language, copy-zone logic, and crop-safe area before deriving other assets.
- `promo-poster` and `banner`: reserve copy-safe space and maintain clear subject–headline–offer–CTA hierarchy. When the image model cannot render exact text reliably, create the visual plate first and typeset exact copy with a layout-capable tool. If that tool is unavailable, return the clean plate plus a copy map and mark text rendering as pending.
- `ad-creative`: use the requested placement and objective to choose one message, one visual focal point, and one CTA; never crowd a single asset with every available claim.
- `model-shot`: create one adult model identity and preserve its lock for revisions or a requested sequence.
- `fashion-shot`: use the locked model and source garments; do not redesign, shorten, recolor, re-pattern, or substitute them.
- `local-edit`: use a mask or an unambiguous target region when supported, change only the named property, and preserve all other pixels and locks. Use up to three user-supplied references only when each has a distinct declared role and the connector supports them.
- `detail-page`: create only the requested modules, sharing subject scale, palette, lighting logic, typography plan, and spacing system.
- `channel-set`: derive each ratio from the same accepted master direction and source lock rather than regenerating unrelated concepts.
- `commerce-suite`: accept the key visual first, then derive source-faithful product views, detail-page modules, and ad placements from the same campaign state.

Use one asset per requested deliverable by default. Do not generate unrequested variations.

### 7. Revise conversationally and compare deliberately

Follow `generate → inspect → specific conversational revision → compare/select`. Interpret short revisions such as `문구만 더 크게`, `배경만 더 밝게`, or `그림자만 부드럽게` as local changes. Keep every unmentioned accepted property fixed.

When alternatives are requested, label them by the single changed variable and compare against the original source, approved copy, model lock, garment lock, and channel requirement. Do not spend another generation merely because the first result exists; revise only for an observed defect or requested direction.

### 8. Validate and retry once

Read [references/qa-rubric.md](references/qa-rubric.md). Compare the output at high zoom with every authoritative input. Any critical failure is an automatic rejection.

Make one corrective retry naming only observed defects, reuse the original authority images, and keep accepted composition and lighting fixed unless they caused the failure. After retry, return the best viable result with unresolved defects stated plainly. Never claim exact copy, label, model, or garment fidelity when it cannot be verified.

### 9. Deliver and preserve revision context

Read [references/delivery-and-revision.md](references/delivery-and-revision.md). Return requested assets, effective ratio and template, selected reference provenance when applicable, exact-copy status, and a compact production note.

For follow-up edits, identity-sensitive repairs use the original source; copy repairs use the approved copy lock; model and garment repairs reuse their original authority images or profile. A new art direction starts from the clean source assets instead of repeatedly degrading an old render.
