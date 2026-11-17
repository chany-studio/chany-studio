# Checked generation capabilities — 2026-11-17

This is a dated implementation aid, not a price list or permission to execute. Resolve the current model and host tool before every paid job under [live model routing](latest-model-routing.md) and [paid runtime](higgsfield-runtime-contract.md). The direct Higgsfield MCP uses model-native media roles; the Apps connector can require canonical roles. Do not copy fields, media URLs or account selection between them without checking the actual schema.

## Images and small animated assets

- `gpt_image_2_6` is Sunburst; `gpt_image_2_6_flare` is a separate model. No 2.5-style `variant` argument. Newly unpinned work uses Sunburst; existing model policies and jobs remain intact.
- Checked options: quality auto/low/medium/high/xhigh/max, resolution 1k/2k/4k, background auto/opaque/transparent, up to 16 image references. Choose quality explicitly for the delivery; a new model does not guarantee perfect labels or geometry.
- PNG/JPEG/WebP are raster outputs. GIF is native animation when supported: `frame_count` 2–64, `frame_duration_ms` 20–2000, GIF dimensions divisible by 16. Inspect the actual decoded frames, loop seam, duration, transparency and file size. A still preview is not a verified animation. Do not add a second video-model call for a small GIF that this route satisfies.
- SVG accepts **no reference images** in the checked contract. Do not discard product/UI authority to force SVG. Use raster generation plus a verified editable vector/layout route when identity matters; inspect the actual SVG and editable paths before calling it vector delivery.
- `seedream_5_5` is an optional reference-capable transparent-PNG route: up to 10 image references and 1k/1.5k/2k. Its transparent output is a candidate capability, not proof of an exact cutout. Prefer deterministic cutout for unchanged source pixels.
- Image generation's tool-level `count` and catalog `batch_size` must not both multiply the requested outputs. Inspect which field the host accepts, request the exact count once, read adjustments and quote that configuration. Free/unlimited options can cap the call to one; never silently pay for the difference.

## Video modes and billing

| Model / mode | Checked behavior | Required decision |
|---|---|---|
| `seedance_2_5` | 4–30s generation; 480p/720p/1080p/4k; t2v, omni_reference, video_edit, video_extension | bind mode, audio, references and actual quote |
| Seedance full references | 30 images including first/last, 10 video, 10 audio references | select only useful references; do not fill the maximum by default |
| `seedance_2_5_flash` | 480p/720p; image references 10, video 5, audio 5 | do not inherit full-model 4K or reference limits |
| Seedance `video_edit` | one source; source duration determines cost; requested duration and ratio are ignored | measure source duration; retain source audio as an independent authority |
| Seedance `video_extension` | one source, original ratio; extension_mode forward/backward required only here | choose direction and newly generated length; inspect the join |
| Seedance full `draft` | 480p draft, finalizable within seven days | optional only; never add a paid draft automatically |
| `draft_job_id` final | renders and charges the full completed draft duration; duration ignored | check same job/status/age/full length; separate quote and scoped approval |
| `gemini_omni_flash_1_2` text or single first frame | 3–15s | no generic 15s promise for other modes |
| Gemini reference or first+last frame | 3–10s; reference mode up to 7 images and 3 videos | use correct roles; no silent reference dropping |
| Gemini edit | exactly one 3–15s source, up to 7 image references; source length governs | no promise to edit a 30s clip in one call |
| Gemini extend | exactly one 1–30s source, 3–10 added seconds | source length and added length are different |

Seedance's native `generate_audio` defaults true in the checked schema. Set the requested audio intent explicitly; do not generate unwanted dialogue or overwrite accepted sound. Output resolution is independent of content fidelity. A website's capacity does not override a connector's smaller limits.

## Replacement and ad variants

- `hf_mult_replace_object`: one 4–30s source and 1–30 replacement images; checked 480p/720p/1080p.
- `hf_mult_replace_object_flash`: one 4–30s source and 1–10 images; checked 720p/1080p. Its catalog description mentions Kling 4.0, but that does not establish a callable general-purpose `kling4` model.
- `hf_mult_motion_control`: one motion video and 1–49 subject images in the checked model. Confirm its source-duration limits live; do not borrow the replacement model's limit. Dedicated `motion_control` is a different single-character workflow.
- `ad_multiplier_v2` supports whole-ad `recreate` or `sections` (hook, cta, both), with one 4–30s source and up to 20 images. Full recreation is not a pixel-preserving edit. Section mode can append a new opening/ending if the original section is not detected, changing final length. It can deliver one successful section while leaving the failed section's source intact; inspect the actual delivered portions, timeline and billing before retrying. Reuse the accepted source and bounded output table in `chany-ad-variants`.

## Narrative consistency from inspected examples

Use [reference roles and scene state](reference-roles-and-continuity.md) for existing drama/asset workflows. Character sheets remain optional and explicitly requested/approved; do not make every product image pay for a new sheet. A final-frame capture conveys state, not a replacement for the original identity reference.

## Announced capabilities that are not defaults

Short Drama Studio preview, Firefly agent/Graph beta, Canva Craft preview and GPU workspaces require actual available tools and an appropriate user task. An announcement is not proof of host control, public API access or delivery quality. For an explicit GPU task, first establish resource/rate, maximum spend/runtime, idle timeout, explicit stop operation, job recovery, export and cleanup; if stopping or billing cannot be verified, do not launch. Do not rent a GPU or start a beta workflow merely to produce an ordinary image or clip.

## Local request check

When Node is available, run `node <plugin>/skills/chany-studio/scripts/check-generation-request.mjs <request.json>` for these supported model routes. The JSON contains the exact direct-MCP `params`, measured `source_duration` when relevant, and `draft_source` (job_id, status, age_hours, duration) for draft finalization. It checks the packaged [capability snapshot](../assets/generation-capabilities.json), known mode combinations and media limits without sending files or submitting jobs. It always returns `runtime_check_required: true` and `submission_allowed: false`; passing is not a live quote, rights check, upload approval or quality test. Unknown/new models must be inspected live, not rejected as globally unavailable.
