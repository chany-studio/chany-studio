// Render the trusted, repository-authored workbook's limited Markdown subset.
// One source keeps the downloadable handout and website lesson identical.
import { readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = await readFile(resolve(root, 'docs/BEGINNER-WORKBOOK.md'), 'utf8');
const sourceHash = createHash('sha256').update(source).digest('hex');
const esc = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const inline = (s) => esc(s)
  .replace(/\[([^\]]+)\]\((https:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1 ↗</a>')
  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  .replace(/`([^`]+)`/g, '<code>$1</code>');
const lines = source.trim().split('\n');
const body = [], toc = [];
let chapter = 0, prompt = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line.trim()) continue;
  if (line.startsWith('```')) {
    const code = [];
    while (++i < lines.length && !lines[i].startsWith('```')) code.push(lines[i]);
    if (i === lines.length) throw new Error('Unclosed prompt fence');
    const id = `prompt-${++prompt}`;
    body.push(`<div class="prompt"><div class="prompt-head"><span>복사 → 내 정보로 바꾸기 → AI 대화에 보내기</span><button data-copy="${id}" aria-label="요청문 ${prompt} 복사">요청문 복사</button></div><pre id="${id}" tabindex="0">${esc(code.join('\n'))}</pre></div>`);
  } else if (line.startsWith('|')) {
    const rows = [];
    while (i < lines.length && lines[i].startsWith('|')) {
      const cells = lines[i].slice(1, -1).split('|').map((v) => v.trim());
      if (!cells.every((v) => /^:?-+:?$/.test(v))) rows.push(cells);
      i++;
    }
    i--;
    body.push(`<div class="table-wrap" tabindex="0" role="region" aria-label="가로로 스크롤할 수 있는 설명 표"><table><thead><tr>${rows[0].map((v) => `<th scope="col">${inline(v)}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map((row) => `<tr>${row.map((v) => `<td>${inline(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
  } else if (/^#{1,3} /.test(line)) {
    const [, marks, label] = line.match(/^(#{1,3}) (.*)$/);
    const level = marks.length;
    if (level === 2) {
      const id = `chapter-${++chapter}`;
      toc.push(`<a href="#${id}">${inline(label)}</a>`);
      body.push(`<h2 id="${id}">${inline(label)}</h2>`);
    } else body.push(`<h${level}>${inline(label)}</h${level}>`);
  } else if (/^(?:- |\d+\. )/.test(line)) {
    const ordered = /^\d/.test(line), tag = ordered ? 'ol' : 'ul';
    const rule = ordered ? /^\d+\. / : /^- /;
    const items = [];
    while (i < lines.length && rule.test(lines[i])) items.push(`<li>${inline(lines[i++].replace(rule, ''))}</li>`);
    i--;
    body.push(`<${tag}>${items.join('')}</${tag}>`);
  } else body.push(`<p>${inline(line)}</p>`);
}
const html = `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="workbook-source-sha256" content="${sourceHash}"><title>CHANY STUDIO · 왕초보 실습 교안</title><meta name="description" content="플러그인 사용법부터 첫 이미지·영상 실습까지. 기본 개념과 누구나 바꿔 쓰는 14종 상세 프롬프트.">
<style>
:root{color-scheme:dark;--bg:#0c0d0f;--panel:#17191c;--text:#f3f4f5;--muted:#b2b5bc;--line:#36393f;--lime:#d7fc4b}*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:90px}body{margin:0;background:var(--bg);color:var(--text);font:17px/1.85 -apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Malgun Gothic",sans-serif;word-break:keep-all}a{color:var(--lime);text-underline-offset:4px}button{font:inherit;cursor:pointer;background:var(--lime);color:#111;padding:10px 15px;border:0;border-radius:7px;font-size:14px;font-weight:700}header{position:sticky;top:0;z-index:2;display:flex;align-items:center;gap:16px;justify-content:space-between;padding:16px 5vw;background:var(--bg);border-bottom:1px solid var(--line)}header>a{font-weight:750;letter-spacing:.1em;text-decoration:none;color:var(--text)}header small{color:var(--muted);font-size:14px}.layout{display:grid;grid-template-columns:250px minmax(0,840px);gap:56px;max-width:1210px;margin:auto;padding:38px 24px 90px}nav{position:sticky;top:108px;align-self:start;max-height:calc(100vh - 135px);overflow:auto}nav strong{display:block;color:var(--muted);font-size:14px;margin:0 0 12px}nav a{display:block;text-decoration:none;color:var(--muted);padding:9px 0;font-size:14px;line-height:1.7}nav a:hover{color:var(--lime)}main{min-width:0}h1{font-size:clamp(31px,4vw,46px);line-height:1.25;letter-spacing:-.045em;margin:14px 0 22px;max-width:750px}h2{font-size:29px;line-height:1.4;letter-spacing:-.035em;border-top:1px solid var(--line);padding-top:42px;margin:64px 0 22px}h3{font-size:22px;line-height:1.5;margin:38px 0 12px;letter-spacing:-.025em}p{margin:14px 0 22px}strong{color:#fff}li{padding:5px 0}ul,ol{padding-left:24px}code{font-size:.9em;background:var(--panel);border-radius:4px;padding:2px 5px;overflow-wrap:anywhere}.table-wrap{overflow-x:auto;margin:24px 0;border:1px solid var(--line);border-radius:10px}table{border-collapse:collapse;width:100%;min-width:520px;font-size:15px;line-height:1.75}th,td{padding:15px;text-align:left;vertical-align:top;border-bottom:1px solid var(--line)}th{color:var(--lime);background:var(--panel)}tr:last-child td{border-bottom:0}.prompt{margin:22px 0 32px;border:1px solid var(--line);border-radius:12px;overflow:hidden;background:var(--panel)}.prompt-head{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:13px 18px;border-bottom:1px solid var(--line);font-size:14px;color:var(--muted)}pre{margin:0;padding:22px;white-space:pre-wrap;overflow-wrap:anywhere;word-break:normal;font:16px/1.9 -apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Malgun Gothic",sans-serif}.prompt button{white-space:nowrap}#status{position:fixed;bottom:16px;left:50%;transform:translateX(-50%);padding:10px 16px;border-radius:8px;background:#d7fc4b;color:#111;font-size:14px;max-width:90vw;z-index:3}#status:empty{display:none}:focus-visible{outline:3px solid var(--lime);outline-offset:4px}.skip{position:fixed;left:12px;top:-80px;z-index:4;background:#111;padding:12px}.skip:focus{top:10px}footer{border-top:1px solid var(--line);padding-top:25px;margin-top:50px;color:var(--muted);font-size:14px}
@media(max-width:900px){.layout{display:block;max-width:840px;padding:24px 20px 60px}nav{position:static;max-height:none;border-bottom:1px solid var(--line);padding-bottom:22px;margin-bottom:26px;columns:2}nav strong{column-span:all}nav a{break-inside:avoid}header small{display:none}}@media(max-width:540px){body{font-size:16px}header{padding:14px 18px}header>a{font-size:14px}h2{font-size:25px}h3{font-size:21px}.prompt-head{align-items:flex-start;flex-direction:column}pre{padding:16px;font-size:15px}nav{columns:1}nav a{padding:5px 0}}
@media print{@page{size:A4;margin:17mm 15mm}*{color:#111!important;background:#fff!important;box-shadow:none!important}body{font-size:11pt;line-height:1.65}header,nav,.skip,#status,.prompt-head{display:none!important}.layout{display:block;padding:0;max-width:none}h1{font-size:25pt}h2{font-size:19pt;margin:0 0 18px;padding-top:10px;break-before:page;border:0}h3{font-size:14pt;break-after:avoid;margin-top:24px}p{orphans:3;widows:3}pre{font-size:10pt;line-height:1.7;padding:12px}.prompt{border:1px solid #bbb;break-inside:avoid;overflow:visible;border-radius:0}.table-wrap{overflow:visible;border:0}table{min-width:0;font-size:10pt}tr{break-inside:avoid}th,td{padding:8px;border:1px solid #ddd}a{text-decoration:none}footer{font-size:9pt}}
</style></head><body><a class="skip" href="#main">본문으로 바로가기</a><header><a href="https://chany-studio.chanjunpark.chatgpt.site/">CHANY STUDIO</a><small>왕초보 실습 교안 · 읽고, 복사하고, 직접 만들어보기</small><button id="print">인쇄 · PDF 저장</button></header><div class="layout"><nav aria-label="교안 목차"><strong>수업 순서 · 필요한 부분으로 이동</strong>${toc.join('')}</nav><main id="main" tabindex="-1">${body.join('\n')}<footer>CHANY STUDIO · 기초와 첫 실습은 1~6장, 목적별 복사 요청문은 7장입니다. 인쇄 창에서 “PDF로 저장”을 선택하면 교안 파일로 보관할 수 있습니다.</footer></main></div><p id="status" role="status" aria-live="polite"></p><script>
document.getElementById('print').addEventListener('click',()=>window.print());
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{
const target=document.getElementById(button.dataset.copy);const status=document.getElementById('status');
try{await navigator.clipboard.writeText(target.textContent);button.textContent='복사 완료';status.textContent='요청문을 복사했어요. 대괄호를 내 정보로 바꾸고 AI 대화에 보내세요.'}
catch{const range=document.createRange();range.selectNodeContents(target);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);status.textContent='자동 복사가 안 되어 문구를 선택했어요. Ctrl+C 또는 ⌘C로 복사하세요.'}
}));
</script></body></html>`;
const output = resolve(root, 'docs/CHANY-STUDIO-BEGINNER-WORKBOOK.html');
await writeFile(output, html);
console.log(`Rendered ${chapter} chapters and ${prompt} copyable prompts: ${output}`);
