import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const read = (name) => readFile(new URL(`../../../docs/${name}`, import.meta.url), 'utf8');

test('beginner handout is generated from the current editable lesson', async () => {
  const source = await read('BEGINNER-WORKBOOK.md');
  const html = await read('CHANY-STUDIO-BEGINNER-WORKBOOK.html');
  const hash = createHash('sha256').update(source).digest('hex');
  assert.ok(html.includes(`name="workbook-source-sha256" content="${hash}"`));
  assert.equal((source.match(/^## /gm) || []).length, 10);
  assert.equal((source.match(/^```text$/gm) || []).length, 19);
  assert.equal((html.match(/data-copy="prompt-\d+"/g) || []).length, 19);
  for (let i = 1; i <= 10; i++) {
    assert.ok(html.includes(`href="#chapter-${i}"`));
    assert.ok(html.includes(`id="chapter-${i}"`));
  }
});

test('beginner lesson teaches use before jargon and keeps execution boundaries', async () => {
  const source = await read('BEGINNER-WORKBOOK.md');
  for (const phrase of ['플러그인 설치와 제작 도구 연결은 별개', 'AI의 대화 입력창', '다운로드·저장', '실제 비용', '어떤 파일을 어느 서비스로', '전문용어와 모델 이름을 외우는 수업이 아닙니다', '프로젝트는 꼭', '서비스·공간으로 연습한다면']) assert.ok(source.includes(phrase), phrase);
  assert.ok(source.includes('모든 화면에서 작동하는 등록 명령이 아닙니다'));
  assert.ok(source.includes('새 이미지를 무조건 생성할 필요는 없습니다'));
  assert.ok(source.includes('공개 정보만으로 성과가 좋다고 단정하지 마'));
});

test('lesson HTML exposes copy, fallback selection, accessible navigation and print styles', async () => {
  const html = await read('CHANY-STUDIO-BEGINNER-WORKBOOK.html');
  for (const phrase of ['navigator.clipboard.writeText', 'range.selectNodeContents', 'role="status"', 'aria-label="교안 목차"', '@media print', 'window.print()', '본문으로 바로가기']) assert.ok(html.includes(phrase), phrase);
  assert.ok(!html.includes('<script src='));
});
