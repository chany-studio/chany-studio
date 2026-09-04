# Industry overlay contract

Chany's Studio uses two independent axes:

- an **industry skill** decides market logic, decision journey, proof, domain-specific visual language, claims risk, and the L1-to-L2 reference route
- a **production skill** decides how to make and validate the requested brief, reference board, image, page, advertisement, edit, fashion still, or UGC video

An industry skill is an overlay, not a replacement production pipeline. Do not duplicate the production manuals inside an industry skill, and do not let a generic production skill invent domain expertise when an overlay exists.

## Selection rules

1. Infer the commercial domain from the offer and desired action, not just the object visible in an attachment.
2. Select exactly one primary industry skill when the domain is known.
3. Add a secondary industry skill only when the campaign has two independently regulated or behaviorally distinct offers. Record the boundary and which deliverables each overlay governs.
4. A packaged food product sold as an object remains general product marketing; a restaurant, cafe, reservation, or delivery experience uses `chany-food-dining`.
5. A hotel whose action is booking uses `chany-hospitality-travel`; an architect portfolio or property sale/lease uses `chany-space-real-estate`.
6. A product UI embedded in a consumer device follows `chany-consumer-tech-marketing` as primary unless the software subscription itself is the offer.
7. An event at a hotel follows `chany-live-culture-events` for ticketing and attendance assets and `chany-hospitality-travel` only for stay-booking assets.

If the domain is genuinely ambiguous and the choice would materially change claims or deliverables, ask one concise question. Otherwise choose the narrowest reasonable domain and label the inference.

## Industry direction packet

Every industry skill returns this compact handoff before production. The root key and field names below are normative: use `industry_direction` exactly and include every listed field, even when its value is empty or `unknown`. Domain-specific fields may be added, but they never replace, rename, or nest away a canonical field. Production skills consume only this canonical contract.

```yaml
industry_direction:
  primary_skill: ""
  mode_or_subtype: ""
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
    domain_id: ""
    l1: ""
    l2: ""
    query_count: 1
  required_disclosures: []
  prohibited_or_high_risk: []
  human_review_gate: "none | before generation | before publication"
  unresolved_decisions: []
```

Keep facts and proposals separate. `verified` means checked against a named current source; it does not mean the user approved publication. `approved` requires user or named-reviewer approval. If a claim lacks evidence or a necessary limitation, lower the message to a process, feature, philosophy, or invitation that can be supported.

## Prompt compilation order

Production skills compile the final prompt in this order:

1. commercial objective, KPI, audience, decision role, and journey stage
2. desired action, one message job, one CTA, and approved proof objects
3. authoritative subject, identity, UI, space, person, or event locks
4. domain-specific scene, shot role, action, camera, light, sound, and environment
5. channel, format, duration, safe area, accessibility, disclosure, and locale
6. limitations, rights, consent, regulatory uncertainty, and negative constraints
7. requested output count and QA threshold

Do not paste the whole playbook into a generation prompt. Pass only the packet fields that affect the named asset.

## Reference-search handoff

The industry skill may select only a domain branch and one direct subtype from `chany-reference-board/references/industry-taxonomy.json`.

- Search L1 first.
- Search zero or one L2 direct subtype second.
- Never add audience, funnel stage, location, channel, color, style, mood, camera, lens, lighting, ratio, brand, year, or quality adjectives to either query.
- If L2 is uncertain or results are weak, stop at L1 and improve curation. Do not descend or create a third query.

All visual specifics stay in ranking, Visual DNA, and the production prompt after discovery.

## Publication gate

Industry skills provide production controls, not legal clearance. Before publication when a claim, transaction, outbound message, endorsement, right, disclosure, platform, or regulated/sensitive context is involved, route the exact frozen asset through `chany-publication-review`:

- verify the current jurisdiction, platform, product/service subtype, and audience-age rules
- recheck claims, evidence, qualifications, disclosures, rights, consent, price, availability, and accessibility
- require the named human reviewer when the packet says so
- never report “legally compliant,” “platform approved,” or “safe to publish” solely because a skill was followed
