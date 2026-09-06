# Current Creative Signals and Best-Practice Ledger

**Reviewed:** 2026-09-06
**Trend season:** 2026
**Recheck:** before using a named platform specification or after 2026-12-01

This file separates visual-reference discovery from factual production knowledge.

- **Visual references:** use exactly one controlled lane per board: public Pinterest Pin pages, public Production Paradise work/profile pages, or public Ads of the World, D&AD, and The One Show work pages. Never mix lanes to fill a shortage. Stocksy, ShotDeck, Death to Stock, social networks, mirrors, general image results, and outbound destinations are not permitted.
- **Trend signals:** Pinterest Predicts and Pinterest Palette may inform concept selection, but their editorial examples are not automatically reference candidates. A candidate must still come through one of the three source-isolated reference skills.
- **Knowledge sources:** official product, platform, accessibility, or commerce documentation may be consulted only to verify current prompting, format, safe-area, accessibility, or conversion requirements. They are not visual-reference providers, and their example images must not be collected into a reference board.

## 1. 2026 Pinterest trend registry

Pinterest Predicts 2026 identifies 21 emerging signals. Treat each as optional vocabulary, not a mandatory style pack.

| Territory | Signals | Useful translation |
|---|---|---|
| refined contrast | Cool Blue, Neo Deco, Glamoratti, Khaki Coded | disciplined geometry, icy restraint, dark glamour, utilitarian earth tones |
| tactile and sensory | Gimme Gummy, Laced Up, Scent Stacking | translucent tactility, fine lace structure, layered sensory cues |
| emotional editorial | Poetcore, Pen Pals, Mystic Outlands, Vamp Romantic | literary intimacy, analogue correspondence, mythic landscape, dark romance |
| expressive and surreal | Extra Celestial, FunHaus, Glitchy Glam | controlled sci-fi, playful spatial distortion, intentional imperfection |
| nature and cultural texture | Afrohemian Decor, Cabbage Crush, Wilderkind, Darecations | layered craft, botanical form, delicate animal cues, adventurous scale |
| nostalgic craft | Brooched, Throwback Kid, Opera Aesthetic | heirloom detail, playful memory, theatrical ceremony |

Other named report signals: Laced Up and Scent Stacking may cross fashion/beauty; Cabbage Crush and Gimme Gummy may cross food/beauty; Extra Celestial may cross beauty/home/fashion/automotive. Category presence does not prove suitability for a specific brand.

### 2026 Pinterest Palette

| Signal | Hex | Best role |
|---|---|---|
| Cool Blue | `#D7EFFF` | calm field, reflective highlight, clinical or airy accent |
| Jade | `#AEB8A0` | natural refinement, wellness or hospitality base |
| Plum Noir | `#351E28` | restrained drama, beauty or luxury shadow colour |
| Wasabi | `#E9F056` | small high-energy focal accent |
| Persimmon | `#FF5C34` | warm action, appetite or seasonal focal accent |

Use an exact trend colour only when it passes brand contrast, accessibility, category meaning, and evidence checks. Prefer changing a prop, set detail, edge light, surface, or CTA accent over recolouring the authoritative product or logo.

## 2. Trend-fit decision

Before naming a trend in a prompt, record:

```yaml
trend_fit:
  source: "Pinterest Predicts 2026 | Pinterest Palette 2026"
  reviewed_at: "2026-09-06"
  signal: ""
  audience_relevance: ""
  brand_translation: ""
  message_job: ""
  role: "dominant | accent"
  properties_used: []
  properties_rejected: []
  longevity: "seasonal | campaign | evergreen-compatible"
  decision: "use | do-not-use"
```

Reject a signal if it weakens legibility, authority fidelity, product truth, cultural fit, accessibility, evidence, or the campaign's emotional target. A user request for “latest” does not require a trend when none fits.

## 3. Current production practices by output

### GPT Image 2

- Use `gpt-image-2` as the production default.
- Structure complex prompts with labelled sections and a stable order: intended use, scene/background, subject, concrete details, composition/light, copy, constraints, output and acceptance.
- Describe real materials, texture, framing, viewpoint, placement and lighting. Treat lens specifications as look guidance, not exact optical simulation.
- Index every input and state its authority role.
- For edits, say what changes and what must remain identical; repeat invariants each round.
- Put literal image text in quotes, specify placement and typography, and inspect it character by character. Prefer a clean visual plate plus deterministic typesetting when exact copy is critical.
- Use transparent PNG or WebP settings only when the live tool exposes them; explicitly request a fully transparent background and preserve alpha downstream.
- Start with a clean prompt and correct one observable defect at a time instead of overloading the first prompt.

### Pinterest advertising

- Design for a mobile vertical canvas; Pinterest currently recommends `2:3` for a standard image Pin.
- Keep the product or service identifiable, use concise messaging, visible but subordinate branding, a specific CTA, and an inspiring or useful idea.
- Use trend colour or seasonal relevance as an on-brand focal device, not as a full rebrand.

### Meta Reels

- Use true `9:16` vertical composition, quality audio, and keep key messages inside the current safe zone.
- Build specifically for Reels rather than stretching a feed asset. Validate current safe-zone overlays before final rendering.

### TikTok advertising

- Use a channel-native `hook → body → close` structure, high-resolution vertical footage, UI-safe composition, audio, voiceover or purposeful text overlays.
- Use a trend as a storytelling structure only when it fits the brand and message; do not imitate a creator or revive the retired creator-template workflow.

### YouTube and Google video

- Apply the current ABCD framework: Attention, Branding, Connection and Direction.
- Enter the story quickly, keep the message focused, introduce brand or product early enough for the objective, connect through a tangible human or product benefit, and make the CTA explicit.
- Supply horizontal, square and vertical assets when the campaign needs broad inventory coverage; do not assume one crop serves every placement.

### Google responsive image assets

- Provide clean, high-quality assets that can recombine independently.
- Keep the product or service as the focus. Avoid baked-in logos, text, buttons, collages and synthetic composite backgrounds when the current placement guidance disallows them.
- Treat each headline, description, image and logo as a modular asset that must work in multiple combinations.

### Product-detail and conversion pages

- Above the fold, expose the identifiable product or service, descriptive name, price and extra charges when applicable, selected variant, availability, and clear primary action.
- Combine neutral authority views, zoomable detail, multiple angles, real-use imagery and video or interactive media only when they help answer a buying question.
- Place evidence, reviews, qualifications and comparison near the objection they answer. Use only supplied and verified proof.
- Keep descriptions concise at the decision point and allow deeper specifications lower in the page. Test one primary variable and assess guardrail metrics rather than redesigning everything at once.

### Accessibility and inclusion

- Resolve current platform and jurisdiction requirements at publication time.
- Keep text contrast, readable size, captioning, alt-text intent, safe areas, reduced-motion needs, and diverse non-tokenistic representation in the brief—not as a final afterthought.

## 4. Source ledger

The first three entries below define the public provenance pages for the two specialist reference lanes. The remaining entries are knowledge and trend sources, not additional visual-reference sites.

- Production Paradise, “About”: https://www.productionparadise.com/about
- Ads of the World collections: https://www.adsoftheworld.com/collections.php
- D&AD Photography and The One Show archive: https://www.dandad.org/awards/d-ad-awards/categories/photography and https://www.oneclub.org/awards/theoneshow/-archive/awards/

- OpenAI, “GPT Image Generation Models Prompting Guide,” 2026-04-21: https://developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide
- OpenAI, `gpt-image-2` model page: https://developers.openai.com/api/docs/models/gpt-image-2
- Pinterest Business, “Pinterest Predicts 2026,” 2025-12-09: https://business.pinterest.com/en-ca/blog/pinterest-predicts-2026-turn-trends-into-unlimited-possibilities/
- Pinterest Business, “Pinterest Palette 2026”: https://business.pinterest.com/en-gb/pinterest-palette/
- Pinterest Business, “Creative best practices for Pinterest ads”: https://business.pinterest.com/en-gb/creative-best-practices/
- Meta for Business, “Instagram and Facebook Reels ads”: https://www.facebook.com/business/ads/facebook-instagram-reels-ads
- TikTok for Business, “Creative Codes”: https://ads.tiktok.com/business/en/blog/creative-best-practices-top-performing-ads
- Google Ads Help, “ABCDs of effective video ads”: https://support.google.com/google-ads/answer/14783551?hl=en
- Google Ads Help, “Responsive display ads creative best practices”: https://support.google.com/google-ads/answer/9823397?hl=en
- Shopify, “Product Page Examples and Best Practices,” updated 2026-03-20: https://www.shopify.com/blog/product-page

At runtime, do not visit every source by default. Recheck only the source needed for the selected reference lane or the official knowledge source needed for a named model, platform, format, safe area, or transaction fact. Never convert a knowledge-source example image into a visual reference candidate.
