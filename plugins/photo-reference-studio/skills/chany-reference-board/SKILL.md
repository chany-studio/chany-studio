---
name: chany-reference-board
description: "제품 사진으로 레퍼런스 찾아줘, 인스타그램용 광고 사진의 구도·조명·제형 참고 사진을 찾을 때 사용. Still-photo styling defaults to six Pinterest images, even for commercial or Instagram output. Also find product-matched Instagram Reels with Apify and verified plays/likes/shares when video or performance examples are requested. A numbered choice hands the exact selected image to product-reference production. Not final generation or Meta-only benchmarking."
---

# Chany Reference Board

For product-photo styling and “레퍼런스 고르면 이 제품으로 만들어줘”, read [photo reference execution](../chany-studio/references/photo-reference-execution.md) first. Pinterest is the default for this request even when the output is called an Instagram advertisement. Preserve the selected image and composition in the production handoff.

For named sites/accounts, the user’s curated directory, or broader product/service research, use the separate [curated source lane](../chany-studio/references/curated-reference-sources.md). For known Instagram competitor accounts, use [Metricool](../chany-studio/references/metricool-reference-research.md) only when available and useful; it is not required or a universal search engine. These branches do not expand Pinterest access or cross-fill the default board. A supplied selected reference skips discovery and goes to [reference insertion](../chany-studio/references/reference-insertion.md) when the user wants its layout retained.

For a video-reference request or video-scoped handoff, use only the curated video discovery branch in [video-first experience](../chany-studio/references/video-first-experience.md), then `chany-video-reference-ingest` for observation. The generic image-board defaults and Pinterest display requirements below do not apply to that branch. Advertising discovery follows [Instagram first with Meta as a complement](../chany-studio/references/instagram-ad-reference.md). Product-matched high-view, high-like or high-share examples use [Apify research and comparison](../chany-studio/references/apify-instagram-research.md) in this same branch. Meta-only benchmarking stays with `chany-meta-ad-research`. A supplied video reference goes to video intake, not static layout insertion.

Find commercial visual direction while keeping every candidate traceable and directly visible.

Every user-facing turn follows the shared [beginner experience contract](../chany-studio/references/beginner-experience.md): quick start by default, plain Korean without internal field names, and one confirmation card before any paid generation.

For a supplied physical product, follow the shared [product insertion pipeline](../chany-studio/references/product-insertion.md): references ranked for this product, clean product source, reference-style generation with the product as the authority, visible product match check, and optional upscale, extra ratios, or video.

For an unspecified still-photo styling provider or explicit Pinterest request (not generic ad discovery), follow [reference defaults](../chany-studio/references/reference-board-defaults.md): Pinterest 6 images by default, or the user’s explicit count. Other default sources are selected only through [curated sources](../chany-studio/references/curated-reference-sources.md) for the requested purpose. Read [automatic recovery](../chany-studio/references/reference-recovery.md) for bounded retries and the single selection/production decision.

**For every Reel recommendation, read [watch-before-recommending](../chany-studio/references/instagram-video-verification.md). Actual whole-video inspection is mandatory before final ranking. Captions or thumbnails alone remain unverified leads, never finalists. Reuse returned video URLs for connected analysis when the original page cannot play.**

The remaining search, preview and required-result instructions apply only to the Pinterest lane. Instagram advertising uses the Instagram-first contract above without invoking the Pinterest preview server.

Read [references/search-policy.md](references/search-policy.md) and the machine-readable [references/industry-taxonomy.json](references/industry-taxonomy.json) before searching. Read [references/reference-search-mcp-contract.md](references/reference-search-mcp-contract.md) when using, testing, or connecting the Claude Cowork preview path. After the Pinterest candidate pool exists, use the shared [current creative signals](../chany-studio/references/current-creative-signals.md) only as a ranking lens; trend names, years, palette names, moods, and style words must never enter the L1 or L2 search query.

In Claude Cowork, verify that `fetch_reference_preview_image` is callable before searching. The bundled preview server is configured to load its single tool at session start. If the host still presents it as deferred and exposes `ToolSearch`, call `ToolSearch(query: "select:fetch_reference_preview_image")` before the first preview call. If the tool is absent or disconnected, say so before search and do not return a link-only result as a completed board.

## Required result

- Resolve the board and lane counts before search. For Pinterest-only, use the user's explicit positive whole-number request when present; otherwise default to `6`. Do not ask about an omitted count, and never silently cap or expand an explicit count. Zero skips research; conflicting counts require one concise clarification.
- Select one industry branch, run its L1 broad English query with an explicit `pinterest.com` domain restriction first, and optionally one direct L2 subtype. Automatic same-scope recovery is allowed; never search L3. Pinterest operations must not search, open, fetch or retain other providers.
- Accept an industry direction packet when present. Its reference route may select a taxonomy branch, but it cannot add style, audience, channel, place, mood, camera, lighting, or campaign words to the search query.
- Rank for source compatibility, transferable composition and lighting, production feasibility, diversity, and low contamination risk.
- Present exactly `target_count` distinct Pinterest finalists as actual images in the current conversation. A URL, HTML page, contact sheet, filename, or metadata object alone does not satisfy this checkpoint.
- Under each image, retain its number, provider, source-page link, query, fit note, and concise Visual DNA.
- Treat every reference as direction-only. Never imply commercial reuse rights. A selected reference may be used as a generation reference input only through [product insertion](../chany-studio/references/product-insertion.md) §4, after the user approves the confirmation card that names it as someone else's photo; never deliver its pixels, and reject any output that could pass for it. Keep the source link on the Pinterest Pin page and never follow or expose its outbound destination.
- In `semi-auto`, show the images and recommend one; then ask a single combined question (reference choice plus production plan) as [reference recovery](../chany-studio/references/reference-recovery.md) describes. A reply of one number or `자동 선택` answers the reference part. A user-supplied reference is already selected.

If a candidate cannot be displayed, replace it and use bounded automatic recovery before reporting a shortfall. Exactly `target_count` visible results complete the lane. If recovery is exhausted, show valid images and requested/visible/missing counts, then offer one combined scope/production decision under the recovery contract. Never silently reduce the target, lower quality or count links as images.
