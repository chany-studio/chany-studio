# Marketing Brief Schema

The brief separates commercial truth from creative proposals and turns the requested outcome into a bounded production plan.

Start from the canonical `industry_direction` object. Preserve its `message_job`, `proof_objects`, `claim_ledger`, `must_capture`, `directing_rules`, `required_disclosures`, `prohibited_or_high_risk`, and `human_review_gate` without renaming them. A shorter presentation may hide irrelevant empty values, but the handoff state must retain every applicable control.

## Decision inputs

Record only what is relevant:

| Area | Decision |
|---|---|
| Industry direction | primary industry skill, subtype or mode, jurisdiction, journey stage, proof objects, prohibited claims, and human-review gate |
| Business objective | awareness, consideration, conversion, or retargeting |
| Audience | who, purchase context, awareness level, and objections supplied by the user |
| Offer truth | visible and user-approved product, service, place, interface, event, employment, operational, benefit, evidence, and restriction facts |
| Offer | exact price, discount, dates, availability, bundle, conditions, and legal copy |
| Message | one primary promise, supporting proof, CTA, and prohibited claims |
| Brand | palette, tone, logo rules, visual codes, and phrases to avoid |
| Distribution | channel, placement, dimensions, duration, safe areas, and locale |
| Production | source assets, reference need, model or creator need, requested deliverables, and budget boundary |

Do not infer sensitive audience attributes, health status, protected traits, or unsupported performance from an image. Marketing hypotheses are proposals, not customer facts.

## Claim and publication preflight

For every material claim, preserve the canonical claim-ledger fields and add the details needed to review the exact expression. Treat words, visuals, demonstrations, charts, testimonials, and omissions as possible claim carriers.

```yaml
claim_entry:
  claim: ""
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
  source_locator: "file, section, line, URL, or other stable locator"
  checked_at: ""
  status: "missing | draft | verified | approved"
```

For each asset likely to be published, record the jurisdiction, platform and placement, product or service subtype, audience age boundary, exact candidate version, official source title, publisher, direct URL, checked date, effective date or `unknown`, recheck date, exact finding, reviewer, and unresolved blocker. This is a draft preflight, not a `PASS` or legal-clearance label. The exact final render still belongs to `chany-publication-review`.

## Six-element visual brief

1. subject and authoritative source
2. brand style and emotional tone
3. composition, camera, hierarchy, and copy space
4. light, contrast, shadow, and material response
5. background, support surface, environment, and props
6. channel, ratio or duration, quality, count, and intended use

Put the subject and non-negotiable output requirements first. State the desired state positively and mark uncertainty explicitly.

## Brand authority boundary

Record only the brand controls needed for this campaign. An existing brand guide, design system, approved voice sheet, or adopted Moai brand artifact remains the source; the campaign brief does not silently replace it.

```yaml
brand_authority:
  source_paths: []
  voice_do: []
  voice_dont: []
  controlled_terms: []
  palette_or_tokens: []
  allowed_variation: []
  status: "missing | proposed | approved"
```

Treat imported proposals as non-authoritative until the user adopts them. Do not expand this bounded record into an unrequested naming, identity, or design-system project.

## Message hierarchy

Use one primary message and one CTA per placement.

```yaml
primary_message: ""
approved_proof: []
objection_answered: ""
exact_offer: ""
exact_cta: ""
mandatory_legal_copy: ""
status: "draft | approved"
```

When asked to draft copy, provide concise alternatives by changing one strategic variable at a time. Do not label draft ideas as approved or verified.

## Journey and decision map

Map only the stages needed for the requested campaign. For each stage, record the audience's current question, the decision or action sought, the approved proof that can answer it, the channel and asset job, and the next measurable signal. Do not treat a funnel label as evidence about a real audience.

```yaml
journey_step:
  stage: ""
  audience_question_or_barrier: ""
  desired_decision_or_action: ""
  approved_proof: []
  channel_and_asset_job: ""
  next_signal: ""
  unresolved_assumption: ""
```

## Asset matrix

Create only the rows needed for the request:

| Asset | Purpose | Channel/format | Primary message | Authority inputs | Owner skill | Count |
|---|---|---|---|---|---|---:|
| master key visual | campaign system | master ratio | campaign idea | authority source + industry packet + selected reference | `chany-campaign-visual` | 1 |
| detail or landing module | explain or prove | storefront/landing width | one fact or benefit | evidence + campaign master | `chany-detail-page` | named |
| static ad | placement response | named ratio | one message + CTA | authority + industry packet + campaign + copy | `chany-ad-creative` | named |
| campaign video | concept-led motion proof or persuasion | named placement, ratio, duration | one primary message across approved beats | evidence + source authority + copy + optional video teardown | `chany-campaign-video` | named |
| UGC master | creator-led proof | platform, duration | hook + demo + CTA | evidence + creator + copy | `chany-ugc-ads` | named |

Show the user the final number of paid assets or multi-stage video operations before execution. Do not silently add A/B variants, ratios, languages, or concepts.

## Test plan

Recommend tests only when requested or useful to the named advertising goal. Each variant changes one variable, for example:

- hook, while product, offer, creator, and CTA remain fixed
- primary benefit, while layout and audience remain fixed
- visual emphasis, while approved copy remains fixed
- CTA treatment, while offer and creative remain fixed

State the expected signal, observation window, minimum usable sample only when supplied or defensibly calculated for the real context, and decision rule. Change one variable at a time. Do not import universal uplift percentages, benchmark conversion rates, or sample-size rules without current applicable evidence, and do not promise performance.

```yaml
measurement_plan:
  baseline_and_period: ""
  instrumentation_owner: ""
  primary_metric: ""
  guardrail_metrics: []
  one_variable_hypothesis: ""
  minimum_sample_logic: "unknown | supplied or calculated method"
  stop_rule: ""
  decision_rule: ""
```

## Performance review

Use this mode only when the user supplies observed results. Preserve the original creative, campaign, source-master, copy, audience, placement, spend window, and attribution identifiers; matching filenames are not proof that two rows belong to the same experiment.

Before comparing variants, verify metric definitions, instrumentation ownership, attribution window, delivery dates, audience and placement comparability, spend or exposure imbalance, and minimum-sample logic. If those conditions are unavailable, return `inconclusive` or `invalid` rather than naming a winner.

```yaml
performance_review:
  review_id: ""
  campaign_id: ""
  variant_set_id: ""
  source_master_content_hash: ""
  copy_version_id: ""
  observation_window: ""
  metric_definitions: {}
  attribution_and_tracking: ""
  comparable_delivery_conditions: "pass | fail | unknown"
  sample_sufficiency: "sufficient | insufficient | unknown"
  decision: "winner | inconclusive | invalid"
  winning_variant_id: ""
  observed_signal: ""
  diagnosis_hypothesis: ""
  next_single_variable: ""
  fixed_properties: []
  unresolved_questions: []
```

`winner` requires comparable conditions, usable tracking, and sufficient evidence under a supplied or defensibly calculated decision rule. A high CTR with weak acquisition may suggest that the opening earns attention while the later proof or offer fails; it does not prove that diagnosis. Carry the hypothesis into one controlled next-round change.

## Korean copy fact-anchor pass

For Korean copy, first freeze names, direct quotations, dates, prices, quantities, percentages, units, specifications, qualifications, disclosures, and legal text as fact anchors. Then improve only the persuasive phrasing around those anchors for natural Korean, removing translation-like syntax and abstract promotional clichés. Recompare every anchor character-for-character. Never use direct personal-address language to imply a health condition, protected trait, or other sensitive attribute.

## Brief output

Return:

1. industry, mode, jurisdiction, objective, and audience
2. approved-fact and claim ledger, evidence, limitations, and prohibited claims
3. message hierarchy and copy status
4. channel and placement map
5. six-element visual brief
6. asset matrix and production order
7. proposed test variables, or a performance review and next single-variable plan when observed results were supplied
8. human publication gate and unresolved approvals
