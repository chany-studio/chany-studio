# AI Photo Reference Studio

## Overview

Create a complete static commerce image system from real product, food, model, and garment sources: cutouts, white packshots, directly visible reference boards, campaign key visuals, detail-page modules, fashion images, localized edits, posters, banners, and channel-ready ad creatives. Original sources control identity; references control photographic direction only.

This package supports Claude Cowork, Claude Code, Codex, and the ChatGPT desktop plugin surface where custom marketplaces are available.

## Components

- `auto-photo-production`: builds six-element production prompts, protects product, food, model, garment, and copy locks, shows Behance and Pinterest references inline, creates a master key visual, derives commerce assets, and validates the result.
- `higgsfield` MCP server: uploads media, removes backgrounds, and performs reference-directed image editing.

The plugin does not include agents or hooks.

The current scope is static commerce imagery. It does not include video, GIF, narration, voice, music, or CapCut workflows.

## Setup

Connect Higgsfield when Claude or Codex prompts for authentication. Complete authorization in the provider page and return to the same conversation. Never paste a password, API key, access token, or authorization code into chat.

Higgsfield access, pricing, and usage credits are not included with this plugin.

## Usage

Try requests such as:

- `이 제품 사진을 투명 배경 누끼 PNG로 만들어줘.`
- `Behance와 Pinterest에서 이 제품에 맞는 레퍼런스 6장을 찾아 이미지로 바로 보여줘.`
- `이 제품으로 키비주얼부터 상세페이지와 광고소재까지 같은 캠페인 톤으로 만들어줘.`
- `이 원피스와 가방을 동일한 모델에게 착장한 상세페이지 이미지를 만들어줘.`
- `승인 문구를 정확히 유지한 1:1 강조형 광고소재를 만들어줘.`

Staged production uses semi-automatic reference selection by default. Choose one of the six references or answer `자동 선택` before paid image generation continues.

## Data and external services

Source photographs and selected references may be sent to Higgsfield when its editing tools are used. Reference discovery is limited to public pages on Behance and Pinterest. Review each external service's terms, privacy policy, pricing, and content rights before use.
