# Quality and handoff

Review at normal speed, paused full resolution, and a small viewing size. A contact sheet finds layout errors but cannot prove motion rhythm, lip-sync, tracking stability, or sound quality.

## Assess the visible result

| Area | Evidence to inspect | Repair direction |
|---|---|---|
| Story | Each section answers or advances a question; viewer can describe the takeaway | Adjust edit/voice/boards before adding effects |
| Hierarchy | First, second, and optional information are visually distinct | Reduce simultaneous emphasis; preserve an adequate reading hold |
| Motion | Entry/hold/exit, acceleration, overshoot, settling, motion direction | Tune selected curves; do not apply one easing preset to every property |
| Continuity | Subject/eye trace across cuts, graphic origins, camera direction | Repair transition geometry/timing; avoid decorative movement that hides the evidence |
| Typography | Actual Korean text, long labels, numerals, punctuation, mobile size | Check glyphs and line breaks, then change layout/control bounds |
| Compositing | Edges on dark/light backgrounds, occlusion, perspective, grain, blur, color | Repair matte/track/color separately; inspect time intervals where the defect occurs |
| Sound | Voice clarity, dialogue edits, music masking, effect density, clipping | Mix separate stems; measure against the selected spec and listen on intended devices |
| Delivery | Actual codec, duration, frame count/rate, colors, captions, media links | Reopen/relink and inspect exports; never infer compliance from filename |

Block delivery for incorrect factual/brand content, missing media, unsupported rights, wrong format, corrupted frames, broken glyphs, unusable sound, or disclosure of protected material. Treat taste refinements separately. Record unknowns rather than calculating a misleading overall “quality score.”

## Review record

For each defect retain `shot_id`, output version, frame/time, observation, expected behavior, proposed change, and verification result. Separate editorial changes from graphic changes so the same shot is not revised twice from inconsistent notes. Record a single authoritative version of each accepted script, voice take, source plate, comp, and render.

## Editable handoff

Deliver actual `.prproj` / `.aep` files where required, used-source list, permitted collected assets, font/plugin/version dependencies, captions, and export settings. Keep dialogue/music/SFX stems aligned to the same start and duration. Test reopening with the provided media paths. Project Manager and AE Collect Files require their own dependency checks; neither proves every linked external project or font was packaged. Keep original and converted project versions distinct.

The technical metadata helper is one check in this process, never an artistic or legal PASS.
