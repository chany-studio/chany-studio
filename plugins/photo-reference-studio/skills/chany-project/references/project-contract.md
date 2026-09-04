# Chany project contract

Use this contract for setup with automatic existing-Moai-context detection and reuse, capability-gated Moai chaining, update, status, and doctor. Keep the workflow limited to advertising, marketing, detail pages, promotion, industry content, model/fashion stills, and commerce UGC. When Moai is present, also read [moai-chain.md](moai-chain.md).

## Compact interview

Derive answers from the user's invocation, attachments, and existing files first. Ask no more than three questions in one round, grouping related fields. Use one follow-up round only when a missing answer blocks a safe project design.

1. **Purpose and audience:** What product or brand is this for, what outcome matters, who is the audience, and what is the deadline?
2. **Deliverables and channels:** Which assets are required, where will they appear, and what sizes, ratios, lengths, languages, and quantities are fixed?
3. **Authority and constraints:** Which source images, logos, brand guides, approved facts, claims, prices, offers, CTA, rights, consent, visual references, and forbidden elements are authoritative? Is the project planning-only, connected-tool production, web handoff, or hybrid, and where must paid-generation approval occur?

Existing Moai answers count as inputs, not questions to repeat. Confirm only missing campaign-specific facts and any contradiction between current instructions, `.moai/project/*`, and `.chany-studio/*`.

If a field remains unknown but does not block setup, write `미정 — 확인 필요` instead of asking another question.

## Blueprint before writing

Show:

- project name, purpose, audience, deadline, and completion condition
- exact deliverables and channels
- authoritative sources and unresolved rights or copy
- one primary industry skill when the domain is known, the minimal production skill chain, and why each is present
- Moai phase (`reuse existing`, `run first`, `unavailable`, or `not requested`), upstream paths to consume, and ownership boundaries
- relevant installed Moai specialist handoffs, if any, with exact skill name, bounded purpose, reviewed-object version, and downstream owner
- publication-review scope, named owner, and the live paid-generation approval boundary
- one primary project-agent role, or a reason no recurring agent is needed
- files to create, files to update, conflicts, and backup location

Ask once: create, revise the blueprint, or cancel. Setup itself must not begin paid generation.

## Minimal routing

Select the primary industry overlay before the production skills. Read `chany-studio/references/routing.md` for the complete industry table. Use at most one primary industry skill unless the requested campaign genuinely crosses domains; record why a secondary overlay is needed.

| Need | Skill |
|---|---|
| cross-deliverable campaign coordination | `chany-studio` |
| objective, audience, message, offer, channels, asset matrix | `chany-marketing-brief` |
| cutout, white packshot, source cleanup | `chany-product-assets` |
| visible Behance or Pinterest art-direction candidates | `chany-reference-board` |
| staged master visual | `chany-campaign-visual` |
| commerce detail-page modules | `chany-detail-page` |
| static ads, promotion, posters, banners, channel variants | `chany-ad-creative` |
| bounded repair of an accepted image | `chany-image-edit` |
| adult model or source-locked fashion stills | `chany-model-fashion` |
| review, unboxing, tutorial, SaaS demo, or try-on UGC | `chany-ugc-ads` |
| version-bound final claims, offer, rights, disclosures, and release review | `chany-publication-review` |

Use `chany-studio` only when two or more production families need shared sequencing. Do not list unneeded specialists in the generated project instructions.

## Generated files

| Path | Purpose | Update rule |
|---|---|---|
| `AGENTS.md` | Shared canonical instructions; Codex reads it directly | Add or replace only the Chany-managed block |
| `AGENTS.override.md` | Optional Codex precedence bridge when an existing same-directory override shadows `AGENTS.md` | Never create by default; with approval, add or replace only the Chany-managed bridge |
| `CLAUDE.md` | Claude import and optional Claude-only instructions | Ensure first non-empty line is `@AGENTS.md`; preserve the rest |
| `.chany-studio/project.json` | Small machine-readable project snapshot | Replace only after validating JSON and preserving a backup |
| `.chany-studio/brief.md` | Stable human-editable facts, copy, scope, and constraints | Update its managed block; keep user notes outside it |
| `.chany-studio/state.md` | Mutable approvals, locks, outputs, and next action | Update its managed block; never mark an unverified item approved |
| `.chany-studio/.gitignore` | Keeps local backups, retired agents, and temporary files out of version control | Ensure it contains `backups/`, `retired-agents/`, and `*.tmp` without deleting other rules |
| `.claude/agents/<role>.md` | Claude project agent for one recurring role | Create only with the Claude managed marker |
| `.codex/agents/<role>.toml` | Equivalent named project agent for local Codex clients | Create only with the Codex managed marker and valid TOML |

Use templates in `../assets/templates/`. Replace every `{{PLACEHOLDER}}`; do not leave scaffold tokens in generated files.

`.moai/**` is not a Chany generated-file target. Read existing Moai project records only as described in `moai-chain.md`. When no foundation exists, include a same-request Moai phase only after verifying that the current host exposes the exact skill as callable and can await its completion in-process; installation evidence or a visible name alone is insufficient. Otherwise ordinary setup continues Chany-only with the manual two-step handoff. `--chany-only` skips that phase, while `--with-moai` requires it and stops before Chany writes when the capability is unavailable.

## Agent selection

Create at most one paired named agent during initial setup. The same role must also be summarized in the managed `AGENTS.md` block so hosted ChatGPT Work can delegate it without relying on local TOML configuration:

| Primary recurring work | Claude filename/name | Codex filename/name |
|---|---|---|
| several production families | `campaign-producer.md` / `campaign-producer` | `campaign-producer.toml` / `campaign_producer` |
| detail page | `detail-page-producer.md` / `detail-page-producer` | `detail-page-producer.toml` / `detail_page_producer` |
| ads or promotion | `ad-producer.md` / `ad-producer` | `ad-producer.toml` / `ad_producer` |
| UGC | `ugc-producer.md` / `ugc-producer` | `ugc-producer.toml` / `ugc_producer` |
| model or fashion stills | `fashion-producer.md` / `fashion-producer` | `fashion-producer.toml` / `fashion_producer` |
| reusable product assets only | `asset-producer.md` / `asset-producer` | `asset-producer.toml` / `asset_producer` |

Omit both agent files for a one-off project with no repeated production work. Do not create separate agents for every specialist.

On update, if the primary role changes, list the old and new roles in the blueprint. After explicit approval, back up and move only the old Chany-managed Claude/Codex pair to `.chany-studio/retired-agents/YYYYMMDD-HHMMSS/<relative-path>` before creating the new pair. Never retire an unowned file, never leave two active managed primary roles, and never remove a role merely because one deliverable changed.

## Backup and merge rules

Before modifying any existing managed file, copy its original to `.chany-studio/backups/YYYYMMDD-HHMMSS/<relative-path>`. Never delete backups automatically. Do not back up a file that will not change.

For existing instructions:

1. inventory and read the file
2. identify owned markers and user-owned content
3. show the merge or conflict in the blueprint
4. after approval, preserve user-owned content and update the owned block only
5. reread the written file and verify that the preserved content remains

If a target is a symlink, resolves outside the project, cannot be read, or contains conflicting duplicate markers, do not modify it. If an existing file appears to contain a secret, stop before copying or backing it up and ask the user to remove or redact the secret.

At the project root, Codex selects a non-empty `AGENTS.override.md` before `AGENTS.md`. Detect that condition before the blueprint. Preserve the override and either add the approved bridge template or report that the canonical instructions will be shadowed. Inspect nested overrides between the project root and working directory for conflicting guidance; do not alter them without explicit approval.

## State snapshot

`project.json` must be valid UTF-8 JSON with no comments and these fields:

- `schemaVersion`: `1`
- `plugin`: `photo-reference-studio`
- `pluginVersion`: current manifest base version
- `projectName`, `projectType`, `executionMode`, `primaryAgent`
- `activeSkills`: only selected Chany skill names; record optional Moai specialist names in the human-readable brief and state instead of claiming plugin ownership in this array
- `createdAt`, `updatedAt`: ISO 8601 timestamps; preserve `createdAt` on update

Expand the single `activeSkills` example entry in the JSON template into one properly escaped array item per selected skill. Escape all inserted strings as JSON values; never paste raw user text into JSON syntax.

For the Codex agent template, replace `{{AGENT_DESCRIPTION_TOML}}` with a complete TOML basic-string literal, including its surrounding quotes. Encode quotes, backslashes, control characters, and line breaks before insertion; a JSON string literal produced from the plain one-line description is compatible for this field. Do not wrap the placeholder in another pair of quotes. Use a controlled role description rather than raw user text, then parse the rendered TOML before writing it.

Do not add credentials, raw image data, signed URLs, or private identifiers.

## Validation

After setup or update, verify:

- `AGENTS.md` contains exactly one start marker and one end marker and stays at or below 200 lines unless pre-existing user content already exceeds that size
- any same-directory `AGENTS.override.md` either contains exactly one valid Chany bridge or is reported as a runtime warning; user-owned override content remains unchanged
- `CLAUDE.md` first non-empty line is exactly `@AGENTS.md`, not a code span or fenced block
- any Moai harness marker pair and its enclosed bytes in `CLAUDE.md` remain unchanged
- `project.json` parses as JSON and contains only known fields
- the `AGENTS.md` hosted-work delegation contract and paired Claude/local-Codex agent definitions represent the same role and skill chain
- the Claude agent frontmatter and Codex TOML parse successfully
- exactly zero or one active Chany-managed primary agent pair exists; a retired pair is outside both runtime agent discovery directories
- the selected industry and production skills are available in this plugin and no removed legacy skill is selected
- every recorded Moai source exists, no `.moai/**` path changed during the Chany phase, and newer upstream records are reported as stale context
- every specialist handoff names its actual installed producer, reviewed-object version, source dates, and downstream owner; unavailable optional skills are skipped visibly and never emulated
- paid-operation records preserve the approved version and unknown-charge recovery rule, and every gated final asset has a version-bound publication status
- no secret-looking values, temporary upload URLs, or invented approval labels were written
- files outside the target project were unchanged

For `status`, read `.chany-studio/brief.md`, `.chany-studio/state.md`, and the managed `AGENTS.md` block and report discrepancies. For `doctor`, also check format, markers, override precedence, hosted-work delegation guidance, paired-agent parity, multiple active managed roles, stale version metadata, and missing imports.
