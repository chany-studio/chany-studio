---
name: chany-video-reference-ingest
description: Prepare YouTube, Instagram, and other video references for lawful structure analysis through a user-invoked browser view or tab capture, a direct media URL, or an attached local file. Use when a user supplies a video page link or wants to adapt a reference video's construction; not for downloading platform media, bypassing access controls, editing, or publication.
---

# Chany Video Reference Ingest

Turn an authorized video reference into an honest, traceable input for Chany's campaign-video workflow. This skill owns acquisition-state classification and the reference packet; it does not download platform videos, generate footage, edit a cut, or claim full analysis from metadata alone.

When the input is a browser page, extension capture, or page link, read [references/browser-capture-contract.md](references/browser-capture-contract.md). For any captured or attached file that can be inspected, also read and apply the shared [video reference teardown](../chany-studio/references/video-reference-teardown.md).

## Choose the available intake mode

- `live-browser-observation`: use only when the current host exposes a browser or extension surface that can actually show the playing reference. Record the timestamps and elements that were visibly observed. Do not infer unseen beats, audio, captions, or full duration.
- `authorized-tab-capture`: prefer this for YouTube, Instagram, and other platform-page links when the user can invoke a browser extension to capture the active tab. The capture must start from an explicit user gesture and remain visibly stoppable.
- `direct-media-url`: accept only an HTTPS URL that resolves to an actual video or audio response, not a post, watch, Reel, feed, redirect, or login page. A connected media-import tool may be used only after the user approves the external upload and the live tool confirms the file type and limits.
- `local-file`: use an attached source file, the user's own export, or an authorized screen recording. Keep it local unless the user separately approves an upload.

If only a platform page link is available and no observable browser or capture capability exists, return `capture_required` with one concise instruction to open the link, invoke the extension, play the needed excerpt, stop capture, and attach the result. Do not substitute a scraper, downloader, unofficial resolver, or reconstructed stream.

## Workflow

1. Canonicalize the source without retaining session, tracking, or access-token query values. Identify the platform, page type, and observed public attribution. Never read or export cookies, passwords, tokens, hidden account data, or unrelated page content.
2. Record the user's stated basis for using the reference and whether the requested operation is observation, structure analysis, motion transfer, or production. Do not treat capture permission as permission to publish, upload externally, reproduce protected expression, or spend credits.
3. Select one intake mode and report its evidence ceiling before analysis. Metadata or a player view can support `metadata_only` or `observed_excerpt`; a complete inspectable capture or local file is required for `full_teardown_ready`.
4. Create one `video_reference_packet` using the contract below. Bind every frame, transcript, timestamp, or beat table to the exact captured or attached source version.
5. For an inspectable file, run `chany-preflight` for only the required probe, extraction, transcription, or contact-sheet capabilities, then apply the shared teardown. Separate observation from interpretation and label incomplete coverage.
6. When the user requests a new ad, hand the accepted packet and transferable timing grammar to `chany-campaign-video`. Transfer pacing, reveal logic, camera behavior, information order, and sound function only; rebuild the product, people, setting, copy, music, branding, and distinctive sequence from the user's own authorities.
7. Use optional connections only when their live tools are installed and applicable. A direct media file may be imported into Higgsfield after upload approval; motion transfer or object replacement requires separate creative, rights, cost, and generation approval. ChatCut may receive an attached or captured local file for transcription and editing, but it is not a platform-link downloader.

```yaml
video_reference_packet:
  reference_id:
  source_kind: "live-browser-observation | authorized-tab-capture | direct-media-url | local-file"
  platform:
  canonical_source_url:
  observed_title:
  observed_creator:
  capture_or_file_version:
  content_hash:
  observed_range:
  audio_observed: "yes | no | partial"
  user_gesture_confirmed:
  external_upload_approved:
  usage_basis:
  privacy_notes:
  evidence_state: "metadata_only | observed_excerpt | full_teardown_ready | capture_required | blocked"
  teardown_id:
  limitations: []
```

Never describe `metadata_only`, a thumbnail, or a few manually observed moments as full-video analysis. Never use the captured media itself as a publishable campaign asset unless the user separately establishes the necessary rights and explicitly requests that use.
