---
name: chany-product-3d
description: Turn authorized product images into a verified 3D asset, editable 3D advertising scene, turntable, or camera previs. Use for 제품 3D, 3D 패키지, 턴테이블, 가상 세트, or 3D Jutsu; not for an ordinary still image, unsupported precision CAD, or unverified dimensional engineering.
---

# Chany Product 3D

Create an advertising asset, not a dimensional-engineering claim. Read the shared [latest model routing](../chany-studio/references/latest-model-routing.md), [product insertion](../chany-studio/references/product-insertion.md), [paid runtime contract](../chany-studio/references/higgsfield-runtime-contract.md), and [creative quality loop](../chany-studio/references/creative-quality-loop.md).

Follow the shared [beginner experience contract](../chany-studio/references/beginner-experience.md) for plain-Korean intake, one confirmation card, paid-generation approval, and concise recovery.

## Choose one route

- **Product asset:** use an image-to-3D or multi-image-to-3D model for a reusable GLB. Prefer multiple orthogonal views when packaging geometry or label placement matters.
- **Editable ad scene:** use 3D Jutsu for scene blocking, product placement, lighting, camera, and animation. A scene project and a generated mesh are different deliverables.
- **Previs only:** build rough geometry and camera moves for a later film; label it as previs rather than a final product render.

Never infer exact dimensions, internal construction, unseen surfaces, regulatory markings, or texture details from one photo. Record which surfaces were observed and mark reconstructed areas. If exact scale matters, require one real measurement or a scale reference.

## Workflow

1. Lock asset ownership, intended use, observed views, exact logo/label authority, known measurement, target format, topology need, texture/PBR need, and whether animation or rigging is actually required.
2. Inspect the live 3D model or 3D Jutsu tool contract. Select the least complex route that meets the use: static packshot does not need rigging; a rigid product usually does not need a character skeleton.
3. Show one confirmation card with route, inputs leaving the host, model/tool, geometry and texture options, output format, current cost, and known reconstruction limits.
4. Generate or edit within the approved scope. For 3D Jutsu, use the returned project ID and exact committed revision; inspect before every mutation and show the settled scene after the final verified change.
5. Verify silhouette, proportions, count, cap/handle/opening geometry, label orientation, logo spelling, material response, seams, transparency, scale, pivot, normals, texture seams, and intended camera views. A successful GLB export is not visual acceptance.
6. Deliver the accepted model/scene plus a short limitation note. Route turntable or campaign rendering to `chany-campaign-video`; route deterministic final assembly to `chany-video-assembly`.

Read [references/asset-acceptance.md](references/asset-acceptance.md) for the product-specific QA table.
