# Put the user's offer into the chosen reference

Use inside the current production owner, not as another skill or interview. Follow [reference-led design](reference-led-design.md), [product insertion](product-insertion.md), and the existing cost/input approval. Read this branch when the user says “이 구도 그대로 내 제품만”, “여기에 우리 서비스 화면을 넣어줘”, or identifies the element to replace.

## Resolve the requested result

- `reference-insert`: keep the chosen reference's composition/layout and replace the specified subject with the user's real product or service asset. The reference is the base; the user's source is the identity authority. Do not reroute this to a new camera angle or merely imitate its mood.
- `reference-reshoot`: make a new scene using the observed reference composition and lighting. The product remains the same physical product, while the viewpoint can change as approved.
- `bounded-edit`: repair a named part of an accepted asset. Retain its accepted composition and all untargeted content.

Infer the branch from the user's words and supplied images. Ask one plain choice only when the distinction changes the result and cannot be inferred: “구도는 유지하고 제품만 바꿀까요, 비슷한 분위기로 새로 만들까요?” Do not ask for a reference again when it is already present. If absent, find one through the existing board or a requested [curated source](curated-reference-sources.md).

## Minimum input and service mapping

Use the supplied product photo or the service's real screenshot, logo, place photo, approved copy or visual evidence. Inspect both source and reference. A URL/title alone is not visual inspection. Describe a service in one sentence only if still unknown; never require a physical packshot for an app, consultation, venue or course.

| Offer | Insert | Keep true |
|---|---|---|
| Physical product | actual product, label and approved product count | shape, material, logo, text and contents |
| App / SaaS | actual approved screen into the reference's device/frame | UI labels, features, numbers; no invented functionality |
| Place / hospitality | actual space or approved view in the selected layout | geometry, facilities and availability |
| Expertise / education | approved logo, portrait, service copy or process diagram | qualifications, scope and evidence; no fictional testimonial or outcome |

If a new angle exposes unavailable product surfaces or a service lacks a usable visual, keep the supported view or prepare a clearly labelled layout placeholder. Explain only the missing input that blocks the chosen result.

## Replacement plan and execution

1. Record ordered inputs: identity authority; base/reference; optional exact logo/copy layer. Each input has one purpose and explicit exclusions. Record the target region, subject count, reference frame/crop, protected layout, light/contact changes, and exact copy in the existing asset plan.
2. Retain existing reuse authorization. A user-supplied image explicitly provided for editing does not require a repeated ownership interview. A discovered public reference is not automatically a reusable template; distinguish inspiration, an authorized edit and unresolved publication rights. Apply the existing source/upload line once in the same approval card. Never send account analytics or unrelated attachments as generation inputs.
3. For exact untouched pixels or exact UI/type, use a verified deterministic layer/mask/composite workflow. A model with image references or an inpaint flag alone does not prove this capability. Restrict changed pixels to the approved subject/contact-shadow region; inspect the protected region against the original. Expand a shadow mask only within approved scope.
4. For generative replacement, use the live reference/edit-capable model with the base and identity inputs. Preserve geometry, typography and composition as measurable targets; do not promise pixel identity. Reject a route that drops the product/service authority, including GPT Image 2.6 SVG with reference images. Offer a supported raster output or deterministic vector/layout composition in the same decision.
5. Compile this instruction with observed details, not invented lens data: “Image 1 is the actual offer and establishes [identity facts]. Image 2 is the base layout. Replace only [target region/subject] with Image 1. Keep [frame, position, scale, background, typography, protected elements]. Adapt only [perspective, contact, light] to fit. Do not import the reference's product, claims or unrelated brand marks.”
6. Show one recommendation and the existing cost confirmation. Execute through `chany-media-production-loop`; return the actual image inline. Compare the offer against its original and the result against the reference. Check product identity, reference layout, protected regions and exact text independently. An attractive result that fails either identity or layout remains a draft.

When Node is available, prepare an input JSON using [reference-plan.example.json](../assets/reference-plan.example.json) and run `node <plugin>/skills/chany-studio/scripts/reference-plan.mjs <input.json>`. The planner emits the operation, ordered input roles, protected elements, prompt and pending action. It performs no upload or generation and cannot inspect image quality, prove rights or approve spending. In a host without a local runtime, apply the same contract directly; do not expose JSON to beginners.

## User-facing example

“제품 모양과 라벨은 지키고, 고른 사진의 구도와 배경을 유지해 제품만 바꿀게요. 먼저 1장을 만들고 제품과 구도가 맞는지 같이 확인하겠습니다.”

For services: “실제 서비스 화면을 이 레퍼런스의 휴대폰 안에 넣고, 제목은 보내주신 문구로 바꿀게요.” Exact text should remain an editable layer when possible.
