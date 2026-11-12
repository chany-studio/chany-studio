# JSX and rendering

## Execution contract

AE JSX uses its ExtendScript host. Use stable property match names where available, inspect the effect/font/output-template availability, and keep host-specific syntax distinct from modern browser/UXP JavaScript. Prefer documented APIs. Reference [Adobe scripts](https://helpx.adobe.com/after-effects/desktop/automate-in-after-effects/automate-animation/scripts.html) and [automated rendering](https://helpx.adobe.com/after-effects/desktop/render-and-export/automate-rendering/automated-rendering-network-rendering.html).

Make imports, timeline units, comp duration, layer in/out points, and file paths explicit. Use an undo group with `try/finally`; catch and report the failing operation and line. Validate before mutating the project. Do not modify an arbitrary open project just because it is active.

For text, use the verified PostScript font name, then inspect the actual render. For animation, account for the property's dimensionality and spatial/non-spatial behavior when assigning KeyframeEase arrays. Parent transforms carefully; verify that world-space placement stayed as intended.

## Render loop

1. Save a new AEP revision and choose the exact comp/work area.
2. Inspect actual output-module template names; they can be localized. File extension does not select the codec. Select the actual output module explicitly and confirm that the resulting codec and container match the intended delivery.
3. Use native render queue or `aerender` with explicit project, comp, module, and new output path.
4. Inspect the log and then measure the output. An `aerender` command can return exit code 0 while printing an error; a real output and completed render log are required.
5. Inspect representative frames and import into the edit for color, alpha, duration and timing checks.

## Establish local execution proof

Use a disposable, locally authored JSX test with supplied assets, exact text, editable layers and a short comp. Save a new AEP, render with an inspected output module, and measure codec, frame count, duration and dimensions. Inspect the actual frames. Record only the version and operations exercised on this machine.

Honor the current host's execution and permission rules. A successful test elsewhere does not authorize local renderer binding, app automation, script installation or preference changes. Verify Premiere import/save/reopen/export separately; Dynamic Link, MOGRT and UXP remain untested until demonstrated.

## Extend the proof appropriately

For alpha shots: render an alpha test and composite it over two backgrounds in Premiere. For MOGRT: change text and supported duration in Premiere, then export. For tracking: inspect difficult occlusion/end frames at normal speed. These remain unverified until the actual operations succeed.
