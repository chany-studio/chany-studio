# Reference Search and Preview MCP Contract

Use this contract when implementing or connecting reference discovery and preview display. Discovery may come from a host image-search tool; Claude Cowork preview delivery uses the bundled `reference-preview` connection. Only public Behance and Pinterest results are allowed.

## Discovery tool when a connector owns search

### search_images

Behance input:

    {
      "query": "Product Photography",
      "provider": "behance",
      "domains": ["behance.net"],
      "limit": 8,
      "safe_search": true
    }

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
- accept only provider `behance` with `behance.net`, or provider `pinterest` with `pinterest.com`
- cap the result count at 8 per call
- return a public preview URL for candidate discovery and mark it unconfirmed until image content is fetched
- return a stable provider source-page URL and the Pinterest outbound original source when available
- do not scrape Pinterest, bypass login or access controls, or download protected originals
- reject results whose preview cannot later be fetched from an approved provider CDN

Discovery output:

    {
      "query": "Product Photography",
      "provider": "behance",
      "results": [
        {
          "id": "provider-stable-id",
          "provider": "Behance",
          "title": "project title",
          "preview_image_url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/example123456789.jpg",
          "source_url": "https://www.behance.net/gallery/123456789/example",
          "original_source_url": null,
          "source_domain": "behance.net",
          "creator": "creator name when visible",
          "width": 1200,
          "height": 1500,
          "mime_type": "image/jpeg",
          "preview_fetchable": true,
          "rights_status": "direction-only"
        }
      ]
    }

## Bundled Claude Cowork preview tool

### fetch_reference_preview_image

Call this tool exactly once for each shortlisted finalist. Make six independent calls, in parallel when the host supports it. One image per result keeps each native preview within the conversation tool-result limit.

Input:

    {
      "id": "1",
      "provider": "Behance",
      "title": "project title",
      "preview_image_url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/example123456789.jpg",
      "source_url": "https://www.behance.net/gallery/123456789/example",
      "original_source_url": null,
      "creator": "creator name when visible",
      "query": "Product Photography",
      "fit_note": "Clear negative space for the product",
      "visual_dna": "Centered framing, soft side light, pale stone surface",
      "width": 1200,
      "height": 1500
    }

Required fields are `id`, `preview_image_url`, and `source_url`. The tool derives the provider from the source page and rejects a conflicting supplied provider.

The discovery layer must verify that each preview image and source page belong to the same result before calling this tool. For Behance, the preview tool additionally checks that the public asset identifier ends with the numeric gallery ID and reports the mapping as verified. Pinterest CDN filenames do not contain the Pin ID, so Pinterest mapping remains caller-supplied and is reported as unverified; the tool deliberately does not scrape the Pin page.

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
          "text": "Behance reference | 1\nProvided source page: https://www.behance.net/gallery/123456789/example\nImage-to-page mapping: verified from Behance asset identifier"
        }
      ],
      "structuredContent": {
        "reference": {
          "id": "1",
          "provider": "Behance",
          "source_url": "https://www.behance.net/gallery/123456789/example",
          "preview_image_url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/example123456789.jpg",
          "fetched_preview_url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_316/example123456789.jpg",
          "final_preview_url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_316/example123456789.jpg",
          "mime_type": "image/jpeg",
          "byte_length": 84213,
          "intrinsic_width": 316,
          "intrinsic_height": 395,
          "provenance_mapping_verified": true,
          "display_transport": "mcp-image-content",
          "rights_status": "direction-only"
        }
      }
    }

A public URL, Markdown link, HTML snippet, resource link, file path, or structured metadata without the leading `type: image` block does not satisfy this tool contract. These may appear only as secondary provenance or optional exports.

## Separation of responsibilities

- The search capability returns factual candidate metadata and preview URLs, and verifies that each image maps to the accompanying provider page.
- The model creates the two allowed taxonomy queries, searches both providers, ranks and diversifies candidates, then calls `fetch_reference_preview_image` once for each of the six finalists.
- The bundled preview connection validates and fetches one small public preview, returns MCP image content, and preserves the supplied provenance metadata.
- Higgsfield imports only the user-selected reference and creates the requested assets.

## Inline-display requirement

The board is complete only when all six finalist images are visible in the current conversation. In Claude Cowork, a `preview_image_url` in JSON does not count as displayed.

If one preview tool call fails:

1. reject that candidate
2. select the next viable Behance or Pinterest result
3. call `fetch_reference_preview_image` for the replacement
4. ask for a number only after six image results are visible

If the connection itself is unavailable, say that native inline preview is unavailable and offer links or HTML as a clearly labeled fallback. Never claim that this fallback passed the inline checkpoint.

## Security, size, and provenance

- apply safe search by default
- allow credential-free HTTPS on the standard port only
- require Behance or Pinterest provider pages and approved provider preview CDNs
- verify Behance image-to-gallery mapping from the public asset identifier; report Pinterest image-to-Pin mapping as caller-supplied and unverified
- reduce Behance module previews to `project_modules/max_316`, cover previews to `projects/202`, and Pinterest previews to `/236x/`
- validate every redirect, DNS answer, declared MIME type, and image signature
- accept JPEG, PNG, or WebP only; reject SVG, HTML, compressed HTTP bodies, and MIME mismatches
- verify intrinsic dimensions before encoding; cap an edge at 4,096 px and decoded area at 8,388,608 pixels
- cap redirects at 3, total request time at 8 seconds, returned image bytes at 92 KiB, concurrent requests at 8, and each JSON-RPC input line at 1 MiB
- send no cookies or authorization headers and write no image files or cache
- keep the provider page and Pinterest outbound source when available
- treat every result as direction-only and never fabricate provenance or display status
