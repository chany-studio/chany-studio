# Runtime and Loop Boundaries

Keep code convergence and media production as separate systems.

## MoAI code-quality loop

MoAI's code-quality loop scans a finite source-code issue queue and verifies
diagnostics, lint, tests, and requested review lenses. It may be used to validate
plugin source code, tests, or scripts, but it never controls image or video
generation, creative acceptance, paid retries, or publication decisions.

Use the installed `moai-code-quality-loop` only when it is actually callable.
Do not infer active hooks from the presence of a skill or plugin name. Claude
Code automatic turn-end continuation depends on registered MoAI hooks; Codex
uses its own task and goal controls and must not copy Claude hook exit semantics.
The terminal `moai loop` lifecycle controller and conversational `/moai loop`
code-quality preset are different interfaces.

## Chany media-production loop

`chany-media-production-loop` owns the bounded lifecycle of generated stills and
campaign-video jobs. It uses creative acceptance, live capability and cost
resolution, provider receipts, final-resolution or time-based inspection,
defect-specific correction, and visible results. It never edits source code as a
quality sweep and does not depend on a Stop hook to continue.

The active runtime schema is authoritative. A Claude plugin cache, Codex skill
copy, website example, or remembered provider option is not a portable runtime
contract. Record package, contract, and job versions separately when they matter.
