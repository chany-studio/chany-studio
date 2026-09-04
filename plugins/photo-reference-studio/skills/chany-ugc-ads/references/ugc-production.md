# Higgsfield UGC Advertising Production

Use this workflow as a marketing, truth, cost-control, and QA layer over capabilities actually exposed by the current Higgsfield connection. Prefer an official UGC Factory workflow when it is available; do not rebuild it from many separate generation calls unless the official workflow is unavailable and the replacement path is supported and appropriate.

Official references:

- UGC Factory: https://higgsfield.ai/skills/ugc
- Higgsfield MCP: https://higgsfield.ai/creator-hub/help-center/integrations/what-is-higgsfield-mcp
- Agent connection: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent

## Modes

| Mode | Narrative | Required authority |
|---|---|---|
| `product-review` | hook → use context → approved benefit → reaction → CTA | product, claims, creator, offer |
| `unboxing` | sealed package → opening → included items → close-up → first reaction | packaging and exact included-item list |
| `tutorial` | problem → ordered steps → result → caution → CTA | approved instructions and safety information |
| `saas` | problem → real UI path → feature → approved outcome → CTA | current screen recording or screenshots and approved feature facts |
| `try-on` | product before wear → dressing transition → fit/detail → styling → reaction | creator, garment, and accessory authorities |

Choose one primary mode. A hybrid may be used only when the user names it and the combined story still has one hook and CTA.

Localization is a downstream variant stage that may follow any primary mode. It requires an approved master, terminology and fixed-copy rules, target locale, and voice permission; it is never the primary narrative mode.

## UGC state

```yaml
ugc_mode: ""
product_authority: ""
subject_lock: []
creator_authority: ""
creator_lock: []
creator_consent_status: "unknown | confirmed | fictional"
voice_authority: ""
voice_consent_status: "unknown | confirmed | synthetic"
garment_authorities: []
approved_claims: []
prohibited_claims: []
offer_and_legal_copy: []
script_status: "draft | approved"
hook: ""
cta: ""
platform: ""
ratio: "9:16"
duration_target: ""
language_master: ""
locales: []
subtitle_style: ""
disclosure_copy: ""
deliverable_count: 1
planned_generation_steps: []
credit_boundary: ""
```

Treat `credit_boundary` as an agent stop rule, not as evidence that the remote service enforces a hard spending cap.

Default to one concept, one final video, one language, and `9:16` when the platform context supports it. Do not add A/B variants, locales, ratios, or creators without approval.

## Script and shot plan

Use `hook → demonstration or proof → reaction or payoff → CTA`. Every scene records:

```yaml
scene: 1
duration: ""
visual_action: ""
product_state: ""
spoken_line: ""
on_screen_text: ""
audio_or_sfx: ""
continuity_from_previous: ""
```

Keep the first one to three seconds decisive for short-form placements, but do not manufacture sensational claims. Spoken copy, captions, overlays, CTA, price, offer, and legal copy share the same approved-copy authority.

## Mode-specific truth rules

### Review

Treat an AI performance as scripted advertising, not verified customer experience. Do not present a fictional person as a real purchaser, create fabricated testimonials, or imply a real creator's endorsement.

### Unboxing

Do not invent sealing, package mechanisms, included accessories, quantities, or first-use behavior. Maintain the actual opening sequence and product state across cuts.

### Tutorial

Use only approved operating steps, safety directions, and results. Do not infer controls, quantities, timings, warnings, or before-and-after outcomes.

### SaaS

Use current authoritative UI captures. Do not generate nonexistent controls, screens, metrics, integrations, or business outcomes. Keep sensitive user data out of demonstrations.

### Try-on

Preserve model, garment, and accessory locks across time. Do not recolor, shorten, resize, re-pattern, or redesign a garment, exaggerate a body, or fabricate a result comparison.

### Localization

Approve one language master before expansion. Preserve meaning, product and brand pronunciation, numbers, prices, units, CTA, disclosure, and legal text. Mark what must remain untranslated. Adapt speech length and phrasing for natural timing rather than translating mechanically.

## Consent, claims, and disclosure

- Confirm authorization for an identifiable person's face and cloned voice separately.
- Do not impersonate a celebrity, employee, customer, or creator or fabricate endorsement.
- Use a clearly adult fictional creator when no authorized person is supplied.
- Health, beauty, body-change, earnings, performance, and comparative claims require explicit approved wording and supporting authority from the user.
- Prohibit fake scarcity, false reviews, manipulated before-and-after content, and invented package contents or software results.
- Record any required AI, advertising, sponsorship, or market-specific disclosure. Do not claim legal compliance has been verified unless it actually has.

## Higgsfield execution

1. Inspect the active MCP tool list and each candidate tool's current schema.
2. Prefer a single official UGC Factory operation when exposed for the requested mode.
3. Do not assume an attachment in the conversation is already a Higgsfield asset. Use the exposed upload or selection flow and assign product, creator, garment, UI, and reference roles explicitly.
4. Do not infer that a website feature, stage, keyframe editor, model, or template is controllable through MCP merely because it appears on the Higgsfield site.
5. Use individual image, video, avatar, voice, dubbing, or editing calls only when their schemas support the planned fallback.
6. If a required step is interface-only, provide the exact brief, script, shot plan, role map, and settings for that interface and state the boundary.
7. Show a returned in-chat preview when the host supports it. Otherwise identify the real result location or link returned by the tool; never invent one.

## Cost checkpoint

One finished video may require several generation, voice, caption, localization, or assembly operations. Before generation, show:

- final deliverable count
- number of concepts, scenes, ratios, and locales
- planned paid operations and known cost information returned by the tool
- the stop point if actual cost is unknown or exceeds the user's boundary

Do not describe one final video as one generation call unless the active tool actually performs it in one call. Retry only for an observed critical defect, once by default. Localization variants begin only after approval of the master.

## QA

Inspect the final time-based result, not merely a thumbnail:

| Criterion | Weight |
|---|---:|
| product, package, UI, model, and garment fidelity | 20 |
| approved claims, offer, CTA, legal and disclosure accuracy | 20 |
| hook, demonstration clarity, pacing, and payoff | 15 |
| creator identity, hands, motion, and temporal continuity | 15 |
| voice, pronunciation, lip sync, noise, and level | 10 |
| captions, overlays, spelling, timing, and safe areas | 10 |
| platform ratio, duration, framing, and final CTA | 10 |

Accept at 90 or higher with no critical failure. Automatic failures include changed product or identity, invented UI or package contents, unauthorized likeness or voice, false testimony, unapproved claims, wrong offer values, missing legal copy, severely broken hands or continuity, unusable lip sync or audio, incorrect captions, or the wrong platform format.

For a localized version, also compare meaning, names, numbers, disclosures, and consent with the approved master. Do not average a failed locale into a passing set.
