# Reference Search Policy

## Core rule

Search only the two approved source pools; select precisely. Search terms identify **what the subject is**, not **how it should be photographed**.

## Approved source pools

Use both pools for every `reference-board`, `staged`, or `full` job that needs discovery:

| Pool | Domains | Purpose |
|---|---|---|
| `creative-direction` | `behance.net`, `pinterest.com` | Commercial art direction, set design, lighting, and campaign composition |
| `stock-reference` | `unsplash.com`, `pexels.com` | Stable source pages, clean photography, and easier license-status verification |

Do not add results from other domains as a silent fallback. If the search tool supports domain filters, pass the two domains for the selected pool through that filter. If it does not, use provider-qualified routing while keeping the semantic query unchanged.

Behance and Pinterest results are direction-only by default. Prefer a Behance project page with visible project ownership. For Pinterest, require a public Pin page plus a visible creator or outbound original-source link; reject orphaned Pins, inaccessible pages, and results that would require login bypass, scraping, or bulk download.

For Unsplash and Pexels, retain the photo page, creator when visible, and current license page or license-status field. Exclude paid or separately licensed items when their status is unclear. A stock-source result is still used only as photographic direction unless the user explicitly asks to reuse the reference pixels.

## Query depth

Use no more than two taxonomy levels. Each semantic query may be run once per approved source pool, for a maximum of four search calls.

| Input | Broad query | Direct-subtype query |
|---|---|---|
| Cosmetic serum | `Cosmetic Photography` | `Serum Photography` |
| Blush | `Cosmetic Photography` | `Blush Photography` |
| Lipstick | `Cosmetic Photography` | `Lipstick Photography` |
| Hotdog | `Food Photography` | `Hotdog Photography` |
| Burger | `Food Photography` | `Burger Photography` |
| Coffee drink | `Beverage Photography` | `Coffee Photography` |
| Headphones | `Product Photography` | `Headphone Photography` |

Do not add a third level. For example, do not expand `Cosmetic → Serum → Pink Serum` or `Food → Hotdog → Chili Hotdog`.

If the direct subtype cannot be identified confidently from the source image, run only the broad query in both pools. Do not guess a subtype from an unreadable label.

## Prohibited search modifiers

Do not add:

- colors or palette words
- background or prop descriptions
- lighting, shadow, angle, lens, aperture, or camera terms
- mood, season, or aesthetic adjectives
- aspect ratio or platform names
- `premium`, `luxury`, `cinematic`, `creative`, or similar quality words
- brand names, campaign names, photographers, agencies, slogans, or copy
- combined style phrases

Provider or domain scope is routing metadata, not a semantic modifier.

Rejected examples:

- `pink serum photography high key`
- `luxury hotdog photography hard light blue background`
- `cosmetic photography 85mm studio pastel`
- `retro food poster photography`

## Collection

- Run each approved semantic query once in `creative-direction` and once in `stock-reference`.
- Collect up to 8 results per query per pool.
- Keep the source pool, provider, preview image URL, source-page URL, outbound original-source URL when available, title, creator when visible, source domain, dimensions, query, and license status when stated.
- Merge exact duplicates and near-duplicates across providers.
- Reject inaccessible images, obvious thumbnails, severe compression, watermarks over the subject, missing source pages, orphaned Pinterest Pins, collages, screenshots, and images dominated by unreadable text.
- A reference may contain another product or dish, but its identity must be separable from its photographic direction.

## Visual analysis and ranking

Score each candidate from 0 to 100 after searching:

| Criterion | Weight | Question |
|---|---:|---|
| Subject compatibility | 25 | Can this composition and scale plausibly hold the source subject? |
| Transferable composition | 20 | Are framing and negative space clear enough to reapply? |
| Lighting legibility | 20 | Can light direction, size, shadow, and contrast be inferred? |
| Material or food compatibility | 15 | Will the lighting support the source surface and texture? |
| Production feasibility | 10 | Can the scene be built without hiding or redesigning the subject? |
| Contamination risk | 10 | Is reference identity unlikely to leak into the result? |

For `contamination risk`, award more points when logos, labels, signature packaging, and recipe-specific features are easy to exclude.

## Diversity and pool balance

Do not return six near-identical references. Starting from the top score, select six that differ across at least three of these axes:

- centered vs asymmetrical composition
- high-key vs low-key lighting
- hard vs soft shadow
- flat vs dimensional set
- minimal vs prop-supported scene
- front view vs high angle vs top view

When both pools contain at least three viable candidates, select exactly three from each. If a pool has fewer than three, keep at least two from that pool when possible and fill the remaining slots from the other pool. If a pool has fewer than two viable candidates, return the viable set and state which pool is short instead of using another domain.

Diversity is created by visual selection, not by adding more query terms.

## Reference-board presentation

For each finalist, show:

1. source pool and provider
2. visible thumbnail when the chat surface supports it
3. provider source-page link, not only a direct image URL
4. outbound original-source link for Pinterest when available
5. search query
6. short fit note explaining why the source subject can plausibly inhabit the scene
7. one-sentence Visual DNA summary

Do not present inaccessible links, duplicate crops from the same shoot, or a result whose visible watermark would dominate the direction. If fewer than six viable candidates remain after filtering, return the viable set and state the shortfall instead of lowering the standard or inventing entries.

## Visual DNA record

For each finalist, record:

```yaml
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
source_pool: "creative-direction | stock-reference"
provider: "Behance | Pinterest | Unsplash | Pexels"
source_url: ""
original_source_url: ""
search_query: ""
creator: ""
license_status: "verified-on-source | not-stated | not-checked"
```

Use `exclude_from_reference` for the reference subject, packaging, logo, label, ingredients, copy, price, and distinctive branded elements.

## Rights and provenance

Use online images as visual direction, not as source pixels to be copied into the final. Keep the provider source page and, for Pinterest, the original outbound source when available.

Never infer that Pinterest or Behance content is licensed for reuse. Behance projects have project-specific copyright settings. Unsplash and Pexels usage is governed by their current license pages and may still require separate checks for depicted brands, artwork, or people. For any direct commercial reuse of reference pixels, open the source page and verify the current license and depicted-rights status separately.

Official policy links for verification:

- Behance copyright guidance: `https://help.behance.net/hc/en-us/articles/204485044-Guide-Copyright-And-Posting-Content-On-Behance`
- Pinterest terms: `https://policy.pinterest.com/en/terms-of-service`
- Unsplash license: `https://unsplash.com/license`
- Pexels license: `https://www.pexels.com/legal-pages/license/`
