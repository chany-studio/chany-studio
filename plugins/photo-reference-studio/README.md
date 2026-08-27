# AI Photo Reference Studio

## Overview

Create source-faithful cutouts, white packshots, six-image reference boards, and reference-directed commercial images from real product or food photographs. The original photograph controls subject identity; references control photographic direction only.

This package supports Claude Cowork, Claude Code, Codex, and the ChatGPT desktop plugin surface where custom marketplaces are available.

## Components

- `auto-photo-production`: analyzes the source, protects visible identity details, finds traceable references, directs image production, and validates the result.
- `higgsfield` MCP server: uploads media, removes backgrounds, and performs reference-directed image editing.

The plugin does not include agents or hooks.

## Setup

Connect Higgsfield when Claude or Codex prompts for authentication. Complete authorization in the provider page and return to the same conversation. Never paste a password, API key, access token, or authorization code into chat.

Higgsfield access, pricing, and usage credits are not included with this plugin.

## Usage

Try requests such as:

- `이 제품 사진을 투명 배경 누끼 PNG로 만들어줘.`
- `이 음식 사진에 맞는 촬영 레퍼런스 6장을 먼저 보여줘.`
- `원본 분석부터 자동 선택, 최종 연출컷과 검수까지 진행해줘.`
- `이 레퍼런스의 구도와 조명만 가져와서 제품 연출컷을 만들어줘.`

Staged production uses semi-automatic reference selection by default. Choose one of the six references or answer `자동 선택` before paid image generation continues.

## Data and external services

Source photographs and selected references may be sent to Higgsfield when its editing tools are used. Reference discovery may access public pages on Behance, Pinterest, Unsplash, and Pexels. Review each external service's terms, privacy policy, pricing, and content rights before use.
