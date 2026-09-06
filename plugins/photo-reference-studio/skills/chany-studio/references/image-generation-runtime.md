# Still Image Model Default

Apply this contract to every generative still-image creation or edit owned by Chany's Studio, including campaign visuals, generative product cleanup, detail-page visual plates, static-ad plates, bounded image edits, model or fashion stills, and governing stills created for campaign-video scenes. Non-generative cutouts, deterministic layout, local compositing, video, audio, and clip assembly keep their own tools and are not forced through an image model.

## Default selection

The default still-image generation and editing model is **GPT Image 2**, using the exact model ID `gpt-image-2`. This is a deliberate Chany's Studio default, not a claim that every host or connected provider exposes that model.

Before a generative still-image call:

1. inspect the current host tool or connected provider schema and identify whether it exposes a model selector
2. when an exact selector is available, choose `gpt-image-2`
3. when the host hides model selection, treat GPT Image 2 as resolved only if current tool documentation or runtime metadata explicitly confirms it; otherwise record the resolved model as unavailable
4. preserve every authority input, input role, requested count, format, quality setting, and paid-generation boundary from the owning skill
5. show the requested default and the actually resolved model in the paid-generation approval packet or execution summary

Do not relabel an unknown provider default as GPT Image 2. Do not replace `gpt-image-2` merely because another or newer model exists.

Official model references:

- https://developers.openai.com/api/docs/models/gpt-image-2
- https://developers.openai.com/api/docs/guides/image-generation

## Controlled override

Use another model or provider only when at least one condition is true:

- the user explicitly requests the alternate model or provider for the current asset or project
- an approved project brief already records that alternate default
- a live capability check proves that `gpt-image-2` is unavailable or cannot perform a required operation, input role, format, or policy-constrained transformation

A quality defect, a timeout, a failed call, or the existence of a provider-selected default is not by itself permission to switch models. First inspect the original result or job state under the paid-media runtime contract.

When an override is needed, state the exact alternate model or workflow, why the default cannot be used, which assets the change covers, and whether cost or authority inputs change. Obtain the user's approval before a paid alternate call. The override applies only to that recorded scope; `gpt-image-2` remains the plugin default elsewhere unless the user explicitly updates the project policy.

Changing the model or provider invalidates the affected quote, paid-generation approval, and creative acceptance record. Run a new preflight and approval instead of silently falling back.

## State record

Record the selection with the asset or paid-generation plan:

```yaml
still_image_model:
  requested_default: "gpt-image-2"
  resolved_model: ""
  provider: ""
  selection_status: "exact-default | provider-confirmed-default | override-approved | unavailable"
  override_reason: ""
  override_scope: []
```

Keep `selection_status: unavailable` and stop before generation when neither the default nor an approved override can be resolved honestly.
