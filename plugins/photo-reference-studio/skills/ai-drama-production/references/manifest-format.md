# 제작표 형식 v1

`assets/production-manifest.example.json`을 복사해 사용한다. 모든 경로는 제작표 파일 위치 기준이며 절대 경로도 허용한다. 빈 경로와 `null`은 미확정이다. 자동 도구는 네트워크·생성·게시를 실행하지 않는다.

| 필드 | 의미 |
|---|---|
| schema_version | 정수 1 |
| title / fps / duration_frames | 작품명, `{num,den}` 양의 정수, 전체 프레임 수 |
| shots | ID·장면·kind·전역 start/end·references·output |
| dialogue | ID·화자·전역 start/end·측정 길이 measured_frames·audio |
| claims | ID·text·used·status·evidence. status는 confirmed/pending/discarded |
| budget | unit, authorized_limit, spent, reserved, next_batch. 같은 단위 사용 |
| final_output | 최종 출력 경로. 계획에서는 null 가능 |
| audio_required / audio_mix | 음향 납품 필요 여부와 최종 믹스 파일. 무음 작품은 false |
| reviews | 필수 검토 항목별 status/evidence/notes/asset_sha256 |

컷은 전역 타임라인의 연속된 표시 구간이다. 첫 컷은 0, 마지막 end는 duration_frames다. 검은 화면도 kind=black으로 명시한다. 전환 효과의 소스 중첩은 이 단순 표시 구간 밖에서 편집기에 기록한다. 지원 kind는 generated/live/title/black이다.

대사 구간은 전역 위치이며 화면 컷을 넘어도 된다. 서로 겹치는 대사를 자동 오류로 취급하지 않는다. measured_frames는 실제 녹음 길이를 해당 FPS로 올림 환산한 값이다. 텍스트 길이 추정치는 null로 둔다. 샘플 단위 싱크와 입 모양은 별도 재생 검사한다.

plan 모드는 미제작 자산·미측정 음성·보류 주장을 경고하되 형식·타임라인·예산 초과는 실패한다. 금액이 발생하지 않는 계획에서 authorized_limit=null은 허용한다. 지출/예약/다음 비용이 있으면 승인 한도가 필요하다.

release는 출력/컷/대사 파일, generated 컷 참조, 사용 주장 근거, 7가지 검토 기록을 요구한다. 각 검토는 pass와 실제 evidence 파일, notes, 현재 final_output의 SHA-256을 포함해야 한다. 검토 항목은 story, performance, visual_continuity, audio_sync, full_playback, business_claims, delivery다. 무음·무인물 등 해당 없음은 검토 메모에 이유를 적고 pass로 기록한다.

이 파일 존재·해시 검사는 미디어 품질이나 기록의 진실성을 인증하지 않는다. 자동검사 코드 0=해당 모드 기록 통과, 1=검사 실패, 2=읽기/JSON 오류다. 결과 JSON의 errors/warnings를 읽고 필요한 실제 검수를 수행한다.
