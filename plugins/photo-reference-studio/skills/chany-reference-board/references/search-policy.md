# Reference Search Policy

## Core rule

Search only Behance and Pinterest. Search terms identify what the source subject is, not how it should be photographed. The final reference board must show the reference images directly in the current conversation; a link-only board, HTML file, contact sheet, or separate artifact is not an inline reference board.

## Approved providers

| Provider | Domain | Purpose |
|---|---|---|
| Behance | behance.net | Commercial art direction, campaign systems, set design, lighting, and composition |
| Pinterest | pinterest.com | Broad visual discovery and traceable links to original creative sources |

Do not use general web results, stock sites, social networks, agency sites, or any domain other than Behance and Pinterest as a silent fallback.

Prefer a Behance project page with visible project ownership. For Pinterest, require a public Pin page plus a visible creator or outbound original-source link. Reject orphaned Pins, inaccessible pages, login-gated content, scraped mirrors, and results without a directly displayable preview.

Behance and Pinterest content is direction-only. Do not treat it as licensed production pixels.

## Query depth

Use no more than two taxonomy levels:

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

Run each approved semantic query once for Behance and once for Pinterest, for a maximum of four search calls. If the direct subtype cannot be identified confidently, run only the broad query for both providers.

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

- collect up to 8 candidates per query per provider
- retain provider, preview image URL, source-page URL, Pinterest outbound original-source URL when available, project or Pin title, creator when visible, source domain, dimensions when known, and query
- merge exact duplicates and near-duplicates
- reject collages, screenshots, severe compression, watermarks over the subject, images dominated by text, inaccessible previews, missing source pages, orphaned Pins, and duplicate crops from one shoot
- require an image preview that the conversation surface can render directly
- never bypass access controls, scrape Pinterest, or bulk-download provider content

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

## Diversity and provider balance

Select six candidates that differ across at least three axes:

- centered vs asymmetrical composition
- high-key vs low-key lighting
- hard vs soft shadow
- flat vs dimensional set
- minimal vs prop-supported scene
- front view vs high angle vs top view

Target three Behance and three Pinterest candidates when both providers have at least three viable results. If one provider is short, keep at least two from it when possible and fill from the other provider. If fewer than six directly displayable candidates remain, return only the viable images and state the shortfall. Do not use another site or lower the standard.

## Mandatory inline reference board

Render every finalist as an actual image in the response. The user must be able to compare all candidates without opening another page.

Use this display order:

1. in Claude Cowork, six separate `fetch_reference_preview_image` calls returning MCP image content
2. a fetched public preview returned as host-displayable image content
3. an attached preview image file when the host can display that attachment in the current conversation
4. a verified inline image embed supported by the host

In Claude Cowork, call the bundled tool once per finalist rather than batching six images into one tool result. Each successful result starts with an MCP `ImageContent` block containing `type: image`, base64 `data`, and an accurate `mimeType`. Search-result metadata or `preview_image_url` alone is not image presentation. Do not create HTML as the primary answer, and do not ask the user to open six links just to compare candidates.

Before each preview call, confirm in the discovery result that the preview and provider page are paired. The preview connection checks the provider, URL shape, CDN, bytes, MIME, and dimensions. It also verifies Behance mapping when the public asset identifier contains the gallery ID. It does not scrape Pinterest to prove image-to-Pin membership, so do not convert a Pinterest `provenance_mapping_verified: false` field into a claim that the connector independently verified the mapping.

For each candidate, present in this order:

1. directly rendered image preview
2. number and provider
3. clickable provider source-page link
4. Pinterest outbound original-source link when available
5. search query
6. one-line fit note
7. one-sentence Visual DNA

Do not substitute a text card, filename, placeholder, source-page thumbnail screenshot, or bare URL for the image. If search returns only a preview URL, fetch or import the publicly accessible preview through an approved read-only path and return the resulting image content. Fetch preview-size media only; do not fetch protected originals or bypass access controls.

Treat the board as incomplete until every presented candidate has a visible image. If one candidate cannot be displayed, reject and replace it before asking the user to choose. If the current host has no image-content or image-attachment path at all, state the limitation once and offer source links or an HTML board as an optional fallback. Never label that fallback as an inline board or continue the semi-auto selection checkpoint as though the images were visible.

After the six images, ask for one number or 자동 선택. Do not begin paid staged generation before this checkpoint in semi-auto mode.

## Visual DNA record

Maintain:

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
    provider: "Behance | Pinterest"
    source_url: ""
    original_source_url: ""
    preview_image_url: ""
    display_transport: "mcp-image-content | native-image-content | image-attachment | verified-inline-embed"
    display_confirmed: false
    search_query: ""
    creator: ""
    rights_status: "direction-only"

Exclude the reference subject, model identity, garments, packaging, logo, label, ingredients, copy, price, and distinctive branded elements.

## Rights and provenance

Use online images only as visual direction. Keep the provider source page and, for Pinterest, the outbound original source when visible.

Never infer that Behance or Pinterest content is licensed for commercial reuse. For any requested direct reuse of reference pixels, stop and verify rights separately.

- Behance copyright guidance: https://help.behance.net/hc/en-us/articles/204485044-Guide-Copyright-And-Posting-Content-On-Behance
- Pinterest terms: https://policy.pinterest.com/en/terms-of-service
