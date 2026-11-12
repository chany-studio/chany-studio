# Color decisions and AE round-trips

Use for mixed sources, shot matching, official graphics, SDR/HDR output or an AE/Premiere mismatch. Establish the technical pipeline before making the creative look.

## Record four different decisions

| Stage | Record | Failure to avoid |
|---|---|---|
| Input | Actual source color space/transfer interpretation; any override or input LUT | Guessing camera log from appearance or applying a transform twice |
| Working | Sequence color setup and any gamut/tone mapping | Switching an accepted sequence to another working system mid-grade |
| Viewing | Display management, monitor/viewer configuration and viewing conditions | Grading around one player's appearance without checking interpretation |
| Output | Intended color space, encoding and metadata | Exporting a different target from the one reviewed |

Adobe documents Direct Rec.709 (SDR) and wide-gamut processing options in its [color overview](https://helpx.adobe.com/premiere/desktop/correct-color/set-up-color-management/about-color-management.html). Choose based on sources and output needs; wide gamut is not a mandatory quality upgrade for already approved SDR graphics. Existing working/output settings are the baseline. Record any deliberate change and compare representative shots before expanding it.

Balance exposure, white balance and contrast across related live-action shots before adding a look. Use waveform/vectorscope alongside visual inspection. A legal signal range does not prove good skin, believable paper or readable map details. Keep corrections local where they should not affect overlays. A grade on an adjustment layer can unintentionally alter logos, captions or reference-map colors below it.

Keep source profile information for still images. Check a known map color, neutral paper, dark ink, skin and a gradient through the pipeline. Preserve official-map relationships; do not desaturate or shift categories until their meaning changes. Compare at full resolution for fine lines and type.

## AE interoperability has specific exceptions

Adobe's [compatibility notes](https://helpx.adobe.com/premiere/desktop/correct-color/set-up-color-management/premiere-after-effects-color-management-compatibility.html) distinguish sequence-based Premiere settings from project-wide AE settings. They flag still-image and graphic exceptions, differing HDR monitoring, and differences in which LUT and input/output tone-mapping settings transfer. A Lumetri-applied LUT and a Modify > Color LUT do not have identical handoff behavior. Do not infer pixel identity from Dynamic Link alone.

For a new route, compare a representative passage in its original sequence, linked comp and rendered intermediate using matching target interpretation. Include stills, gradients, transparent art and any graded footage actually used. Check both settled frames and moving edges. If there is a mismatch, inspect source tags, LUT placement, mapping and alpha interpretation one at a time. Do not stack a compensating LUT on the whole film before locating the cause.

Changing an open AE project's working space affects other comps in that project. Use an isolated test project/duplicate when the existing settings are accepted. For alpha media, inspect over light and dark backgrounds; dark fringes may be a premultiplication/interpretation issue rather than a creative color issue.

Save source/working/output settings with the trial result. Reimport the actual final export and check it under the intended pipeline; also inspect the delivery player when available. A metadata probe establishes tags, not how a particular display renders them.
