---
name: chany-consumer-tech-marketing
description: Plan evidence-led launch, retail, comparison, and adoption direction for consumer electronics and connected devices. Use when product fidelity, feature demonstration, compatibility, performance, safety, certification, or high-consideration buying should shape a campaign; not for producing final media by itself.
---

# Chany Consumer Tech Marketing

Create the consumer-technology strategy, evidence, directing, and compliance overlay that other Chany's Studio skills use for production. Own the `industry direction packet`; do not make the final ad, image, detail page, or campaign-video asset from this skill alone.

Read [references/domain-playbook.md](references/domain-playbook.md) before developing the packet.

## Workflow

1. Lock the product identity: manufacturer, model, revision, market, finish, dimensions, ports, controls, sensors, displays, accessories, package contents, firmware or app dependency, and production status. Record what is visible, supplied, verified, or unknown.
2. Establish the objective, audience or household decision roles, journey stage, use case, offer, geography, channels, and whether the work is launch, consideration, comparison, retail, education, ecosystem, or lifecycle communication.
3. Identify the one decision friction to resolve and map each proposed message to visible product, workflow, test, certification, compatibility, transaction, or ownership evidence.
4. Build the industry direction packet below. Separate approved evidence, evidence still needed, and claims that must not be published.
5. If references are needed, hand only the approved taxonomy route to `$chany-reference-board`; never add creative modifiers to its queries.
6. Route production through the appropriate specialist skill. Review returned work for source fidelity, physical plausibility, evidence quality, safety, compatibility, included-item clarity, and transactional accuracy.

## Industry direction packet

Return one explicit root `industry_direction` object. Keep every canonical field even when its value is empty or unknown; keep useful product detail under `domain_extensions` inside that root.

```yaml
industry_direction:
  primary_skill: "chany-consumer-tech-marketing"
  mode_or_subtype: "smartphone | laptop | audio | wearable | smart-home | other-consumer-tech"
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
    domain_id: "consumer-tech"
    l1: "Consumer Electronics Photography"
    l2: ""
    query_count: 1
  required_disclosures: []
  prohibited_or_high_risk: []
  human_review_gate: "none | before generation | before publication"
  unresolved_decisions: []
  domain_extensions:
    domain: "consumer-tech"
    product_identity_lock: {}
    campaign_type: ""
    approved_fact_ledger: []
    proof_plan: []
    prompt_kernel: ""
    risk_and_approvals: []
```

Map exact model or SKU, revision, market, simulated screen or illustrative CGI, test method and conditions, compatibility, required accessory, hub, account, network or subscription, package contents, certification scope, safety limitations, price, stock, seller, warranty, return, renewal, shipping, and promotion terms into `required_disclosures`. Map invented hardware or UI, false interoperability, unequal comparisons, unsafe use, unverified certification, omitted dependencies or included-item ambiguity, and unsupported performance, durability, health, privacy, security, AI or environmental claims into `prohibited_or_high_risk`. Set `human_review_gate` to `before generation` for hazardous demonstrations, children, medical or wellness implications, sensitive data, unreleased products, or controlled test and certification materials; otherwise use at least `before publication` for product, compatibility, performance, certification, safety, price, review, privacy, security, AI, or environmental claims. An earlier gate does not remove the final publication recheck.

If exact product identity, package contents, compatibility, or a material claim cannot be verified, mark the affected asset `blocked` or redesign it around verified evidence. Do not substitute a visually similar model or turn an unsupported technical claim into lifestyle implication.

## Reference route

Use the central taxonomy in `$chany-reference-board` and preserve these exact values:

- domain ID: `consumer-tech`
- L1 first: `Consumer Electronics Photography`
- optional direct L2: `Smartphone Photography`, `Laptop Photography`, `Audio Product Photography`, `Wearable Technology Photography`, or `Smart Home Product Photography`

Run one L1 search first. Keep `l2` empty and `query_count: 1` when discovery stops there. Run zero or one separate direct L2 search only when it confidently matches the primary product; then store that exact L2 and set `query_count: 2`. Multiple L2 siblings in one task are prohibited. Never add style, lens, camera, lighting, color, mood, emotion, audience, location, brand, campaign, creator, agency, channel, platform, aspect-ratio, poster, banner, layout, or quality modifiers. These are ranking or production decisions after discovery, not search terms.

## Production handoff

- `$chany-marketing-brief`: objective, message hierarchy, approved-fact ledger, offer, asset matrix, and tests
- one source-isolated reference owner: `$chany-reference-board` for Pinterest, `$chany-commercial-photo-reference` for Production Paradise photography, or `$chany-award-ad-reference` for approved award archives; all remain L1-first with one optional direct L2 and six inline previews by default or the user's explicit positive count
- `$chany-campaign-visual`: approved launch or campaign key visual and image system
- `$chany-ad-creative`: placement-specific awareness, feature, retail, offer, and retargeting variants
- `$chany-detail-page`: product, specification, comparison, compatibility, setup, bundle, or conversion page structure
- `$chany-campaign-video`: concept-led launch, feature, ecosystem, or product film using approved device and UI evidence
- `$chany-campaign-video`: concept-led setup, tutorial, comparison, daily-use, demonstration, or accessibility film

The handoff must carry the product identity lock, audience and journey stage, approved facts, test conditions, package contents, safety boundaries, reference route, prompt kernel, and unresolved approvals. Do not let a downstream skill invent form, ports, controls, screen states, features, performance, compatibility, safety, certification, accessories, price, offer, review, or environmental benefit.

## Current-rule gate

Product specifications, certification status, safety notices, platform formats, shopping-feed rules, offers, and advertising requirements change by market and date. Before anything is published, verify the current official rules and records for every target jurisdiction, platform, exact model, and offer. Record the source and verification date in the packet. If current requirements cannot be checked, label the work `draft—not cleared for publication`.
