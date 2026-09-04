# Hospitality and Travel Domain Playbook

Use this playbook to produce a hospitality-and-travel industry direction packet. Current property data and destination-community input outrank generic best practice.

## Canonical handoff

Return the single root `industry_direction` object defined in `../SKILL.md` and populate every canonical field. Map current room, amenity, destination, fee, policy, access, and availability evidence to `proof_objects` and `claim_ledger`, the capture library to `must_capture`, spatial and cultural controls to `directing_rules`, and publication controls to `required_disclosures`, `prohibited_or_high_risk`, and `human_review_gate`. Do not revive the legacy custom packet keys or rename shared fields.

## Strategic job

| Job | Decision to unlock | Primary proof | Action |
|---|---|---|---|
| destination inspiration | Why this place, now, for this trip? | distinctive place, season, experience, responsible behavior | explore, save |
| property fit | Will this stay work for my purpose and party? | room, layout, amenities, access, location context | view rooms, compare |
| booking conversion | Can I trust the offer and complete the booking? | current room, availability, policy, total-price facts | book |
| upgrade or ancillary spend | Is the higher tier or add-on worth it? | distinct room feature, view, spa, dining, activity | upgrade, add |
| direct booking | Why use the owned relationship? | approved direct benefit, service, flexibility | book direct |
| pre-arrival confidence | What will arrival and use be like? | approach, check-in, transport, access, practical guidance | plan, complete check-in |
| loyalty and advocacy | What is worth returning to or recommending? | remembered service, local connection, repeatable value | review, return |

Do not define a traveler only by age, nationality, disability, family status, or other protected or sensitive trait. Segment by trip purpose, party needs explicitly supplied, booking horizon, familiarity, desired experience, and operational constraints.

## Audience and journey

1. **Dream:** imagery and story create relevance without idealizing away local realities.
2. **Research:** destination, season, transport, neighborhood, and activity fit are understood.
3. **Compare:** travelers inspect room types, bed and bathroom, view, amenities, reviews, access, policies, and total cost.
4. **Book:** availability, exact offer, mandatory charges, cancellation, and checkout are clear.
5. **Prepare:** arrival, check-in, transport, clothing, access, and behavior guidance lower anxiety.
6. **Stay or visit:** the physical experience matches the visual promise.
7. **Remember:** review, share, membership, fundraising, conservation, or repeat-stay relationship continues with permission.

Name the dominant friction: uncertainty about space, hidden cost, location, noise, accessibility, weather, cultural behavior, child or work suitability, service availability, or the difference between room tiers.

## Proof architecture

- **Property identity:** verified name, category, address or approved location description, exterior, arrival, and current brand assets.
- **Room truth:** exact room type, bed configuration, bathroom, view, floor or access where approved, occupancy, kitchen, and meaningful spatial relationships.
- **Amenity truth:** each promoted amenity shown in its current state with hours, eligibility, season, reservation need, or closure when material.
- **Experience proof:** credible guest-scale use, real service touchpoints, and the sequence from arrival to rest, work, dining, wellness, or exploration.
- **Place proof:** a truthful relationship to the neighborhood, landscape, culture, transport, and points of interest. Do not imply ownership, proximity, or exclusivity that does not exist.
- **Transaction proof:** current rate or approved offer, mandatory charges, conditions, dates, availability logic, cancellation, and CTA.
- **Responsibility proof:** measurable sustainability or community claims, visitor behavior guidance, and local benefit only when substantiated.

Classify inputs as verified property fact, visible source fact, approved substantiated claim, host-community guidance, creative proposal, or unresolved.

## Visual narrative

Use an arrival-to-stay sequence rather than a disconnected beauty gallery:

1. landscape, street, or exterior establishes sense of place and approach;
2. entrance, lobby, reception, or threshold supplies welcome and orientation;
3. room-wide, room-feature, bathroom, view, and detail frames establish fit;
4. amenity and service frames prove the reasons to choose or upgrade;
5. guest-scale actions demonstrate use without turning every frame into stock lifestyle;
6. neighborhood, culture, food, or nature extends the stay responsibly;
7. access and practical frames remove uncertainty;
8. a closing hero or memory cue supports booking or return.

Use local people and culture as participants in their own present-day place, not exotic decoration. When heritage or community meaning is involved, obtain the appropriate interpretation and consent before fixing the narrative.

## Directing and capture

### Spatial truth

- Prefer eye-level, level-camera views with straight verticals and a natural sense of scale.
- Use horizontal wide frames for listing comprehension, then mid and close detail for character. Do not let a wide lens stretch walls, beds, pools, or views.
- Show room relationships from several useful positions rather than repeating near-identical corners.
- Use natural or believable practical light. Keep window views, exterior light, weather, and time of day internally consistent.
- Schedule after housekeeping and operational preparation but before guest use. Remove clutter, not permanent constraints.
- Do not add welcome gifts, flowers, decor, services, or amenity setups that ordinary guests will not receive unless clearly framed as a separately available offer.

### Baseline capture library

| Shot family | Baseline evidence |
|---|---|
| exterior and context | at least one truthful relationship between property and surroundings; add day/dusk only when useful |
| entrance and welcome | entrance, lobby, reception, or actual self-check-in path |
| each promoted room type | three distinct room views plus one bathroom view; also show applicable view and kitchen |
| each key amenity | at least one identifying frame plus a use or detail frame when the feature drives choice |
| service | one credible touchpoint for each service central to the promise |
| guest experience | purpose-led human-scale action with releases, not generic posing |
| destination | actual local context, landmark, nature, culture, transport, or experience with relationship explained |
| accessibility | route, entrance, room, bathroom, parking, measurement, and limitation evidence as relevant |
| motion and flow | stable arrival, room, amenity, or itinerary sequence with spatial continuity |

The room quantity is an Expedia-derived listing baseline, not a universal law. Verify the active channel and adapt without losing room-type completeness.

## Channel deliverables

- **OTA listing:** complete room-type gallery, bathroom, view, amenities, exterior, lobby, access, captions, policies, fees, and current availability metadata.
- **Direct booking:** differentiated story, room comparison, reasons to book, trust proof, FAQ, approved offer, and one checkout path.
- **Destination campaign:** sense of place, itinerary, season, access, appropriate visitor behavior, community benefit, and save or plan action.
- **Paid media:** one trip context, one differentiator, one supported proof, and one booking action per placement.
- **Short-form/UGC:** immediate location and room identity, coherent walkthrough or itinerary, credible host experience, material-connection disclosure, and practical CTA.
- **Pre-arrival:** approach, transport, check-in, access, weather, packing, reservation, and behavior guidance.
- **Post-stay:** review, return, referral, membership, conservation, or community support with consented CRM use.

Verify current placement specifications. Preserve crop-safe focal points for both landscape listings and vertical discovery content.

## Prompt kernel

```text
[STRATEGIC JOB]
Create [asset role] for [trip purpose and traveler context] at [journey stage], leading to [one action].

[STAY OR DESTINATION TRUTH]
Property/destination and promoted unit: [verified identity].
Depict only [current room, bed, bath, view, amenity, service, access, location, offer, policy facts].
The frame must prove [one fit, upgrade, experience, transaction, or responsibility claim].
Unknown or time-sensitive facts: [list].

[VISUAL NARRATIVE]
Sequence role: [place / arrival / room / bath / view / amenity / service / local experience / access / memory].
View and scale: [level, straight, truthful perspective, wide/mid/detail role].
Light and time continuity: [values].
Guest action and service behavior: [credible, authorized action].
Sense-of-place elements and their real relationship: [values].

[CHANNEL]
Placement, ratio or duration, safe areas, caption facts, approved message, exact CTA: [values].

[GUARDRAILS]
Preserve room dimensions and flow, permanent features, view, amenity condition, cultural meaning, access limitations, and price/policy truth.
Do not invent proximity, exclusivity, scarcity, service, sustainability, accessibility, endorsement, rating, fee, or availability.
Apply [rights, privacy, cultural, drone, environmental-claim, accessibility, total-price, platform, and jurisdiction gates].
```

## Claims and safety gates

Hold publication when:

- ultra-wide distortion, forced perspective, replacement views, or generative edits make a room, pool, beach, landscape, or distance materially misleading;
- a room type, bed, bathroom, view, amenity, service, policy, rate, fee, availability, opening condition, transport claim, or access feature is not current and verified;
- mandatory charges are separated or delayed in a way prohibited by the active jurisdiction or platform;
- accessibility is claimed without the required route, measurement, feature, limitation, and review evidence;
- environmental, cultural, local-benefit, heritage, safety, popularity, ranking, or review claims lack support;
- residents, guests, staff, creators, guides, artists, minors, private property, artworks, or music lack required permission;
- aerial or restricted-site capture lacks owner and local authorization;
- destination marketing erases current social, cultural, or environmental realities, encourages harmful behavior, or uses community identity without meaningful participation;
- a gifted stay, affiliate link, employee relationship, or other material connection is not clearly disclosed.

Verify current rules in the publication market and platform. Refer regulated pricing, access, environmental, cultural, safety, and rights questions for appropriate review rather than making a legal determination.

## Reference handoff: L1 to L2 only

| L1 category | Direct L2 options |
|---|---|
| Hospitality Photography | Hotel Photography; Resort Photography; Guest Room Photography; Hotel Amenity Photography |
| Travel Campaign Design | Destination Campaign Design; Tourism Campaign Design; Travel Experience Campaign Design |

Use one L1 first, then at most one direct L2 as a second query. Allowed: `Hospitality Photography`, then `Guest Room Photography`. Also allowed: `Travel Campaign Design`, then `Destination Campaign Design`.

Never combine two L2 nodes or add style, lens, lighting, location, color, emotion, quality, layout, platform, brand, creator, or campaign modifiers. `Luxury Bali boutique hotel infinity pool sunset drone honeymoon` is invalid. Put those requirements into post-retrieval ranking and the production brief.

The handoff must preserve the taxonomy path, provider source link, visible preview, direction-only rights status, and user-selected Visual DNA.

## Authority sources

- Expedia Group, **Photo Toolkit: Quality Guidelines**, current PDF accessed 2026-09-04: room-type gallery baseline, exterior, lobby, amenity coverage, landscape orientation, resolution, truthful scale, and distortion controls. https://partner.expediagroup.com/content/dam/unified/partner/documents/photo-toolkit/expedia-group-photo-toolkit-guidelines_en-us.pdf
- Expedia Group, **6 tips to improve your hotel property listing**, current page accessed 2026-09-04: photo storytelling, amenities, local points of interest, current rates, policies, fees, and review response. https://partner.expediagroup.com/en-gb/resources/blog/hotel-booking-success-guide-expedia-partner-central
- Airbnb, **How to take great photos for your listing**, 2024-06-20, updated 2024-11-08: room-by-room coverage, horizontal capture, level views, wide/mid/detail hierarchy, captions, and floor-plan context. https://www.airbnb.com/resources/hosting-homes/a/how-to-take-great-photos-for-your-listing-687
- Airbnb, **How to photograph accessibility features**, 2020-09-22, updated 2024-12-02: route, threshold, doorway, bathroom, parking, lighting, measurements, and limitations. https://www.airbnb.com/resources/hosting-homes/a/how-to-photograph-accessibility-features-30
- UNESCO World Heritage Centre, **Guide 5: Communicating with visitors**, current toolkit accessed 2026-09-04: full visitor lifecycle, destination script, authenticity, host-community narrative, access policy, behavior, and post-visit relationship. https://whc.unesco.org/en/sustainabletourismtoolkit/guide5/
- U.S. Federal Trade Commission, **Rule on Unfair or Deceptive Fees FAQ**, 2025: total-price presentation for short-term lodging. https://search.ftc.gov/business-guidance/resources/rule-unfair-or-deceptive-fees-frequently-asked-questions

The authorities have platform, market, and jurisdiction limits. Recheck current local and channel requirements before publication.
