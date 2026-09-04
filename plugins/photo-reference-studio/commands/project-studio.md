---
description: Claude 질문 카드로 누락된 캠페인 맥락을 인터뷰하고, 기존 Moai 기록을 자동 감지해 Chany's Studio 광고 프로젝트의 공통 AGENTS.md·검토·런타임 위임 구성을 안전하게 생성
argument-hint: "[--with-moai|--chany-only|update|status|doctor] <프로젝트 설명>"
allowed-tools: Skill, AskUserQuestion
---

Use Skill("photo-reference-studio:chany-project") with arguments: $ARGUMENTS

The invoked skill owns the interactive interview. In an interactive Claude session, do not summarize, answer, or bypass its top-level `AskUserQuestion` interview and Chany-file approval gates.
