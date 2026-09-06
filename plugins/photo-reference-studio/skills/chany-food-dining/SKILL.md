---
name: chany-food-dining
description: Design evidence-led advertising, promotion, art direction, and content systems for restaurants, cafes, dining, beverages, takeaway, and delivery. Use when the commercial action is a visit, reservation, order, menu choice, or repeat purchase; not for packaged-product-only campaigns or hotel-led dining.
---

# Chany Food Dining

Turn a real food-and-beverage offer into an industry direction packet that makes appetite, choice, trust, and action work together. Own the industry strategy, evidence model, directing logic, and compliance overlay. Do not create final campaign media from this skill alone.

Read [references/domain-playbook.md](references/domain-playbook.md) before doing substantive planning or handing work to another skill.

## Scope and boundary

- Use for restaurants, cafes, bakeries, bars, food halls, dine-in experiences, takeaway, delivery menus, seasonal menus, and restaurant-led beverage programs.
- Route a packaged food whose primary action is ecommerce purchase to the product workflow instead.
- If dining is only one hotel amenity, let `chany-hospitality-travel` own the journey and use this skill only for the dining module.
- Do not infer ingredients, portions, prices, dietary suitability, provenance, availability, or health benefits from an attractive image.

## Required workflow

1. Identify the commercial job: local discovery, footfall, reservation, order conversion, average-order-value growth, launch, retention, or reputation recovery.
2. Identify audience occasion, daypart, fulfillment mode, journey stage, decision friction, channel, and primary CTA. Ask one concise question only when a missing answer would materially change the direction.
3. Build a truth ledger from the current menu, actual served items, approved prices and offers, operating facts, ingredient or dietary evidence, brand assets, and usage permissions. Mark every unverified statement as a proposal or unresolved fact.
4. Apply the strategy, proof architecture, visual narrative, capture system, and gates in the domain playbook.
5. Return an `industry direction packet` before downstream production.
6. Delegate each requested output to the appropriate existing skill and pass the packet intact.
7. Review downstream work against the real offer, current facts, rights, platform rules, and the packet. Reject material mismatch even when the image is aesthetically strong.

## Industry direction packet

Return exactly one root `industry_direction` object with every canonical field below. Use an empty string or empty list for unresolved values; do not omit fields or add domain-specific sibling keys. Map occasion, daypart, fulfillment, menu truth, shot system, copy logic, gates, and approvals into the canonical fields rather than renaming the schema.

```yaml
industry_direction:
  primary_skill: "chany-food-dining"
  mode_or_subtype: "restaurant | cafe | bakery | bar | takeaway | delivery | other-food-dining"
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
    domain_id: "food-dining"
    l1: "Food Photography"
    l2: ""
    query_count: 1
  required_disclosures: []
  prohibited_or_high_risk: []
  human_review_gate: "none | before generation | before publication"
  unresolved_decisions: []
```

## Delegation

- Send campaign planning and the approved-fact ledger to `chany-marketing-brief`.
- Send only the approved L1 query and optional direct L2 query to `chany-reference-board`.
- Send master food, dining, service, or location art direction to `chany-campaign-visual`.
- Send finished paid-social, display, poster, menu-promotion, or local ad layouts to `chany-ad-creative`.
- Send menu stories, reservation or ordering pages, and proof-rich long-form modules to `chany-detail-page`.
- Send concept-led menu, dining, service, or brand films to `chany-campaign-video`.
- Send concept-led tasting, preparation, visit, or delivery films using authorized people or footage to `chany-campaign-video`.

The downstream skill owns its production mechanics. This skill retains authority over industry facts, journey fit, food and service truth, and the claims-rights-safety overlay.

## Reference query invariant

Set `reference_route.domain_id` to `food-dining`. Reference search may use one central-taxonomy L1 category plus at most one direct L2 subtype. Keep `l2` empty and `query_count` at `1` unless a direct subtype is selected, then set it to `2`. Do not add style, lens, lighting, location, color, emotion, quality, layout, channel, brand, creator, or campaign modifiers. For example, use `Food Photography` and optionally `Menu Photography`; do not search for `moody Seoul ramen steam 85mm Instagram ad photography`.

## Publication gate

Identify the publication country and channel before release. Treat the playbook's authorities as decision support, not legal advice. Verify current local law, platform specifications, menu and alcohol rules, endorsement disclosure, accessibility requirements, and rights immediately before publication. If they cannot be verified, name the unresolved gate rather than claiming compliance.
