import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const snapshot = JSON.parse(await readFile(new URL('../assets/generation-capabilities.json', import.meta.url), 'utf8'));
const envelopeKeys = new Set(['model', 'medias', 'prompt', 'count', 'aspect_ratio', 'folder_id', 'get_cost', 'use_free_gens', 'use_unlim', 'preset_session_id']);

// Known-contract lint only. It neither quotes nor submits, and never declares generation ready.
export function checkGenerationRequest(input = {}, catalog = snapshot) {
  const errors = [], notes = [];
  const p = input.params ?? {};
  const model = catalog.models.find(m => m.id === p.model);
  const result = () => ({ ok: errors.length === 0, errors, notes, checked_snapshot: catalog.checked_at, runtime_check_required: true, submission_allowed: false });
  if (!model) { errors.push('이 검사기에 등록되지 않은 모델입니다. 현재 연결 도구에서 확인하세요.'); return result(); }
  const params = new Map(model.parameters.map(x => [x.name, x]));
  for (const [key, value] of Object.entries(p)) {
    if (['get_cost', 'use_free_gens', 'use_unlim'].includes(key) && typeof value !== 'boolean') errors.push(`${key}: true 또는 false가 필요합니다.`);
    if (['model', 'prompt', 'aspect_ratio', 'folder_id', 'preset_session_id'].includes(key) && (typeof value !== 'string' || !value.trim())) errors.push(`${key}: 빈칸 없는 문자열이 필요합니다.`);
    const def = params.get(key);
    if (!def) { if (!envelopeKeys.has(key)) errors.push(`${key}: 이 모델의 확인된 옵션이 아닙니다.`); continue; }
    if (value === null && def.nullable) continue;
    const validType = def.type === 'number' ? typeof value === 'number' && Number.isFinite(value)
      : def.type === 'bool' ? typeof value === 'boolean'
        : def.type === 'string' ? typeof value === 'string'
          : def.type === 'string_array' ? Array.isArray(value) && value.every(x => typeof x === 'string')
            : def.type === 'object_array' ? Array.isArray(value) && value.every(x => x && typeof x === 'object' && !Array.isArray(x)) : true;
    if (!validType) { errors.push(`${key}: 값의 형식이 맞지 않습니다.`); continue; }
    if (def.options && !def.options.includes(value)) errors.push(`${key}: 지원하지 않는 값입니다.`);
    if (typeof value === 'number') {
      if (/Whole number/.test(def.description ?? '') && !Number.isInteger(value)) errors.push(`${key}: 정수가 필요합니다.`);
      if (def.min !== undefined && value < def.min || def.max !== undefined && value > def.max) errors.push(`${key}: 지원 범위를 벗어났습니다.`);
    }
  }
  for (const def of params.values()) if (def.required === 'required' && p[def.name] == null) errors.push(`${def.name}: 필수 옵션입니다.`);
  const media = Array.isArray(p.medias) ? p.medias : [];
  if (p.medias !== undefined && !Array.isArray(p.medias)) errors.push('medias: 입력 목록이 필요합니다.');
  const allowed = new Set(model.medias.flatMap(m => m.roles ?? []));
  for (const m of media) {
    if (!m || !allowed.has(m.role)) errors.push('medias: 지원하지 않는 입력 역할입니다. 호스트별 역할 변환을 확인하세요.');
    if (typeof m?.value !== 'string' || !m.value.trim() || /^https?:\/\//i.test(m.value)) errors.push('medias: 직접 MCP에는 가져오기 완료된 미디어 ID가 필요합니다.');
  }
  const n = role => media.filter(m => m?.role === role).length;
  const max = (role, limit) => { if (n(role) > limit) errors.push(`${role}: 최대 ${limit}개입니다.`); };
  const range = (value, low, high, label) => { if (!Number.isFinite(value) || value < low || value > high) errors.push(`${label}: ${low}–${high} 범위가 필요합니다.`); };
  const oneVideo = () => { if (n('video_references') !== 1) errors.push('원본 영상이 정확히 하나 필요합니다.'); };
  const mode = p.mode ?? params.get('mode')?.default;
  const duration = p.duration ?? params.get('duration')?.default;
  if (p.count !== undefined && (!Number.isInteger(p.count) || p.count < 1 || p.count > 4)) errors.push('count: 1–4개의 정수가 필요합니다.');
  if ((p.use_unlim === true || p.use_free_gens === true) && ((p.count ?? 1) > 1 || (p.batch_size ?? 1) > 1)) errors.push('무료/무제한 모드의 1개 제한과 요청 수량이 충돌합니다.');
  if (p.use_unlim === true && p.use_free_gens === true) errors.push('무료 생성과 무제한 옵션을 함께 쓰지 마세요.');
  if (p.count !== undefined && p.batch_size !== undefined) errors.push('count와 batch_size를 중복 지정하지 마세요. 현재 호스트의 수량 필드 하나로 견적을 확인하세요.');

  if (p.model.startsWith('gpt_image_2_6')) {
    max('image_references', 16);
    if (p.output_format === 'svg' && media.length) errors.push('SVG는 참조 이미지를 받지 않습니다. 제품 입력을 빼지 말고 래스터/합성 경로를 선택하세요.');
    if (p.output_format !== 'gif' && (p.frame_count !== undefined || p.frame_duration_ms !== undefined)) errors.push('프레임 옵션은 GIF에서만 사용합니다.');
    if (p.output_format === 'gif' && p.size && p.size !== 'auto') {
      const match = /^(\d+)x(\d+)$/.exec(p.size);
      if (!match || match.slice(1).some(x => +x <= 0 || +x % 16 !== 0)) errors.push('GIF 가로·세로는 16의 배수여야 합니다.');
    }
    notes.push('2.6 Sunburst와 Flare는 별도 모델 ID입니다. 2.5의 variant 옵션을 옮기지 마세요.');
  }
  if (p.model === 'seedream_5_5') max('image_references', 10);

  if (p.model === 'gemini_omni_flash_1_2') {
    max('image_references', 7); max('video_references', 3); max('start_image', 1); max('end_image', 1);
    if (mode === 'text-to-video' && media.length) errors.push('텍스트 전용 모드에 참조 입력이 있습니다.');
    if (mode === 'image-to-video' && n('start_image') !== 1) errors.push('첫 프레임이 하나 필요합니다.');
    if (mode === 'image-to-video' && (n('image_references') || n('video_references'))) errors.push('첫 프레임 모드에 일반 참조가 섞였습니다.');
    if (mode !== 'image-to-video' && (n('start_image') || n('end_image'))) errors.push('첫/끝 프레임은 image-to-video 모드에만 사용합니다.');
    if (mode === 'reference-to-video' && !n('image_references') && !n('video_references')) errors.push('참조 모드에 실제 참조가 필요합니다.');
    if (mode === 'edit' || mode === 'extend') {
      oneVideo(); range(input.source_duration, mode === 'edit' ? 3 : 1, mode === 'edit' ? 15 : 30, '원본 영상 길이');
      if (mode === 'edit' && p.duration !== undefined) errors.push('edit는 원본 길이를 사용합니다. 출력 duration으로 견적 길이를 줄일 수 없습니다.');
      if (mode === 'extend' && n('image_references')) errors.push('extend에 이미지 참조 지원이 확인되지 않았습니다.');
    }
    if (mode !== 'edit') range(duration, 3, mode === 'reference-to-video' || mode === 'extend' || n('end_image') ? 10 : 15, '모드별 출력 길이');
  }

  if (['seedance_2_5', 'seedance_2_5_flash'].includes(p.model)) {
    const flash = p.model.endsWith('_flash');
    max('image_references', flash ? 10 : 30); max('video_references', flash ? 5 : 10); max('audio_references', flash ? 5 : 10);
    max('start_image', 1); max('end_image', 1);
    if (!flash && n('image_references') + n('start_image') + n('end_image') > 30) errors.push('이미지와 첫/끝 프레임 합계는 최대 30개입니다.');
    if (mode === 't2v' && media.length) errors.push('참조가 있는 작업은 텍스트 전용 모드로 보낼 수 없습니다.');
    if (mode !== 'omni_reference' && (n('start_image') || n('end_image'))) errors.push('첫/끝 프레임은 omni_reference 모드에만 사용합니다.');
    if (mode === 'omni_reference' && !media.length && !p.draft_job_id) errors.push('참조 모드에 실제 참조가 필요합니다.');
    if (mode === 'video_edit' || mode === 'video_extension') {
      oneVideo();
      if (!Number.isFinite(input.source_duration) || input.source_duration <= 0) errors.push('실제 원본 영상 길이를 확인해야 합니다.');
      if (p.aspect_ratio !== undefined) errors.push('영상 수정/연장은 원본 비율을 사용합니다. 무시되는 aspect_ratio를 제거하세요.');
      if (mode === 'video_edit' && p.duration !== undefined) errors.push('video_edit는 원본 길이로 과금합니다. duration을 제거하세요.');
    }
    if (mode === 'video_extension' && !p.extension_mode) errors.push('연장 방향이 필요합니다.');
    if (mode !== 'video_extension' && p.extension_mode != null) errors.push('연장 방향은 video_extension에서만 사용합니다.');
    if (p.draft === true && p.resolution !== '480p') errors.push('초안은 480p입니다. 실제 옵션으로 다시 견적을 확인하세요.');
    if (p.draft_job_id) {
      if (p.draft === true) errors.push('초안 생성과 초안 최종 렌더링을 동시에 요청할 수 없습니다.');
      if (p.duration !== undefined) errors.push('최종 렌더링은 초안 전체 길이로 과금합니다. duration을 제거하세요.');
      if (input.draft_source?.job_id !== p.draft_job_id || input.draft_source?.status !== 'completed') errors.push('완료된 동일 초안의 상태를 확인해야 합니다.');
      range(input.draft_source?.age_hours, 0, 168, '초안 경과 시간');
      if (input.draft_source?.age_hours === 168) errors.push('7일이 지난 초안은 만료되었습니다.');
      range(input.draft_source?.duration, 4, 30, '초안 전체 길이');
      notes.push('최종 렌더링은 별도 유료 작업입니다. 초안 전체 길이의 견적과 승인이 필요합니다.');
    }
  }
  if (p.model.startsWith('hf_mult_')) {
    oneVideo();
    const limit = p.model === 'hf_mult_motion_control' ? 49 : p.model.endsWith('_flash') ? 10 : 30;
    if (!n('image_references')) errors.push('교체 대상/인물 참조가 필요합니다.');
    max('image_references', limit);
    if (p.model !== 'hf_mult_motion_control') range(input.source_duration, 4, 30, '원본 영상 길이');
  }
  if (p.model === 'ad_multiplier_v2') {
    oneVideo(); max('image_references', 20); range(input.source_duration, 4, 30, '원본 광고 길이');
    if (mode === 'sections' && !p.section) errors.push('교체할 hook/cta/both 구간을 지정하세요.');
    if (mode !== 'sections' && p.section != null) errors.push('section은 sections 모드에서만 사용합니다.');
    notes.push('구간이 감지되지 않으면 앞/뒤에 추가될 수 있습니다. 부분 성공·실제 길이·청구 상태를 확인하고 재시도하지 마세요.');
  }
  return result();
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    if (!process.argv[2]) throw new Error('사용법: node check-generation-request.mjs <request.json>');
    const result = checkGenerationRequest(JSON.parse(await readFile(process.argv[2], 'utf8')));
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    if (!result.ok) process.exitCode = 2;
  } catch (error) { process.stderr.write(`${error.message}\n`); process.exitCode = 2; }
}
