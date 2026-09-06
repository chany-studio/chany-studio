---
name: chany-commercial-photo-reference
description: Find and present high-end commercial, advertising, and lifestyle photography references from Production Paradise with direct in-conversation previews, traceable source pages, and transferable Visual DNA. Use when professional campaign photography is more important than broad Pinterest discovery; not for award-case research or licensed asset sourcing.
---

# Chany Commercial Photo Reference

Use Production Paradise as a specialist commercial-photography lane. Read [references/source-policy.md](references/source-policy.md) before discovery and read the shared [industry taxonomy](../chany-reference-board/references/industry-taxonomy.json) for the permitted L1 and direct-L2 subject labels. Use [current creative signals](../chany-studio/references/current-creative-signals.md) only after discovery as a ranking lens; trend, mood, style, platform, camera, lighting, and brand words never enter the search query.

## Required result

- Resolve `target_count` from the user's explicit positive whole number or default to `6`. Do not silently cap, expand, or reduce it.
- Search only public `productionparadise.com` pages. Run the selected branch's exact L1 subject query first and optionally one direct L2 subject query. Never synthesize an L3 or long-tail style query.
- Rank candidates for commercial craft, subject compatibility, transferable composition and lighting, production feasibility, source diversity, and low brand-contamination risk.
- Show exactly `target_count` distinct photographs as actual images in the current conversation. Under each image include the provider, public Production Paradise source page, query, fit note, Visual DNA, and the branded elements that must not transfer.
- Treat every result as direction-only. Do not imply that a portfolio image is licensed for reuse and do not copy its subject identity, packaging, logo, campaign copy, or distinctive branded execution.
- In `semi-auto`, wait for a number or `자동 선택` before reference-directed paid production.

The bundled `fetch_reference_preview_image` tool is Pinterest-specific. Never send a Production Paradise URL to it. Use a host-native image-result or public-preview display path that returns actual image content. A bare URL, HTML board, filename, metadata card, or page screenshot does not complete the board.

If the permitted L1/L2 pool cannot provide the requested number of visible, traceable images, return an incomplete diagnostic with requested, visible, and shortfall counts. Do not fall back to Pinterest, an award archive, Stocksy, ShotDeck, Death to Stock, or another site without a new user request.
