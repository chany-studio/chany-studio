# Reference Search MCP Contract

Use this contract when implementing a dedicated reference-search connector. The connector must return only public Behance and Pinterest results with directly displayable previews.

## Required tool

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
- accept only provider behance with behance.net, or provider pinterest with pinterest.com
- cap limit at 8 per call
- return a directly displayable public preview for every candidate
- return stable provider source-page URLs and the Pinterest outbound original source when available
- do not scrape Pinterest, bypass login or access controls, or bulk-download content
- reject results whose preview cannot be rendered by the host
- do not download or upload a full-resolution image without a later explicit tool call

Output:

    {
      "query": "Product Photography",
      "provider": "behance",
      "results": [
        {
          "id": "provider-stable-id",
          "provider": "Behance",
          "title": "project title",
          "preview_image_url": "https://example.com/public-preview.jpg",
          "source_url": "https://www.behance.net/gallery/example",
          "original_source_url": null,
          "source_domain": "behance.net",
          "creator": "creator name when visible",
          "width": 1600,
          "height": 2000,
          "mime_type": "image/jpeg",
          "preview_renderable": true,
          "rights_status": "direction-only"
        }
      ]
    }

## Recommended tool

### fetch_preview

Input:

    {
      "preview_image_url": "https://example.com/public-preview.jpg",
      "source_url": "https://www.behance.net/gallery/example"
    }

Output should return host-displayable image content or a public preview URL plus confirmed MIME type and dimensions. It must also retain the provider source URL, Pinterest outbound original source when available, and creator when visible.

Use this tool only for read-only preview display and metadata confirmation. Do not fetch protected full-resolution assets.

## Separation of responsibilities

- The connector searches Behance or Pinterest and returns factual metadata plus a renderable preview.
- The model classifies the source subject, generates the two allowed taxonomy queries, calls both providers, ranks and diversifies candidates, renders the inline board, and extracts Visual DNA.
- Higgsfield imports only the user-selected reference and creates the requested assets.

## Inline-display requirement

The model must show each finalist image directly in the conversation. Source-page links are provenance captions, not the primary viewing method.

If preview_image_url cannot render:

1. call fetch_preview
2. display the returned image content
3. reject the candidate if display still fails
4. replace it with the next viable Behance or Pinterest result

Never return six source links without six visible images.

## Safety and provenance

- apply safe search by default
- keep the provider page for every candidate
- keep the Pinterest outbound source when available
- reject orphaned Pins and inaccessible pages
- treat every result as direction-only
- never fabricate dimensions, creator, source page, original source, renderability, or rights status
