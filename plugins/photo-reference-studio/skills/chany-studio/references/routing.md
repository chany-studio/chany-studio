# Specialist Routing

Choose the owner by the final deliverable, not merely by a tool name mentioned in the request.

| User intent | Owner skill | Typical result |
|---|---|---|
| campaign strategy, launch plan, message hierarchy, asset plan | `chany-marketing-brief` | approved brief and asset matrix |
| transparent cutout, background removal, white packshot, source cleanup | `chany-product-assets` | reusable source asset |
| visual references, mood direction, Behance or Pinterest board | `chany-reference-board` | six visible candidates and Visual DNA |
| staged product or food image, hero art, campaign key visual | `chany-campaign-visual` | one staged image or accepted master visual |
| static ad, sale or event poster, feed creative, story creative, banner | `chany-ad-creative` | one placement asset or named channel set |
| e-commerce detail page, PDP, product-page modules | `chany-detail-page` | named page modules |
| inpaint, remove or replace one region, copy repair, “only change this” | `chany-image-edit` | one bounded revision |
| static adult model campaign, lookbook, source-locked fashion try-on | `chany-model-fashion` | one model or fashion still |
| creator review, unboxing, tutorial, SaaS demo, try-on video, localization | `chany-ugc-ads` | one approved UGC master or named localized variants |

## Boundary decisions

- A single known output uses its owner directly. Use `chany-studio` when two or more rows are required or when the user asks for a complete campaign.
- `프롬프트만` is a mode of the owner skill. It does not automatically route to marketing strategy.
- A reference plus one final output keeps the output skill as owner; `chany-reference-board` supplies only the selected source and Visual DNA.
- A product-page hero that sits inside a scrolling commerce page belongs to `chany-detail-page`. A standalone paid-media or social placement belongs to `chany-ad-creative`.
- A text-free master composition belongs to `chany-campaign-visual`. A finished layout with offer, CTA, legal copy, or placement constraints belongs to `chany-ad-creative`.
- Source cleanup before any composition belongs to `chany-product-assets`. A local change to an already accepted composition belongs to `chany-image-edit`.
- Static editorial, lookbook, and fashion try-on belong to `chany-model-fashion`. Talking testimonials, reviews, demonstrations, and localized creator videos belong to `chany-ugc-ads`.
- A new reference, offer, core composition, or campaign idea is not a local edit. Return it to the original production owner.

## Campaign sequencing

For a requested campaign family, propose only the needed stages:

1. `chany-marketing-brief` fixes objective, audience, claims, copy status, channels, and asset count.
2. `chany-product-assets` creates clean source assets when the originals are not already production-ready.
3. `chany-reference-board` runs only when art direction is missing or explicitly requested.
4. `chany-campaign-visual` creates and locks one master direction.
5. `chany-detail-page`, `chany-ad-creative`, `chany-model-fashion`, and `chany-ugc-ads` derive only their named deliverables.
6. `chany-image-edit` repairs bounded defects without changing the accepted campaign.

Show the effective paid-generation plan before starting several assets. Do not assume that one final video equals one paid generation call.
