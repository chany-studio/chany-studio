# Production Paradise Source Policy

## Hard scope

The only provider in this lane is Production Paradise.

| Provider | Accepted source pages | Purpose |
|---|---|---|
| Production Paradise | public pages on `productionparadise.com` | commercial photographers, directors, production companies, showcases, and commissioned advertising or lifestyle work |

Search calls must be restricted to `productionparadise.com`. Keep the public portfolio, showcase, or profile page as provenance. Do not follow an outbound agency, brand, social, contact, or download destination. A preview is acceptable only when the discovery result pairs it with that exact public source page and the host can return it as image content without bypassing access controls.

Never use Stocksy, ShotDeck, Death to Stock, a stock library, a social network, or an unapproved portfolio mirror in this lane. Do not use the Pinterest-only preview MCP connection for these results.

## Query and count contract

Use exactly one L1 subject label from the central industry taxonomy and zero or one direct L2 child. Provider/domain restriction is routing metadata, not part of the semantic phrase. Do not add quality, style, trend, platform, audience, location, mood, color, lighting, camera, brand, agency, or campaign modifiers.

Resolve `target_count` as the user's explicit positive whole number or `6`. Collect enough candidates for replacements, deduplicate alternate crops and one-shoot near-duplicates, and select exactly the target count. For three or more results, avoid allowing one creator or shoot to dominate when metadata permits.

## Acceptance and presentation

Reject login-gated pages, orphan images, collages, screenshots, severe compression, dominant watermarks, text-heavy layouts, uncertain image-to-page pairing, and candidates whose pixels cannot be shown in the conversation.

For each accepted reference retain:

    provider: "Production Paradise"
    source_url: ""
    search_query: ""
    creator_or_company: ""
    fit_note: ""
    visual_dna: ""
    exclude_from_reference: []
    display_confirmed: false
    rights_status: "direction-only"

The board is complete only after the requested number of actual images is visible. If a host cannot display the public preview, replace it from the permitted pool. If the pool is exhausted, report `requested`, `visible`, and `shortfall` instead of widening the source scope.

Production Paradise states that displayed images and video remain the property of their respective owners. Keep the provider page visible and never present a reference as a reusable production asset: https://www.productionparadise.com/about
