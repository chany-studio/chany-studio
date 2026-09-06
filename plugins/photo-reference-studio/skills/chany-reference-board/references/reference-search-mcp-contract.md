# Pinterest Reference Search and Preview MCP Contract

Use this contract when implementing or connecting reference discovery and preview display. Discovery may come from a host image-search tool; Claude Cowork preview delivery uses the bundled `reference-preview` connection. The hard allowlist is public `pinterest.com` Pin pages plus `i.pinimg.com` previews. No other host may be searched, opened, clicked, fetched, previewed, retained, or exposed as a visual reference.

## Discovery tool when a connector owns search

### search_images

Pinterest input:

    {
      "query": "Product Photography",
      "provider": "pinterest",
      "domains": ["pinterest.com"],
      "limit": 8,
      "safe_search": true
    }

Rules:

- accept the semantic query exactly as supplied
- accept only provider `pinterest` with `pinterest.com`
- cap the result count at 8 per call
- run the exact L1 query once and, only when applicable, one exact direct-L2 query once; never add a third semantic query
- return a public preview URL for candidate discovery and mark it unconfirmed until image content is fetched
- return a stable public Pin page and never return or follow its outbound destination
- do not scrape Pinterest, bypass login or access controls, follow short links or outbound destinations, or download protected originals
- reject results whose preview cannot later be fetched from `i.pinimg.com`

Discovery output:

    {
      "query": "Product Photography",
      "provider": "pinterest",
      "results": [
        {
          "id": "provider-stable-id",
          "provider": "Pinterest",
          "title": "Pin title",
          "preview_image_url": "https://i.pinimg.com/736x/aa/bb/cc/example.jpg",
          "source_url": "https://www.pinterest.com/pin/123456789/",
          "original_source_url": null,
          "source_domain": "pinterest.com",
          "creator": "creator name when visible",
          "width": 736,
          "height": 920,
          "mime_type": "image/jpeg",
          "preview_fetchable": true,
          "rights_status": "direction-only"
        }
      ]
    }

The discovery layer must verify that the preview image and Pin page arrived as one search result before calling the preview tool. Deduplicate the pool by canonical Pin ID or URL, normalized `i.pinimg.com` asset path with its size segment and query removed, and perceptual near-duplicate or alternate crop. Discard any outbound destination field before the preview call.

## Bundled Claude Cowork preview tool

The Claude plugin config marks the `reference-preview` server `alwaysLoad: true` because its single small tool is required for every completed board. Confirm the tool is callable before discovery. If an older or restricted host still defers it and exposes `ToolSearch`, load it with `ToolSearch(query: "select:fetch_reference_preview_image")`; if it remains unavailable, stop before search and report the connection blocker.

### fetch_reference_preview_image

Resolve `target_count` from the user's explicit positive whole-number request or the default `6`. Call this tool once per candidate. Continue from the unused Pinterest reserve until `target_count` calls have succeeded and every result is visible. A failed candidate is never retried blindly or counted toward the target. Parallel calls are allowed when the host supports them; counts above the concurrency ceiling run in bounded waves. Each candidate is submitted at most once and each tool result contains one image.

Input:

    {
      "id": "1",
      "provider": "Pinterest",
      "title": "Pin title",
      "preview_image_url": "https://i.pinimg.com/736x/aa/bb/cc/example.jpg",
      "source_url": "https://www.pinterest.com/pin/123456789/",
      "original_source_url": null,
      "creator": "creator name when visible",
      "query": "Product Photography",
      "fit_note": "Clear negative space for the product",
      "visual_dna": "Centered framing, soft side light, pale stone surface",
      "width": 736,
      "height": 920
    }

Required fields are `id`, `preview_image_url`, and `source_url`. The tool derives Pinterest from the Pin page and rejects any conflicting provider, non-Pinterest page, non-`i.pinimg.com` preview, or non-null `original_source_url`. The compatibility field may be omitted or set to `null` only.

A successful `CallToolResult` returns the actual image first, a human-readable provenance caption second, and matching structured metadata:

    {
      "content": [
        {
          "type": "image",
          "data": "base64-encoded-preview-bytes",
          "mimeType": "image/jpeg",
          "annotations": {
            "audience": ["user"],
            "priority": 1
          }
        },
        {
          "type": "text",
          "text": "Pinterest reference | 1\nProvided source page: https://www.pinterest.com/pin/123456789/\nImage-to-Pin mapping: supplied by discovery; not verified by preview fetch"
        }
      ],
      "structuredContent": {
        "reference": {
          "id": "1",
          "provider": "Pinterest",
          "source_url": "https://www.pinterest.com/pin/123456789/",
          "preview_image_url": "https://i.pinimg.com/736x/aa/bb/cc/example.jpg",
          "fetched_preview_url": "https://i.pinimg.com/236x/aa/bb/cc/example.jpg",
          "final_preview_url": "https://i.pinimg.com/236x/aa/bb/cc/example.jpg",
          "original_source_url": null,
          "mime_type": "image/jpeg",
          "byte_length": 84213,
          "intrinsic_width": 236,
          "intrinsic_height": 295,
          "provenance_mapping_verified": false,
          "display_transport": "mcp-image-content",
          "rights_status": "direction-only"
        }
      }
    }

A public URL, Markdown link, HTML snippet, resource link, file path, or structured metadata without the leading `type: image` block does not satisfy this tool contract. These may appear only as secondary provenance or optional exports.

## Separation of responsibilities

- The search capability returns factual Pinterest candidate metadata and preview URLs, supplies the image-to-Pin pairing, and removes outbound destination data.
- The model creates no more than the two allowed taxonomy queries, ranks and diversifies the Pinterest pool, and calls `fetch_reference_preview_image` until exactly `target_count` distinct finalists have succeeded.
- The bundled preview connection validates and fetches one small public Pinterest preview, returns MCP image content, and preserves the supplied provenance metadata.
- Higgsfield imports only the user-selected reference and creates the requested assets.

The preview tool is intentionally stateless and validates one candidate at a time. The calling workflow owns `target_count`, cross-result deduplication, the success count, and set diversity.

## Inline-display requirement

The board is complete only when exactly `target_count` distinct Pinterest finalist images are visible in the current conversation. In Claude Cowork, a `preview_image_url` in JSON does not count as displayed.

If one preview tool call fails:

1. reject that candidate
2. select the next unused viable Pinterest result from the allowed L1/L2 pool
3. call `fetch_reference_preview_image` for the replacement
4. ask for a number only after `target_count` successful image results are visible

If the allowed pool is exhausted below `target_count`, label the result incomplete and state the requested count, visible count, and shortfall. Do not search another provider, create a third semantic query, count a duplicate, silently reduce the count, ask the user to choose, or begin paid production. If the connection itself is unavailable, say that native inline preview is unavailable and offer Pinterest Pin links or HTML as a clearly labeled fallback. Never claim that either fallback passed the inline checkpoint.

## Security, size, and provenance

- apply safe search by default
- allow credential-free HTTPS on the standard port only
- require a public `pinterest.com/pin/...` source page and an `i.pinimg.com` preview
- report image-to-Pin mapping as discovery-supplied and unverified; keep `original_source_url` null
- reduce Pinterest previews to `/236x/`
- validate every redirect, DNS answer, declared MIME type, and image signature
- accept JPEG, PNG, or WebP only; reject SVG, HTML, compressed HTTP bodies, and MIME mismatches
- verify intrinsic dimensions before encoding; cap an edge at 4,096 px and decoded area at 8,388,608 pixels
- cap redirects at 3, total request time at 8 seconds, returned image bytes at 92 KiB, concurrent requests at 8, and each JSON-RPC input line at 1 MiB
- send no cookies or authorization headers and write no image files or cache
- keep the Pin page as the sole source link and never follow or expose an outbound destination
- treat every result as direction-only and never fabricate provenance or display status
