---
name: chany-space-real-estate
description: Design evidence-led advertising, promotion, art direction, and content systems for architecture, interiors, commercial spaces, and real-estate listings. Use when the commercial action is portfolio evaluation, place visitation, sale, lease, viewing, or inquiry; not for accommodation booking.
---

# Chany Space Real Estate

Create an industry direction packet that makes space legible, desirable, and truthful for a specific business decision. Own the domain strategy, spatial evidence, directing system, and claims-rights-safety overlay. Delegate final asset production.

Read [references/domain-playbook.md](references/domain-playbook.md) before substantive planning or handoff.

## Scope and mode

Choose exactly one primary mode:

- `architecture portfolio`: prove design intent, function, context, material, and professional capability;
- `commercial place`: drive visitation, leasing, tenant interest, brand experience, or venue inquiry;
- `real-estate listing`: support accurate comparison, viewing, sale, or lease.

Route short-term lodging and room booking to `chany-hospitality-travel`. A hotel architecture case study may use this skill only when professional design evaluation, not booking, is the primary action.

## Required workflow

1. Identify mode, business decision, audience role, journey stage, property status, channel, and one primary action.
2. Build a spatial-truth ledger from current photographs, plans, dimensions, material and system facts, approved design narrative, listing data, access conditions, disclosures, and usage permissions.
3. Distinguish observable physical fact, approved project or listing fact, substantiated outcome, creative interpretation, and unresolved claim.
4. Apply the mode-specific proof architecture, spatial narrative, capture system, and gates in the playbook.
5. Return the `industry direction packet` before downstream production.
6. Delegate requested outputs to the existing production skills. Review generated or edited work against original spatial authority at high detail.

## Industry direction packet

Return exactly one root `industry_direction` object with every canonical field below. Use an empty string or empty list for unresolved values; do not omit fields or add domain-specific sibling keys. Map operating mode, spatial truth, listing or design proof, walkthrough system, copy logic, gates, and approvals into the canonical fields rather than renaming the schema.

```yaml
industry_direction:
  primary_skill: "chany-space-real-estate"
  mode_or_subtype: "architecture-portfolio | commercial-place | real-estate-listing"
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
    domain_id: "space-real-estate"
    l1: "Architecture Photography"
    l2: ""
    query_count: 1
  required_disclosures: []
  prohibited_or_high_risk: []
  human_review_gate: "none | before generation | before publication"
  unresolved_decisions: []
```

## Delegation

- `chany-marketing-brief`: objective, audience, approved facts, message, channels, asset matrix, and test plan.
- `chany-reference-board`: one approved L1 query and at most one direct L2 query.
- `chany-campaign-visual`: master architecture, interior, property, or place visual direction.
- `chany-ad-creative`: listing, leasing, visitation, open-house, display, social, OOH, or brochure-ready ad layouts.
- `chany-detail-page`: property, project, leasing, case-study, amenity, floor-plan, FAQ, and inquiry modules.
- `chany-campaign-video`: concept-led architecture, property, place, or leasing films.
- `chany-ugc-ads`: guided tour, designer explanation, tenant story, neighborhood walkthrough, or creator-led place content.

This skill retains authority over spatial truth, mode and journey fit, virtual-staging status, property and people rights, security, accessibility, and fair-advertising gates.

## Reference query invariant

Set `reference_route.domain_id` to `space-real-estate`. Search one central-taxonomy L1 category, then optionally one of its direct L2 subtypes. Keep `l2` empty and `query_count` at `1` unless a direct subtype is selected, then set it to `2`. Do not append style, lens, light, location, color, emotion, quality, layout, platform, brand, architect, photographer, or campaign modifiers. Valid examples are `Architecture Photography` followed by `Interior Photography`, or `Real Estate Marketing Design` followed by `Property Listing Marketing Design`. `minimal Seoul concrete cafe 24mm blue hour reel` is invalid.

## Publication gate

Verify the publication jurisdiction, property type, transaction mode, platform, and intended use immediately before release. Check current real-estate advertising, fair-housing or nondiscrimination, material-alteration disclosure, drone, privacy, accessibility, signage, intellectual-property, and platform requirements. State open review needs; do not claim legal approval.
