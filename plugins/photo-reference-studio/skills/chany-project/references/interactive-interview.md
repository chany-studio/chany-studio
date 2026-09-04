# Structured project interview

Use this contract for `setup`, `with-moai`, `chany-only`, and any `update` that needs a user decision. It changes the interaction channel, not the project authority or write boundaries in `project-contract.md`.

## Runtime gate

1. The main conversation first inspects the invocation, attachments, current project files, and reusable Moai records. Do not ask for a fact already present or repeat a completed Moai question.
2. When the current interactive Claude host exposes `AskUserQuestion`, the main conversation must call it for every missing-fact interview and the final pre-write decision. Do not substitute prose questions while the tool is available.
3. If `AskUserQuestion` is deferred and the host exposes `ToolSearch`, immediately call `ToolSearch(query: "select:AskUserQuestion")` before each question-card call. If the tool is already callable, call it directly; do not invent a preload requirement the host does not expose.
4. Wait for the user's result before continuing. If the user selects `취소` or the host reports an explicit user abort, stop the Chany phase immediately with no Chany-managed file changes; do not turn that decision into a fallback question.
5. Treat each of these as a technical no-answer outcome: an empty result that is not an explicit user cancellation, a timeout, or a tool error. None supplies a fact or authorizes a Chany-managed write. State that the structured question UI did not return a usable answer, then ask only the blocking item in concise prose. At the final approval boundary, stop and wait for explicit approval; never write on a fallback assumption.
6. A subagent may identify missing fields but must return them to the main conversation. It must never conduct the interview or obtain approval on the user's behalf.
7. If the host does not expose `AskUserQuestion`, use its native structured-input mechanism when available. Otherwise state that the question-card UI is unavailable and ask the same minimal questions in prose. Never claim that a card was shown.

## Initial interview card

- Include only the missing axes from the compact interview: purpose/audience/deadline; deliverables/channels/specifications; authoritative assets/claims/rights/constraints/execution mode/paid-generation boundary.
- Put one to three questions in one call. Each question uses the user's language, a header of at most 12 characters, two to four options, and `multiSelect: true` only for choices that can coexist.
- Ground options in the invocation and inspected project context. Put a defensible default first and suffix its label with `(권장)`; every option needs a short, neutral description of its immediate effect or trade-off. If no evidence supports a preference, use the least-committal reversible option as a disclosed setup default instead of pretending it reflects the user's preference.
- Let the built-in `Other` choice collect free-form detail. Do not add a duplicate `Other` option.
- Ask at most one follow-up card, containing only genuine blockers. Unknown non-blocking fields remain `미정 — 확인 필요`.
- Keep answers in the current conversation until the blueprint is approved. Do not create an interview scratch file or write partial project files.
- Never request passwords, API keys, access tokens, cookies, or private signed URLs. Treat rights, claims, prices, consent, and publication status as unverified inputs until the project contract's evidence and approval gates are satisfied.

## Mandatory blueprint decision

After presenting the exact blueprint and before the first Chany-managed file write, interactive Claude must show one single-select `AskUserQuestion` card:

- header: `설정 승인`
- question: `이 설계대로 현재 폴더에 프로젝트 지침을 생성할까요?`
- `승인 후 생성 (권장)`: create or update only the files listed in the blueprint; do not upload, generate paid media, commit, or push
- `설계 수정`: make no file changes, collect the requested revision, and present the revised blueprint again
- `취소`: end the Chany phase with no Chany-managed file changes; preserve any separately approved Moai-owned files

Use `multiSelect: false`. Only `승인 후 생성 (권장)` authorizes the listed Chany-managed project-file writes. A prior command invocation, interview answer, blank response, or approval for a different blueprint is not write authorization. If the structured tool is unavailable, request the same three-way decision in concise prose and wait for explicit approval. In a same-request Moai chain, Moai-owned writes may already have occurred only after Moai's separate preview and approval; canceling the Chany card preserves those upstream records and creates no Chany-managed files.
