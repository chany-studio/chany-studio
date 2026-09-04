---
name: chany-education-marketing
description: Build evidence-led marketing direction for schools, academies, courses, vocational programs, universities, or education technology. Use for learner recruitment, enrollment, course launches, or education campaigns; not for general professional services, healthcare, employment, or product sales.
---

# Chany Education Marketing

Create the education-sector strategy, evidence, learner-protection, and compliance overlay. Own the industry direction packet; delegate briefs, reference discovery, and asset production to the existing production skills.

Read [references/domain-playbook.md](references/domain-playbook.md) before making strategic, visual, copy, or channel decisions.

## Workflow

1. Identify the education type, target jurisdiction, learner, payer, influencer, learner age, objective, channel, accreditation status, price facts, and available outcome evidence.
2. Map the learner and payer separately when they differ. Choose one journey stage and one decision barrier.
3. Build the claim ledger defined in the playbook. Block unsupported admission, grade, completion, employment, income, accreditation, and affiliation claims.
4. Produce an `industry direction packet` using the canonical `industry_direction` root below. Do not rename or omit its shared fields.
5. Delegate execution. Use `chany-marketing-brief` for the campaign brief, `chany-reference-board` for visual discovery, `chany-campaign-visual` or `chany-ad-creative` for campaign assets, `chany-detail-page` for course or enrollment pages, `chany-campaign-video` for concept-led program or institutional film, and `chany-ugc-ads` only for authorized educator or learner video.
6. Recheck current jurisdiction, local education rules, youth protections, privacy duties, and platform policy immediately before publication. Present them as review gates, not legal advice.

Do not generate final production assets from this skill alone.

## Industry direction packet

```yaml
industry_direction:
  primary_skill: "chany-education-marketing"
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
    domain_id: "education"
    l1: "Education Campaign Design"
    l2: null
    query_count: 1
  required_disclosures: []
  prohibited_or_high_risk: []
  human_review_gate: "before publication"
  unresolved_decisions: []
  domain_extensions:
    domain: "education"
    education_type: ""
    learner_age_group: "adult | minor | mixed"
    learner_payer_influencer: {}
    learning_promise: ""
    proof_priority: []
    message_boundary: []
    compliance_review:
      tuition_and_registration_facts_cleared: false
      accreditation_and_outcomes_cleared: false
      minor_consent_and_privacy_cleared: false
      platform_rules_current: false
      human_review_owner: ""
```

Pass the complete `industry_direction` object to downstream production skills. Shared fields are the stable interface; keep education-only detail under `domain_extensions`. `reference_route` must match the central taxonomy exactly. Keep `l2` null and `query_count` at `1` unless one direct subtype is confidently applicable, then set the count to `2`. Do not put learner demographics, style, location, mood, camera, lighting, color, emotion, campaign, platform, or layout words in the route.

## Stop conditions

- Stop publish-ready output when a learning, admission, employment, income, ranking, accreditation, affiliation, price, or testimonial claim lacks evidence and scope.
- Stop use of an identifiable minor, learner record, grade, screen, or work sample until consent and disclosure scope are confirmed.
- Stop youth-personalized advertising when current platform and local requirements are unknown.
- Never portray an actor or synthetic learner as an actual student, graduate, teacher, or testimonial source.
