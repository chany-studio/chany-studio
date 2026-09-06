---
name: chany-professional-services
description: Build evidence-led advertising and marketing direction for general services or licensed professional practices. Use for consultative service brands, expert positioning, lead generation, or authority content; not for education, healthcare, employment, or product campaigns.
---

# Chany Professional Services

Create the professional-services strategy, evidence, and compliance overlay. Own the industry direction packet; delegate briefs, reference discovery, and final asset production to the existing production skills.

Read [references/domain-playbook.md](references/domain-playbook.md) before making strategic, visual, copy, or channel decisions.

## Select one mode

- `general-service`: a service business without a profession-specific advertising regime identified in the brief
- `licensed-professional`: a lawyer, accountant, tax adviser, architect, financial adviser, real-estate professional, or another credentialed practice

If the mode would change claims or approvals and cannot be inferred, ask one concise question. Never treat a professional title, license, certification, ranking, award, or affiliation as true without evidence.

## Workflow

1. Confirm the service type, mode, target jurisdiction, decision-maker, buying risk, objective, channel, and available proof.
2. Build the claim ledger defined in the playbook. Convert unsupported outcome claims into bounded process statements or mark them unresolved.
3. Map the audience to one journey stage and choose the trust deficit that the work must resolve.
4. Produce an `industry direction packet` using the canonical `industry_direction` root below. Do not rename or omit its shared fields.
5. Delegate execution. Use `chany-marketing-brief` for the campaign brief, `chany-reference-board` for visual discovery, `chany-campaign-visual` or `chany-ad-creative` for campaign assets, `chany-detail-page` for a long-form conversion page, and `chany-campaign-video` for concept-led service, authorized expert, or brand film.
6. Recheck profession-, jurisdiction-, and platform-specific rules immediately before publication. Present regulatory observations as review gates, not legal advice.

Do not generate final production assets from this skill alone.

## Industry direction packet

```yaml
industry_direction:
  primary_skill: "chany-professional-services"
  mode_or_subtype: "general-service | licensed-professional"
  jurisdiction: ""
  last_policy_check: "not checked"
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
    domain_id: "professional-services"
    l1: "Professional Services Branding"
    l2: null
    query_count: 1
  required_disclosures: []
  prohibited_or_high_risk: []
  human_review_gate: "none | before publication"
  unresolved_decisions: []
  domain_extensions:
    domain: "professional-services"
    promise: ""
    proof_priority: []
    message_boundary: []
    compliance_review:
      licensed_rules_current: false
      platform_rules_current: false
      consent_and_confidentiality_cleared: false
      human_review_owner: ""
```

Pass the complete `industry_direction` object to downstream production skills. Shared fields are the stable interface; keep professional-service-only detail under `domain_extensions`. `reference_route` must match the central taxonomy exactly. Keep `l2` null and `query_count` at `1` unless one direct subtype is confidently applicable, then set the count to `2`. Do not put audience, style, location, mood, camera, lighting, color, emotion, campaign, platform, or layout words in the route.

## Stop conditions

- Stop publish-ready copy when a result, ranking, credential, comparison, testimonial, price, or affiliation lacks evidence.
- Stop licensed-professional publication when the responsible reviewer or current profession-specific rules are unknown.
- Stop any case study, client scene, document, or testimonial that lacks authorization or exposes confidential information.
- Never portray an actor or synthetic person as an actual client, employee, expert, or endorser.
