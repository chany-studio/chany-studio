# Still Image Model Default

Apply this contract to every generative still-image creation or edit owned by Chany's Studio, including campaign visuals, generative product cleanup, detail-page visual plates, static-ad plates, bounded image edits, model or fashion stills, and governing stills created for campaign-video scenes. Non-generative cutouts, deterministic layout, local compositing, video, audio, and clip assembly keep their own tools and are not forced through an image model.

## Default selection

The default still-image generation and editing model is **GPT Image 2.6**, using the exact model ID `gpt_image_2_6`. This is a deliberate Chany's Studio default, not a claim that every host or connected provider exposes that model.

This default applies to new, unpinned work from plugin 2.18.0 (2026-11-17). Preserve an existing project's explicit or recorded model policy, including GPT Image 2.5 (`gpt_image_2_5`), accepted outputs and in-flight jobs. Do not rewrite existing project records on load. Offer migration only within the requested scope and re-quote affected future jobs; an already-approved 2.5 project does not need renewed model approval merely to continue unchanged.

Before a generative still-image call:

1. inspect the current host tool or connected provider schema and identify whether it exposes a model selector
2. when an exact selector is available, choose `gpt_image_2_6` unless a controlled override below has been approved for this asset; evaluate operation-specific alternatives through [latest-model-routing.md](latest-model-routing.md), not model popularity
3. when the host hides model selection, treat GPT Image 2.6 as resolved only if current tool documentation or runtime metadata explicitly confirms it; otherwise record the resolved model as unavailable
4. preserve every authority input, input role, requested count, format, quality setting, and paid-generation boundary from the owning skill; for ad work set quality and resolution explicitly as in [product-insertion.md](product-insertion.md) §5 instead of accepting the provider's speed-oriented defaults
5. show the requested default and the actually resolved model in the paid-generation approval packet or execution summary

Do not relabel an unknown provider default as GPT Image 2.6. Do not replace `gpt_image_2_6` merely because another or newer model exists.

Official model references:

- https://openai.com/index/introducing-images-2-6/
- https://developers.openai.com/api/docs/guides/image-generation

## Controlled override

Use another model or provider only when at least one condition is true:

- the user explicitly requests the alternate model or provider for the current asset or project
- an approved project brief already records that alternate default
- a live capability check proves that `gpt_image_2_6` is unavailable or cannot perform a required operation, input role, format, or policy-constrained transformation
- the assistant proposes a concrete task-fit advantage under `latest-model-routing.md`, checks the alternate's live support for all required inputs/locks, and the user approves that scoped alternate in the existing direction/copy/cost confirmation card

A quality defect, a timeout, a failed call, or the existence of a provider-selected default is not by itself permission to switch models. First inspect the original result or job state under the paid-media runtime contract.

When an override is proposed, state the exact alternate model or workflow, why it better fits this operation or why the default cannot be used, which assets the change covers, and whether cost or authority inputs change. A recommendation must identify a concrete advantage (such as supported masked editing or vector output) or a clearly labelled style-fit hypothesis; genre, recency, provider slogans or an untested quality ranking alone are insufficient. If the trade-off is uncertain, keep GPT Image 2.6. Obtain the user's approval before a paid alternate call, using the existing confirmation card rather than adding a model-selection gate. The override applies only to that recorded scope; `gpt_image_2_6` remains the plugin default elsewhere unless the user explicitly updates the project policy.

Changing the model or provider invalidates the affected quote, paid-generation approval, and creative acceptance record. Run a new preflight and approval instead of silently falling back.

## Higgsfield GPT Image 2.6 default

The exact model ID `gpt_image_2_6` is Higgsfield-specific; do not assume it works on another host. The 2026-11-17 catalog identifies it as Sunburst; Flare is the separate model ID `gpt_image_2_6_flare`. There is no `variant` parameter in the checked 2.6 contract. The older 2.5 `variant: sunburst/flare` option must not be copied into 2.6 calls. The checked catalog includes native `4:5` support. Recheck the current host's schema and ratio before execution.

Use Sunburst for the new default and propose Flare only for a concrete scoped need under the same override policy. Do not claim a comparative quality win without testing. Explicitly set quality, resolution, background and output format; disclose actual options and the live quote. Do not silently accept the provider's low/1k defaults for a final asset or force maximum settings on every draft.

Bind the exact model ID/options to the existing asset/job record. Preserve original product, label, approved text and layout authorities; test those properties and cross-card consistency on the actual output. A model change does not allow changing reference sources or copy. If the model is absent, mark it unavailable and ask before choosing another model; do not silently revert or relabel results.

Source checked 2026-11-17: connected Higgsfield `models_explore` and [OpenAI announcement, 2026-11-04](https://openai.com/index/introducing-images-2-6/). Catalog availability was observed; end-to-end quality was not established. Read [current generation capabilities](current-generation-capabilities.md) for GIF/SVG and mode-specific limits. Native OpenAI API parameters are not automatically Higgsfield parameters.

## State record

Record the selection with the asset or paid-generation plan:

```yaml
still_image_model:
  requested_default: "gpt_image_2_6"
  resolved_model: ""
  provider: ""
  selection_status: "exact-default | provider-confirmed-default | override-approved | unavailable"
  override_reason: ""
  override_scope: []
```

Keep `selection_status: unavailable` and stop before generation when neither the default nor an approved override can be resolved honestly.
