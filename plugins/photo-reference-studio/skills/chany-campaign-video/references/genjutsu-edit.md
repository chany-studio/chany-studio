# Higgsfield Genjutsu: bounded video revision

Use this mode for an authorized source clip plus a requested object replacement or motion transfer. `chany-campaign-video` owns edit intent and acceptance; `chany-media-production-loop` owns the paid job. This is generative modification, not `chany-video-assembly`'s deterministic segment replacement.

## Resolve the operation

| Requested change | Higgsfield catalog candidate |
|---|---|
| Replace one object in an existing clip | `generate_video` with `hf_mult_replace_object` |
| Transfer motion from a driving clip into a new scene | `generate_video` with `hf_mult_motion_control` |

These IDs were documented by the connected Higgsfield tools on 2026-09-15. Inspect the live model schema before submission: input roles, source length, reference count, supported output, cost and recovery may change. Do not guess parameter names or reuse legacy `motion_control` or `ad-multiplier` for a single Genjutsu edit. Multiple independently edited versions require inspecting the current `ad-multiplier` workflow and separate output/approval records, not multiplying a single request silently.

## Edit contract

1. Verify source access and permission to modify it. A Meta-library observation or public video link alone does not authorize uploading and transforming that footage. Without usable rights/source media, return to original scene planning through the reference-ingest analysis packet.
2. Bind `source_clip_version_id`, source timing, original product/service authority, the one target/change, input roles, approved copy version, preserve list and output count to the scene/job record. Preserve the accepted source; create a new version. Motion transfer creates a new scene and does not promise an unchanged background or person. Object replacement targets one element but still requires whole-clip QA.
3. Use the current host's supported upload/import flow; pass confirmed provider media IDs, not raw local paths or page URLs. Missing source access is a blocker for execution, not permission to scrape or bypass access controls.
4. Reuse approved source frames/product references as governing evidence. Do not generate an unnecessary new still for an already approved source. Approve the exact edit, changed inputs and paid scope through the shared runtime contract before submission.
5. Review beginning/end, occlusions, rapid motion, cuts and intermediate frames against the source: product geometry, label/logo, hands/contact, shadows, reflections, motion, background stability, duration, crop and audio. A provider claim to preserve the rest of the clip is not acceptance. Restore approved text as editable overlays where appropriate rather than repeatedly regenerating it.
6. Follow the production loop's one initial attempt plus at most one defect-specific correction within approved cost. On unknown charge/job status inspect the original job; never blindly retry. Only accepted versions pass to assembly/publication review.

For an explicitly requested test set, vary one named factor, keep the offer/copy/placement fixed unless that is the tested factor, and label performance as unmeasured. Never promise winning ads or conversion uplift from the edit alone.

Source: [Higgsfield Genjutsu, 2026-08-31](https://higgsfield.ai/blog/higgsfield-genjutsu), checked 2026-09-15. This predates the latest-week announcements; it is included as a relevant existing Higgsfield capability.
