# Native production integration

These four specialists extend the common production axis. They do not add an industry overlay, replace the campaign owner, or create a second project brief.

## Ownership and handoffs

- `adobe-video-pipeline`: cross-app AE/Premiere planning, practitioner research, native trials and delivery evidence when editable Adobe projects are needed.
- `adobe-after-effects-production`: editable AE layers, typography, composites, character performance, JSX and native shot rendering. `chany-motion-design` keeps message/layout direction and delegates an explicitly selected AE route here.
- `adobe-premiere-finishing`: native Premiere editorial changes, conform, sound, color, captions, export and project packaging. `chany-video-assembly` retains simple approved-file assembly and measured replacements; use Premiere when the requested edit or editable PRPROJ needs it.
- `image-asset-production`: character/styleframe/background/prop sets, identity continuity, expression and pose coverage, alpha and animation-ready handoff. `chany-campaign-visual`, `chany-product-assets` and `chany-image-edit` retain their existing one-output roles and may call this specialist for a coherent asset set.

Explicit AEP/PRPROJ or Adobe-app requests take precedence over generic motion/assembly routing. A simple cut or one bounded image edit does not require a full Adobe pipeline. Preserve the accepted art direction and timeline authority across handoffs; do not convert a working project merely to use these skills.

## Shared contracts

Apply [beginner-experience.md](beginner-experience.md) and [content-intent.md](content-intent.md). Reuse the current brief, source versions, approved copy, reference roles and industry packet where relevant. Ask only for unresolved decisions that change the result. Keep technical setup internal unless the user asks for it.

Use [image-generation-runtime.md](image-generation-runtime.md) for generated images. `chany-media-production-loop` owns generation jobs, receipts and bounded retries; [higgsfield-runtime-contract.md](higgsfield-runtime-contract.md) governs billable provider calls. Local Adobe editing is not a paid media-generation step and does not require a new generation approval. It does not authorize new paid sources, font purchases, plugins or external uploads.

Keep state in the current project's existing brief, asset records and [campaign-state.md](campaign-state.md), not in a competing Adobe project ledger. Bind source assets, picture/audio versions, native project revisions, outputs and review status to the owning deliverable. `chany-publication-review` retains the final version-bound release review; technical checks never grant publication approval.

## Actual host capability

Check installed application versions, accessible files and available API/CLI/UI controls before promising execution. Cowork's working environment may not be able to control host Adobe applications. A skill package, native app installation, connector name or successful test on another machine does not prove access.

If the required control is missing, complete the feasible asset preparation and precise handoff; state what was not executed. Do not claim an AEP/PRPROJ was opened, rendered or tested without evidence. Follow host permission rules; do not install tools or change security preferences implicitly.

Run helper scripts from the actual skill directory or with their resolved absolute paths; examples are relative to that directory. The media helper needs Python 3 and ffprobe; the image helper needs Python 3 and Pillow. Inspect available dependencies first and do not globally install them automatically. Reports use new paths and preserve original media. Metadata and alpha checks do not establish artistic quality, audible clarity, rights or geographical accuracy.

## Private and public material

Keep client characters, unreleased assets, source maps, internal paths, production logs and credentials in the authorized project. Public skills contain reusable methods and attributed public research. Never transfer a previous project's approval, numerical preset, paid allowance or completion status into a new job.
