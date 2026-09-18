# Runtime and Loop Boundaries

Keep code convergence and media production as separate systems.

## Video-reference intake

`chany-video-reference-ingest` owns the evidence boundary before any video teardown. A platform page, an observed player excerpt, a user-invoked browser capture, a direct media URL, and a local file are different input states and must not be collapsed into one another. Browser observation and local capture are not generation attempts, do not consume the media-production retry budget, and do not authorize external upload or reuse of captured pixels.

The active host decides whether a browser or extension surface is observable. The existence of an intake skill never proves that a browser tab, extension, native bridge, or local file is connected. When no capture surface is callable, use the manual local-file handoff rather than a platform downloader.

## Source-code quality loops

A source-code quality loop (diagnostics, lint, tests, review) may be used to
validate plugin source code, tests, or scripts, but it never controls image or video
generation, creative acceptance, paid retries, or publication decisions.

## Chany media-production loop

`chany-media-production-loop` owns the bounded lifecycle of generated stills and
campaign-video jobs. It uses creative acceptance, live capability and cost
resolution, provider receipts, final-resolution or time-based inspection,
defect-specific correction, and visible results. It never edits source code as a
quality sweep and does not depend on a Stop hook to continue.

The active runtime schema is authoritative. A Claude plugin cache, Codex skill
copy, website example, or remembered provider option is not a portable runtime
contract. Record package, contract, and job versions separately when they matter.
