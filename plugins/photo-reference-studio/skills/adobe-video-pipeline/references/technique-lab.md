# Technique lab

These are independently written production exercises derived from the research register and craft review. They are not transcriptions of paid lessons or evidence that every exercise has been executed. Use the actual project's assets and accepted direction. Preserve both a baseline and revised render so a change can be judged.

## 1. Editing, performance, and eye trace

**Input:** one spoken question, its visual evidence, and a reaction/conclusion.

Create a selects sequence, then a short main sequence. Make two edits using the same source material: vary where evidence appears relative to the spoken words and how long the conclusion holds. Watch without captions to test the story, then with the intended captions to test reading load. Across a cut, inspect where the viewer was looking and where the next relevant subject appears. Use J/L cuts when sound continuity supports the scene; do not break an accepted lip-sync performance merely to tighten duration.

**Accept when:** viewers can identify the question and evidence; the change improves comprehension or rhythm without losing a necessary fact. Vashi's inspected template supports the selects/main organization; the exercise is our adaptation, not a documented Deadpool editing rule.

## 2. Art direction and styleframes

**Input:** a quiet frame, the densest information frame, and a transition pair.

Set type roles, foreground/background value contrast, spacing, image treatment, line weight and texture on those actual frames. Test them at intended display size. Establish a single visual priority before adding motion. Use illustration or texture only where it belongs to the direction, rather than treating “premium” as a fixed glossy or cinematic look.

**Accept when:** the three frames belong to the same film and hierarchy survives the dense case. Ordinary Folk's process and Kyungrae Yu's published styleframes/process support studying design before animation; their artwork is reference material, not acquired client assets.

## 3. Korean kinetic type and responsive layout

**Input:** shortest/longest real labels, a two-digit/four-digit value, punctuation, and approved fonts.

Create editable text, its background shape, and bounded padding controls. In AE, measure the actual text bounds with a verified text-bounds API; distinguish layer coordinates from parent/comp coordinates. Check paragraph text, multiple lines and altered tracking before assuming the box calculation is universal. Animate position/opacity or a deliberate mask reveal against the voice while retaining a reading hold.

**Accept when:** no glyph fallback, clipping, layout jump or accidental loss of the unit; changing text does not require rebuilding unrelated animation. Keep UI labels and spoken captions distinct.

## 4. Curves, anticipation, and settling

**Input:** a label or object with a clear starting and ending pose.

Compare a linear baseline with a deliberately adjusted curve. Inspect the value graph for the shape of change and the speed graph for velocity. Look at the frames before the move, maximum speed, arrival and settled hold. Add anticipation or overshoot only when the action benefits; preserve restrained motion when required.

**Accept when:** the motion has a readable purpose and the hold is actually stable. A numerical easing influence is not a transferable design judgment. Reference: School of Motion's publicly read Graph Editor lesson.

## 5. Controllers, stagger, and reusable rigs

**Input:** repeated labels/shapes and a controller for delay, direction, and amount.

Define a stable item identity, explicit delay units, and a coordinate space. Have followers evaluate the intended reference at a shifted time. For procedural variation, fix the seed when reproducibility matters. Duplicate, reorder, shorten and lengthen the group, then inspect dependencies and render cost. Separate editable content from expensive fixed visual layers.

**Accept when:** changing one control produces the intended family of changes, with no broken layer references or unintended random resets. Ordinary Folk's downloaded learning projects reveal controller/follower structures; independently implement generic mechanisms rather than copying their restricted expressions.

## 6. Transitions and match movement

**Input:** the last readable pose of shot A and first readable pose of shot B, plus editorial handles.

Identify a common anchor: subject position, shape, direction, color, or sound. Build the transition around that relationship. Check action direction, scale and eye trace across the boundary. For an AI bridge, compare the supplied endpoint frames with the actual generated endpoints, including people, labels and source geometry. If the bridge distorts an authoritative object, composite the real object or choose another approved treatment.

**Accept when:** the transition preserves the intended relationship and never hides missing evidence. Jake's published transition resources are study candidates, not downloaded or tested implementations in this collection.

## 7. Keying, tracking, and insert integration

**Input:** a plate with green/screen surface, authoritative insert, and an occlusion case.

Separate surface tracking from matte extraction. Fit the insert at the start, an intermediate withheld check frame and the end. Account for hands/foreground objects with holdout mattes. Inspect soft edges, spill, perspective, contact cues, blur and grain at full speed and against contrasting backgrounds. A flat corner pin does not model a bending sheet.

**Accept when:** there is no drift, edge chatter or foreground-order error throughout the shot. See the AE compositing reference; Video Copilot's soft-keying page is an additional study source, not a completed local exercise.

## 8. 2.5D, 3D, and CG handoff

**Input:** a shot specifying whether it needs depth parallax, a real three-dimensional object, or simulation.

Choose a layered 2.5D treatment when planar artwork is sufficient. Choose a suitable 3D host and renderer only when actual geometry, lighting, deformation or simulation is needed; verify their installation and available control surface. Request a plate/beauty render and only the passes useful to the planned composite, with frame range, alpha interpretation and color transform recorded. Verify one frame and one moving segment through AE and Premiere before committing an entire sequence. Do not infer editable 3D geometry from a rendered video.

**Accept when:** depth, occlusion, camera and lighting are coherent and the handoff preserves the agreed color/alpha. Kyungrae Yu lists Cinema 4D and Octane alongside AE; this source supports a multi-app handoff, not an AE-only CG claim. d'strict's OCEAN/ECHO pages establish cross-disciplinary image/sound work; they do not disclose a reusable simulation rig. No C4D/Octane/Houdini/Blender production run was verified here.

## 9. Color and texture matching

**Input:** a camera clip, generated plate, original map/still, and transparent graphic.

Record each source's interpretation and the intended working/output transform. Compare scopes and matched exported frames across the AE/Premiere boundary. Evaluate texture or grain at final size; avoid using it to hide a bad key or low-resolution map. Keep official source colors under deliberate control rather than applying a global look blindly.

**Accept when:** no duplicate transform, unexpected contrast/saturation change, banding or alpha fringe. Adobe's cross-app documentation identifies specific exceptions; local proof must use the actual formats.

## 10. Sound design and mix

**Input:** voice/character performance, licensed music, selected effects and ambience.

Establish voice continuity first. Map sound to meaningful actions and transitions, preserving intentional quiet. Use separate tracks/buses. If using Essential Sound ducking, tag the actual clip roles and inspect the resulting keyframes around phrases. Re-generating ducking keyframes can overwrite manual edits; preserve a version before regenerating. Check whether the installed release has auto-update behavior rather than assuming a beta announcement applies.

**Accept when:** words remain intelligible, music does not pump distractingly, effects have a purpose, and the exported mix/stems meet the chosen specification. Adobe's [ducking documentation](https://helpx.adobe.com/premiere/desktop/add-audio-effects/adjust-volume-and-levels/automatically-duck-audio.html) supports the keyframe behavior. Measurement supplements listening; it does not replace it.

## 11. Automation and templates

**Input:** a stable repeated task, required editor controls, installed app/API version.

Automate one representative instance before a batch. Include input validation, collision handling, an undo/recovery path, and a saved project revision. Stress a MOGRT with long text and duration extremes. For Premiere UXP, follow the installed version's locking/transaction contract. Test a real native save/reopen, not only script syntax or JSON/XML validity.

**Accept when:** the repeated task remains editable and failures are reported without silently damaging an accepted project. Consult the AE JSX and Premiere automation references only for the chosen route.

## 12. Variants, accessibility, and packaging

**Input:** approved master, output list, clean/captioned definitions and target viewing formats.

Derive variants from the authoritative edit, reframe for each aspect ratio, and recheck text size and information context. Align dialogue/music/effects stems to the same start and duration. Package permitted media and dependencies; reopen from the intended handoff location. Inspect the final encodes, not merely the timeline. Confirm any required signing, audio description or accessible caption rules against the actual brief.

**Accept when:** every requested output is present, plays correctly, and preserves meaning. Metadata helper PASS only covers its explicitly requested technical fields.

## Record what changed

For a selected exercise retain: request, source/version, baseline, changed parameter or design decision, output path, observed improvement/defect, and remaining check. Mark the stage as documented, source-inspected, locally-tested or production-accepted. Do not promote an entire discipline after one successful exercise.
