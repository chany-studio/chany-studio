# Watch before recommending Instagram video

Mandatory for Reel discovery through `chany-reference-board`, including requests mentioning only product description and Instagram examples. Read this before final selection, even when only excerpts of the parent skill were loaded.

## Final recommendation gate

Captions, thumbnails, transcripts and popularity establish discovery leads, not a video recommendation. Never fill three final slots with caption-only candidates plus a disclaimer. Inspect the actual video from beginning through end, with time-coded evidence of the opening, demonstration and ending. Reassess product fit **after** inspection. A clip that only holds up a bottle is not evidence of stretching or spreading its formula, regardless of the caption. If only two qualify, recommend two and explain the shortfall. Keep unviewed URLs separately as “미검증 검색 후보”, outside the ranked recommendation list.

Audio is a separate evidence channel: report heard/transcribed/unavailable and never infer music or speech from a caption. Silent visual inspection can support visual recommendations with that limit; audio-dependent requests require audio evidence. A few screenshots or a queued analysis do not establish whole-video coverage. Full-timeline frame sampling with inspected beginning, meaningful transitions and ending can support a visual teardown, labeled “영상 전체 구간 프레임 분석” with its sampling interval; it is not continuous playback or audio verification.

## Work-first acquisition ladder

1. Reuse the existing Apify dataset; keep original post URL, creator, shortcode, duration and the returned `videoUrl`. Do not search again just because the post page cannot open. Treat the media URL as ephemeral and private working data; never publish its signed query or copy it into the plugin.
2. Try the host's allowed original-page player. If the target clip actually plays, observe its full visual sequence and record timestamps. A page-load failure or login wall means this route failed, not that the video is analyzed. Do not bypass access controls or extract cookies/hidden state. Cloud browser and the user's Chrome login are distinct capabilities; success in one does not prove the other.
3. When the connected public-data tool already returned a direct video URL, use the available media importer/analyzer for **analysis of that public reference**. Verify actual video MIME/type, duration and the exact post-to-file binding; a page URL cannot be passed as a video. This is not a generic platform downloader or stream resolver. A user's request to find and visually analyze public references authorizes necessary processing of that public media within the existing tools; explain the analysis destination once, reuse that authorization, and ask only if private assets, new permissions, or unapproved charges are involved. Do not reupload merely to bypass a display restriction.
4. For connected Higgsfield, discover the actual tool schema in this host. **ChatGPT Work may expose `sandbox_exec` but not `media_import_url`. In that case, use the available media sandbox to fetch the already returned public video URL, probe it and return timestamped frame sheets as native images for inspection. Do not send a remote URL to `media_upload_and_confirm`, which accepts actual ChatGPT attachments only.** Check executable/type/size limits first, use a bounded timeout, inspect returned images (not just extraction logs), and retain the public post-to-file mapping. `media_import_url` may import a direct HTTPS video under its live limit (50 MB observed); its confirmed video `media_id` can be passed as `video_input_id` to `video_analysis_create`. This ID mapping was tested with actual MP4s; never guess an ID or send an Instagram post URL as `youtube_url`. Warn once that long videos reduce scene-analysis accuracy. Poll the same analysis ID to `completed`/`failed`; verify nonempty timed scenes and source coverage, not just successful import. No generation is needed. Keep any current analysis cost within the approved plan; an unknown or changed paid requirement needs resolution before execution.
5. If URL import fails from expiry or access, refresh that already discovered URL once within the remaining search budget, or inspect another already collected candidate. If the analyzer remains queued beyond its normal window, reuse the same job and use the current host’s media sandbox to probe the already accessible file and inspect frames across its full duration, including the exact ending. Use roughly 1-second samples for short clips, denser around meaningful action/cuts, with timestamps from extraction; record sampling coverage and do not call it continuous playback. Do not wait indefinitely or submit duplicate jobs. Do not run repeated searches/download add-ons or silently switch providers. An approved local file/capture may instead be probed and sampled across the full duration. A connected analyzer's completed timed output is analysis evidence, labeled “영상 파일 분석”; browser viewing is labeled “원문 재생 확인”. Never say “직접 시청” solely from another model's result. Cross-check representative frames where the current host permits it and flag uncertain observations.
6. If neither video route works, say the visual check could not complete, preserve the leads and ask for an inspectable file or accessible link. Do not fall back to caption-based final recommendations. `includeDownloadedVideo` and transcript add-ons remain off unless needed, supported, priced and authorized; a returned `videoUrl` often needs neither.

## Record the evidence, then rank

Bind one record to each exact original URL:

```yaml
video_evidence:
  status: completed
  method: connected-video-analysis # or full-browser-playback, inspected-file
  source_url: https://www.instagram.com/reel/EXAMPLE/
  observed_at: <actual ISO time>
  duration_seconds: <actual duration>
  covered_ranges: [[0, <actual end>]]
  proof_ref: <analysis job ID or local observation record, kept private>
  audio: unavailable # heard, transcribed, unavailable
  beats:
    - start: 0
      end: <observed beat end>
      observation: <visible event, not a caption-based proposal>
```

Build the beat table across the actual covered range: opening/hook, product or service demonstration, cuts/camera, text and ending/CTA. Record absent actions too. Separate **observed event → why it fits → proposed adaptation**. Derive fit evidence from these beats. Completed analysis without usable timed visual content stays unverified. The offline ranking helper checks the record's consistency and coverage, not whether a human/model really saw it; the owner must substantiate the record using actual tool results.

## Shares: bounded fallback, honest provenance

- **Official Apify:** check the live schema, plan and price; enable `includeSharesCount` only when supported and authorized. Current schema explicitly requires a paying account. Free-plan prices displayed for the add-on do not establish eligibility. Never upgrade or repeat a known unsupported run.
- **Visible original page:** when an available browser can access the same post, read the count adjacent to the labeled **share/paper-plane** control. Check the target creator/shortcode; nearby feed items do not belong to it. Keep repost/loop-arrow, likes and comments separate. Record observed time, exact displayed text and source screenshot. Preserve abbreviated counts as approximate; a blank control is unknown, never zero. No need to click Share, send a DM, like, save or repost.
- **Owner-authorized insights:** only for the user's own/authorized account and exact media ID. Those private insight metrics do not establish competitor shares. Metricool is not an arbitrary-public-Reel share backdoor.
- If unavailable in Work, explicitly distinguish “현재 Work에서 확인 불가” from “인스타에 존재하지 않음”. Offer a logged-in browser check only if that surface is actually available; otherwise retain unknown. Another user's Chrome session cannot be bundled with the plugin. Do not promise that an additional scraper can expose private data; verify any alternative's actual fields, cost and rights before recommending it.

Keep API metrics and page-supplemented shares in separate provenance records. Display both with their collection times; do not inject the browser number into the API snapshot. A share-ranked comparison requires all compared counts to have comparable meanings and observation windows. Otherwise show unranked available shares and explain the limit. Unknown shares do not prevent visually verified recommendations ranked on available plays/likes, unless shares were the user's required selection criterion.

## User-facing result

Up to three visually verified cards: original link/creator, duration, two or more meaningful timestamps (one continuous short shot may be one interval), what actually happens, product-fit reason, one adaptation, actual metrics with origins, and audio/coverage limitations. Mention full-video analysis status prominently. Do not promise exact footage reuse, reproduction, paid-ad status or conversion performance. Hand selected evidence to the existing creation owner; analysis is not generation/publication authorization.
