# Assembly Contract

Select one mode and do only that work:

- `assemble`: conform and sequence accepted clips
- `replace-segment`: replace one approved time range in an accepted master
- `variants`: create a controlled one-variable set from one accepted master
- `verify`: measure and inspect existing delivery files without changing them

## Authority and target

Use only accepted clip versions, an approved shot plan, an approved copy lock, and a recorded delivery target. For a revision or derivative, the measured accepted source master may govern properties that should remain unchanged. Any other ratio, pixel size, frame rate, codec, duration limit, audio layout, safe area, or file-size limit that the user did not state must come from a current authoritative delivery source or remain unresolved. Do not turn a remembered platform convention into a requirement.

```yaml
assembly_id: ""
operation: "assemble | replace-segment | variants | verify"
project_id: ""
campaign_id: ""
shot_plan_version_id: ""
copy_lock_version_id: ""
source_master:
  version_id: ""
  content_hash: ""
  path: ""
target:
  ratio: ""
  width_px: ""
  height_px: ""
  fps: ""
  video_codec: ""
  pixel_format: ""
  audio_codec: ""
  audio_sample_rate_hz: ""
  audio_channels: ""
  constraints:
    max_duration_s: ""
    max_file_size_bytes: ""
    safe_area: ""
    allowed_values: []
  authority: "user | accepted-source-master | current-platform-source | delivery-spec"
  authority_reference: ""
  checked_at: ""
clips:
  - scene: 1
    clip_version_id: ""
    path: ""
    in_s: 0
    duration_s: 0
    usp_role: ""
    message_rank: 0
```

`message_rank: 0` marks a transitional scene with no independent claim; it is not sorted ahead of ranked messages. The shot plan must already place the primary approved message first where the narrative permits. Assembly preserves that accepted order.

If the named platform source provides a range, maximum, safe area, recommendation, or list of supported values, store it in `constraints`. A constraint does not authorize one exact encode selection. For an accepted master revision or derivative, its measured dimensions, frame rate, codec, pixel format, and audio layout may be recorded as `accepted-source-master` authority when the requested operation should preserve them. Otherwise keep unresolved selections empty and stop before encoding until the user or an approved delivery specification selects them. The output duration is the accepted sum of the shot-plan in/out points; it may proceed when it fits an authoritative `max_duration_s`. An unresolved hard requirement remains a publication blocker under the platform adapter.

## Input probe

Probe every source file and store its observed values before choosing a normalization command:

| Clip/version | Width × height | FPS | Duration | Video codec/pixel format | Audio codec/layout | Status |
|---|---|---:|---:|---|---|---|

Treat variable frame rate, missing audio, unreadable streams, unexpected rotation metadata, and a duration outside the accepted in/out points as explicit conditions. Never infer stream properties from a filename or provider success message.

## Output namespace

Derive the output namespace from stable campaign and source identity, not `source.stem` alone. Record at least `project_id` or `campaign_id`, `source_master.version_id` or content hash, operation, and output revision. Two different masters named `AD_FINAL.mp4` must never share a namespace or performance record merely because their filenames match.

Inspect the namespace and every final path before execution. A pre-existing file is a collision, not permission to overwrite it.

## Normalization

- Scale to cover the approved target and then crop; never stretch. Report when the crop removes meaningful side or top/bottom content and stop if it would remove a must-capture element.
- Normalize every clip to the same frame rate, video codec, pixel format, time base, and audio layout before concatenation.
- When an accepted clip has no audio, insert silence matching the approved output audio layout so later clips retain their sound.
- Re-encode consistently when codecs, pixel formats, frame rates, or time bases differ. Use stream copy only after probing proves the streams are compatible.
- Inspect all intermediate and output paths first. Use fail-on-existing/no-clobber behavior and write to new revision paths; with FFmpeg, `-n` is the default safety flag. Never use `-y` or another blanket overwrite unless the user explicitly approves replacement of the exact named path. Preserve originals and clean temporary files only after final verification.
- Preserve the accepted source-master frame rate for revisions and variants unless the recorded target authority explicitly selects another value. Never convert 24 fps to 30 fps merely because a local script or remembered platform convention uses 30.

## Segment replacement

Record and approve the exact replacement before writing:

```yaml
replacement:
  source_master_version_id: ""
  replacement_clip_version_id: ""
  in_s: 0
  out_s: 0
  expected_duration_s: 0
  duration_policy: "trim | fit-with-approved-speed-change | preserve-replacement-duration"
  audio_policy: "preserve-master | use-replacement | approved-mix"
  untouched_regions_must_match: true
```

Probe both inputs and validate that `out_s` is later than `in_s` and inside the source duration. Preserve the master's audio and untouched timing by default. Do not use a video-only encode that silently drops the source audio. Conform the replacement segment to the recorded master or delivery target, create a new master revision, and inspect the entry and exit boundaries for flash frames, duplicated or missing frames, discontinuity, and audio gaps. If a requested replacement changes total duration, pacing, music sync, captions, claims, or disclosure timing, return it to the owning production or publication review instead of hiding the change in assembly.

## Verification

After writing each output, probe the file and record:

```yaml
verification:
  output_path: ""
  output_content_hash: ""
  source_master_version_id: ""
  width_px: ""
  height_px: ""
  fps: ""
  duration_s: ""
  video_codec: ""
  audio_codec: ""
  audio_present: "yes | no"
  burned_text_frame_checked: "yes | no | not-applicable"
  replacement_boundaries_checked: "yes | no | not-applicable"
  audio_continuity_checked: "yes | no | not-applicable"
  must_capture_status: "pass | fail | unavailable"
```

Do not call an operation successful without the output probe. Also inspect playback and replacement boundaries, the first and last frames, audio continuity, any crop-sensitive evidence, and burned-text readability.

## Hook-only variants

One variable changes across a variant set. Record the controlled values so an accidental second change is visible.

```yaml
variant_set_id: ""
campaign_id: ""
source_master_version_id: ""
source_master_content_hash: ""
variable: "hook"
fixed_properties:
  - "cut and clip order"
  - "start time and duration"
  - "typeface, size, color, stroke, and position"
  - "audio, grade, crop, and export settings"
  - "frame rate and output namespace"
variants:
  - id: "v01"
    approved_hook_copy: ""
  - id: "v02"
    approved_hook_copy: ""
```

Burn the hook into the pixels only when the user wants a self-contained file. Verify that the chosen font contains or successfully renders every Unicode code point in every approved hook, including Korean, numerals, and punctuation. Never let the renderer silently fall back to another font. If any glyph is missing, block burn-in and ask the user to approve a verified alternative font or a non-burned subtitle deliverable. Choose contrast against the actual frame, inspect an extracted frame, and keep the text outside safe areas resolved from the current delivery target. Record position as a fraction of frame width and height so it survives a size change.

## Performance-entry table

Create one row per delivered output and leave observed-result fields empty:

```csv
campaign_id,variant_set_id,source_master_hash,copy_version_id,version,file,variable,value,start_s,duration_s,impressions,clicks,ctr,conversions,cpa
```

Do not invent campaign results. Keep every row bound to its campaign, source-master hash, copy version, and variant-set ID even when display filenames repeat. When results are later supplied, send them to `chany-marketing-brief` for tracking, comparability, attribution, and sample review before planning the next one-variable set.
