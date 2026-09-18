---
name: chany-project
description: Initialize, inspect, diagnose, or safely update a file-backed Chany's Studio advertising project with shared instructions, brief and state, industry routing, and cross-runtime agents. Use for project setup or when invoking @chany-project, $chany-project, /project-studio, or its plain-text compatibility alias; not for producing one deliverable.
allowed-tools: AskUserQuestion
---

# Chany's Studio project setup

Turn the current file-backed workspace into a focused advertising or commerce production project. The setup must work in both ChatGPT Work/Codex and Claude Cowork without duplicating the project instructions.

Every user-facing turn follows the shared [beginner experience contract](../chany-studio/references/beginner-experience.md): quick start by default, plain Korean without internal field names, and one confirmation card before any paid generation.

This skill configures the current project folder. It does not create a cloud Project object, a new Codex task, a repository, or a Higgsfield project on the user's behalf.

## Entry points

- Claude Cowork: `/project-studio <description>`. If the short form is not surfaced, use `/photo-reference-studio:project-studio <description>`.
- ChatGPT Work: explicitly select `@chany-project`, or use a natural-language request such as “이 폴더를 신제품 광고 프로젝트로 설정해줘.” If a literal `/project-studio <description>` reaches the model as an ordinary message, treat it as a compatibility alias for this skill. Do not claim that it is registered in ChatGPT's slash-command menu; if the composer intercepts it, tell the user to select `@chany-project`.
- Codex: use `$chany-project` or the same natural-language request. A literal `/project-studio <description>` that arrives as prompt text is also a compatibility alias, not a registered plugin slash command.
- Do not treat `/project` as a Chany's Studio entry point. It is intentionally left available to other project-management tools.
- Treat the text after the invocation as project context. Do not ask for information already present there, in attached files, or in existing project records.

## Structured interview channel

For Claude project setup or update, read [references/interactive-interview.md](references/interactive-interview.md). The main conversation must use the host's `AskUserQuestion` tool for missing-fact interviews and the final pre-write decision whenever that tool is exposed. Do not replace an available question card with prose, and do not delegate the interview or approval to a subagent. If the tool is deferred and `ToolSearch` is exposed, load it immediately before the call as described in that contract.

ChatGPT Work and Codex should use their native structured-input mechanism when one is exposed to the current conversation; otherwise use the same compact interview as concise prose. Never claim that a structured UI was displayed when the host did not expose one. `status` and `doctor` are read-only and do not force an interview when no decision is needed.

## Other tools in the workspace

- Chany's Studio owns only its marked sections, `.chany-studio/**`, and approved paired runtime-agent files. Never edit, delete, move, or back up files owned by another tool in the workspace (for example `.moai/**`), and never imitate another tool's setup.
- Preserve another tool's bounded region in `CLAUDE.md` or `AGENTS.md` byte-for-byte.
- Treat an unrecognized `--` option as unknown, including a leftover MoAI linking option from before 2.12.0. Ignore it, continue normal Chany setup, and say once in plain Korean: "MoAI 연동은 2.12.0에서 제거되어서, 입력하신 옵션은 무시하고 챠니스튜디오 설정만 진행할게요."

## Modes

- **setup** is the default. Show the applicable scope and obtain approval before Chany-managed writes.
- **update** changes only Chany-managed content and the approved runtime delegation configuration after showing the proposed diff.
- **status** summarizes the brief, approvals, pending decisions, active skill chain, and next action without writing.
- **doctor** checks structure, instruction precedence, imports, formats, runtime delegation, skill references, secrets, and stale state without writing project files. When active project work includes assembly, reference-video extraction, or batch image processing, route only the required non-destructive environment checks to `chany-preflight`; doctor must not install, upgrade, or leave persistent tool-check artifacts. Apply project-file repairs only when the user separately approves them.

Do not implement automatic self-evolution. Corrections become project changes only through an explicit setup or update request.

## Set up the project

1. Resolve the target to the current workspace or a directory explicitly named by the user. Do not write to a home directory, filesystem root, plugin cache, or any directory outside that target. Do not follow a symlink that escapes the target.
2. Inspect the target read-only for `AGENTS.md`, `AGENTS.override.md`, `CLAUDE.md`, `.chany-studio/`, `.claude/agents/`, `.codex/agents/`, obvious source assets, and user-provided brand documents. Also check for a non-empty `AGENTS.override.md` in each directory from the project root to the intended working directory because it changes Codex instruction precedence. Do not scan global plugin or agent directories.
3. Read [references/project-contract.md](references/project-contract.md). Collect only the remaining campaign-specific high-impact facts using its compact interview and the runtime channel in `interactive-interview.md`. Ask at most three questions in one round and make at most one follow-up round for genuine blockers. Then show the project preference cards from `interactive-interview.md` so the user chooses deliverables, channels, look, reference source, quality, reference-upload default, and ratio; skip anything already known.
4. Select exactly one primary industry skill when the domain is known, plus the smallest production skill chain that covers the requested deliverables.
5. Show a concise blueprint containing the project summary, assumptions, deliverables, selected skill chain, primary project agent, and every Chany-managed file to create or modify. Point out existing-file conflicts. Obtain one explicit approval before the first Chany-managed write through the runtime channel defined in `interactive-interview.md`.
6. Read and adapt only the templates needed from `assets/templates/`. Unknown business facts must remain `미정 — 확인 필요`; never invent claims, prices, dates, rights, or approval status.
7. Create or update the Chany-managed files according to the contract. Before changing an existing file, copy its previous contents into the timestamped local backup directory described there.
8. Validate every generated path and format. Report in plain Korean what was saved, what was kept as-is, and what is still undecided, then end with one ready-to-copy first production request such as "이 제품 사진으로 인스타 광고 이미지 한 장 만들어줘".
9. Tell the user to open a new task or session after setup so the host loads the new project instructions and its supported runtime delegation configuration.

## Project authority

- `AGENTS.md` is the shared canonical instruction file and the native ChatGPT Work/Codex project instruction source when it is not shadowed by a same-directory `AGENTS.override.md`.
- `CLAUDE.md` imports `AGENTS.md`; it must not contain a second copy of the shared instructions.
- `.chany-studio/brief.md` is the human-editable source for approved project facts, copy, audience, deliverables, rights, and constraints.
- `.chany-studio/state.md` tracks mutable approvals, locks, attributed specialist handoffs, version-bound publication reviews, outputs, paid-generation plan, pending decisions, and next action.
- The managed `AGENTS.md` block contains the portable role and delegation contract used by ChatGPT Work hosted subagents and as the fallback in any runtime.
- Generate one paired named project role only when the project has a recurring production workflow: `.claude/agents/<role>.md` for Claude and `.codex/agents/<role>.toml` for local Codex clients. Both describe the same responsibility and skill chain in their host-native format. Do not claim that hosted ChatGPT Work loads the local Codex TOML file.

The project agent is a thin orchestrator. It must read the project brief and state, route work to existing Chany's Studio skills, and apply the shared quality gates. It must not duplicate the specialist production manuals.

## Preserve existing work

- Never silently replace an existing `AGENTS.md`, `CLAUDE.md`, project record, or agent definition.
- Never modify another tool's files. Preserve any other tool's bounded region in `CLAUDE.md` exactly while adding or maintaining the Chany import outside that region.
- In `AGENTS.md`, own only the content between `<!-- chany-studio:project:start schema=1 -->` and `<!-- chany-studio:project:end -->`. Preserve everything outside those markers byte-for-byte when practical.
- When `AGENTS.md` exists without the markers, propose appending one managed block. When markers are malformed, duplicated, or nested, stop and report the conflict.
- When a non-empty same-directory `AGENTS.override.md` exists, explain that Codex will prefer it over `AGENTS.md`. Do not silently edit or rename it. Offer to append or update only the small Chany-managed bridge from `assets/templates/AGENTS.override.md.tmpl`, after approval, so it explicitly loads the canonical project files while preserving all user-owned override content and precedence. If the user declines, finish with a visible warning that ChatGPT Work/Codex project guidance may not load.
- A nested `AGENTS.override.md` closer to the working directory does not erase the root instructions, but it can supersede conflicting rules. Report any conflict before writing and never edit a nested override unless it is explicitly included in the approved blueprint.
- Keep `@AGENTS.md` as the first non-empty line of `CLAUDE.md`. If an existing file has other instructions, preserve them below the import. Do not use a symlink.
- A project agent file is managed only when it contains the Chany's Studio managed marker from its template. If the intended path contains an unowned file, choose a non-conflicting project-specific name or ask before changing it.
- If the computed content is unchanged, make no write and create no backup.

## Safety and production boundaries

- Setup may read local project material and write the approved configuration files only.
- Do not upload assets, browse for references, call Higgsfield generation, spend credits, create paid media, publish content, commit, or push during setup.
- Never store passwords, API keys, access tokens, cookies, signed URLs, private download URLs, or hidden credentials in project files or backups.
- Record rights and consent as `confirmed`, `not confirmed`, or `not applicable`; never infer permission from the presence of a file.
- If the target is not writable, provide a complete preview and state that no file was saved.
- Explicit user instructions in the current conversation override generated project guidance.
