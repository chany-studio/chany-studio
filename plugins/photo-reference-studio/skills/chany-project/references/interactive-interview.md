# Structured project interview

Use this contract for `setup` and any `update` that needs a user decision. It changes the interaction channel, not the project authority or write boundaries in `project-contract.md`.

## Runtime gate

1. The main conversation first inspects the invocation, attachments, and current project files. Do not ask for a fact already present.
2. When the current interactive Claude host exposes `AskUserQuestion`, the main conversation must call it for every missing-fact interview and the final pre-write decision. Do not substitute prose questions while the tool is available.
3. If `AskUserQuestion` is deferred and the host exposes `ToolSearch`, immediately call `ToolSearch(query: "select:AskUserQuestion")` before each question-card call. If the tool is already callable, call it directly; do not invent a preload requirement the host does not expose.
4. Wait for the user's result before continuing. If the user selects `취소` or the host reports an explicit user abort, stop the Chany phase immediately with no Chany-managed file changes; do not turn that decision into a fallback question.
5. Treat each of these as a technical no-answer outcome: an empty result that is not an explicit user cancellation, a timeout, or a tool error. None supplies a fact or authorizes a Chany-managed write. State that the structured question UI did not return a usable answer, then ask only the blocking item in concise prose. At the final approval boundary, stop and wait for explicit approval; never write on a fallback assumption.
6. A subagent may identify missing fields but must return them to the main conversation. It must never conduct the interview or obtain approval on the user's behalf.
7. If the host does not expose `AskUserQuestion`, use its native structured-input mechanism when available. Otherwise state that the question-card UI is unavailable and ask the same minimal questions in prose. Never claim that a card was shown.

## Initial interview card

- Include only the missing axes from the compact interview: purpose/audience/deadline; deliverables/channels/specifications; authoritative assets/claims/rights/constraints. Ask in plain Korean that a first-time user can answer (what they sell, who buys it, where they will post). Execution mode, paid-approval location, and file layout use recommended defaults and are not asked unless the user raises them ([beginner experience](../../chany-studio/references/beginner-experience.md) §6).
- Put one to three questions in one call. Each question uses the user's language, a header of at most 12 characters, two to four options, and `multiSelect: true` only for choices that can coexist.
- Ground options in the invocation and inspected project context. Put a defensible default first and suffix its label with `(권장)`; every option needs a short, neutral description of its immediate effect or trade-off. If no evidence supports a preference, use the least-committal reversible option as a disclosed setup default instead of pretending it reflects the user's preference.
- Let the built-in `Other` choice collect free-form detail. Do not add a duplicate `Other` option.
- Ask at most one follow-up card, containing only genuine blockers. Unknown non-blocking fields remain `미정 — 확인 필요`.
- Keep answers in the current conversation until the blueprint is approved. Do not create an interview scratch file or write partial project files.
- Never request passwords, API keys, access tokens, cookies, or private signed URLs. Treat rights, claims, prices, consent, and publication status as unverified inputs until the project contract's evidence and approval gates are satisfied.

## Purpose and optional preferences in the same card

Use these as a question pool, not a form to complete. Select at most three unresolved high-impact choices total, including the initial interview above. If purpose is unclear, ask that before atmosphere or production settings. Do not append separate project preference cards.

| Header | Plain-language question | Context-dependent options |
| --- | --- | --- |
| `목적` | 이 콘텐츠를 본 사람이 무엇을 하길 바라세요? | 구매하기 / 문의·예약하기 / 제품을 기억하기 / 내용을 이해하고 저장하기 |
| `보는 사람` | 주로 누구에게 보여줄까요? | 제품을 처음 보는 고객 / 비교 중인 고객 / 이미 이용한 고객; adapt from known context, not invented demographics |
| `만들 것` | 어떤 콘텐츠부터 만들까요? | 광고 사진 / 캐러셀 / 짧은 영상; ask only if unknown and do not mix unrelated deliverables into one option |
| `올릴 곳` | 어디에 올릴 예정인가요? | 인스타 피드 / 릴스·쇼츠 / 쇼핑몰 / 홈페이지; use only relevant choices |
| `분위기` | 어떤 느낌이 좋아요? | 알아서 추천해 주세요 / 밝고 깨끗하게 / 차분하고 고급스럽게 / 따뜻하고 자연스럽게; optional when a reference has not already answered it |

Use `multiSelect` only when coexisting deliverables or placements are actually needed. There is normally one primary purpose per deliverable. Keep questions short; recommendations must follow evidence, not a universal purchase-ad default.

Set unsupplied technical and working preferences in the blueprint as `(기본값)` rather than asking extra cards: supplied style reference first; otherwise existing requested discovery rules; output ratio based on placement; one final still at the established quality preset when applicable; no automatic extra draft; GPT Image 2.5 still default with scoped task-fit recommendations at production time. If exact resolution or format is not known, leave it for production preflight rather than promising an unsupported setting. Users may explicitly choose different quantity, quality, provider or budget; retain those choices.

Store these in `Studio preferences` with their origin (supplied versus proposed default). A recommendation or project budget never pre-approves spending or uploads. Reference transmission still requires the relevant disclosure in the paid card. Missing non-blocking preferences may use labelled defaults after a technical no-answer; a cancellation still stops setup, and the final pre-write approval is always required. Do not repeat preferences in later production unless the request changes them.

## Mandatory blueprint decision

Present the blueprint in plain Korean first (what will be saved and why, in a few lines), then list the exact file paths below it. After presenting the exact blueprint and before the first Chany-managed file write, interactive Claude must show one single-select `AskUserQuestion` card:

- header: `설정 승인`
- question: `이 설계대로 현재 폴더에 프로젝트 지침을 생성할까요?`
- `승인 후 생성 (권장)`: create or update only the files listed in the blueprint; do not upload, generate paid media, commit, or push
- `설계 수정`: make no file changes, collect the requested revision, and present the revised blueprint again
- `취소`: end the Chany phase with no Chany-managed file changes

Use `multiSelect: false`. Only `승인 후 생성 (권장)` authorizes the listed Chany-managed project-file writes. A prior command invocation, interview answer, blank response, or approval for a different blueprint is not write authorization. If the structured tool is unavailable, request the same three-way decision in concise prose and wait for explicit approval.
