---
name: auto-photo-production
description: Legacy compatibility shim for explicit auto-photo-production requests. Load the current shared routing table and delegate to the matching Chany's Studio owner; do not select this skill automatically.
---

# Auto Photo Production — Legacy

This saved-prompt entry point remains compatible. Its former duplicated routing list is removed; the current source of truth is [specialist routing](../chany-studio/references/routing.md). Read that table and load the matching owner's SKILL.md before continuing. Do not recreate the former all-in-one workflow.

Existing specialized calls remain reachable through that table: `chany-ad-variants`, `chany-shortform-recut`, `chany-product-3d`, `chany-viral-product-remake`, `chany-campaign-video`, `chany-video-assembly`, `chany-preflight`, `ai-drama-production` and `cinematic-director`. Their rules live only in their current owners.

1. Preserve the user's original request, supplied assets, selected references, project model policy and accepted decisions.
2. Apply [beginner experience](../chany-studio/references/beginner-experience.md). This shim adds no interview, deliverable or approval stage.
3. Route by actual output and scope using the shared table, including narrative, Adobe, reference-insertion and service work. A single clear deliverable goes directly to its owner.
4. Generic discovery still means 6 inline images by default (Pinterest 6); explicit source/count wins. Named curated sources and optional Metricool follow their own labelled lanes, never cross-fill Pinterest.
5. Apply [image model policy](../chany-studio/references/image-generation-runtime.md) in the owner. New unpinned work uses GPT Image 2.6; recorded existing project choices continue unchanged. A model update never rewrites in-flight jobs or approved costs.

Tell the user the next action in plain Korean, then follow the current owner. Existing generation, upload, recovery and publication boundaries remain in force. Do not expose migration mechanics unless asked.
