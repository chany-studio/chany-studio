# Higgsfield UGC Advertising Production

Use this workflow as a marketing, truth, cost-control, and QA layer over capabilities actually exposed by the current Higgsfield connection. Prefer an official UGC Factory workflow when it is available; do not rebuild it from many separate generation calls unless the official workflow is unavailable and the replacement path is supported and appropriate.

Before scripting, import the canonical industry packet's `message_job`, `proof_objects`, `claim_ledger`, `must_capture`, `directing_rules`, `required_disclosures`, `prohibited_or_high_risk`, and `human_review_gate`. Translate those controls into scene evidence, spoken and on-screen qualifications, negative constraints, and the publication checklist without renaming away their authority.

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
| `service-experience` | need → real process or evidence → qualified benefit → next step → CTA | service scope, process, staff, claim evidence, disclosure |
| `visit-booking` | occasion → truthful place or event experience → practical proof → booking or ticket CTA | current place/event facts, access, price/fee, availability, rights |

Choose one primary mode. A hybrid may be used only when the user names it and the combined story still has one hook and CTA.

Localization is a downstream variant stage that may follow any primary mode. It requires an approved master, terminology and fixed-copy rules, target locale, and voice permission; it is never the primary narrative mode.

## UGC state

```yaml
ugc_mode: ""
industry_and_mode: ""
journey_stage: ""
proof_objects: []
claim_limitations: []
must_capture: []
directing_rules: []
required_disclosures: []
prohibited_or_high_risk: []
human_review_gate: ""
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

### Optional explainer or localization block manifest

Use a block manifest only when an explainer or localized master must be assembled from multiple generated clips. Approve the master narration before creating the manifest. Map each approved narration unit to exactly one clip; splitting, merging, or rewriting a unit creates a new script version that requires approval before paid work.

```yaml
manifest_id: ""
master_locale: ""
approved_script_version: ""
identity_authority_ids: []
input_asset_version_ids: []
stable_style_key: ""
resolved_workflow_family: ""
duration_authority: "live workflow schema or quote"
blocks:
  - block_id: ""
    approved_narration_unit: ""
    audio_asset_or_job: ""
    clip_asset_or_job: ""
    resolved_duration: ""
    continuity_in: ""
    continuity_out: ""
dependency_order:
  - "approved master narration -> audio"
  - "approved audio -> video clips"
  - "accepted video clips -> assembly"
paid_job_count: ""
retry_reserve: ""
paid_approval_id: ""
cost_approval_status: "pending | approved | invalidated"
```

Derive each clip duration from the currently resolved workflow's live schema and quote. Do not impose a universal duration or silently stretch narration to fit. Keep `stable_style_key` unchanged across blocks and locales unless the user approves a new visual system. Store `manifest_id`, every identity and input-asset version, and `paid_approval_id` in the shared campaign state; an unlinked local approval cannot authorize a resumed or delegated run. Before the first paid operation, show and obtain approval for the total paid-job count, its dependency plan, and the retry reserve. A changed script, input asset, identity authority, workflow, model, billable option, block count, duration, or locale invalidates the affected manifest and paid approval. A reserved retry is a ceiling, not permission to spend it without an observed defect.

## Mode-specific truth rules

### Review

Treat an AI performance as scripted advertising, not verified customer experience. Do not present a fictional person as a real purchaser, create fabricated testimonials, or imply a real creator's endorsement.

### Unboxing

Do not invent sealing, package mechanisms, included accessories, quantities, or first-use behavior. Maintain the actual opening sequence and product state across cuts.

### Tutorial

Use only approved operating steps, safety directions, and results. Do not infer controls, quantities, timings, warnings, or before-and-after outcomes.

### SaaS

Use current authoritative UI captures. Do not generate nonexistent controls, screens, metrics, integrations, or business outcomes. Use a synthetic or isolated test tenant by default; otherwise use only a pre-approved capture that was redacted before it entered the production workflow. Delete unnecessary data rather than masking it, and never expose credentials, secrets, tokens, session values, private account or customer IDs, or confidential records. Approve both the capture and its redaction state before uploading it to any external media service.

### Try-on

Preserve model, garment, and accessory locks across time. Do not recolor, shorten, resize, re-pattern, or redesign a garment, exaggerate a body, or fabricate a result comparison.

### Service experience

Show a real or explicitly scripted process and qualified evidence. Do not turn a fictional creator into a real customer, student, patient, employee, client, or successful case. Do not guarantee legal, financial, educational, health, career, or business outcomes. Preserve the industry's reviewer and disclosure gate.

### Visit or booking

Use current authority for the place, room, menu, event, schedule, access, price, mandatory fee, capacity, and availability. Do not enlarge spaces, fabricate crowds or amenities, imply that staged service is standard, or present old footage as current. Record sponsorship and participant permissions.

### Localization

Approve one language master before expansion. Preserve meaning, product and brand pronunciation, numbers, prices, units, CTA, disclosure, and legal text. Mark what must remain untranslated. Adapt speech length and phrasing for natural timing rather than translating mechanically.

## Consent, claims, and disclosure

- Confirm authorization for an identifiable person's face and cloned voice separately.
- Do not impersonate a celebrity, employee, customer, or creator or fabricate endorsement.
- Use a clearly adult fictional creator when no authorized person is supplied.
- Health, beauty, body-change, education, employment, earnings, professional, performance, safety, availability, and comparative claims require explicit approved wording, limitations, and supporting authority from the user.
- Prohibit fake scarcity, false reviews, manipulated before-and-after content, and invented package contents or software results.
- Record any required AI, advertising, sponsorship, or market-specific disclosure. Do not claim legal compliance has been verified unless it actually has.

## Capture and external-upload gate

For any UI, account, customer, workplace, or service-process demonstration:

1. Prefer an isolated test tenant populated with synthetic, non-identifying data.
2. If a real source is necessary, approve the capture scope first and create a redacted derivative before production. Remove unnecessary rows, fields, metadata, notifications, and background content instead of merely blurring them.
3. Inspect the actual derivative for credentials, secrets, access tokens, session values, private IDs, customer data, and confidential or regulated content. Do not repeat those values in prompts, manifests, filenames, captions, or logs.
4. Obtain a separate upload approval naming the exact derivative, external media service, purpose, and allowed transformation. Capture approval alone does not authorize upload.
5. If safe redaction or authority cannot be verified, stop and use synthetic reconstruction that is clearly labelled when material.

## Higgsfield execution

1. Inspect the active MCP tool list and each candidate tool's current schema.
2. Prefer a single official UGC Factory operation when exposed for the requested mode.
3. Do not assume an attachment in the conversation is already a Higgsfield asset. Use the exposed upload or selection flow and assign product, creator, garment, UI, and reference roles explicitly.
4. Do not infer that a website feature, stage, keyframe editor, model, or template is controllable through MCP merely because it appears on the Higgsfield site.
5. Use individual image, video, avatar, voice, dubbing, or editing calls only when their schemas support the planned fallback.
6. If a required step is interface-only, provide the exact brief, script, shot plan, role map, and settings for that interface and state the boundary.
7. Show a returned in-chat preview when the host supports it. Otherwise identify the real result location or link returned by the tool; never invent one.

### Live-resolved prompt structure

Do not force every image-to-video, text-to-video, edit, avatar, dialogue, dubbing, or assembled workflow through one prompt formula. Resolve the active model or workflow family from the live tool schema first, then use only the structure and fields that family currently supports. For example, distinguish motion and camera direction from edit instructions, dialogue or audio roles, reference-role mapping, and block-manifest assembly. When the live schema does not establish a convention, keep the prompt literal and minimal and state the capability gap instead of borrowing a convention from another family.

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
| product, place, event, package, UI, model, garment, and evidence fidelity | 20 |
| approved claims, offer, CTA, legal and disclosure accuracy | 20 |
| hook, demonstration clarity, pacing, and payoff | 15 |
| creator identity, hands, motion, and temporal continuity | 15 |
| voice, pronunciation, lip sync, noise, and level | 10 |
| captions, overlays, spelling, timing, and safe areas | 10 |
| platform ratio, duration, framing, and final CTA | 10 |

Accept at 90 or higher with no critical failure. Automatic failures include changed authority or identity, invented UI, place, event, availability, outcome, or package contents, unauthorized likeness or voice, false testimony, unapproved claims, wrong offer values, missing limitation, disclosure or legal copy, a missed human-review gate, severely broken hands or continuity, unusable lip sync or audio, incorrect captions, or the wrong platform format.

For a localized version, also compare meaning, names, numbers, disclosures, and consent with the approved master. Do not average a failed locale into a passing set.
