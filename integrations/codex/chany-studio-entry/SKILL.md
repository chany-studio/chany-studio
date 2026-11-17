---
name: chany-studio-entry
description: "챠니 스튜디오(Chany's Studio) 시작 안내. 제품·서비스에 맞는 인스타그램 릴스 레퍼런스, 조회수·좋아요·공유수 비교, 제품을 넣은 이미지·영상 요청을 설치된 Chany 플러그인에 연결한다."
---

# Chany Studio entry

This is a discovery bridge for Codex installations whose initial skill catalog omits plugin skills. It contains no duplicate production or research workflow.

1. Run `node` on `resolve.mjs` in this skill's directory. It reads the supported Codex plugin inventory and returns the currently installed, enabled Chany plugin's exact skill paths. Do not read authentication files, choose the highest cached version, or assume an old cache is active.
2. Read the returned `studio` SKILL.md before acting. For product-matched Instagram/Reel references, also read `referenceBoard` and `instagramResearch` immediately, before any search or influencer-marketing workflow. Follow those documents as the owners of the work. Use their existing brief, bounded search budget, 180-day default window, fit-first comparison, and production handoff; do not invent replacements here.
3. Discover the actually exposed Apify tools and use them when connected and authorized. Do not require the user to say “Apify,” provide an Actor name, or find candidate links themselves. Reuse existing authorization; if a billable search lacks an approved cap, present the concrete bounded plan first.
4. If the plugin is disabled, missing, or its manifest does not match the installed version, report that precise condition and stop this bridge. Do not install, enable, upgrade, or change permissions automatically. A connected Apify service alone does not prove the Chany workflow loaded.

Only route the user's request. Never generate or publish media merely because research was requested. Keep user-facing explanations in plain Korean.
