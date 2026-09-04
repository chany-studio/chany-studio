# Marketing Brief Schema

The brief separates commercial truth from creative proposals and turns the requested outcome into a bounded production plan.

## Decision inputs

Record only what is relevant:

| Area | Decision |
|---|---|
| Business objective | awareness, consideration, conversion, or retargeting |
| Audience | who, purchase context, awareness level, and objections supplied by the user |
| Product truth | visible product facts and user-approved specifications, benefits, evidence, and restrictions |
| Offer | exact price, discount, dates, availability, bundle, conditions, and legal copy |
| Message | one primary promise, supporting proof, CTA, and prohibited claims |
| Brand | palette, tone, logo rules, visual codes, and phrases to avoid |
| Distribution | channel, placement, dimensions, duration, safe areas, and locale |
| Production | source assets, reference need, model or creator need, requested deliverables, and budget boundary |

Do not infer sensitive audience attributes or unsupported product performance from an image. Marketing hypotheses are proposals, not customer facts.

## Six-element visual brief

1. subject and authoritative source
2. brand style and emotional tone
3. composition, camera, hierarchy, and copy space
4. light, contrast, shadow, and material response
5. background, support surface, environment, and props
6. channel, ratio or duration, quality, count, and intended use

Put the subject and non-negotiable output requirements first. State the desired state positively and mark uncertainty explicitly.

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

## Asset matrix

Create only the rows needed for the request:

| Asset | Purpose | Channel/format | Primary message | Authority inputs | Owner skill | Count |
|---|---|---|---|---|---|---:|
| master key visual | campaign system | master ratio | campaign idea | product + selected reference | `chany-campaign-visual` | 1 |
| detail module | explain or prove | storefront width | one fact or benefit | product + campaign master | `chany-detail-page` | named |
| static ad | placement response | named ratio | one message + CTA | product + campaign + copy | `chany-ad-creative` | named |
| UGC master | creator-led proof | platform, duration | hook + demo + CTA | product + creator + copy | `chany-ugc-ads` | named |

Show the user the final number of paid assets or multi-stage video operations before execution. Do not silently add A/B variants, ratios, languages, or concepts.

## Test plan

Recommend tests only when requested or useful to the named advertising goal. Each variant changes one variable, for example:

- hook, while product, offer, creator, and CTA remain fixed
- primary benefit, while layout and audience remain fixed
- visual emphasis, while approved copy remains fixed
- CTA treatment, while offer and creative remain fixed

State the expected signal and decision rule; do not promise performance.

## Brief output

Return:

1. objective and audience
2. approved-fact ledger and prohibited claims
3. message hierarchy and copy status
4. channel and placement map
5. six-element visual brief
6. asset matrix and production order
7. proposed test variables, if any
8. unresolved approvals
