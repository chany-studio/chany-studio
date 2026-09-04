---
name: chany-hospitality-travel
description: Design evidence-led advertising, promotion, art direction, and content systems for hotels, resorts, lodging, destinations, and bookable travel experiences. Use when the commercial action is inspiration, comparison, booking, upgrade, itinerary choice, or repeat stay; not for property sale or lease.
---

# Chany Hospitality Travel

Create an industry direction packet that turns a real stay or destination into a credible promise across inspiration, comparison, booking, arrival, experience, and return. Own hospitality strategy, evidence, visual direction, and the claims-rights-safety overlay. Delegate final production.

Read [references/domain-playbook.md](references/domain-playbook.md) before substantive planning or handoff.

## Scope and boundary

- Use for hotels, resorts, hostels, vacation rentals, accommodation brands, destination organizations, tourism campaigns, and bookable local experiences.
- Route sale or lease of a property to `chany-space-real-estate`.
- When a restaurant is the primary destination and reservation action, use `chany-food-dining`; when it is a hotel amenity, keep this skill as journey owner.
- Never infer room size, view, bed type, access, amenities, operating status, fees, distance, availability, sustainability, or cultural meaning from appearance alone.

## Required workflow

1. Choose the strategic job: destination inspiration, property fit, booking conversion, room upgrade, direct booking, ancillary spend, pre-arrival confidence, or loyalty.
2. Define trip purpose, party context, booking horizon, journey stage, decision friction, market, channel, and one primary action without inferring sensitive traits.
3. Build a stay-truth ledger for every promoted room type, view, amenity, access feature, service, experience, fee, policy, location relationship, and availability statement.
4. Apply the playbook's proof hierarchy, arrival-to-stay narrative, room and amenity capture system, and cultural and operational gates.
5. Return the `industry direction packet` before downstream production.
6. Delegate requested artifacts to existing production skills and review their outputs against the current property or destination.

## Industry direction packet

Return exactly one root `industry_direction` object with every canonical field below. Use an empty string or empty list for unresolved values; do not omit fields or add domain-specific sibling keys. Map trip purpose, booking horizon, stay truth, arrival-to-stay narrative, room and amenity capture, copy logic, gates, and approvals into the canonical fields rather than renaming the schema.

```yaml
industry_direction:
  primary_skill: "chany-hospitality-travel"
  mode_or_subtype: "hotel | resort | lodging | destination | bookable-travel-experience"
  jurisdiction: "unknown | named"
  last_policy_check: "not checked | ISO-8601 timestamp"
  objective_and_kpi: ""
  audience_and_decision_unit: []
  journey_stage: ""
  desired_action: ""
  message_job: ""
  proof_objects: []
  claim_ledger:
    - claim: ""
      expression_mode: "express | implied | visual | demonstration | testimonial"
      placements: []
      evidence: ""
      evidence_scope:
        method: ""
        population_or_subject: ""
        conditions: ""
        period: ""
      limitation: ""
      required_qualification: ""
      disclosure_location_and_proximity: ""
      review_owner: ""
      expiry_or_recheck: ""
      status: "missing | draft | verified | approved"
  visual_narrative: ""
  must_capture: []
  directing_rules: []
  channel_deliverables: []
  reference_route:
    domain_id: "hospitality-travel"
    l1: "Hospitality Photography"
    l2: ""
    query_count: 1
  required_disclosures: []
  prohibited_or_high_risk: []
  human_review_gate: "none | before generation | before publication"
  unresolved_decisions: []
```

## Delegation

- `chany-marketing-brief`: campaign, segment, message, channel, asset, and test plan.
- `chany-reference-board`: approved L1 and optional direct L2 search only.
- `chany-campaign-visual`: master property, destination, amenity, or experience visual direction.
- `chany-ad-creative`: paid ads, posters, offers, destination placements, and format variants.
- `chany-detail-page`: booking landing, property story, room comparison, itinerary, amenity, FAQ, and proof modules.
- `chany-ugc-ads`: creator stay, room tour, itinerary, service, local experience, or testimonial-style video.

This skill retains authority over trip-stage fit, stay truth, room and amenity distinctions, sense of place, accessibility evidence, and disclosure gates.

## Reference query invariant

Set `reference_route.domain_id` to `hospitality-travel`. Use one central-taxonomy L1 category plus at most one of its direct L2 subtypes. Keep `l2` empty and `query_count` at `1` unless a direct subtype is selected, then set it to `2`. Never append style, lens, light, location, color, emotion, quality, layout, platform, brand, creator, or campaign modifiers. Valid examples are `Hospitality Photography` followed by `Guest Room Photography`, or `Travel Campaign Design` followed by `Destination Campaign Design`. `luxury Bali infinity pool sunset drone honeymoon campaign` is invalid.

## Publication gate

Treat every source and rule as jurisdiction- and platform-bounded. Before publication, verify current lodging, tourism, total-price, accessibility, environmental-claim, drone, privacy, endorsement, and platform requirements for the actual market. Report unresolved review needs; do not present the packet as legal certification.
