# Advertising Case Source Policy

## Hard scope

This lane permits only this public campaign archive:

| Provider | Accepted source pages | Purpose |
|---|---|---|
| Ads of the World | `adsoftheworld.com` | contemporary and historical advertising campaigns and curated collections |

Search or open only the approved domains. Keep the archive work or case page as provenance and do not follow an external entrant, agency, production, brand, social, store, or download destination. A preview is acceptable only when discovery pairs it to the exact approved page and the host can display actual image content without bypassing access controls.

Stocksy, ShotDeck, Death to Stock, unapproved award mirrors, inspiration aggregators, and stock libraries are explicitly excluded. The Pinterest-only preview MCP connection is not a transport for these sources.

## Query and count contract

Follow the query and count rules in the [specialist reference lane contract](../../chany-studio/references/specialist-reference-lane.md). Apply the taxonomy phrase within the approved archive; never add award, winner, best, creative, luxury, cinematic, or trendy modifiers. Deduplicate entries for the same campaign. Use this single archive; source diversity never justifies adding unselected providers.

## Acceptance and presentation

For still-image boards, reject inaccessible or login-gated pages, uncertain image-to-case pairing, case pages without a legible hero visual, text-only articles, video-only entries without a still, collages that prevent shot analysis, and results that cannot be rendered as image content in the current conversation.

For each accepted reference retain:

    provider: "Ads of the World"
    source_url: ""
    search_query: ""
    work_title: ""
    advertiser_or_entrant: ""
    fit_note: ""
    visual_dna: ""
    message_mechanism: ""
    exclude_from_reference: []
    display_confirmed: false
    rights_status: "direction-only"

Record `message_mechanism` as the transferable idea. What transfers, what never transfers, and shortfall reporting follow the shared contract.

Authoritative archive entry points:

- Ads of the World collections: https://www.adsoftheworld.com/collections.php

For requested video examples, use the actual playable source through `chany-video-reference-ingest`. A still thumbnail is not timing or sound evidence; report incomplete access rather than fabricate observation.
