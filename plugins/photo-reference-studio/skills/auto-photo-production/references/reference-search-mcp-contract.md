# Reference Search MCP Contract

Use this contract when implementing a separate reference-search connector. The transport may remain search-vendor independent, but returned content must be limited to the two approved source pools.

## Required tool

### `search_images`

Creative-direction input:

```json
{
  "query": "Food Photography",
  "source_pool": "creative-direction",
  "domains": ["behance.net", "pinterest.com"],
  "limit": 8,
  "safe_search": true
}
```

Stock-reference input:

```json
{
  "query": "Food Photography",
  "source_pool": "stock-reference",
  "domains": ["unsplash.com", "pexels.com"],
  "limit": 8,
  "safe_search": true
}
```

Rules:

- Accept the semantic query exactly as supplied. Do not expand it with style terms.
- Accept only `creative-direction` with `behance.net` and `pinterest.com`, or `stock-reference` with `unsplash.com` and `pexels.com`.
- Cap `limit` at 8 per call.
- Return stable provider source-page URLs and direct preview or image URLs.
- Do not scrape Pinterest, bypass login or access controls, or bulk-download provider content. Return only results available through the authorized search path.
- Do not download or upload an image without a later explicit tool call.

Output:

```json
{
  "query": "Food Photography",
  "source_pool": "creative-direction",
  "results": [
    {
      "id": "provider-stable-id",
      "provider": "Behance",
      "title": "result title",
      "image_url": "https://example.com/image.jpg",
      "thumbnail_url": "https://example.com/thumb.jpg",
      "source_url": "https://example.com/page",
      "original_source_url": null,
      "source_domain": "example.com",
      "creator": "creator name when visible",
      "width": 1600,
      "height": 2000,
      "mime_type": "image/jpeg",
      "license_status": "not-stated",
      "license_url": null
    }
  ]
}
```

## Recommended tool

### `fetch_image_metadata`

Input:

```json
{
  "image_url": "https://example.com/image.jpg",
  "source_url": "https://example.com/page"
}
```

Output should confirm accessibility, dimensions, MIME type, file size, provider source URL, Pinterest outbound original source when available, creator when visible, and any stated license or attribution field. Do not claim a license when the source does not state one.

## Separation of responsibilities

- The connector searches approved domains and returns factual metadata.
- The model classifies the source image, generates the two allowed semantic queries, calls both source pools, analyzes candidates, ranks them, balances the final board, and extracts Visual DNA.
- Higgsfield imports only the selected reference image and generates the final assets.

## Safety and provenance

- Apply safe search by default.
- Keep the provider source-page URL for every candidate and the outbound original-source URL for Pinterest when available.
- Do not return images that require bypassing access controls.
- Reject Pinterest results without a public Pin page or visible creator/original-source trail.
- Treat search results as reference direction, not as licensed production assets.
- Never fabricate missing dimensions, source pages, authorship, or license status.
