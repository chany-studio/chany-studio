---
name: chany-project
description: Initialize, inspect, diagnose, or safely update a file-backed Chany's Studio advertising project with shared instructions, brief and state, industry routing, cross-runtime agents, existing Moai-context reuse, and capability-gated Moai chaining. Use for project setup or when invoking @chany-project, $chany-project, /project-studio, or its plain-text compatibility alias; not for producing one deliverable.
---

# Chany's Studio project setup

Turn the current file-backed workspace into a focused advertising or commerce production project. The setup must work in both ChatGPT Work/Codex and Claude Cowork without duplicating the project instructions.

This skill configures the current project folder. It does not create a cloud Project object, a new Codex task, a repository, or a Higgsfield project on the user's behalf.

## Entry points

- Claude Cowork: `/project-studio <description>`. If the short form is not surfaced, use `/photo-reference-studio:project-studio <description>`.
- ChatGPT Work: explicitly select `@chany-project`, or use a natural-language request such as “이 폴더를 신제품 광고 프로젝트로 설정해줘.” If a literal `/project-studio <description>` reaches the model as an ordinary message, treat it as a compatibility alias for this skill. Do not claim that it is registered in ChatGPT's slash-command menu; if the composer intercepts it, tell the user to select `@chany-project`.
- Codex: use `$chany-project` or the same natural-language request. A literal `/project-studio <description>` that arrives as prompt text is also a compatibility alias, not a registered plugin slash command.
- Do not treat `/project` as a Chany's Studio entry point. It is intentionally left available to other project-management tools.
- Treat the text after the invocation as project context. Do not ask for information already present there, in attached files, or in existing project records.

## Moai coexistence and chaining

Read [references/moai-chain.md](references/moai-chain.md) whenever `.moai/` exists, the Moai skill is available, or the user mentions Moai, `/project`, `--with-moai`, or `moai-chain`.

- Keep `/project` Moai-owned and `/project-studio` Chany-owned.
- Reuse existing successful Moai project records as read-only upstream context by default.
- If no Moai foundation exists, run a same-request Moai `project` phase only when the current host exposes an actually callable in-process Moai skill mechanism. Installation files, documentation, or a visible name alone are not proof. Otherwise continue Chany-only for normal setup and give the exact manual two-step handoff.
- `--with-moai` requires a real combined phase; `moai-chain` is its natural-language equivalent. If the host cannot call Moai in-process, stop that required phase and give the manual two-step handoff. `--chany-only` skips Moai detection.
- Never edit `.moai/**` or silently reproduce Moai behavior. Preserve its `CLAUDE.md` harness markers byte-for-byte.

## Modes

- **setup** is the default. Detect and reuse valid Moai records when present. When they are missing, include a same-request Moai phase only after confirming an in-process callable mechanism; otherwise perform Chany-only setup and show the manual two-step option. Show the applicable scope and obtain approval before writes.
- **with-moai** requires the Moai phase and fails clearly instead of falling back when the skill or in-process chaining mechanism is unavailable.
- **chany-only** skips Moai detection and creates only the Chany project layer.
- **update** changes only Chany-managed content and the approved runtime delegation configuration after showing the proposed diff.
- **status** summarizes the brief, approvals, pending decisions, active skill chain, and next action without writing.
- **doctor** checks structure, instruction precedence, imports, formats, runtime delegation, skill references, secrets, and stale state without writing. Apply repairs only when the user separately approves them.

Do not implement automatic self-evolution. Corrections become project changes only through an explicit setup or update request.

## Set up the project

1. Resolve the target to the current workspace or a directory explicitly named by the user. Do not write to a home directory, filesystem root, plugin cache, or any directory outside that target. Do not follow a symlink that escapes the target.
2. Inspect the target read-only for `AGENTS.md`, `AGENTS.override.md`, `CLAUDE.md`, `.chany-studio/`, `.moai/project/`, `.claude/agents/`, `.codex/agents/`, obvious source assets, and user-provided brand documents. Also check for a non-empty `AGENTS.override.md` in each directory from the project root to the intended working directory because it changes Codex instruction precedence. Do not scan global plugin or agent directories.
3. Read [references/project-contract.md](references/project-contract.md). Collect only missing high-impact facts using its compact interview. Ask at most three questions in one round and make at most one follow-up round for genuine blockers.
4. Apply the Moai project decision and capability gate from `moai-chain.md`, then select exactly one primary industry skill when the domain is known, plus the smallest production skill chain that covers the requested deliverables. If relevant Moai commerce, marketing, legal, regulatory, or design skills are installed and actually callable in the current host, propose only the necessary specialist handoffs from the downstream chaining rules; do not include every specialist.
5. Show a concise blueprint containing the project summary, assumptions, deliverables, selected skill chain, primary project agent, and every file to create or modify. Point out existing-file conflicts. Obtain one approval before the first write.
6. Read and adapt only the templates needed from `assets/templates/`. Unknown business facts must remain `미정 — 확인 필요`; never invent claims, prices, dates, rights, or approval status.
7. Create or update the files according to the contract. Before changing an existing file, copy its previous contents into the timestamped local backup directory described there.
8. Validate every generated path and format. Report files created, files updated, files preserved, unresolved decisions, and one useful first production request.
9. Tell the user to open a new task or session after setup so the host loads the new project instructions and its supported runtime delegation configuration.

## Project authority

- `AGENTS.md` is the shared canonical instruction file and the native ChatGPT Work/Codex project instruction source when it is not shadowed by a same-directory `AGENTS.override.md`.
- `CLAUDE.md` imports `AGENTS.md`; it must not contain a second copy of the shared instructions.
- `.chany-studio/brief.md` is the human-editable source for approved project facts, copy, audience, deliverables, rights, and constraints.
- `.chany-studio/state.md` tracks mutable approvals, locks, attributed specialist handoffs, version-bound publication reviews, outputs, paid-generation plan, pending decisions, and next action.
- Existing `.moai/project/*` records remain Moai-owned upstream context. Record which ones were consumed, but never copy their authority status into a campaign approval.
- The managed `AGENTS.md` block contains the portable role and delegation contract used by ChatGPT Work hosted subagents and as the fallback in any runtime.
- Generate one paired named project role only when the project has a recurring production workflow: `.claude/agents/<role>.md` for Claude and `.codex/agents/<role>.toml` for local Codex clients. Both describe the same responsibility and skill chain in their host-native format. Do not claim that hosted ChatGPT Work loads the local Codex TOML file.

The project agent is a thin orchestrator. It must read the project brief and state, route work to existing Chany's Studio skills, and apply the shared quality gates. It must not duplicate the specialist production manuals.

## Preserve existing work

- Never silently replace an existing `AGENTS.md`, `CLAUDE.md`, project record, or agent definition.
- Never modify `.moai/**`. Preserve any bounded Moai harness region in `CLAUDE.md` exactly while adding or maintaining the Chany import outside that region.
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
