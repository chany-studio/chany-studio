---
description: Claude 질문 카드로 누락된 캠페인 맥락과 프로젝트 선택 사항(만들 것·올릴 곳·분위기·레퍼런스·품질·비율)을 고르게 한 뒤 Chany's Studio 광고 프로젝트의 공통 AGENTS.md·검토·런타임 위임 구성을 안전하게 생성
argument-hint: "[update|status|doctor] <프로젝트 설명>"
allowed-tools: Skill, AskUserQuestion
---

Use Skill("photo-reference-studio:chany-project") with arguments: $ARGUMENTS

The invoked skill owns the interactive interview. In an interactive Claude session, do not summarize, answer, or bypass its top-level `AskUserQuestion` interview and Chany-file approval gates.
