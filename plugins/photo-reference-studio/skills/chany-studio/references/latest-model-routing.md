# Live model routing for advertising production

This is a task router, not a frozen catalog or automatic permission to change models. Before every paid operation, inspect the connected host's current model/tool contract, input roles, limits, cost, availability, and account. If a named route is absent, do not invent the model ID or silently fall back.

GPT Image 2.5 remains the default generative still model under `image-generation-runtime.md`. Use an alternate only for a capability the default cannot provide and after the scoped override is shown in the confirmation card.

Verified Higgsfield snapshot — 2026-09-18:

| Need | Candidate route | Why it may fit | Boundary |
| --- | --- | --- | --- |
| General reference-led video, edit, or extension | `seedance_2_5` | multimodal references, video edit/extension, native audio option | resolve mode and source duration live |
| Ordered independent edits of one 4–30s ad | `ad_multiplier` through `chany-ad-variants` | preserves source structure while changing targeted content | not ordinary generation or Cartesian combinations |
| Start/end-frame storyboard or synchronized audio | `flux_3_video` | multi-frame generation and audio | verify duration and required media roles |
| Edit up to the supported source window | `flux_3_video_edit` | prompt-led source-video edit | no automatic full-length assumption |
| High-resolution source-video edit | `kling_video_edit` | optional references and up to the live quality modes | validate source fidelity and text/audio preservation |
| Native-audio multimodal generation/edit | `gemini_omni_flash_1_1` | keyframes, references, edit, up to live 4K mode | only supported ratios and modes |
| Short expressive video with image/audio reference | `grok_video_v15` | multimodal short-form generation | no default preference over product-fidelity routes |
| Typography-heavy still editing | `openai_hazel` | live catalog describes stronger text rendering/editing | limited live aspect ratios; not the default still model |
| Logo, icon, vector, flat product mockup | `recraft_v4_1` | vector/utility modes and palette control | no reference images in the verified contract; do not use for source-faithful product insertion |
| YouTube-to-social recut | `clipify` through `chany-shortform-recut` | clip selection, crop and subtitle controls | one authorized YouTube URL per verified job |
| Product mesh | `meshy_v7_image_to_3d` or current multi-view model | textured GLB, topology/PBR options | reconstructed geometry is not CAD truth |
| Editable 3D ad scene and camera previs | 3D Jutsu through `chany-product-3d` | scene objects, lighting, camera and animation | separate scene project from mesh generation |

Do not display this model table to a beginner unless the choice materially changes cost, fidelity, duration, inputs, or output. Present the recommended route in plain Korean and show the exact resolved tool/model only in the confirmation card.
