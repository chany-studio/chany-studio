# Commerce Formats and Layout Rules

Use this reference for prompt briefs, promotional posters, model or fashion images, banners, detail-page modules, and channel adaptations. Apply the rules generically to the connected production tools.

## Six-element brief

Every production brief should answer these six questions without guessing:

| Element | Record |
|---|---|
| Subject | Product, food, adult model, garment, accessory, count, and authoritative source image |
| Style and mood | Brand character, emotional tone, season or event only when requested |
| Composition and camera | Placement, scale, shot size, angle, perspective, and copy space |
| Lighting | Direction, size, softness, contrast, shadow, and highlight behavior |
| Background and environment | Color, place, support surface, props, and depth |
| Quality and output | Ratio, channel, template, asset count, intended use, and practical quality setting |

Write the desired result positively. Put the authoritative subject and non-negotiable ratio or channel near the beginning. Improve a result through one-variable conversational revisions rather than rewriting every accepted property.

## Source-faithful white packshot

Use the uploaded source as the authority for shape, proportions, color, material, texture, logo, label, package design, and visible details.

- center one subject on pure white with enough margin for channel cropping
- remove unrelated props and decoration
- use soft, diffused studio light
- keep a subtle natural contact shadow for a catalog image unless a flat shadowless asset is requested
- preserve real color and material response
- never redraw unreadable label content or hidden surfaces

## Staged product or food image

Formula:

**source identity + brand mood + scene + capture settings + exclusions**

The scene description should cover support surface, nearby low-priority props, background depth, and sufficient negative space. Capture settings should cover camera height, angle, perspective, focus, light direction, light softness, shadow, and color treatment. Exclusions should explicitly block source duplication, cropping, redesign, foreign text or logos, extra people or hands, warped perspective, impossible reflections, harsh uncontrolled light, and distracting clutter.

When a reference is used, transfer only its photographic principles. The source remains the authority for the subject.

## Master key visual

Formula:

**source identity + single campaign idea + brand codes + focal composition + distinctive light or material device + crop-safe master output**

The key visual is the campaign authority for downstream assets. Record:

- one-sentence campaign idea
- dominant subject scale and placement
- palette and contrast hierarchy
- background and support-surface language
- distinctive prop, shape, material, liquid, particle, or human-interaction rule
- key light, shadow, highlight, and depth treatment
- typography and copy-zone plan, even when the first output is text-free
- crop-safe area for required downstream ratios

Accept one master direction before deriving a detail page, poster, banner, or channel set. Downstream assets may recompose but must retain the master palette, lighting logic, material language, subject treatment, and copy hierarchy.

## Promotional poster

Formula:

**source identity + approved promotion + brand mood + background + layout + output quality**

Record the copy as structured data:

    headline: ""
    offer_or_event: ""
    supporting_copy: []
    event_period: ""
    benefits: []
    cta: ""
    legal_copy: ""

Do not invent an offer, percentage, date, price, benefit, or legal claim. Preserve spelling, numerals, units, punctuation, and hierarchy.

Build a visual hierarchy with one dominant message, one dominant product, supporting copy, and CTA. Keep copy and product from competing. A common asymmetric layout uses copy on one side and product on the other, but select the arrangement that best fits the requested channel and source orientation.

Use a brand-consistent palette, background, and props. Copy remains a separate exact-content layer even if a generative model is used for the visual plate.

## Static ad creative

Define the advertising objective before layout:

- awareness: brand and product recognition dominate
- consideration: one differentiating benefit or use context dominates
- conversion: one approved offer and CTA dominate
- retargeting: product, offer, urgency, and CTA dominate without inventing scarcity

Each asset should carry one message objective, one dominant visual focal point, and one CTA. Record placement, ratio, safe areas, copy length, and any platform restrictions. Do not shrink every claim into one canvas.

## Adult model and fashion images

### Model shot formula

**adult model lock + expression/action + shot size and camera + location + lighting + commercial mood**

If the model is generated rather than supplied, create a reusable fictional adult profile containing only production-relevant visible traits:

    adult_age_range: ""
    face_shape_and_proportions: ""
    hair: ""
    skin_appearance: ""
    body_proportions: ""
    fixed_makeup_and_styling: ""

Use the same lock across full-body, half-body, and action variations. Pose, expression, camera, and location may change; identity-defining proportions may not.

### Fashion-shot formula

**model lock + garment and accessory locks + action/pose + environment + capture settings + exclusions**

Assign every input image a role. Do not merge garment details across sources. Preserve silhouette, length, collar, sleeves, seams, closures, pattern, color, material, drape, logos, and accessory construction. Garments must fit the model with physically plausible folds, contact, occlusion, and gravity without changing the design.

## Banner workflow

Build each banner in three stages:

1. category and product name
2. ratio and template
3. approved copy and image placement

Supported planning ratios:

| Ratio | Typical use |
|---|---|
| 1:1 | square ad or thumbnail |
| 3:4 | portrait feed |
| 4:3 | store or content banner |
| 9:16 | vertical story or full-screen static ad |
| 16:9 | wide advertising banner |

Treat these as layout ratios, not video instructions.

Template types:

- basic: balanced product and copy with restrained hierarchy
- emphasis: one dominant offer or product benefit
- copy-led: larger copy area with the product as support
- image-led: dominant product or scene with minimal copy

Use the same source-derived subject across ratios. Recompose deliberately for each canvas instead of stretching or blind cropping.

## Detail-page modules

Start from one clean source asset and a shared campaign system. Create only the requested modules.

Suggested modules:

- hero: product, headline, key offer, and CTA
- clean product: source-faithful catalog view
- feature or benefit: one approved claim per module with supporting visual
- detail: source-visible material, texture, ingredient, or construction close-up
- lifestyle: staged use context or fashion try-on
- option or comparison: only user-provided variants and factual differences
- closing CTA: final approved message and channel requirement

Keep palette, lighting logic, product scale, typography plan, spacing, and copy hierarchy coherent across modules. Do not invent product specifications or claims. For fashion, the garment lock and model lock remain authoritative across all modules.

## One campaign, multiple channels

First accept one master direction. Then adapt it to requested ratios using the same source lock, copy lock, palette, typography plan, and lighting logic.

Category-aware starting points:

- beauty: 1:1 emphasis is often a strong product-first default
- food: 4:3 copy-led often supports appetite imagery and short messaging
- fashion: a vertical lifestyle or try-on module should prioritize full garment readability
- electronics: 16:9 image-led often supports material and lighting emphasis

These are recommendations, not fixed requirements. User channel and ratio requirements take precedence.

## Local image edit

For inpainting or conversational revision, record:

- accepted source image
- exact mask or named region
- one requested change
- properties that must stay fixed
- authoritative source image to use if the region touches product, model, garment, food, label, or copy

Prefer one clear sentence and a mask over a full prompt rewrite. Use up to three references only when the connector supports them and each reference has a distinct declared role. Never allow a local background or copy-space edit to regenerate the subject.

## Commerce-suite sequence

When the user requests all commerce imagery, agree on an asset matrix and follow this dependency order:

1. clean source assets and white packshots
2. master key visual and campaign state
3. detail-page modules derived from the accepted master
4. promotional poster or static ad creatives
5. channel adaptations and exports

Reuse the same subject, copy, model, garment, palette, lighting, material, typography, and spacing locks across the suite. A new ratio changes composition, not identity or campaign concept. A new campaign concept starts a separate master key visual rather than mutating the accepted family.

## Production loop

Use this five-stage loop:

1. record category, product name, business copy, and channel
2. inspect and prepare the authoritative source assets
3. generate the visual and layout direction
4. revise through specific conversational edits and compare candidates
5. export only after source, copy, ratio, and hierarchy checks pass

The fourth stage is the core quality step. A revision should name the single changed property and hold accepted properties fixed.
