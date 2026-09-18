---
name: chany-reference-board
description: Find and display visual references inline, defaulting to ten total from Pinterest and MeiGen, or an explicitly requested provider and count. Coordinate source-isolated lanes with Visual DNA and bounded automatic recovery; not final media generation or Meta ad benchmarking.
---

# Chany Reference Board

Find commercial visual direction while keeping every candidate traceable and directly visible.

Every user-facing turn follows the shared [beginner experience contract](../chany-studio/references/beginner-experience.md): quick start by default, plain Korean without internal field names, and one confirmation card before any paid generation.

For an unspecified provider or Pinterest + MeiGen request, first follow the [combined board contract](../chany-studio/references/combined-reference-board.md): default 10 total, 5 from each source. Coordinate the MeiGen lane through `chany-ai-prompt-reference`; the Pinterest-only rules below govern only Pinterest operations. An explicit Pinterest-only request keeps a single lane. Read [automatic recovery](../chany-studio/references/reference-recovery.md) for all searches and the combined selection/production decision.

Read [references/search-policy.md](references/search-policy.md) and the machine-readable [references/industry-taxonomy.json](references/industry-taxonomy.json) before searching. Read [references/reference-search-mcp-contract.md](references/reference-search-mcp-contract.md) when using, testing, or connecting the Claude Cowork preview path. After the Pinterest candidate pool exists, use the shared [current creative signals](../chany-studio/references/current-creative-signals.md) only as a ranking lens; trend names, years, palette names, moods, and style words must never enter the L1 or L2 search query.

In Claude Cowork, verify that `fetch_reference_preview_image` is callable before searching. The bundled preview server is configured to load its single tool at session start. If the host still presents it as deferred and exposes `ToolSearch`, call `ToolSearch(query: "select:fetch_reference_preview_image")` before the first preview call. If the tool is absent or disconnected, say so before search and do not return a link-only result as a completed board.

## Required result

- Resolve the board and lane counts before search. In combined mode the allocated lane target overrides the single-provider default. For Pinterest-only, use the user's explicit positive whole-number request when present; otherwise default to `6`. Do not ask about an omitted count, and never silently cap or expand an explicit count. Zero skips research; conflicting counts require one concise clarification.
- Select one industry branch, run its L1 broad English query with an explicit `pinterest.com` domain restriction first, and optionally one direct L2 subtype. Automatic same-scope recovery is allowed; never search L3. Pinterest operations must not search, open, fetch or retain other providers; the separate MeiGen lane keeps its own tools and provenance.
- Accept an industry direction packet when present. Its reference route may select a taxonomy branch, but it cannot add style, audience, channel, place, mood, camera, lighting, or campaign words to the search query.
- Rank for source compatibility, transferable composition and lighting, production feasibility, diversity, and low contamination risk.
- Present exactly `target_count` distinct Pinterest finalists as actual images in the current conversation. A URL, HTML page, contact sheet, filename, or metadata object alone does not satisfy this checkpoint.
- Under each image, retain its number, provider, source-page link, query, fit note, and concise Visual DNA.
- Treat every reference as direction-only. Never imply commercial reuse rights. Keep the source link on the Pinterest Pin page and never follow or expose its outbound destination.
- In `semi-auto`, show the images and recommend one; then ask a single combined question (reference choice plus production plan) as [reference recovery](../chany-studio/references/reference-recovery.md) describes. A reply of one number or `자동 선택` answers the reference part. A user-supplied reference is already selected.

If a candidate cannot be displayed, replace it and use bounded automatic recovery before reporting a shortfall. Exactly `target_count` visible results complete the lane. If recovery is exhausted, show valid images and requested/visible/missing counts, then offer one combined scope/production decision under the recovery contract. Never silently reduce the target, lower quality or count links as images.
