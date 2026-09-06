---
name: chany-reference-board
description: Find, rank, and present traceable Pinterest references as images in the current conversation, using six by default or the positive count explicitly requested by the user, with transferable Visual DNA and provenance. Use for commercial art-direction research or reference selection; not for generating final campaign assets.
---

# Chany Reference Board

Find commercial visual direction while keeping every candidate traceable and directly visible.

Read [references/search-policy.md](references/search-policy.md) and the machine-readable [references/industry-taxonomy.json](references/industry-taxonomy.json) before searching. Read [references/reference-search-mcp-contract.md](references/reference-search-mcp-contract.md) when using, testing, or connecting the Claude Cowork preview path. After the Pinterest candidate pool exists, use the shared [current creative signals](../chany-studio/references/current-creative-signals.md) only as a ranking lens; trend names, years, palette names, moods, and style words must never enter the L1 or L2 search query.

In Claude Cowork, verify that `fetch_reference_preview_image` is callable before searching. The bundled preview server is configured to load its single tool at session start. If the host still presents it as deferred and exposes `ToolSearch`, call `ToolSearch(query: "select:fetch_reference_preview_image")` before the first preview call. If the tool is absent or disconnected, say so before search and do not return a link-only result as a completed board.

## Required result

- Resolve `target_count` before search. Use the user's explicit positive whole-number request when present; otherwise default to `6`. Do not ask about count when the user did not specify one, and never silently cap or expand an explicit count. A request for zero references skips this skill; an invalid or conflicting count requires one concise clarification.
- Select one industry branch, run its L1 broad English query with an explicit `pinterest.com` domain restriction first, and optionally run one direct L2 subtype query with the same restriction. Never search an L3 term or synthesize a third query. Do not search, open, click, fetch, preview, or retain a visual reference from any other provider or host.
- Accept an industry direction packet when present. Its reference route may select a taxonomy branch, but it cannot add style, audience, channel, place, mood, camera, lighting, or campaign words to the search query.
- Rank for source compatibility, transferable composition and lighting, production feasibility, diversity, and low contamination risk.
- Present exactly `target_count` distinct Pinterest finalists as actual images in the current conversation. A URL, HTML page, contact sheet, filename, or metadata object alone does not satisfy this checkpoint.
- Under each image, retain its number, provider, source-page link, query, fit note, and concise Visual DNA.
- Treat every reference as direction-only. Never imply commercial reuse rights. Keep the source link on the Pinterest Pin page and never follow or expose its outbound destination.
- In `semi-auto`, wait for one number or `자동 선택` before paid reference-directed production. A user-supplied reference is already selected.

If a candidate cannot be displayed, replace it from the remaining Pinterest pool. Exactly `target_count` successful visible results are required before the board is complete. If the two-query candidate pool is exhausted below `target_count`, show any passing candidates only as an explicitly incomplete diagnostic, state the requested count, visible count, and shortfall, and do not ask for a selection or begin paid production. Never add another provider, silently reduce the count, or lower the standard.
