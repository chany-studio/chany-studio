# Commercial Creative Direction System

Use this contract whenever a Chany skill plans, prompts, generates, edits, assembles, or reviews a customer-facing visual. It turns a plain-language request into a professional art-direction decision without requiring the user to know design vocabulary.

## 1. Beginner autopilot

Do not ask the user to choose lenses, palettes, typography genres, composition devices, or trend names. Infer those from the offer, audience decision, channel, evidence, brand assets, and industry packet. Ask only when a missing business fact or taste boundary would materially change the result.

When direction is not already approved, create three genuinely different concept territories:

1. `brand-core`: the most durable, evidence-led expression of the brand
2. `emotional-editorial`: a more sensory or narrative interpretation of the same message
3. `trend-forward`: one current signal translated into the brand's own visual language

Recommend one territory. Score each from 1–5 for brand fit, audience relevance, message clarity, category distinction, channel fitness, production feasibility, and trend longevity. Never make three cosmetic variations of the same layout. If the user asked for automatic production, continue with the highest-scoring territory after showing the decision record; otherwise wait for selection before paid work.

## 2. Creative direction packet

```yaml
creative_direction:
  direction_version_id: ""
  brief_version_id: ""
  industry_direction_id: ""
  objective_and_decision: ""
  one_message: ""
  one_emotional_tension: ""
  proof_object: ""
  concept_name: ""
  concept_sentence: ""
  signature_device: ""
  composition_system: ""
  subject_scale_and_gaze: ""
  palette:
    base: []
    accent: ""
    contrast_logic: ""
  light_and_atmosphere: ""
  materials_and_texture: ""
  typography_plan: ""
  copy_zone_and_safe_area: ""
  motion_language: ""
  trend_signal:
    name: "none | current named signal"
    role: "none | dominant | accent"
    source_and_date: ""
    brand_translation: ""
    reject_if: ""
  authority_locks: []
  exact_copy_locks: []
  exclusions: []
  channel_adaptations: []
  acceptance_criteria: []
  status: "draft | recommended | approved | invalidated"
```

The signature device is one memorable visual idea: a material transformation, color field, scale contrast, reveal, repeated shape, light behavior, spatial rhythm, or narrative gesture. It must clarify the message, not decorate it.

## 3. Taste model

Professional polish comes from decisions and restraint, not adjective density.

- Build one clear focal hierarchy. A subject, proof, offer, and CTA may coexist, but they cannot all be equally loud.
- Use deliberate asymmetry, optical balance, negative space, crop tension, depth, or repetition only when they support the message.
- Prefer tactile specificity—paper tooth, brushed metal, condensation, woven fibre, skin texture, food surface, glass thickness, imperfect reflection—over vague words such as `luxury`, `premium`, or `cinematic`.
- Use a restrained base palette and one intentional accent unless the chosen concept genuinely requires expressive colour.
- Make lighting describe material and emotion: direction, softness, falloff, contrast ratio, shadow character, highlight control, and colour temperature.
- Let real products, spaces, people, food, interfaces, vehicles, events, and evidence keep plausible scale and imperfection. Do not airbrush away credibility.
- Establish typography by role—display, support, proof, CTA, disclosure—and specify contrast, alignment, density, and line length. Do not invent a font name when no typeface is supplied.
- Translate a trend into one controlled device. Never paste an entire trend aesthetic over the brand.

## 4. Production prompt compiler

Use short labelled sections. This follows current GPT Image guidance: stable structure, explicit intended use, concrete visual details, indexed inputs, and clear change-versus-preserve constraints are more reliable than clever syntax or a long adjective chain.

```text
[OUTCOME]
Create [exact deliverable] for [audience, decision stage, channel and intended use].
The single communication job is [message]. Success means [observable criteria].

[AUTHORITY INPUTS]
Image 1: [product / person / garment / space / UI / vehicle / event / evidence authority].
Image 2: [approved campaign master or direction-only reference].
State what each input controls and what it does not control.

[SCENE AND SUBJECT]
[Background or environment first]. [Primary subject and action].
[Real materials, scale, pose, gaze, interaction, food integrity or UI state].

[ART DIRECTION]
Concept: [one sentence]. Signature device: [one device].
Composition: [framing, viewpoint, subject placement, depth, negative space].
Light: [direction, softness, falloff, contrast, temperature].
Colour/material: [base, accent, tactile detail and controlled current signal].

[COPY AND LAYOUT]
Exact text, typography roles, hierarchy, copy zone and safe area—or `no text in image`.

[PRESERVE]
[Identity, geometry, label, garment, product count, perspective, approved palette, copy and evidence locks].

[EXCLUDE]
[Only concrete failure classes: extra objects, text drift, logo drift, plastic skin, implausible mechanics, watermark, unapproved claim].

[OUTPUT AND ACCEPTANCE]
[Pixel size or ratio, file/background requirements, expected display size].
[Five or fewer observable pass conditions].
```

For a surgical edit, reduce the prompt to `Change`, `Preserve`, `Constraints`, and `Acceptance`. Repeat the preserve list on every iteration. Change one defect class at a time.

## 5. Content-family best practices

| Family | Expert default | Common failure to prevent |
|---|---|---|
| campaign strategy | one audience decision, one message hierarchy, one proof plan, one measurable variable | channel list without a decision or evidence model |
| product and food assets | clean authority view plus truthful detail and use context; material, label and ingredient fidelity | floating object, invented back label, over-smoothed food, decorative clutter |
| reference board | six Pinterest Pins by default or the user's explicit positive count; extract composition, light, colour, material and hierarchy only | copying subject, packaging, logo, copy, branded pixels or an outbound site |
| key visual | one campaign idea and signature device with reusable crop and copy-zone logic | a pretty isolated image with no system or message |
| detail and landing | answer the next buyer question with the nearest real proof; mix overview, use and detail views | fixed template, unsupported proof, endless feature cards, fake review or scarcity |
| static ad, poster and banner | one goal, one message, one CTA; placement-native hierarchy at real display size | feature dump, tiny copy, fake UI button, generic gradient and collage noise |
| model and fashion | identity and wardrobe authority, believable fit, fabric weight, pose and occlusion | face drift, redesigned garment, plastic skin, catalogue stiffness |
| image edit | one named change with everything else frozen | global redesign disguised as a correction |
| campaign video | channel-specific opening, early message or brand cue, scene jobs, clear close, sound/text plan | mood montage, late product reveal by habit, impossible motion, purposeless transitions |
| assembly and variants | accepted clips, measured target, safe areas, one-variable variants | changing edit, copy, grade and audio at once |
| industry overlay | journey, proof, directing rules and claim boundaries shape the same creative system | generic product aesthetics overriding domain truth |
| publication and QA | inspect authority, hierarchy, exact copy, rights, evidence, channel and final render | provider success or visual beauty treated as publication clearance |

## 6. Anti-genericity gate

Fail or revise a concept when two or more of these appear without a brand-specific reason:

- vague direction made only of `premium`, `minimal`, `modern`, `cinematic`, `elegant`, or `emotional`
- blue-purple gradient, glass cards, floating spheres, random neon, fake holograms, or identical rounded-card grids used as automatic AI decoration
- stock-smile people, poreless skin, spotless food, impossible reflections, or weightless products
- centred subject plus empty headline area repeated across every asset
- trend name copied literally with no message, category, or brand translation
- dense adjective strings, conflicting camera instructions, or more than one dominant visual device
- generic AI copy such as “혁신적인”, “차세대”, “한 차원 높은”, or “새로운 패러다임” without a sourced reason

Do not ban a familiar device merely because it is popular. Keep it when it is functional, brand-consistent, and executed with specific content, hierarchy, and craft.

## 7. Review loop

Inspect the first result at final size and high zoom. Name the single largest gap between the approved packet and the output. Correct only that gap while freezing accepted properties. Stop under the shared media-production attempt limit. Trend freshness never justifies silently changing an approved concept, model, paid scope, or authoritative input.
