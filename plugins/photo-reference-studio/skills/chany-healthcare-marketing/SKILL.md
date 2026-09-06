---
name: chany-healthcare-marketing
description: Build safety-first marketing direction for hospitals, clinics, dental care, wellness, rehabilitation, mental health, or telehealth. Use for patient education, service-line promotion, access campaigns, or healthcare advertising; not for diagnosis, treatment advice, or unsupervised publication.
---

# Chany Healthcare Marketing

Create the healthcare strategy, evidence, patient-safety, and compliance overlay. Own the industry direction packet; delegate briefs, reference discovery, and asset production to existing production skills.

Read [references/domain-playbook.md](references/domain-playbook.md) before making strategic, visual, copy, or channel decisions.

## Human publication gate

Every output is `draft pending human review` until a named, authorized reviewer confirms the current rules for the jurisdiction, provider, claim, medium, and platform. Never claim that generated work is approved, compliant, medically reviewed, or ready to publish merely because this workflow completed.

An unknown reviewer does not block the direction packet or downstream draft production, including creative work. Record the missing reviewer as unresolved, keep every affected asset visibly in draft status, and hard-block publication until a named qualified human reviewer approves the exact version.

## Workflow

1. Identify the provider type, target jurisdiction, accountable clinician or institution, audience, vulnerability, objective, channel, procedure or service, and available evidence.
2. Separate general patient education from promotional claims and individualized medical advice. Do not diagnose or recommend treatment for an individual.
3. Build the claim ledger defined in the playbook. Block unsupported efficacy, safety, superiority, exclusivity, testimonial, before-and-after, credential, certification, price, or urgency claims.
4. Map the patient journey and choose one information or access barrier without using fear, shame, or sensitive-condition targeting.
5. Produce an `industry direction packet` using the canonical `industry_direction` root below. Do not rename or omit its shared fields.
6. Delegate execution. Use `chany-marketing-brief` for the campaign brief, `chany-reference-board` for visual discovery, `chany-campaign-visual` or `chany-ad-creative` for campaign assets, `chany-detail-page` for patient-information or service pages, and `chany-campaign-video` for concept-led education, access, or authorized clinician video within the human-review gate—not patient-result testimonials.
7. Submit all proposed copy, visuals, targeting, landing content, and variations to the named human reviewer before publication.

Do not generate final publishable assets from this skill alone.

## Industry direction packet

```yaml
industry_direction:
  primary_skill: "chany-healthcare-marketing"
  mode_or_subtype: ""
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
    domain_id: "healthcare"
    l1: "Healthcare Advertising Design"
    l2: null
    query_count: 1
  required_disclosures: []
  prohibited_or_high_risk: []
  human_review_gate: "before publication"
  unresolved_decisions: []
  domain_extensions:
    domain: "healthcare"
    provider_and_service: ""
    accountable_clinician_or_institution: ""
    patient_information_need: ""
    proof_priority: []
    benefit_risk_boundary: []
    compliance_review:
      human_review_required: true
      human_review_owner: ""
      jurisdiction_rules_current: false
      medical_ad_review_status: "unknown"
      platform_rules_current: false
      evidence_reviewed: false
      patient_consent_and_privacy_cleared: false
      publication_status: "draft-only"
```

Pass the complete `industry_direction` object to downstream production skills. Shared fields are the stable interface; keep healthcare-only detail under `domain_extensions`. `reference_route` must match the central taxonomy exactly. Keep `l2` null and `query_count` at `1` unless one direct subtype is confidently applicable, then set the count to `2`. Do not put condition, audience, style, location, mood, camera, lighting, color, emotion, campaign, platform, or layout words in the route.

## Stop conditions

- Do not stop draft planning or downstream draft creative merely because the reviewer is unknown. Add the reviewer to `unresolved_decisions`, keep `human_review_gate: "before publication"`, and block publication until a named qualified human reviewer approves the exact copy, visual, targeting, landing content, medium, and version.
- Stop patient imagery, records, voices, experiences, or outcome material without specific authorization and privacy clearance.
- Stop claims that omit material risk or eligibility information, create unjustified expectations, or imply diagnosis.
- Stop sensitive-condition personalization or retargeting when current policy and lawful basis are not confirmed.
- Never portray an actor or synthetic person as an actual patient, clinician, treatment experience, or outcome.
