# Reference Search Policy

## Core rule

Search only Pinterest. Search terms identify what the source subject is, not how it should be photographed. Resolve `target_count` as the user's explicit positive whole-number request or `6` when none is given. The final reference board must show exactly `target_count` distinct reference images directly in the current conversation; a link-only board, HTML file, contact sheet, or separate artifact is not an inline reference board.

## Approved provider

| Provider | Domain | Purpose |
|---|---|---|
| Pinterest | `pinterest.com` Pin pages and `i.pinimg.com` previews | Broad visual discovery with Pin-page provenance |

This allowlist is exact. Every search call must be restricted to `pinterest.com`; every accepted source must be a public `pinterest.com/pin/...` page; every fetched preview must be on `i.pinimg.com`. Do not search, open, click, fetch, preview, retain, or expose visual-reference material from general web results, stock sites, social networks, agency sites, portfolio sites, mirrors, or any other domain. Never follow a Pin's outbound destination. If a redirect leaves the allowlist, reject it.

Require a public Pinterest Pin page and a directly displayable Pinterest preview. A visible Pinterest creator or board may help diversity scoring but is not permission to leave Pinterest. Reject orphaned Pins, inaccessible pages, login-gated content, scraped mirrors, and results without a directly displayable preview.

Pinterest content is direction-only. Do not treat it as licensed production pixels.

## Query depth

Read [industry-taxonomy.json](industry-taxonomy.json) and use no more than two taxonomy levels. The query plan contains exactly one L1 broad category and zero or one direct L2 subtype:

1. classify the request into one domain and one branch
2. run the branch's exact `l1` query first
3. run at most one exact `l2Examples` value that directly matches the subject
4. for an unlisted subject, normalize only that one subject with the branch `medium`; if that would require another qualifier or compound concept, stop after L1
5. never concatenate L1, L2, and creative attributes into a long-tail query

The L2 term is a direct child, not the L1 phrase plus a string of modifiers. An industry direction packet can choose the branch and direct subtype, but visual attributes remain ranking criteria after discovery.

| Input | Broad query | Direct-subtype query |
|---|---|---|
| Cosmetic serum | Cosmetic Photography | Serum Photography |
| Blush | Cosmetic Photography | Blush Photography |
| Lipstick | Cosmetic Photography | Lipstick Photography |
| Hotdog | Food Photography | Hotdog Photography |
| Burger | Food Photography | Burger Photography |
| Coffee drink | Beverage Photography | Coffee Photography |
| Headphones | Product Photography | Headphone Photography |
| Handbag | Fashion Accessories Photography | Handbag Photography |

Additional valid pairs include `Professional Services Branding` → `Law Firm Branding`, `Hospitality Photography` → `Hotel Photography`, `Architecture Photography` → `Interior Photography`, and `Automotive Photography` → `Electric Vehicle Photography`.

Run each approved semantic query once on Pinterest, for a maximum of two search calls: the required L1 call and at most one direct-L2 call. If the direct subtype cannot be identified confidently, run only the L1 query. Do not retry with a narrower phrase; improve filtering and ranking instead.

## Prohibited query modifiers

Do not add:

- colors, palettes, backgrounds, props, seasons, or environments
- lighting, shadow, camera, lens, angle, or aperture terms
- mood or aesthetic adjectives
- aspect ratios, platform names, poster, banner, or layout terms
- premium, luxury, cinematic, creative, or similar quality words
- brand names, campaign names, photographers, agencies, slogans, or copy

Provider and domain scope is routing metadata, not part of the semantic query.

## Collection

- collect enough Pinterest candidates across the permitted L1 and optional L2 calls to cover `target_count` plus reasonable replacements, within the live connector's per-call result limit
- do not silently cap an explicit `target_count`; when the connector or permitted two-query pool cannot supply it, report an incomplete board with requested, visible, and missing counts
- retain only provider, preview image URL, Pin-page URL, Pin title, Pinterest creator or board when visible, source domain, dimensions when known, and query
- merge duplicates by canonical Pin ID or URL and normalized `i.pinimg.com` asset URL with size and query removed; also merge perceptual near-duplicates and alternate crops from one image
- reject collages, screenshots, severe compression, watermarks over the subject, images dominated by text, inaccessible previews, missing source pages, orphaned Pins, and duplicate crops from one shoot
- require an image preview that the conversation surface can render directly
- never bypass access controls, scrape Pinterest, or bulk-download Pinterest content

## Visual ranking

Score each candidate from 0 to 100:

| Criterion | Weight | Question |
|---|---:|---|
| Subject compatibility | 25 | Can this visual system plausibly hold the source subject? |
| Transferable composition | 20 | Are framing, scale, and negative space clear enough to reapply? |
| Lighting legibility | 20 | Can direction, source size, contrast, and shadow be inferred? |
| Material or food compatibility | 15 | Will the treatment support the source surface and texture? |
| Production feasibility | 10 | Can the scene be built without hiding or redesigning the subject? |
| Contamination risk | 10 | Are foreign logos, packaging, copy, people, and recipe features easy to exclude? |

## Diversity and source spread

For three or more requested candidates, build a set that differs across at least three axes; for one or two, maximize meaningful difference without inventing diversity:

- centered vs asymmetrical composition
- high-key vs low-key lighting
- hard vs soft shadow
- flat vs dimensional set
- minimal vs prop-supported scene
- front view vs high angle vs top view

Select exactly `target_count` distinct Pinterest candidates. When the metadata permits, prevent one Pinterest creator, board, or obvious shoot from dominating the set. If fewer than `target_count` directly displayable candidates remain after the allowed L1 and optional L2 searches, mark the board incomplete, state the requested count, visible count, and shortfall, and do not ask the user to choose or begin paid production. Do not search another site, add a third query, recycle a failed candidate, silently reduce the count, or lower the standard.

## Mandatory inline reference board

Render every finalist as an actual image in the response. The user must be able to compare all candidates without opening another page.

Before the first Pinterest query in Claude Cowork, confirm that `fetch_reference_preview_image` is callable. The plugin marks its one-tool preview server `alwaysLoad: true`; if a host still defers it and exposes `ToolSearch`, call `ToolSearch(query: "select:fetch_reference_preview_image")`. When the tool is absent, disconnected, or denied, report that transport blocker before search rather than spending the two-query budget on a board that cannot be displayed.

Use this display order:

1. in Claude Cowork, `target_count` successful separate `fetch_reference_preview_image` results returning MCP image content
2. a fetched public preview returned as host-displayable image content
3. an attached preview image file when the host can display that attachment in the current conversation
4. a verified inline image embed supported by the host

In Claude Cowork, call the bundled tool once per candidate rather than batching the board into one tool result. Continue through unused reserve candidates until `target_count` distinct calls succeed; never retry a failed candidate blindly. For counts above the connection's concurrency limit, work in bounded waves without changing the requested count. Each successful result starts with an MCP `ImageContent` block containing `type: image`, base64 `data`, and an accurate `mimeType`. Search-result metadata or `preview_image_url` alone is not image presentation. Do not create HTML as the primary answer, and do not ask the user to open a list of links just to compare candidates.

Before each preview call, confirm in the discovery result that the preview and Pin page are paired. The preview connection checks the Pinterest provider, URL shape, CDN, bytes, MIME, and dimensions. It does not scrape Pinterest to prove image-to-Pin membership, so do not convert a `provenance_mapping_verified: false` field into a claim that the connector independently verified the mapping.

For each candidate, present in this order:

1. directly rendered image preview
2. number and provider
3. clickable Pinterest Pin-page link
4. search query
5. one-line fit note
6. one-sentence Visual DNA

Do not substitute a text card, filename, placeholder, source-page thumbnail screenshot, or bare URL for the image. If search returns only a preview URL, fetch or import the publicly accessible preview through an approved read-only path and return the resulting image content. Fetch preview-size media only; do not fetch protected originals or bypass access controls.

Treat the board as incomplete until every presented candidate has a visible image. Set `display_confirmed: true` only after actual image content appears in the current conversation. If one candidate cannot be displayed, reject it and use the next unused Pinterest reserve candidate before asking the user to choose. If the current host has no image-content or image-attachment path at all, state the limitation once and offer source links or an HTML board as an optional fallback. Never label that fallback as an inline board or continue the semi-auto selection checkpoint as though the images were visible.

After exactly `target_count` distinct images are visible, ask for one number or 자동 선택. Do not begin paid staged generation before this checkpoint in semi-auto mode.

## Visual DNA record

Maintain:

    target_count: 6
    count_source: "default | user"
    composition: ""
    negative_space: ""
    camera: ""
    background_surface: ""
    lighting: ""
    shadow: ""
    palette_contrast: ""
    props_and_effects: ""
    depth_of_field: ""
    commercial_mood: ""
    exclude_from_reference: []
    provider: "Pinterest"
    source_url: ""
    preview_image_url: ""
    display_transport: "mcp-image-content | native-image-content | image-attachment | verified-inline-embed"
    display_confirmed: false
    search_query: ""
    creator: ""
    rights_status: "direction-only"

Exclude the reference subject, model identity, garments, packaging, logo, label, ingredients, copy, price, and distinctive branded elements.

## Rights and provenance

Use Pinterest images only as visual direction. Keep the Pinterest Pin page as the sole source link. Do not open, retain, or expose an outbound destination even when Pinterest reports one.

Never infer that Pinterest content is licensed for commercial reuse. For any requested direct reuse of reference pixels, stop and verify rights separately.

- Pinterest terms: https://policy.pinterest.com/en/terms-of-service
