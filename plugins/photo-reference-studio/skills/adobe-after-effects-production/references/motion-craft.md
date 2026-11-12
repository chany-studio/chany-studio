# Motion craft

## Design decisions before keyframes

Describe what the viewer should look at and learn. Choose the scale relationship among evidence, title, explanation, and character. Use a styleframe with actual text and imagery; placeholder English text hides Korean layout problems. Include the busiest expected frame, not only a beautiful empty opening.

Use palette, type roles, line weight, spacing, texture, and lighting to connect shots. Variation should explain different information roles rather than change the entire design system. A slide-like result often comes from repeatedly framing everything as equal cards; use zoom into evidence, masking/reveal, aligned before/after comparison, or direct annotation when the story calls for it.

## Timing and spacing

The value graph shows how a property changes; its slope corresponds to rate. The speed graph shows speed directly. Separate position dimensions only when independent axes help the intended motion; preserve coupled paths when they matter. Shape acceleration around the action: fast arrival with a gentle settle can suit a label, while a deliberate move with a stable hold suits a map comparison. Do not turn a tutorial's curve into a universal preset.

Animate emphasis in a readable order. Avoid making the viewer follow the camera, read new text, and decode new data at the same instant. Add secondary motion only if the primary idea remains clear. Use overshoot/bounce deliberately; eliminate it when the brand or prior feedback calls for restrained motion. Motion blur can soften movement but can also destroy small line/text readability.

Reference basis: [School of Motion's public Graph Editor lesson/transcript](https://schoolofmotion.com/blog/intro-to-the-graph-editor-in-after-effects), [Ordinary Folk's production process](https://www.ordinaryfolk.co/process). Our editorial/readability checks are adaptations, not copied rules from those authors.

## Repeatable structure

A component should have one owner for text/layout and a small set of named controls. Keep delays in explicit units: frames converted with the comp frame duration, or seconds documented as seconds. Identify coordinate space when parenting or sampling a controller. Test duplicates and reordered layers; index-based references can change meaning.

If using expressions, examine dependencies and sampling cost. Minimize repeated heavy calculations and unnecessary long chains. Retain a deterministic seed where randomness must reproduce. Pre-render fixed expensive sections while keeping changeable text separate.

For templates, follow [Adobe's MOGRT authoring guidance](https://helpx.adobe.com/premiere/desktop/add-text-images/insert-images-and-graphics/tips-for-authoring-motion-graphics-templates.html): limit editor choices to useful controls and reduce avoidable complexity. A simple family of templates may be better than one universal rig.

## Korean typography checks

Check every actual font and weight, numerals, minus signs, multiplication marks, ellipses, parentheses, and special symbols. Test the longest label. Preserve deliberate distinctions among spoken captions, character bubbles, factual labels, and title emphasis. Do not silently replace fonts or bake type into pixels when editable text is required.

## Small repeatable exercises

- A factual card with short/long copy: preserve padding, hierarchy, and reading hold.
- A zoom into a supplied map: maintain source fidelity, visible context, and readable stop position.
- A four-item reveal: changing order/text must not break timing or controller links.
- A transition between unlike shots: preserve subject focus and deliver usable handles.

Record the final motion preview and the defect corrected. Passing these exercises demonstrates those mechanisms only, not mastery of all motion design.
