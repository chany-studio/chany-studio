---
name: chany-corporate-employer
description: Build evidence-led corporate brand or employer brand direction for reputation, recruitment, culture, employee stories, or candidate campaigns. Use for corporate stakeholders or talent audiences; not for consumer product, education, healthcare, or generic service campaigns.
---

# Chany Corporate Employer

Create the corporate or employer-brand strategy, evidence, representation, and compliance overlay. Own the industry direction packet; delegate briefs, reference discovery, and final asset production to the existing production skills.

Read [references/domain-playbook.md](references/domain-playbook.md) before making strategic, visual, copy, or channel decisions.

## Select one mode

- `corporate-brand`: reputation and capability communication for customers, partners, investors, communities, or other stakeholders
- `employer-brand`: employer value proposition, recruitment, candidate experience, employee advocacy, or culture communication

Do not merge the customer/stakeholder journey with the candidate journey. If the audience or desired action does not make the mode clear, ask one concise question.

## Workflow

1. Confirm the mode, jurisdiction, organization, stakeholder or talent audience, objective, journey stage, channel, and available proof.
2. In employer mode, audit whether the proposed EVP matches current employee policy and candidate experience. Do not invent culture.
3. Build the claim ledger defined in the playbook. Block unsupported impact, culture, compensation, benefit, diversity, award, ranking, employee, or hiring claims.
4. Produce an `industry direction packet` using the canonical `industry_direction` root below. Do not rename or omit its shared fields.
5. Delegate execution. Use `chany-marketing-brief` for the campaign brief, `chany-reference-board` for visual discovery, `chany-campaign-visual` or `chany-ad-creative` for campaign assets, `chany-detail-page` for corporate or careers pages, and `chany-ugc-ads` only for authorized employee or leadership stories.
6. Recheck current employment, privacy, accessibility, jurisdiction, and platform rules immediately before publication. Present them as review gates, not legal advice.

Do not generate final production assets from this skill alone.

## Industry direction packet

```yaml
industry_direction:
  primary_skill: "chany-corporate-employer"
  mode_or_subtype: "corporate-brand | employer-brand"
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
    domain_id: "corporate-employer"
    l1: "Corporate Branding"
    l2: null
    query_count: 1
  required_disclosures: []
  prohibited_or_high_risk: []
  human_review_gate: "none | before publication"
  unresolved_decisions: []
  domain_extensions:
    domain: "corporate-employer"
    corporate_promise_or_evp: ""
    proof_priority: []
    representation_boundary: []
    compliance_review:
      organization_facts_current: false
      employee_and_location_consent_cleared: false
      employment_and_privacy_rules_current: false
      platform_rules_current: false
      human_review_owner: ""
```

Pass the complete `industry_direction` object to downstream production skills. Shared fields are the stable interface; keep corporate- or employer-specific detail under `domain_extensions`. `reference_route` must match the central taxonomy exactly. Keep `l2` null and `query_count` at `1` unless one direct subtype is confidently applicable, then set the count to `2`. Do not put industry, audience, style, location, mood, camera, lighting, color, emotion, platform, brand, campaign, or layout words in the route.

## Stop conditions

- Stop employer-brand publication when there is no bona fide role or when role, employment type, location, compensation conditions, or hiring intent is materially unclear.
- Stop claims about culture, impact, diversity, benefits, awards, rankings, or employee experience that lack current evidence.
- Stop employee stories, workplace access, application data, or internal artifacts without authorization and privacy clearance.
- Stop discriminatory eligibility, representation, or targeting and route exceptions to a qualified human reviewer.
- Never portray an actor or synthetic person as an actual employee, candidate, leader, or testimonial source.
