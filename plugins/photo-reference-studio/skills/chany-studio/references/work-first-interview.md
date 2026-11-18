# Work-first shared interview

Applies to the public `chany-studio` entry and every specialist through beginner-experience.md, including ordinary production, not only project setup. ChatGPT Work is the primary beginner experience; keep Claude and Codex entry compatibility. The studio conducts intake once and hands existing answers to the smallest production owner. No project setup or skill selection is required for one deliverable.

For Chany photo-only quick start, [two-image fidelity](photo-match-fidelity.md) proposes a free Behance reference board from a recognizable product image without an unnecessary marketing interview. Explicit video/edit tasks still take priority.

## Inspect, then ask

Read the request, accessible project facts and attachments before asking. Current explicit instructions override saved preferences. Separate confirmed facts from recommendations. Inspect actual images before assigning roles: own product, actual service/UI/space, selected reference, or output to revise. Never infer ownership from attachment order. If roles are ambiguous, ask one short role question using filenames or numbered previews. Missing files are requested through normal chat and the host's existing attachment control, never through a text-only question tool.

Use a currently exposed native structured question tool in Work/Codex, or Claude's available AskUserQuestion. Discover the actual tool and follow its schema; never call a tool name copied from a different host. With asynchronous questions, wait for the reply before dependent actions; independent inspection may continue. One question per turn by default. Provide 2–3 relevant choices, a defensible recommendation when possible, and free text. The host's built-in free-text choice needs no duplicate option. Recommendation is not spending approval. If unavailable, use the same question with numbered text without mentioning internal UI errors.

Select only unresolved questions; usually 2–3 decisions total:
- What is being introduced? A product image or actual service description may already answer this.
- Where/what will this be used for? Use concrete choices such as Instagram image, short video, shopping page; adapt to context. If the user says recommend, propose one placement/format, labelled as a recommendation.
- Is there a reference? Existing selected image → inspect/use; find for me → existing discovery; explicit skip → no discovery. Recommendation may select a suitable discovery route, but does not approve transmission.

Ask purpose/audience only when it materially changes the result and is not already known. Keep at most three unresolved high-impact choices in the ordinary intake; don't append a mood/model/settings questionnaire. After that, recommend reversible non-blocking defaults; unresolved source identity, exact copy, rights or cost remain blockers and are never invented to satisfy a question limit. A clear bounded edit/cutout/assembly bypasses the new-campaign interview, while still requiring its source and change scope.

When local Node is available, [interview-next.mjs](../scripts/interview-next.mjs) can check the next step from the inspected state. It is an offline helper, not an automatically installed UI or approval engine. Apply this same contract without the script when local execution is unavailable. Pass normalized, inspected state: `assets` contain stable IDs/roles/inspection status; `facts` contain resolved offer/output/reference/change, not raw question responses. Preserve explicit find/skip over old attachments; unresolved recommendations stay unresolved until one proposed direction is selected. Its `production-check` result still requires the live production contract, quote and approval.

## Video-first intake

When video is the requested output, apply [video-first experience](video-first-experience.md). Ask about a reference **video**, use a video discovery route, and retain existing product/service facts. Do not silently send video requests to the generic Behance still board. Normalize `facts.medium` as `video` or `image` from the user's resolved intent before using the offline helper; custom phrases such as “30초 서비스 시연” are not parsed by this helper. Its exact legacy output labels remain supported. Resolve narrative, editable Adobe and other specialist intent through routing.md first, and pass that selected skill as top-level `current_owner`; the helper preserves known video specialists. Without a selected owner it assumes ordinary product/service video, so it must not be used to classify drama or native-editing requests. A video poster/thumbnail uses `image`; a mixed image/video package remains with the studio router rather than this single-output helper. A helper `production-check` is only a handoff: the video owner must ingest supplied clips/links, plan the shots and audio, then check live capabilities and approvals.

## Visual choice and confirmation

For still-image discovery, display the requested number of inspected references with provenance and visible/missing counts. Highlight up to three strongest candidates and one recommendation. Do not silently reduce the generic Behance 6 board or an explicit count. Without a real gallery widget, show actual images with numbers; do not print fake clickable buttons or pretend a collapsible collection exists. Ask which aspect matters only when the chosen image/request leaves the change ambiguous: placement, light/color, or overall direction. Honor insert/reshoot/bounded-edit intent.

Use the single production confirmation from beginner-experience.md: result, selected reference/change, protected product/service facts, exact copy if any, materials/destination, actual tool and live total cost. Use native approval mechanisms when the provider requires them; don't add another ceremonial approval. A reference choice or “recommend” is not execution consent. New paid stages or changed scope require their own applicable approval, not repeated interviews.

## Results, revisions and recovery

For video results, use the playback and revision checks in video-first-experience.md. For still images, show the actual output first, then short checks of offer identity, reference composition and exact text. Offer at most three relevant next actions in ordinary language: product/service is wrong; placement/background needs a change; text only. Keep accepted parts protected and route to the existing edit owner. Exact unchanged pixels require a verified deterministic operation. If the output is accepted, suggest a requested-useful next format (another ratio or video) without starting another generation.

Existing pending/unknown jobs → recover their recorded status and outputs before any new intake/submission. Keep answers when a connection fails. Progress messages describe observed stages (자료 확인/참고 이미지 찾기/제작/결과 확인); no fabricated percentages or finish times. Cancellation stops new work immediately; it does not prove a submitted provider job was cancelled or refunded. Empty/error/timeout responses are not answers, defaults or approvals; preserve state and re-ask only the unresolved blocker.

## Reusable brand facts

Reuse only accessible, confirmed product/service facts, logos, exact copy, approved references and preferences. For new persistent records, show what/where will be stored under the existing project write contract. Never save secrets or promise automatic cross-chat memory. Do not require project files for a one-off result. Preferences never authorize future uploads, spending or publication.

Design basis checked 2026-11-17: [OpenAI UI guidelines](https://developers.openai.com/plugins/concepts/ui-guidelines) (small cards and clear actions); [ChatGPT app implementation experience](https://developers.openai.com/blog/15-lessons-building-chatgpt-apps) (existing files and natural language as starting inputs). These support the design, not proof that this plugin has a custom UI installed.
