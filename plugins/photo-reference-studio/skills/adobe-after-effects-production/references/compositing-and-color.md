# Compositing and color

## Map or screen replacement

Treat tracking, matte extraction, and image integration as separate problems. A moving planar surface needs a suitable planar/perspective track; a fixed surface may need only a measured placement. Use a held-out check frame midway and near the end to detect drift. Corner-pin alone cannot solve a bending sheet or a surface hidden by a foreground actor.

Preserve the authoritative inserted image's geometry/content. Record crop and scale; keep any required labels/features visible. Use foreground holdout mattes when hands, characters, or objects pass in front. Inspect edge chatter, green spill, semi-transparent edges, and motion blur over time.

Choose a keying method by plate quality. Use garbage/holdout mattes to reduce irrelevant areas, refine the matte independently from final color, then match exposure, contrast, perspective, blur, grain and contact/shadow cues. Do not aggressively crush the matte just to remove green if it erases fine edges. An effect applied once is not proof of successful keying.

[Video Copilot's Advanced Soft Keying](https://www.videocopilot.net/tutorials/advanced_soft_keying/) is an additional study source for soft reflections and high-precision blending; the 2011 tutorial is not a verified recipe for every current plate/effect.

## Color and precision

Record source interpretation, working space, output transform, and monitor assumptions. For an SDR job, establish the intended SDR pipeline before grading. Do not silently reinterpret log/HLG footage as Rec.709, apply both an input transform and a duplicate LUT, or change the working space after look approval without checking the consequences.

Select bit depth according to gradients, compositing range, and effect support. 16 bpc is often useful for designed graphics; 32 bpc can matter for HDR/light calculations, but an unsupported effect may reduce precision. Test rather than equating a bigger number with a better-looking result.

Use an alpha-capable codec when transparency is needed; ProRes 422 is not an alpha deliverable. Verify straight/premultiplied interpretation against both light and dark backgrounds. Inspect white/black edge halos after importing into Premiere.

[Adobe cross-app color documentation](https://helpx.adobe.com/premiere/desktop/correct-color/set-up-color-management/premiere-after-effects-color-management-compatibility.html) identifies exceptions for some still formats and different LUT application paths. Test a representative map/JPEG/PNG and camera clip through the actual pipeline. Compare scopes and matched exported frames, not only two differently managed player windows.
