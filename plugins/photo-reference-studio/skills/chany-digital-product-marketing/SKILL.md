---
name: chany-digital-product-marketing
description: Plan evidence-led advertising and marketing direction for consumer apps, two-sided platforms, and B2B SaaS. Use when digital-product journeys, UI demonstrations, subscriptions, trust, or buying-group proof should shape a campaign; not for producing final media by itself.
---

# Chany Digital Product Marketing

Create the digital-product strategy, evidence, and compliance overlay that other Chany's Studio skills use for production. Own the `industry direction packet`; do not make the final ad, image, detail page, or UGC asset from this skill alone.

Read [references/domain-playbook.md](references/domain-playbook.md) before developing the packet.

## Select one mode first

Choose exactly one primary mode before planning:

- `consumer-app`: one person or household evaluates, installs, activates, retains, and may subscribe.
- `two-sided-platform`: demand and supply audiences have separate acquisition journeys joined by liquidity, trust, and transaction rules.
- `b2b-saas`: a multi-role buying group evaluates product fit, risk, implementation, and commercial terms.

Infer the mode only when the request makes it unambiguous. Otherwise ask one concise mode question. Do not blend modes merely because a product has more than one audience.

## Workflow

1. Establish the mode, business model, primary objective, audience or buying roles, journey stage, offer, geography, and requested channels. Treat visible or supplied facts as facts and all new positioning or copy as proposals.
2. Identify the decision friction and the one belief or action the campaign must change. Map it to proof that can be shown rather than asserted.
3. Build the industry direction packet below. Separate approved evidence, evidence still needed, and claims that must not be published.
4. If references are needed, hand only the approved taxonomy route to `$chany-reference-board`; never add creative modifiers to its queries.
5. Route actual production through the appropriate specialist skill. Review returned work against this packet's product-truth, claim, and safety gates.

## Industry direction packet

Return one explicit root `industry_direction` object. Keep every canonical field even when its value is empty or unknown; keep useful digital-product detail under `domain_extensions` inside that root.

```yaml
industry_direction:
  primary_skill: "chany-digital-product-marketing"
  mode_or_subtype: "consumer-app | two-sided-platform | b2b-saas"
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
    domain_id: "digital-product"
    l1: "Digital Product Marketing Design"
    l2: ""
    query_count: 1
  required_disclosures: []
  prohibited_or_high_risk: []
  human_review_gate: "none | before generation | before publication"
  unresolved_decisions: []
  domain_extensions:
    domain: "digital-product"
    business_model: ""
    product_identity_lock: {}
    approved_fact_ledger: []
    proof_plan: []
    prompt_kernel: ""
    risk_and_approvals: []
```

Map plan, version, availability, prototype or simulated UI, time compression, integration status, measurement limits, subscription terms, AI limits, security-control or audit scope, and material connections into `required_disclosures`. Map invented UI or data, false state transitions, unsupported results or savings, exposed sensitive data, overbroad privacy or security representations, inaccessible or manipulative flows, and missing billing terms into `prohibited_or_high_risk`. Set `human_review_gate` to `before generation` when capture would expose sensitive or confidential data, unreleased functionality, or controlled security evidence; otherwise use at least `before publication` for UI, subscription, security, privacy, AI, testimonial, or performance claims. An earlier gate does not remove the final publication recheck.

If substantiation or approval is absent, keep the proposed claim at `missing` or `draft`, record the blocking reason in `prohibited_or_high_risk` and the publication-review record, and do not soften an unsupported claim into publishable copy.

## Reference route

Use the central taxonomy in `$chany-reference-board` and preserve these exact values:

- domain ID: `digital-product`
- L1 first: `Digital Product Marketing Design`
- optional direct L2: `Consumer App Marketing Design`, `Marketplace Marketing Design`, `B2B SaaS Marketing Design`, or `Fintech App Marketing Design`

Run one L1 search first. Keep `l2` empty and `query_count: 1` when discovery stops there. Run zero or one separate direct L2 search only when it confidently matches the primary subject; then store that exact L2 and set `query_count: 2`. Multiple L2 siblings in one task are prohibited. Never add style, lens, camera, lighting, color, mood, emotion, audience, location, brand, campaign, creator, agency, channel, platform, aspect-ratio, poster, banner, layout, or quality modifiers. These are ranking or production decisions after discovery, not search terms.

## Production handoff

- `$chany-marketing-brief`: campaign objective, message hierarchy, approved-fact ledger, asset matrix, and tests
- `$chany-reference-board`: Pinterest-only, L1-first, optional single-L2 discovery with exactly six inline previews
- `$chany-campaign-visual`: approved key visual or campaign image system
- `$chany-ad-creative`: placement-specific paid and organic ad variants
- `$chany-detail-page`: product, solution, pricing, use-case, or conversion page structure
- `$chany-ugc-ads`: creator, customer, expert, tutorial, or workflow-led video concepts

The handoff must carry the mode, audience role, journey stage, approved facts, evidence limits, reference route, prompt kernel, and unresolved approvals. Do not let a downstream skill invent functionality, customer results, integrations, availability, security posture, price, savings, user counts, or policy compliance.

## Current-rule gate

Store requirements, ad specifications, privacy rules, subscription requirements, AI guidance, and security representations can change. Before anything is published, verify the current official rules for every target jurisdiction and platform. Record the source and verification date in the packet. If current rules cannot be checked, label the work `draft—not cleared for publication`.
