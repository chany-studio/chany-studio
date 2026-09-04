# Chany's Studio 2.0.0

제품 원본과 승인 문구를 보존하면서 광고·마케팅·상세페이지·홍보 콘텐츠를 분야별 전문 스킬로 기획·제작합니다.

## 전문 스킬

- `chany-studio`: 여러 결과물을 연결하는 캠페인 라우터
- `chany-marketing-brief`: 목표, 타깃, 메시지, 채널과 에셋 매트릭스
- `chany-product-assets`: 투명 누끼, 순백 팩샷과 원본 클린업
- `chany-reference-board`: Behance·Pinterest 레퍼런스 6장 직접 표시
- `chany-campaign-visual`: 연출컷과 마스터 키비주얼
- `chany-detail-page`: 상세페이지 이미지 모듈
- `chany-ad-creative`: 정적 광고, 프로모션 포스터, 배너와 채널 변형
- `chany-image-edit`: 제한된 부분 수정과 복원
- `chany-model-fashion`: 성인 모델과 원본 의류 착장
- `chany-ugc-ads`: 리뷰, 언박싱, 튜토리얼, SaaS, Try-on과 현지화 UGC

기존 `auto-photo-production`은 호환 호출로만 남아 새 `chany-studio` 라우터를 안내합니다.

## 처음 사용하기

1. 가장 해상도가 높은 제품 원본을 첨부합니다.
2. 목표, 채널, 필요한 산출물을 말합니다.
3. 정확히 들어가야 하는 가격·할인·기간·CTA와 법적 문구를 텍스트로 제공합니다.
4. Higgsfield 연결 요청이 나오면 호스트의 로그인 화면에서 인증합니다.
5. 여러 유료 생성이 필요한 경우 산출물 수와 승인 지점을 확인합니다.

```text
$chany-studio로 이 제품의 마스터 키비주얼, 상세페이지 모듈 5장,
1:1·9:16 광고소재와 15초 리뷰형 UGC를 같은 캠페인으로 만들어줘.
```

## 레퍼런스와 원본

- 원본은 제품, 음식, 모델, 의류와 승인 카피의 정체성을 결정합니다.
- 레퍼런스는 구도, 카메라, 조명, 배경, 색감, 소재와 무드에만 사용합니다.
- `chany-reference-board`는 Behance와 Pinterest 후보를 링크나 HTML이 아닌 현재 대화의 실제 이미지로 보여줍니다.
- Claude Cowork의 직접 미리보기에는 Node.js 18 이상과 로컬 `reference-preview` 연결이 필요합니다.

## Higgsfield 경계

- 연결된 MCP에서 이미지·영상·Soul 캐릭터·오디오와 지원되는 UGC 워크플로를 실행합니다.
- 새 Marketing Studio의 템플릿 방식은 현재 Higgsfield 웹에서 완료해야 합니다.
- 기능이 도구에 노출되지 않았으면 사전 기획과 정확한 화면 안내까지만 제공하며 실행 완료로 표현하지 않습니다.
- MCP와 자동화 채널의 생성은 일반 크레딧을 사용할 수 있으므로 다단계 작업 전에 범위를 확인합니다.

## 연결과 데이터

Higgsfield 기능 사용 시 선택한 원본과 레퍼런스가 Higgsfield로 전송될 수 있습니다. 로컬 `reference-preview`는 Behance·Pinterest의 공개 미리보기만 불러옵니다. 비밀번호, API 키, 액세스 토큰이나 인증 코드는 대화에 입력하지 말고 호스트의 인증 화면을 사용하세요.

공식 설치·사용설명서: https://jolly-phlox-79c.notion.site/AI-Photo-Reference-Studio-v1-0-3c783e9464668140b794ee076be24406

GitHub 마켓플레이스: https://github.com/chany-studio/chany-studio
