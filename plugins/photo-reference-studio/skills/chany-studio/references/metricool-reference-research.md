# Metricool: optional Instagram competitor evidence

Verified against the connected tool list and official help on 2026-11-17. Metricool can supply selected competitor profiles, posts and Reels and the user's own analytics. It is not an Instagram-wide keyword, hashtag, audio or visual-similarity search engine. Installing it does not populate a reference collection or authorize publishing.

## Read-only workflow

1. Discover the current connector tools. Resolve the user's brand with `getbrandsettings`; use an already-selected brand or ask only when multiple plausible brands remain. Never hardcode a real brand/account ID in a skill or public report.
2. Call `getanalyticsavailablemetrics` for Instagram, then select the exact current connector/field IDs. The checked catalog exposed competitor profiles (`IGCO`), competitor posts (`IGCP`) and competitor Reels (`IGCR`), in addition to the user's own posts. These prefixes are discovery hints, not guaranteed permanent IDs.
3. Query `getanalyticsdatabymetrics` for the selected brand and a bounded explicit date range, normally the last 30 days in the brand timezone. Query profiles, posts and Reels separately so different granularities do not create misleading combined rows. Request only the URL/caption/date and relevant visible metrics needed for selection.
4. With results, filter to the user's requested accounts/category, deduplicate the original URLs and distinguish posts from Reels. Rank first by reference relevance, then comparable interactions/engagement within the same content type and period. State the denominator if available. Competitor metrics do not establish reach, saves, sales, ROAS or retention unless those exact fields are actually returned. A caption or high score is not visual inspection.
5. Open the original selected posts and inspect images/carousel cards or route video to the existing intake. Record observation completeness. Do not treat a post-page URL as an importable media file. Download/upload or edit only within the existing source and input authorization.
6. If results are empty, say “이 기간에 조회되는 경쟁 계정 자료가 없습니다.” Distinguish that from a confirmed absence of competitors. Offer public site/account research or one manual setup step in Metricool; continue other reference work. Do not invent popular posts or repeatedly widen the dates without a reason.

The connected tool list did not expose universal Instagram search or a competitor-registration action. Do not invent either. If the user wants account tracking, give the official Analytics → Competitors setup path or use a newly discovered supported tool with the appropriate authorization. Merely requesting reference research never authorizes scheduling, posting, commenting, messaging, changing account connections or adding competitors.

## Connection and necessity

Official guidance says Instagram connections through Facebook support competitor analysis; Instagram-only login does not. An empty API response alone cannot identify whether the cause is connection type, setup, permissions, history or the chosen period. Diagnose only from observed settings/errors. Check current plan/history limits before promising coverage.

Recommendation: keep Metricool optional for users who monitor known peer accounts and review their own campaign results. Users who only need a fitting reference and an image/video can proceed with supplied references and public discovery. Do not require a paid plan or reconnect an account automatically.

Return an inspected candidate with its source, why it fits, measured period and a short limitation. Private account identifiers, account metadata and raw analytics stay in the user's private project. They are never bundled with generated media, sent to unrelated tools or published in a plugin report.

Sources: [connection differences](https://help.metricool.com/access-to-instagram-from-metricool-connection-types-and-differences-kcsrb), [competitor analysis](https://help.metricool.com/competitor-analysis-ouhue). Runtime capability and actual data availability must still be checked per host.
