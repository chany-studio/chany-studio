# Native automation

Installed capability and documented capability differ. Premiere UXP is available from 25.6, but each release adds APIs. Consult the [official API introduction](https://developer.adobe.com/premiere-pro/uxp/resources/fundamentals/apis/) and [changelog](https://developer.adobe.com/premiere-pro/uxp/changelog/) for the exact installed version. Check the actual installed version: documentation for a newer release does not establish that its MOGRT text or timecode helpers exist on an older host.

For 26.3 and later, create `create*Action` instances within `project.lockedAccess` and execute undoable changes through `project.executeTransaction`, following the documented contract. Do not create stale actions outside a lock. Keep unrelated file/network work outside the mutation callback and reacquire current project state after user changes. Verify the concrete class/method in the installed-version reference, not illustrative pseudocode in an overview.

Do not assume the plugin HTML DOM is the Premiere project DOM. A UXP plugin must actually be loaded into the host with the required capabilities. Do not silently enable developer/security preferences, install unsigned scripts, or reinterpret tool availability as user authorization.

Use a three-stage local test: read project/version/sequence; make one reversible change in a test project and verify undo; save/reopen/export a short sequence and inspect the media. Log the actual host/API version and operation outcome. Until then report UXP as documented, untested.

Use exact project/sequence IDs and expected source versions, not only the currently focused panel. After Save As, confirm which project the API object now represents; Adobe documents that it points at the copy. Read back created objects/counts/paths after a successful return. Separate queue submission from encode completion and validate the actual output before reporting success.

Make repeated automation runs detect existing output rather than duplicate tracks or overwrite accepted projects. Stop on changed source identity, an unexpected active sequence or a failed verification; preserve the log and current project. Do not use undocumented QE calls or byte-level `.prproj` editing as a silent fallback for missing UXP methods. Keep the already tested native/UI or interchange route available when a new API is unproven.

When using native UI, refresh the UI state after actions. A field setter returning successfully does not prove a custom Adobe field changed. Verify visible values before creating/saving. On the local probe, writing an absolute path into macOS's filename field produced a colon-containing filename instead of navigating; use the actual location chooser. Cancel malformed test dialogs before they create stray files.
