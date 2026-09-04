---
name: chany-preflight
description: Inspect the current runtime for local media tools and Korean-capable fonts needed by Chany's Studio, report observed capability states, and propose a safe approved remediation when something is missing. Use before first video assembly, reference-video extraction, or batch image work, and for missing-tool failures; not for paid-generation quotes, credentials, or connector setup.
---

# Chany Environment Preflight

Report what the current runtime can actually do before promising local media work. This environment preflight is separate from the paid-generation preflight in the Higgsfield runtime contract.

## Check only what the task needs

Run each relevant tool's own version or capability command. Do not infer availability from the host name, a previous session, an installation directory, or this plugin's documentation.

| Capability | Typical evidence | Needed for |
|---|---|---|
| video encode | observed `ffmpeg` version plus the required encoder and filter capabilities | concatenation, crop/scale, silent audio, burned text |
| media probe | observed `ffprobe` version | input measurement and output verification |
| Python runtime | observed `python3` version | tables, contact sheets, deterministic batch helpers |
| image tooling | observed ImageMagick command or importable Pillow version | contact sheets and batch image steps when selected |
| JavaScript runtime | observed `node` version | local reference-preview support when selected |
| Korean-capable font | the selected font's character map, in-memory/null-sink test, or a temporary render of every code point in the exact approved string | Korean text burned into video or images |

Use exactly one state per item: `available`, `missing`, `not_observable`, or `blocked`. Include the observed version or evidence only when a check returned it. A missing executable and a command that cannot run because of sandbox or policy are different states. If shell access, source-file access, or a writable temporary/output location cannot be observed, use `not_observable` for that capability rather than `missing`.

For video assembly, `ffprobe` is required even when `ffmpeg` is available; without it, manifest planning may continue but media writing and success claims stop. For burned text, test the exact approved Korean, Latin, numeral, punctuation, and symbol strings against the selected font. Disable silent font fallback. Missing glyphs block burn-in until the user approves another verified font or a non-burned subtitle deliverable.

## Check boundary

The initial check is non-destructive and creates no persistent project or runtime state. Prefer character-map inspection, an in-memory test, or a null sink. If the available renderer can prove glyph support only by writing a sample, use a uniquely named operating-system temporary file, never a project content folder, inspect it, and remove it immediately. Report that transient check rather than calling it read-only.

## Remediation boundary

- Never install, upgrade, or persistently alter a runtime merely because a tool is missing.
- If the user asks for remediation, show the package or command, download size when known, destination, source, reason, and whether it changes persistent state. Obtain explicit approval before executing it.
- Prefer an already available tool or an ephemeral, user-scoped dependency environment when it fully satisfies the task. Do not place packages, archives, wheels, fonts, or installers in the user's content folders.
- Do not use elevated privileges, bypass a managed-host restriction, or claim that `sudo`, Homebrew, Winget, APT, `uv`, or `pip` exists before checking it.
- Python package installation cannot supply a missing system `ffmpeg` binary reliably. Keep operating-system tools and Python libraries separate.
- When the current host cannot install tools, provide one command appropriate to the observed operating system and available package manager for the user to run in their own environment. When either is not observable, request the result of a diagnostic command or report `해결안: none pending observation`; never guess an install command. Do not execute it or describe the blocked step as completed.

For a lightweight Python-only dependency, a task-scoped `uv` environment or user-scoped package install may be offered after approval when the corresponding manager is observed. For a system binary or font, verify the current package name and manager before giving a command; avoid stale remembered package identifiers.

## Report

```text
환경: [observed runtime and operating system, or not_observable]
점검 범위: [requested operation]
사용 가능: [capability — tool/version/evidence]
누락: [capability]
관찰 불가: [capability and reason]
차단: [capability and policy/sandbox reason]
지금 가능한 작업: [planning, manifest, table, or other supported work]
막힌 작업: [exact step]
해결안: [approved action required, verified user command, or none]
```

Never claim that a step ran or a font supports Korean when its evidence was missing. Keep secrets, credentials, private media, and connector authentication out of the report.
