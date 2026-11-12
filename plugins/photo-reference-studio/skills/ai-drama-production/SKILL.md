---
name: ai-drama-production
description: Develop and produce narrative AI films and episodic short dramas, from story and performance through continuity, shot generation, editing, sound, and evidence-based quality review. Use for fiction or branded drama production, not generic social posts or motion graphics alone.
metadata:
  version: "2.0.1"
---

# AI 드라마 제작

이야기·연기·영상·소리·제작 기록을 함께 관리한다. ‘넷플릭스급’은 높은 완성도를 요구하는 목표로 해석한다. 스킬 설치, 프롬프트, 해상도나 검사 점수가 특정 작품 수준 또는 Netflix 납품 승인을 보장한다고 말하지 않는다.

## Chany’s Studio 연결

먼저 [드라마 제작 통합 규칙](../chany-studio/references/drama-production-integration.md)을 따른다. 이 스킬은 이야기·연기·컷 설계와 창작 검수를 맡는다. 생성 실행·비용·재시도는 `chany-media-production-loop`, 편집은 `chany-video-assembly` 또는 명시적으로 요청한 Adobe 경로, 공개 검수는 `chany-publication-review`가 맡는다. 기존 브리프와 승인 자산을 재사용한다. [초보자 대화 기준](../chany-studio/references/beginner-experience.md)에 따라 필요한 결정만 쉬운 말로 묻는다.

## 범위와 자료 선택

현재 요청에 필요한 단계만 수행한다. 최신 대본, 캐스팅, 보유 자산, 공개 범위와 제작 상태를 먼저 읽는다. 이미 정한 내용은 다시 묻지 않는다. 빠진 값은 초안에 가정으로 표시하고, 비용·결과를 바꾸는 필수 결정만 확인한다. 기획 요청으로 유료 생성·음성 복제·게시까지 승인됐다고 해석하지 않는다. 이미 받은 유효한 승인은 재사용한다.

| 요청 / 현재 상태 | 읽을 자료 | 실제 결과물 |
|---|---|---|
| 기획·시리즈·시놉시스·대본 | [story-development.md](references/story-development.md) | 브리프, 바이블, 회차 개요, 대본 중 요청 범위 |
| 연속 숏드라마·회차별 제작 패키지 | [short-drama-workflow.md](references/short-drama-workflow.md) | 타깃 공감 근거, 회차 인과, 반응 컷, 생성·편집 순서 |
| 콘티·연출·프리프로덕션 | [performance-continuity.md](references/performance-continuity.md) | 공간도, 컷 구성, 행동·시선·소품 상태 |
| 이미지·영상 생성·수정 | [generation-repair.md](references/generation-repair.md) | 기능 확인, 키프레임, 프롬프트, 시도·비용 기록 |
| 편집·음향·최종본 | [postproduction.md](references/postproduction.md) | 전역 타임라인, 프로젝트, 믹스·자막·출력본 |
| 검수·납품 판정 | [quality-gates.md](references/quality-gates.md) | 관찰 근거, 결함과 수정 우선순위, 통과/보류 |
| 구조화 제작표·자동 검사 | [manifest-format.md](references/manifest-format.md) | JSON 제작표와 검사 결과 |
| 프로젝트 적용 | [project-adaptation.md](references/project-adaptation.md) | 현재 프로젝트의 승인 자료와 대조한 적용안 |
| 근거·조사 갱신 | [research-ledger.md](references/research-ledger.md) | 원문·확인 수준·채택 이유를 구분한 조사 |
| Higgsfield·Seedance 장면 제작 | [higgsfield-seedance-workflow.md](references/higgsfield-seedance-workflow.md) | 참조 역할표, 생성 블록, 설정·테이크 기록 |
| 광고 같은 낭독·경직된 표정 수정 | [acting-dialogue.md](references/acting-dialogue.md) | 인물별 연기 과제, 듣는 반응, 대사 시험 |
| 동선·카메라·물체 접촉·춤의 반복 오류 | [blocking-motion.md](references/blocking-motion.md) | 공간 스케치 또는 프리비즈와 동작 연결 |
| 공식 튜토리얼의 근거 확인 | [higgsfield-source-ledger.md](references/higgsfield-source-ledger.md) | 출처별 채택·수정·제외 및 검토 한계 |

## 제작 순서와 통과 기준

1. **이야기:** 욕구, 방해, 선택, 결과의 인과를 검토한다. 브랜드 혜택은 인물의 행동과 상황 변화로 드러낸다.
2. **프리비즈:** 임시 낭독과 콘티로 시간·웃음·침묵·정보량을 확인한다. 음성 측정 전 러닝타임은 가정이다. 기획만 했다면 제작 완료라고 하지 않는다.
3. **연속성:** 인물·의상, 공간도·카메라 축, 소품 상태, 빛 방향, 목소리를 고정한다. 기준 자산은 파일과 버전으로 연결한다.
4. **대표 장면 시험:** 핵심이면서 어려운 짧은 장면에서 두 인물의 시선·대사·반응·소품 접촉·편집 연결을 확인한다. 합격한 조건으로 확장한다.
5. **컷 제작:** 기준 이미지부터 확인한다. 컷마다 이야기 기능, 시작·끝 상태, 행동, 카메라, 소리, 연속성과 사용 구간을 적는다. 실제 지원 기능에 맞춰 생성한다.
6. **편집·음향:** 하나의 프레임 기준 타임라인에 배치한다. 반응·시선·소리의 연결을 보며 편집하고 대사·환경음·효과·음악을 분리 보관한다.
7. **검수·인계:** 최종 출력 파일을 처음부터 끝까지 정상 속도로 재생하고 결함 구간을 다시 확인한다. 재생·청취 도구가 없으면 미수행으로 남긴다. 대본과 사실, 자산과 출력본, 프로젝트의 재개 가능 상태를 대조한다.

이 기준은 단계마다 사용자에게 승인을 묻는 절차가 아니다. 기존 권한 안에서 검사·수정한다. 비용 상한·미확정 주장·필수 자료 부재가 막는 단계만 멈춘다.

장면을 제작팀에 넘길 때는 [장면 패킷 양식](assets/scene-packet-template.md)을 필요한 범위만 채운다. 반복 제작의 결정·참조·결과를 한곳에서 연결한다.

## 실행 원칙

- 길이·FPS·렌즈·화면비·음량을 고정 숫자로 강제하지 않는다. 작품 목적, 소스와 납품 규격을 확인한다. 단일 행동·짧은 컷은 출발점이며 긴 연기나 다인 대화의 금지가 아니다.
- 생성은 현재 호스트 지침과 사용자의 도구 선택을 따른다. 서비스별 공식 도구와 관련 스킬을 확인한다. 모델명·가격·API 인자·기능을 기억만으로 단정하지 않는다.
- 설치된 `cinematic-director`는 필요한 연출·블로킹·수정 자료만 읽어 보조로 쓴다. 그 안의 고정 길이·FPS·재시도 횟수보다 프로젝트의 검증된 설정을 우선한다. 모든 자료를 한꺼번에 읽지 않는다.
- Adobe 마감 요청에는 설치된 `adobe-video-pipeline`을 연결한다. 없으면 사용 가능한 편집 도구를 쓰고 실행하지 않은 편집기 작업을 했다고 하지 않는다.
- 해부학·싱크 오류 없음과 연기 성공을 구별한다. 관객이 감정과 사건을 읽는지는 별도 검사한다. 정적 캡처로 시간에 따른 변형이나 음향 합격을 판정하지 않는다.
- 재생성 전 결함 원인과 바꿀 변수를 적는다. 편집·합성·음향으로 고칠 수 있는지 먼저 판단한다. 실패가 반복되면 형용사를 늘리는 대신 장면 설계를 바꾼다.
- 대사 장면은 전체 대화를 읽은 뒤 인물이 상대에게 무엇을 얻으려 하는지 정한다. 말하지 않는 인물도 듣고 판단할 일이 있어야 한다. ‘자연스럽게·슬프게’만으로 연기를 지시하지 않는다.
- 반복 출연은 외형·의상·목소리·공간을 재사용 자산으로 관리한다. 참조마다 가져올 속성과 가져오지 않을 속성, 충돌 시 우선순위를 정한다. 영상 참조의 역할은 외형·목소리, 몸동작, 카메라, 화면 속 재생 영상 중 실제 필요한 것으로 한정한다.
- 하나의 생성 결과를 완성 장면으로 간주하지 않는다. 쓸 수 있는 구간을 골라 편집하고 다음 블록과의 대사·반응·동작 연결을 검사한다. 타임코드 지시는 요청이며 프레임 단위 실행 보증이 아니다.

## 검수 출력과 자동 검사

산출물마다 `계획 / 파일 확인 / 실제 재생 확인 / 검토자 승인`을 구별한다. 파일·버전·타임코드·검사 방법을 남긴다. 자동 검사는 타임라인과 기록 정합성만 다루며 미학이나 사실의 진위를 인증하지 않는다.

```bash
python3 <skill-dir>/scripts/check_production.py <manifest.json> --mode plan
python3 <skill-dir>/scripts/check_production.py <manifest.json> --mode release
```

종료 코드 0은 해당 모드의 **기록 검사** 통과다. `release`는 파일과 검토 기록이 부족하면 실패해야 한다. 검사 통과를 근거로 존재하지 않는 재생 검수나 공개 승인을 만들어내지 않는다.

결과에는 완성한 것, 실제 테스트, 미검증/보류 항목과 필요한 다음 작업을 적는다. 한국어는 프로젝트의 검수 지침을 적용하고 의미·숫자·인용을 최종 대조한다.
