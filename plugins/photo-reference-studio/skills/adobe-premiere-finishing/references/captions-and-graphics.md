# Captions, titles and versions

Use when importing SRT, styling Korean text, adapting MOGRTs, producing clean/burned versions or reframing derivatives.

## Assign one owner for visible subtitles

Inspect the actual picture first. If dialogue subtitles are already baked into the AE render, importing the same SRT as a visible Premiere track creates duplicates. A clean export cannot remove baked pixels by hiding a caption track: request/render the matching clean picture. Keep source text/timing accessible even when the visible version is baked.

Separate dialogue captions, editorial emphasis, source labels and brand marks. Define which disappear in the clean version. Deliberate on-screen labels normally remain unless the delivery definition says otherwise. If a reserved scene must stay visually empty, verify that active caption tracks and graphics do not enter it.

## Style and timing

Import UTF-8 text and compare wording with the approved script and the actual voice. Check syllables, punctuation, names, numbers/units, line breaks, reading intervals, speaker changes and overlap. Transcript correction is not a replacement for listening. Read the shortest, longest and most visually crowded captions at intended viewing size and actual speed.

Use caption Track Styles to keep approved font, appearance and alignment consistent; titles use Linked Styles. A local style library is not a guarantee that a recipient has the font. Recheck local overrides after changing a shared style. [Adobe caption styles](https://helpx.adobe.com/premiere/desktop/add-text-images/insert-captions/create-styles-for-captions.html).

Treat line length and font size as job-specific reading/design decisions. A character-count limit alone cannot certify readability. Check contrast on bright/dark paper and complex map regions, avoid covering the evidence, and leave room for player controls. Keep accepted font choices unless the brief changes. Correct unsupported glyphs at source; replacing the font silently can change line wrapping and the design.

## MOGRT adaptation

Inspect actual controls and dependencies before promising editability. AE-authored templates expose only what their author made available. Test the longest Korean title, smallest layout, changed media and shortest/longest intended duration. Inspect entrance, settled state and exit for clipped text, awkward auto-sizing and broken protected timing.

Use reusable graphics for consistent titles and callouts, with stable reading holds. Do not convert every caption into animated graphics merely to animate a few important words; keep an editable caption/text source for sidecars. Prefer per-instance controls over duplicating an opaque template into many unrelated versions. Record font/plugin/template rights separately from the fact that a file opened.

## Export and derivative checks

Choose burn-in, sidecar or embedded delivery explicitly. Supported embedded caption formats depend on the container/workflow; do not promise that arbitrary SRT styling becomes an embedded broadcast caption. SRT carries one stream per file and active-track selection matters. Export only the intended language/track and reimport a sample sidecar to confirm text and timing. [Adobe caption export](https://helpx.adobe.com/premiere/desktop/render-and-export/export-files/export-caption-tracks.html).

For a shorter cut, reconform captions to the new edit rather than copying the full-film SRT. For a different aspect ratio, keep an independent sequence and recompose the map, faces and titles together. Automated reframing can prioritize a face while losing the geographic evidence; review each change in framing and each animated title. Duration requirements do not imply a new aspect ratio.
