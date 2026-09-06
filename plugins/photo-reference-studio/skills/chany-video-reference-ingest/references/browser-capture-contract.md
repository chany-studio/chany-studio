# Browser Capture Contract

Use this contract when a video reference arrives as a YouTube, Instagram, or other browser page, or when the user plans to use a browser extension to make the reference observable.

## Honest capability boundary

A platform page URL is not a media file. A browser or extension may support one of two different evidence levels:

- a visible player can support time-coded observation of moments that were actually shown;
- a user-invoked active-tab capture can create an inspectable local recording for a complete teardown of the captured range.

Do not claim the second level from the first. If the host cannot call the extension or receive its output, provide the manual capture handoff and wait for the attached result.

## Capture requirements

The browser extension or host capture surface must:

1. start only after the user clicks or otherwise explicitly invokes capture on the active tab;
2. show that capture is active and provide an immediate stop control;
3. capture only the shortest excerpt needed for the requested structural analysis;
4. save locally by default and require separate approval before external upload;
5. preserve the page title, canonical URL, platform, capture time, and captured time range without retaining authentication or tracking parameters;
6. never extract cookies, local storage, passwords, account tokens, private messages, unrelated tabs, or hidden page data;
7. never reconstruct platform streams, fetch manifests or segments, bypass DRM, defeat access controls, or use an unofficial download resolver.

Private, paid, confidential, or personally sensitive material requires an explicit privacy check before frames, transcripts, or contact sheets are shared. A logged-in page being visible does not grant reuse or publication rights.

## Minimal handoff

The simplest cross-runtime handoff is a local `MP4` or `WebM` capture plus a small metadata record. An optional extension may also provide frame images or a transcript, but these never replace the captured source when timing or audio needs verification.

```yaml
browser_capture:
  canonical_source_url:
  platform:
  observed_title:
  observed_creator:
  captured_at:
  captured_page_range:
  playback_range:
  capture_file:
  capture_file_hash:
  audio_included:
  user_gesture_confirmed: true
  privacy_or_redaction_notes: []
```

If a native bridge or local MCP connection is installed, it may pass this record and the local capture reference to the active Claude, ChatGPT Work, or Codex session. Capability detection is mandatory: never claim that an extension, native bridge, upload surface, or active browser tab is connected merely because this contract exists.

## Direct media and connected tools

Treat a URL as `direct-media-url` only after the live connector confirms a video or audio content type. Social post and watch-page URLs remain `platform-page-link` even when they contain the word `video`.

Higgsfield's connected media importer may accept a confirmed direct HTTPS media URL under its live size and type limits. This is an external upload and needs separate approval. After a confirmed media ID exists, supported live tools may analyze creative performance or perform an explicitly approved motion-transfer or object-replacement operation. These operations do not establish copyright or likeness rights and do not replace Chany's non-copying teardown.

ChatCut can import an attached or locally captured file for transcription and post-production when its live connector is available. It does not convert an Instagram or YouTube page URL into an authorized source file.

## Analysis and recreation boundary

The captured range may teach:

- hook shape and first-reveal timing;
- beat duration and information order;
- camera and subject-motion grammar;
- caption density and safe-zone behavior;
- music, silence, impact, and transition function;
- CTA and brand-reveal timing.

It does not authorize reuse of the reference product, person, performance, voice, packaging, copy, logo, soundtrack, artwork, distinctive scene sequence, or captured pixels. Build the new video from the user's source authorities and approved campaign packet.
