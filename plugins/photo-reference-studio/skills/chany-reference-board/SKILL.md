---
name: chany-reference-board
description: Find, rank, and present exactly six traceable Pinterest references as images in the current conversation, with transferable Visual DNA and provenance. Use for commercial art-direction research or reference selection; not for generating final campaign assets.
---

# Chany Reference Board

Find commercial visual direction while keeping every candidate traceable and directly visible.

Read [references/search-policy.md](references/search-policy.md) and the machine-readable [references/industry-taxonomy.json](references/industry-taxonomy.json) before searching. Read [references/reference-search-mcp-contract.md](references/reference-search-mcp-contract.md) when using, testing, or connecting the Claude Cowork preview path.

In Claude Cowork, verify that `fetch_reference_preview_image` is callable before searching. The bundled preview server is configured to load its single tool at session start. If the host still presents it as deferred and exposes `ToolSearch`, call `ToolSearch(query: "select:fetch_reference_preview_image")` before the first preview call. If the tool is absent or disconnected, say so before search and do not return a link-only result as a completed board.

## Required result

- Select one industry branch, run its L1 broad English query on Pinterest first, and optionally run one direct L2 subtype query on Pinterest. Never search an L3 term or synthesize a third query. Do not search any other provider.
- Accept an industry direction packet when present. Its reference route may select a taxonomy branch, but it cannot add style, audience, channel, place, mood, camera, lighting, or campaign words to the search query.
- Rank for source compatibility, transferable composition and lighting, production feasibility, diversity, and low contamination risk.
- Present exactly six distinct Pinterest finalists as actual images in the current conversation. A URL, HTML page, contact sheet, filename, or metadata object alone does not satisfy this checkpoint.
- Under each image, retain its number, provider, source-page link, query, fit note, and concise Visual DNA.
- Treat every reference as direction-only. Never imply commercial reuse rights.
- In `semi-auto`, wait for one number or `자동 선택` before paid reference-directed production. A user-supplied reference is already selected.

If a candidate cannot be displayed, replace it from the remaining Pinterest pool. Six successful visible results are required before the board is complete. If the two-query candidate pool is exhausted with fewer than six viable results, show any passing candidates only as an explicitly incomplete diagnostic, state the shortfall, and do not ask for a selection or begin paid production. Never add another provider or lower the standard.
