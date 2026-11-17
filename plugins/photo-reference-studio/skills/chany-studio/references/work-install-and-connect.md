# Work installation and connection help

Use this when a beginner asks to install Chany Studio, connect Apify, or diagnose why product-matched Instagram research does not start in ChatGPT Work. This is setup help, not authorization to scrape, generate media or publish.

## Start with the user's actual host

- Reuse known host and connection information. Codex installation, a local marketplace, or a local entry skill does not prove installation in Work Cloud.
- In Work, distinguish Chany installation, the user's Apify authorization, and a successful search. Report each state independently. Discover exposed tools through the host's supported catalog; do not invent tool names, extract stored credentials or substitute a local CLI for a Work test.
- If both are already available, continue the existing request through `chany-reference-board` and [Apify research](apify-instagram-research.md); do not restart onboarding or ask users to name an Actor.
- If setup is requested or unavailable, give the smallest missing step and the [public beginner guide](https://chany-studio.chanjunpark.chatgpt.site/work-start.html). The guide contains the current Work ZIP, exact fields, first-request examples and recovery steps. Do not send the creator's private plugin detail URL as a public install link.

## Plain Korean setup sequence

1. Check that the user's account offers Work, plugin ZIP upload and custom external connections. Workspace policies can separately restrict these capabilities. If a menu is absent, explain the missing capability and direct the user to their administrator or current account feature settings; do not promise that a plan upgrade resolves it.
2. Download the Work ZIP from the public guide, upload it under ChatGPT Plugins, then select **Install plugin**. Upload alone is not installation. A **Desktop only** label is not Work Cloud readiness. Verify the version in the actual uploaded manifest rather than an old cached number.
3. Reuse an existing connected Apify service. Otherwise use **Add custom MCP server**, name **Apify**, URL **https://mcp.apify.com**, **OAuth**, no manually supplied client ID or secret. The user chooses their own personal or authorized team account and reviews consent in Apify. Do not require the creator's account, password or token. Follow the host's action-time consent requirements.
4. Start a new **Work** chat after installation and connection. Accept product description plus the desired reference request; do not require plugin names, candidate links or a project setup. Product description without a requested outcome calls for one short intent question, not an unsolicited paid search.
5. Confirm the current bounded collection plan, estimated cost and enforceable budget before a billable search. Do not inherit the creator's test budget, permissions or account balance for another user. A connection-only check makes no Actor run. Reuse the current user's valid prior authorization when applicable.

If automatic selection is missing, first check installation and start a fresh Work chat. Offer “챠니 스튜디오로 이 제품의 인스타 릴스 3개 찾아줘” or the host's visible plugin picker as recovery. Do not label explicit recovery as proof that unnamed automatic selection passed.

## Evidence boundary

On 2026-11-17, version 2.21.1 was tested in the creator's ordinary new Work Cloud chat: product description and a Reels request, no plugin/tool names; Chany guidance loaded; Apify discovered 12 posts, enriched six, and Work recommended three after inspecting videos. That account retained its ordinary personalization and prior authorization context. This is not proof for another account or every request.

The public ZIP was anonymously downloadable and had no creator-specific service binding in its manifest. Each user supplies their own Apify connection. Another user's install → consent → unnamed automatic search has **not** been tested because no separate test account was available. Keep that limitation in setup and verification reports. Never mark a path tested solely because packaging or OAuth succeeded.

The 2.21.2 update packages these observed setup and evidence rules; it does not claim a new multi-account runtime test. Current permissions, pricing and tool availability must still be checked in the actual session.
