---
name: chany-automotive-marketing
description: Plan evidence-led advertising, launch, retail, and ownership direction for cars, EVs, motorcycles, and commercial vehicles. Use when vehicle identity, high-consideration buying, dynamic capture, safety, range, finance, or dealer claims shape the campaign; not for producing final media by itself.
---

# Chany Automotive Marketing

Create the automotive strategy, evidence, directing, and compliance overlay that other Chany's Studio skills use for production. Own the `industry direction packet`; do not make the final ad, image, detail page, or campaign-video asset from this skill alone.

Read [references/domain-playbook.md](references/domain-playbook.md) before developing the packet.

## Workflow

1. Lock the vehicle identity: manufacturer, model, model year, market, powertrain, body, trim, options, color, wheels, interior, badging, and production status. Record what is visible, supplied, verified, or unknown.
2. Establish the objective, audience or decision unit, journey stage, use case, offer, geography, channels, and whether the work is brand, model launch, retail, fleet, aftersales, or ownership communication.
3. Identify the one decision friction to resolve and map each proposed message to demonstrable product, test, transaction, or ownership evidence.
4. Build the industry direction packet below. Separate approved evidence, evidence still needed, and claims that must not be published.
5. If references are needed, hand only the approved taxonomy route to `$chany-reference-board`; never add creative modifiers to its queries.
6. Route production through the appropriate specialist skill. Review returned work for vehicle fidelity, physical plausibility, road safety, claim scope, and transactional transparency.

## Industry direction packet

Return one explicit root `industry_direction` object. Keep every canonical field even when its value is empty or unknown; keep useful vehicle detail under `domain_extensions` inside that root.

```yaml
industry_direction:
  primary_skill: "chany-automotive-marketing"
  mode_or_subtype: "car | electric-vehicle | motorcycle | commercial-vehicle"
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
    domain_id: "automotive"
    l1: "Automotive Photography"
    l2: ""
    query_count: 1
  required_disclosures: []
  prohibited_or_high_risk: []
  human_review_gate: "none | before generation | before publication"
  unresolved_decisions: []
  domain_extensions:
    domain: "automotive"
    vehicle_identity_lock: {}
    campaign_type: ""
    approved_fact_ledger: []
    proof_plan: []
    prompt_kernel: ""
    risk_and_approvals: []
```

Map exact model, model year, trim, market, options, CGI or simulation, test conditions, range and charging conditions, ADAS limitations and driver responsibility, environmental methodology, offer availability, and every material finance term into `required_disclosures`. Finance terms include cash price, deposit or down payment, amount financed, APR or equivalent rate, term, payment count and amount, balloon or residual, fees, eligibility, expiry, and representative example where applicable. Map substituted trims, impossible or unsafe driving, unsupported autonomy, safety, performance, range, charging or environmental claims, misleading test edits, and omitted or contradictory finance terms into `prohibited_or_high_risk`. Set `human_review_gate` to `before generation` for public-road dynamic capture, rigging, drones, stunts, dangerous action, unreleased vehicles, or safety-system demonstrations; otherwise use at least `before publication` for vehicle, test, EV, environmental, price, finance, dealer, or availability claims. An earlier gate does not remove the final publication recheck.

If exact vehicle identity or a material claim cannot be verified, mark the affected asset `blocked` or redesign it around verified evidence. Do not substitute a visually similar trim or soften unsupported performance language into publishable copy.

## Reference route

Use the central taxonomy in `$chany-reference-board` and preserve these exact values:

- domain ID: `automotive`
- L1 first: `Automotive Photography`
- optional direct L2: `Car Photography`, `Electric Vehicle Photography`, `Motorcycle Photography`, or `Commercial Vehicle Photography`

Run one L1 search first. Keep `l2` empty and `query_count: 1` when discovery stops there. Run zero or one separate direct L2 search only when it confidently matches the primary vehicle; then store that exact L2 and set `query_count: 2`. Multiple L2 siblings in one task are prohibited. Never add style, lens, camera, lighting, color, mood, emotion, audience, location, brand, campaign, creator, agency, channel, platform, aspect-ratio, poster, banner, layout, or quality modifiers. These are ranking or production decisions after discovery, not search terms.

## Production handoff

- `$chany-marketing-brief`: objective, message hierarchy, approved-fact ledger, offer, asset matrix, and tests
- one source-isolated reference owner: `$chany-reference-board` for Pinterest, `$chany-commercial-photo-reference` for Production Paradise photography, or `$chany-award-ad-reference` for approved award archives; all remain L1-first with one optional direct L2 and six inline previews by default or the user's explicit positive count
- `$chany-campaign-visual`: approved vehicle key visual or campaign image system
- `$chany-ad-creative`: placement-specific launch, consideration, retail, finance, and retargeting variants
- `$chany-detail-page`: model, trim, feature, range, finance, fleet, or ownership page structure
- `$chany-campaign-video`: concept-led vehicle launch, feature, technology, or brand film within the approved safety boundary
- `$chany-campaign-video`: concept-led walkaround, authorized owner story, feature tutorial, charging, utility, or test-drive film

The handoff must carry the vehicle identity lock, audience and journey stage, approved facts, test conditions, safety boundaries, reference route, prompt kernel, and unresolved approvals. Do not let a downstream skill invent geometry, trim details, features, safety capability, performance, range, charging speed, price, finance, inventory, award, rating, certification, or environmental benefit.

## Current-rule gate

Vehicle specifications, offers, inventory, safety ratings, assisted-driving capability, test procedures, advertising codes, and platform requirements change by market and date. Before anything is published, verify the current official rules and records for every target jurisdiction, platform, exact model, and offer. Record the source and verification date in the packet. If current requirements cannot be checked, label the work `draft—not cleared for publication`.
