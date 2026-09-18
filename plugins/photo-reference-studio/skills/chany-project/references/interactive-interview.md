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

## Project preference cards

After the missing-fact card (or instead of it when no fact is missing), let the user choose how the studio should work for this project. Show up to two cards, each one `AskUserQuestion` call with at most four questions; in ChatGPT Work use its structured input when exposed, otherwise the same questions as numbered choices. Skip any question the invocation, attachments, or existing project files already answer, and skip the whole card when every question in it is answered. Labels and descriptions are plain Korean (see [beginner experience](../../chany-studio/references/beginner-experience.md)); put the recommendation first with `(권장)`, grounded in the product and channels already known.

Card 1, header `프로젝트`:

| Header | Question | Options | Select |
|---|---|---|---|
| `업종` | 어떤 걸 판매하거나 홍보하나요? | options grounded in the attachments and request, e.g. 화장품·생활용품 같은 제품 / 음식·음료 / 식당·카페 / 서비스·교육 | single |
| `만들 것` | 주로 무엇을 만들까요? | 인스타 피드 광고 이미지 (권장) / 스토리·릴스용 짧은 영상 / 상세페이지 이미지 / 쇼핑몰 대표 사진(흰 배경·누끼) | multi |
| `올릴 곳` | 어디에 올릴 예정인가요? | 인스타그램 (권장) / 스마트스토어·쿠팡 같은 쇼핑몰 / 유튜브·틱톡 / 자사 홈페이지 | multi |
| `분위기` | 어떤 분위기가 좋아요? | 알아서 추천해 주세요 (권장) / 밝고 깨끗하게 (하이키) / 고급스럽고 차분하게 (로우키) / 따뜻하고 감성적으로 (골든아워) | single |

Card 2, header `제작 방식`:

| Header | Question | Options | Select |
|---|---|---|---|
| `레퍼런스` | 레퍼런스는 어디서 찾을까요? | Pinterest·Meigen에서 자동 추천 (권장) / Higgsfield 광고 템플릿 우선 / 둘 다 보여주기 / 레퍼런스 없이 제품 분석만 | single |
| `품질` | 기본 품질과 장수는요? | 고화질 2K로 1장씩 (권장) / 고화질 2K로 2장 만들어 고르기 / 인쇄용 4K로 1장씩 / 빠른 시안 (품질 낮음, 비용 적음) | single |
| `참고 사진` | 레퍼런스 사진을 생성에 참고로 보낼까요? | 매번 확인 카드에서 물어보기 (권장) / 보내지 않고 분석 글만 쓰기 | single |
| `비율` | 기본 이미지 비율은요? | 올릴 곳에 맞춰 자동 (권장) / 4:5 세로 피드 / 9:16 스토리·릴스 / 1:1 정사각형 | single |

For the two multi-select questions, move the option the request or attachments most clearly point to into first place and mark it `(권장)`; the table shows the default order. Each option's description says, in one sentence, what changes and its cost or risk (for example that 2장 doubles the quoted cost, or that 빠른 시안 is not ad quality). Record the answers in the brief's `Studio preferences` section of the blueprint. They are defaults, not approvals: every paid generation still needs its own confirmation card, and a reference photo is still sent only when that card contains the 참고 사진 line, even if the user chose 매번 확인 카드에서 물어보기. No option may pre-approve spending or uploads.

Treat an empty result, timeout, or tool error on a preference card like the missing-fact card: fall back to concise text for the same choices, or use the recommended options as labelled `(기본값)` in the blueprint. Never ask the preference cards again for a project whose brief already records them, unless the user asks to change them.

## Mandatory blueprint decision

Present the blueprint in plain Korean first (what will be saved and why, in a few lines), then list the exact file paths below it. After presenting the exact blueprint and before the first Chany-managed file write, interactive Claude must show one single-select `AskUserQuestion` card:

- header: `설정 승인`
- question: `이 설계대로 현재 폴더에 프로젝트 지침을 생성할까요?`
- `승인 후 생성 (권장)`: create or update only the files listed in the blueprint; do not upload, generate paid media, commit, or push
- `설계 수정`: make no file changes, collect the requested revision, and present the revised blueprint again
- `취소`: end the Chany phase with no Chany-managed file changes

Use `multiSelect: false`. Only `승인 후 생성 (권장)` authorizes the listed Chany-managed project-file writes. A prior command invocation, interview answer, blank response, or approval for a different blueprint is not write authorization. If the structured tool is unavailable, request the same three-way decision in concise prose and wait for explicit approval.
