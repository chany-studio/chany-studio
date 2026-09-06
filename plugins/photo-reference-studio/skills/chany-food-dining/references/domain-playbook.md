# Food and Dining Domain Playbook

Use this playbook to construct the food-and-dining industry direction packet. It is a decision framework, not a substitute for current menu data, local regulation, or platform review.

## Canonical handoff

Return the single root `industry_direction` object defined in `../SKILL.md` and populate every canonical field. Map real menu and operating evidence to `proof_objects` and `claim_ledger`, the minimum shot system to `must_capture`, capture controls to `directing_rules`, and publication controls to `required_disclosures`, `prohibited_or_high_risk`, and `human_review_gate`. Do not revive the legacy custom packet keys or rename shared fields.

## Strategic job

Choose one primary job and one measurable action. Do not make one asset carry the entire funnel.

| Job | Decision to unlock | Primary proof | Useful action |
|---|---|---|---|
| local discovery | Is this place relevant and reachable now? | recognizable exterior, category, atmosphere, hours | directions, call, visit |
| reservation or footfall | Is this the right occasion and experience? | signature food, room energy, service, seating context | reserve, join waitlist |
| ordering conversion | What exactly will arrive and is it worth the price? | truthful item, portion, ingredients, packaging | add to cart, order |
| menu or seasonal launch | What is new, distinctive, and available when? | named item, differentiator, availability window | view menu, try now |
| average-order-value growth | What belongs together? | real bundle, complement, serving context | add side, choose set |
| retention or reputation | Will the next experience be reliable? | process, consistency, hospitality, verified change | return, join loyalty |

Segment by occasion, daypart, fulfillment mode, familiarity, and named objections rather than unsupported demographic stereotypes. A coffee commute, celebration dinner, quick lunch, group gathering, and delivery night require different proof.

## Audience and journey

Map only the stages in scope:

1. **Discover:** local search, social discovery, recommendation, or storefront recognition.
2. **Desire:** appetite and occasion fit form within seconds.
3. **Evaluate:** menu breadth, price, portion, dietary needs, location, wait, atmosphere, and social proof reduce uncertainty.
4. **Act:** reserve, order, call, navigate, or save.
5. **Experience:** food, packaging, service, and space must match the promise.
6. **Return and advocate:** review, loyalty, seasonal return, or share.

Record the dominant friction. Examples include unclear portion, unfamiliar dish, premium-price justification, delivery survivability, dietary uncertainty, parking, wait time, or atmosphere mismatch. Creative should answer one friction with observable proof.

## Proof architecture

Build proof in layers:

- **Offer truth:** current item name, ingredients, portion or count, price, availability, fulfillment mode, and conditions.
- **Sensory proof:** visible texture, doneness, temperature cues, freshness cues, color separation, and scale without invented ingredients.
- **Craft proof:** preparation, tools, technique, source ingredients, or staff expertise that can actually be shown.
- **Hospitality proof:** arrival, service behavior, seating, pace, sound or energy translated visually, and suitability for the named occasion.
- **Transaction proof:** ordering path, reservation condition, pickup packaging, bundle contents, and exact CTA.
- **Continuity proof:** consistent item appearance across listing, menu, advertisement, delivery, and in-person service.

Classify evidence as `verified business fact`, `visible source fact`, `approved substantiated claim`, `creative proposal`, or `unresolved`. Only the first three may appear as factual advertising copy.

## Visual narrative

A strong sequence moves from appetite to confidence to action:

1. category or table hero establishes immediate appetite and brand world;
2. signature item reveals recognizable form and actual serving scale;
3. texture, cross-section, pour, cut, steam, or assembly supplies sensory proof;
4. ingredient and preparation frames establish craft or provenance;
5. service, hands, and dining context show the intended occasion;
6. exterior, entrance, room, packaging, or ordering frame removes practical friction;
7. the final frame leaves clean space for one message and one CTA.

Use appetizing imperfection deliberately: crumbs, condensation, sauce movement, char, and steam may signal immediacy only when they belong to the real dish. Avoid decorative clutter that competes with the food or implies ingredients not included.

## Directing and capture

### Camera and light logic

- Use a low or near-level view for stacked foods, layered desserts, glassware, and height.
- Use a diner's three-quarter view for plate volume and an approachable serving perspective.
- Use overhead framing for sets, shared dishes, ingredient systems, and graphic arrangements.
- Use close detail only after an identifying whole-item frame; texture without identity is weak transaction proof.
- Use side or back light to reveal translucency, gloss, steam, crisp edges, and drink color. Keep specular highlights controlled and food color plausible.
- Separate food from background by tonal, color, or depth contrast without changing the real recipe or vessel.

### Readiness and continuity

- Approve a hero specimen and record portion, count, garnish, vessel, packaging, and orientation.
- Stage heat-sensitive elements last. Capture pours, cuts, stretch, foam, ice, and steam in a timed action plan.
- Keep hands clean, natural, and operationally credible. Food-contact props must be safe if the photographed food will be served.
- Capture a scale cue for unfamiliar portions. Do not enlarge the dish through an undersized plate, forced perspective, or crop.
- Maintain a continuity record across stills and video so a menu item does not change between placements.

### Minimum shot system

| Shot family | Required evidence |
|---|---|
| category cover | available items and recognizable business category |
| signature hero | complete actual item, vessel, portion, and strongest differentiator |
| transaction singles | one truthful frame for each promoted item or real bundle |
| sensory detail | texture, cross-section, pour, cut, assembly, or temperature cue |
| ingredient and craft | real ingredient, preparation, maker, or process |
| service and occasion | credible service action or dining use with releases |
| place | exterior, approach, interior, seating, and atmosphere as relevant |
| fulfillment | dine-in presentation, takeaway packaging, or delivered state |
| practical proof | menu, access, dietary information, availability, or ordering path when material |
| adaptable motion | clean 9:16 actions with opening identity and closing CTA space |

## Channel deliverables

- **Google Business Profile/local search:** recognizable exterior, truthful interior, popular food and drink, current menu, directions or reservation action.
- **Delivery marketplace:** category cover, centered single-item images, actual bundle contents, legible scale, packaging, concise descriptions, and add-to-cart action.
- **Owned site/reservation/order page:** occasion hero, signature menu, practical facts, proof, FAQ, and one conversion path.
- **Paid social/display:** one appetite trigger, one supported reason, one exact offer if approved, and one CTA per placement.
- **Organic short-form:** immediate item identity, credible preparation or tasting, honest authorized reaction, disclosure, and action.
- **CRM/loyalty:** reason to return, named window, real benefit, terms, and deep link.
- **Print/menu/OOH:** distance-readable item, exact price or conditions when used, minimal copy, and location or action cue.

Use current platform specifications at production time; do not turn a dated aspect ratio or file limit into a universal rule.

## Prompt kernel

Pass this domain layer to the downstream production skill:

```text
[STRATEGIC JOB]
Create [asset role] for [occasion/daypart/fulfillment] at [journey stage], leading to [one action].

[TRUTH AND PROOF]
Depict only [verified item, portion, ingredients, vessel, packaging, price/offer facts].
The frame must prove [one sensory, craft, hospitality, or transaction claim].
Unknown or draft facts: [list].

[VISUAL NARRATIVE]
Shot role: [hero / transaction single / sensory detail / craft / service / place / fulfillment].
Subject and action: [real dish or drink and credible action].
View and hierarchy: [level / three-quarter / overhead / close detail after identifying frame].
Light and material response: [direction, softness, contrast, texture behavior].
Environment and props: [only items belonging to the actual service context].

[CHANNEL]
Placement, ratio or duration, safe areas, message, approved proof, exact CTA: [values].

[GUARDRAILS]
Preserve actual portion, recipe-visible features, color, garnish, vessel, packaging, hygiene, and brand marks.
Do not invent ingredients, benefits, scarcity, popularity, price, offer, customer testimony, or service conditions.
Apply [rights, disclosure, dietary, alcohol, accessibility, and jurisdiction gates].
```

## Claims and safety gates

Reject or hold publication when:

- the photographed item materially differs from what customers receive;
- price, offer, availability, portion, bundle, ingredient, origin, dietary, allergen, nutrition, sustainability, popularity, or health claims lack current approval and support;
- a generated or heavily edited image changes the food, packaging, venue, or service promise without conspicuous treatment appropriate to the channel;
- an unsanitary surface, unsafe food handling, unapproved food-contact prop, or impossible preparation is shown;
- alcohol content conflicts with current age targeting, depiction, warning, or platform requirements;
- customers, staff, creators, logos, artworks, music, or interiors lack the required release or usage rights;
- a paid, gifted, employee, affiliate, or other material connection is not disclosed clearly with the endorsement;
- practical access, menu, hours, ordering, reservation, or fulfillment information is obsolete.

Before publication, confirm jurisdiction and platform. Escalate allergen, health, alcohol, pricing, and regulated claims for appropriate review; do not provide a legal conclusion.

## Reference handoff: L1 to L2 only

Choose one L1 and optionally one direct L2. Search each semantic level independently through `chany-reference-board`.

| L1 category | Direct L2 options |
|---|---|
| Food Photography | Restaurant Photography; Menu Photography; Dessert Photography; Hotdog Photography; Burger Photography; Bakery Photography |
| Beverage Photography | Cafe Photography; Coffee Photography; Cocktail Photography; Tea Photography |

Allowed: `Food Photography`, then `Menu Photography`.

Forbidden: combining multiple subtypes or adding cuisine, dish, style, lens, lighting, location, color, emotion, quality, layout, platform, brand, creator, or campaign terms. `Moody Seoul omakase tuna macro 85mm Instagram ad photography` is invalid.

Put cuisine, item, mood, camera, and channel needs in the ranking brief after retrieval. The returned handoff must retain L1, optional L2, source links, visible previews, direction-only rights status, and the transferable Visual DNA selected by the user.

## Authority sources

- Google Business Profile Help, **Tips for business-specific photos on your Business Profile**, current help page accessed 2026-09-04: truthful, well-lit representation and category-specific exterior, interior, product, work, food, drink, and team coverage. https://support.google.com/business/answer/6123536?hl=en
- Google Business Profile Help, **Get started with a Business Profile for your restaurant**, current help page accessed 2026-09-04: menu, ordering, offers, reviews, and performance touchpoints. https://support.google.com/business/answer/14189260?hl=en-GB
- Uber Help, **Merchant submitted menu catalog photo guidelines**, current help page accessed 2026-09-04: accurate single-item depiction, cover and item composition, hygiene cues, people, rights, and restricted-item controls. https://help.uber.com/en/merchants-and-restaurants/article/merchant-submitted-menu-catalog-photo-guidelines?nodeId=6985355b-0426-4523-94f2-89bb9b0566e9
- National Restaurant Association, **State of the Restaurant Industry 2025**, 2025: digital and location marketing, loyalty, ordering, payment, and app investment context. https://go.restaurant.org/rs/078-ZLA-461/images/SOI-2025-Report.pdf
- U.S. Federal Trade Commission, **Updated Endorsement Guides**, 2023-06-29: truthful endorsements, material-connection disclosure, reviews, virtual influencers, and conspicuous presentation. https://www.ftc.gov/news-events/news/press-releases/2023/06/federal-trade-commission-announces-updated-advertising-guides-combat-deceptive-reviews-endorsements

These sources are authoritative for their organizations but have platform and jurisdiction limits. Recheck current requirements for the actual market and placement.
