# Beginner experience contract

Most Chany's Studio users have never generated an AI image or video. Apply this contract to every user-facing turn of every Chany skill. It changes how work is presented and how many decisions a beginner must make; it never removes a paid-generation approval, a claim or rights safeguard, or a regulated-industry gate.

## 1. Quick start is the default

Unless the user asks to compare options ("여러 안 보여줘", "콘셉트 3안", "자세히"), or an approved direction already exists, run **quick start** for a single requested deliverable. "레퍼런스 먼저 보여줘" keeps quick start but waits for the user's reference pick before the card; "레퍼런스 없이 바로 만들어줘" skips reference search and works from the product profile alone.

1. Inspect the attachments and the request. Ask a question only when a missing fact would make the output wrong, such as which product to show. Do not ask about price, offer, or CTA wording that the user did not mention; write copy only from supplied facts and leave out any price, discount, or claim that was not given.
2. When the subject is a product the user supplied, follow [product-insertion.md](product-insertion.md): profile the product, run the reference board automatically, rank references for this product, show them as numbered images with one recommended, and continue to the card without waiting. For a service or when no product photo exists, work from the request and the shared creative-direction system.
3. Choose the recommended reference and concept territory internally. Do not show the three-territory scorecard.
4. Show **one** confirmation card (§3) that contains the chosen reference, the direction in one sentence, the exact copy, and the paid-generation details. This single card is the reference choice, the concept approval, the copy approval, and the paid-generation approval for that displayed version. The user may answer with another reference number instead.
5. After generation, show the result and the product match check first, then at most three short next-step suggestions in plain Korean, such as 다른 비율로 늘리기 and 이 이미지로 영상 만들기. Suggest 광고용 고화질로 키우기 only when the result is smaller than its intended use needs (see [product-insertion.md](product-insertion.md) §8).

Video keeps its still-first order, but tell the user once, before starting, that there will be two confirmation cards: one for the governing still image and one for the video. Do not add other checkpoints.

**Detailed mode** is the previous full flow: reference board with a separate pick, three scored territories, separate copy approval. Use it when the user asks for options, for a multi-deliverable campaign through `chany-studio`, or for a **regulated context**: any industry overlay packet with a `before generation` gate or a named human reviewer, and in any case healthcare, finance or lending, alcohol, anything aimed at children or minors, sensitive personal data, before/after or health claims, and automotive safety or finance claims. Offer it in one line after a quick-start result: "여러 안을 비교하고 싶으면 '여러 안 보여줘'라고 말씀하세요."

## 2. Plain Korean on every screen

- Reply in the user's language. For a Korean user, write natural, polite Korean (해요체) at the level of someone who has never made an AI image.
- Never show YAML, JSON, internal field names, packet names, version IDs, job IDs, or English placeholders such as `target_count`, `resolved_model_or_workflow`, `server_adjustments`, `brand-core`, `Visual DNA`, `L1/L2`, `JTBD`, or `claim_ledger`. Those records stay internal (project files and the job ledger).
- When a concept must be named, use plain words: 기본에 충실한 안, 감성 연출 안, 요즘 유행을 살린 안. Use 레퍼런스 분석 instead of Visual DNA, 검색 범위 instead of L1/L2, 구매 이유 분석 instead of JTBD, 사진 배경 제거(누끼) instead of cutout, 행동 유도 문구(버튼 문구) instead of CTA.
- A photography or film term may appear only next to its plain meaning, as a learning aid (for example 아웃포커싱(배경만 흐리게)). Translate the user's everyday words into professional direction and reflect it back once, as described in [plain-language-direction.md](plain-language-direction.md).
- Keep a turn short: result or question first, explanation after, no tables unless the user is comparing options.
- Name the model or template actually resolved for this job once in the confirmation card (GPT Image 2.5 by default, or for example Marketing Studio Image or a named Higgsfield template). If the host hides the model, write "기본 모델(확인 불가)" rather than claiming GPT Image 2.5. Do not explain model routing.

## 3. The confirmation card

Before any paid generation, keep the full `paid_generation_approval` record internally and show only this card, in Korean:

```text
이렇게 만들까요?
- 만들 것: 인스타그램 피드 광고 이미지 1장 (4:5)
- 레퍼런스: 3번 사진 느낌으로 (다른 번호를 말씀하셔도 돼요)
- 준비: 제품 배경을 먼저 깔끔하게 지워요
- 참고 사진: 3번(Pinterest, 다른 사람의 작품)을 Higgsfield에 참고 입력으로 보냅니다. 결과가 원본과 너무 비슷하면 광고에 쓰지 마세요
- 방향: 흰 대리석 위에 제품을 두고 아침 햇살로 깨끗하게 보여줘요
- 들어갈 문구: "하루 한 번, 촉촉하게" / 버튼: 지금 구매하기
- 사용 도구: Higgsfield · GPT Image 2.5 · 고화질 2K (실제로 쓰는 모델·템플릿 이름)
- 비용: 1장 12 크레딧 · 2장 24 크레딧 (현재 잔액 240)
```

Use the server-returned cost and balance. When they are unavailable, write "비용: 확인할 수 없어요. 생성 전에 Higgsfield에서 잔액을 확인해 주세요" and do not guess. The illustrative numbers above are examples only and never a price reference.

Omit the 레퍼런스, 준비, and 참고 사진 lines when they do not apply. The 참고 사진 line is mandatory whenever a reference image will be sent to the generation service; approving a card without it never authorizes that upload. Offer these choices through the host's question tool, or as numbered text if none exists:

1. 이대로 1장 만들기 (권장)
2. 2장 만들어 더 나은 것 고르기 (카드에 적힌 2장 비용)
3. 레퍼런스·방향·문구 바꾸기 (느낌을 직접 고르는 쉬운 질문 카드로 이어집니다)
4. 취소

A changed card needs a new approval. An empty or unclear response is not approval.

## 4. When something is missing

State the problem in one sentence, give the next step, and keep whatever work is already done. Suggested wording:

| Situation | Say |
|---|---|
| Higgsfield not connected | "이미지를 만들려면 Higgsfield 연결이 필요해요. 설정 → 커넥터(또는 앱)에서 Higgsfield를 연결한 뒤 '다시 만들어줘'라고 말씀해 주세요. 그동안 만든 방향과 문구는 그대로 두었어요." |
| Credits too low for the quoted cost | "이번 작업에는 약 N 크레딧이 필요한데 잔액이 M 크레딧이라 부족해요. Higgsfield에서 크레딧을 충전하거나, 장수를 줄이거나, 방향과 문구만 먼저 받아 둘 수 있어요." Then offer those three choices. Never start a partial batch without approval. |
| Balance cannot be read | "잔액을 확인할 수 없어요. Higgsfield에서 크레딧을 확인한 뒤 진행할지 알려주세요." |
| Reference images do not appear | "레퍼런스 이미지를 이 대화에 띄우지 못했어요. 링크로 보시거나, 레퍼런스 없이 제품 분석만으로 바로 만들 수 있어요." |
| Local tools missing (Node.js, ffmpeg, fonts) | "이 작업에는 컴퓨터에 ○○ 프로그램이 필요해요." Then link the plain-language install steps in `docs/TROUBLESHOOTING.md`; never ask the user to run a command they did not request. |

## 5. Publishing checks for everyday posts

For an ordinary product or service post, deliver the draft with a short plain-Korean checklist (at most five items: 사실과 다른 문구가 없는지, 가격·할인이 맞는지, 사진 사용 권리가 있는지, 광고임을 표시했는지, 사람이 등장하면 동의를 받았는지). Offer the full `chany-publication-review` in one line. Run the full review automatically only when the user asks to publish or review, or for a regulated context as defined in §1.

## 6. Project setup for beginners

`chany-project` asks only what a beginner can answer: what they sell, who buys it, and where they will post. Use the recommended defaults for execution mode, approval location, file layout, and MoAI chaining, and mention MoAI only when it is already detected. End setup with one ready-to-copy first request, for example: "이 제품 사진으로 인스타 광고 이미지 한 장 만들어줘".
