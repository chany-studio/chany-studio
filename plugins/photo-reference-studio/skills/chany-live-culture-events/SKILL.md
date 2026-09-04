---
name: chany-live-culture-events
description: Design evidence-led advertising, promotion, art direction, and content systems for performances, exhibitions, events, conferences, and local or cultural festivals. Use when the commercial or civic action is attendance, ticketing, registration, participation, visitation, sponsorship, or return; not for permanent destination marketing alone.
---

# Chany Live Culture Events

Create an industry direction packet that connects program truth, audience anticipation, live experience, safe participation, cultural legitimacy, and post-event value. Own event strategy, evidence, phase-based visual direction, and the claims-rights-safety overlay. Delegate final production.

Read [references/domain-playbook.md](references/domain-playbook.md) before substantive planning or handoff.

## Scope and boundary

- Use for concerts, theatre, dance, performance, exhibitions, museums, galleries, conferences, experiential activations, public events, fairs, and local or cultural festivals.
- Use `chany-hospitality-travel` when a permanent destination or itinerary is primary and the event is only one attraction.
- Use this skill when a dated program, admission, attendance, registration, participation, sponsor outcome, or event-cycle relationship is central.
- Never infer lineup, schedule, venue, ticket inventory, capacity, access, cultural meaning, safety, sponsor rights, or permission from promotional imagery.

## Required workflow

1. Identify event type, primary objective, audience context, event phase, journey stage, operational status, channel, and one action.
2. Build a program-truth ledger from approved title, organizer, participants, works, schedule, venue, access, capacity, ticket and fee facts, age rules, recording permissions, sponsors, and cancellation or weather policy.
3. Identify cultural authority, artist and participant rights, attendee and minor release model, accessibility provision, and operational safety constraints.
4. Apply the phase strategy, proof architecture, experience narrative, capture system, and gates in the playbook.
5. Return the `industry direction packet` before downstream production.
6. Delegate requested assets to existing skills and review every output against the approved program and live operating plan.

## Industry direction packet

Return exactly one root `industry_direction` object with every canonical field below. Use an empty string or empty list for unresolved values; do not omit fields or add domain-specific sibling keys. Map event type and phase, program truth, cultural authority, live capture, copy logic, gates, and approvals into the canonical fields rather than renaming the schema.

```yaml
industry_direction:
  primary_skill: "chany-live-culture-events"
  mode_or_subtype: "performance | exhibition | conference | event | local-or-cultural-festival"
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
    domain_id: "live-culture-events"
    l1: "Event Photography"
    l2: ""
    query_count: 1
  required_disclosures: []
  prohibited_or_high_risk: []
  human_review_gate: "none | before generation | before publication"
  unresolved_decisions: []
```

## Delegation

- `chany-marketing-brief`: audience, phase, message, channel, asset matrix, schedule, and measurement plan.
- `chany-reference-board`: one approved L1 query and at most one direct L2 query.
- `chany-campaign-visual`: master event, performance, exhibition, program, or festival key visual.
- `chany-ad-creative`: announcement, lineup, ticket, registration, countdown, poster, display, social, and sponsor placements.
- `chany-detail-page`: event listing, program, schedule, artist, access, travel, FAQ, ticket, and impact modules.
- `chany-ugc-ads`: creator invitation, preview, attendee experience, backstage, recap, or vertical event video.

This skill retains authority over program truth, phase and journey fit, cultural representation, artist and audience rights, accessibility, total-price, live-capture safety, and sponsor disclosure.

## Reference query invariant

Set `reference_route.domain_id` to `live-culture-events`. Search one central-taxonomy L1 category first and optionally one of its direct L2 subtypes second. Keep `l2` empty and `query_count` at `1` unless a direct subtype is selected, then set it to `2`. Never append style, lens, lighting, location, color, emotion, quality, layout, platform, artist, venue, brand, creator, or campaign modifiers. Valid examples are `Event Photography` followed by `Festival Photography`, or `Cultural Campaign Design` followed by `Local Festival Campaign Design`. `Korean night festival fireworks cinematic vertical reel` is invalid.

## Publication gate

Verify current rules for the event jurisdiction, venue, ticketing service, advertising platform, artist contracts, artwork and music rights, filming notices and releases, minors, accessibility, total price, sponsors, weather, and crowd operations. Treat this as an escalation checklist, not legal or safety certification. Stop publication or live capture when responsible operational approval is missing.
