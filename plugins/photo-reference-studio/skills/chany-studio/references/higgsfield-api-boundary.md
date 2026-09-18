# Higgsfield API boundary

Higgsfield API is an optional developer backend, not the default Claude/ChatGPT/Codex connection. It has a separate account balance, API key, pricing, model catalog, concurrency, and storage lifecycle from the Higgsfield website, MCP, or ChatGPT plugin.

- Never reuse a website/MCP credit quote as an API quote or claim that a website subscription covers API use.
- Never request, print, store, or commit an API secret in project files. Use the host's secret store when the user explicitly authorizes an API integration.
- Prefer MCP/plugin generation for conversational production. Choose API only when the user requests product integration, automation, webhooks, dollar-based batch operations, or independent application infrastructure.
- Resolve the API catalog and price at implementation time. A model available in MCP may be absent or differently priced in the API.
- Persist request IDs and poll/webhook state. Do not duplicate an uncertain asynchronous request.
- Download accepted results to user-controlled storage when long-term retention is required; provider retention is not an archive guarantee.
