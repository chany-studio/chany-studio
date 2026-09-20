# Live model routing for advertising production

This is a task router, not a frozen catalog or automatic permission to change models. Before every paid operation, inspect the connected host's current model/tool contract, input roles, limits, cost, availability, and account. If a named route is absent, do not invent the model ID or silently fall back.

GPT Image 2.5 remains the default generative still model under [image-generation-runtime.md](image-generation-runtime.md). Keep it when it meets the job and no concrete reason favors a scoped alternative. A task-fit recommendation is a proposal, not permission to switch; obtain approval in the existing paid confirmation card. Do not force still-image policy onto video or non-generative editing.

## Select a workflow before a model

1. Reuse [content intent](content-intent.md), authoritative inputs, approved direction and acceptance criteria. Infer the operation from the requested change: create a new scene, edit an existing asset, remove a background, extend a frame/clip, set type/layout, or assemble footage. Do not regenerate an accepted asset for a deterministic text, crop or timing change.
2. Filter for actual execution support: source media roles/counts, required mask or first/last frame, edit mode, source duration, ratio, output format/resolution, audio, rights, account and writable/rendering capability. A genre label alone never passes this filter. A web feature is not proof of connector access. Reject routes that cannot accept product authority; do not drop an input to make a model fit. A reference reshoot under [reference-led-design.md](reference-led-design.md) needs support for the planned viewpoint/composition changes while retaining identity; cutout/background-only tools cannot satisfy it. An image-to-image/edit API may still perform a reshoot if its actual capabilities fit; select by operation, not endpoint name.
3. Among feasible routes, prioritize source fidelity and the requested deliverable, then the user's budget/deadline. Prefer a dedicated tool for cutout, outpaint, reframe, type, subtitles, upscale or assembly when it changes less and meets the job. Upscaling cannot repair false labels or broken geometry. Do not use an opaque `image_auto` route as a substitute for a resolved model.
4. Recommend one route and one plain-language reason. For stills, evaluate GPT Image 2.5 first; compare at most one relevant alternate when there is a task-specific advantage, not an unsupported "best" ranking. For video, Seedance 2.5 is the first general-purpose candidate when its live mode fits, not a universal winner. User/project model preferences remain authoritative unless infeasible, in which case explain the limitation and propose an alternative.
5. Bind the actual model, mode, variant, authority inputs, options, requested count, total stages, quote and reason to the existing asset/job plan. Confirm them once with direction/copy/cost under the beginner and paid-runtime contracts. "알아서 해줘" authorizes recommendation and preparation, not unlimited paid calls or a hidden model switch. Setup only records a provisional workflow; model resolution happens at production time.
6. Execute through the existing owner and media loop, inspect the actual result against the intended effect and preservation criteria, and use only bounded approved corrections. Failed or ambiguous jobs require job-state recovery, not another model call. A model change invalidates the affected quote and approval. Keep unrelated accepted outputs locked.

Do not send a model catalog to the user or add a separate skill per model. Do not run a paid comparison merely to select a model. If evidence cannot distinguish candidates, retain the default, record uncertainty and verify the output. Provider positioning is not comparative quality evidence or a conversion guarantee.

## Image candidates, not automatic genre assignments

Verified Higgsfield catalog snapshot — 2026-09-19; exact IDs and options must be rechecked live. Recommendations below are task-fit hypotheses, not same-condition quality benchmark results.

| Need | Candidate route | Decision boundary |
| --- | --- | --- |
| Product advertising, reference-led stills, general generative edits | `gpt_image_2_5`, Flare/Sunburst as exposed | default; choose actual quality/resolution explicitly; check label, shape and reference roles |
| Dense information, diagrams or integrated text | `nano_banana_pro`; `seedream_v5_pro` for instruction-led alternatives | compare only if helpful to the concrete brief; exact Korean/price/legal text still needs proofing or deterministic typesetting |
| Masked local edit | `nano_banana_2` or supported masked/composite tool | verified mask and image roles are a concrete reason to propose an override; untouched pixels still require comparison |
| Brand-color/material/composition instruction | `flux_2` | candidate when the stated controls help; no exact color-match or superior fidelity guarantee |
| Adult fashion/portrait editorial | `soul_2` | optional task-fit proposal; retain identity/consent and garment locks; never choose solely from industry name |
| Cinematic governing still | `soul_cinematic` or `cinematic_studio_2_5` | optional film-direction proposal; reuse an accepted governing still instead of creating an extra test |
| Frame expansion | dedicated outpaint or `flux_2_pro_outpaint` | first consider crop/layout; preserve original region; generative alternate still needs scoped consent |
| Cutout, typography/layout, enlargement | supported dedicated background removal, layout/composite or upscale tool | avoid generative reconstruction when source pixels must remain exact; verify alpha, copy and intended delivery size |

## Video, revision and specialized routes

| Need | Candidate route | Why it may fit | Boundary |
| --- | --- | --- | --- |
| General reference-led video, edit, or extension | `seedance_2_5` | multimodal references, video edit/extension, native audio option | resolve mode and source duration live |
| Source-preserving video change, not a new commercial | campaign-video [bounded video edit](../../chany-campaign-video/references/video-edit.md) | selects edit operation and preserve scope before a model | no mandatory new still, strategy interview or photo board |
| Product/person motion with first/last frames | `kling3_0` | keyframes and audio controls | test interactions and continuity; do not assume web multi-shot UI is exposed |
| Short cinematic scene or atmosphere | `veo3_1` | source-frame and cinematic/audio candidate | verified connector durations were 4/6/8s; do not import website limits |
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

## Reusable decision record

Add this compact decision to the existing asset specification or paid-generation plan, not a separate state file: intended effect and placement; operation and owner; authority/preserve scope; requested default or user preference; proposed and resolved model/mode/options; one task-fit reason; live schema check date and constraints; quote/approval reference; unresolved limitations. Mark selection `proposed`, `resolved`, `approved`, or `unavailable` honestly. Stills retain the separate `still_image_model` fields required by their runtime. A recorded recommendation is not an execution approval.

Pass the same record at handoffs. Re-resolve only if inputs, operation, requirements, model access or the provider contract changed; paid preflight still applies to each billable operation. Do not ask the user to choose models again after an unchanged decision was accepted.

Do not display these model tables to a beginner unless explicitly comparing choices. Explain any material cost/fidelity trade-off in plain Korean and show the exact resolved tool/model in the existing confirmation card. The repository research memo `docs/HIGGSFIELD-MODEL-RESEARCH-2026-09-19.md` preserves source URLs and research limitations; installed execution must rely on the current connected contract, not that repository-only memo.
