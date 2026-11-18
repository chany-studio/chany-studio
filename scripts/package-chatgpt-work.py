#!/usr/bin/env python3
"""Package Chany skills for Work Cloud; connect remote services in ChatGPT."""
import argparse
import json
from pathlib import Path
import subprocess
from zipfile import ZipFile, ZIP_DEFLATED


def package(destination):
    repo = Path(__file__).resolve().parent.parent
    root = repo / 'plugins/photo-reference-studio'
    manifest = json.loads((root / '.codex-plugin/plugin.json').read_text())
    # Direct MCP configuration makes this upload desktop-only. Work uses the
    # separately registered, authenticated ChatGPT service plugins instead.
    manifest.pop('mcpServers', None)
    manifest['requires_local_executor'] = False
    manifest['interface']['defaultPrompt'] = [
        '이 제품사진에 맞는 Behance 참고사진을 무료로 찾아줘. 내가 고르면 제품 원본과 선택한 참고사진을 함께 넣어 같은 구도와 빛의 광고사진을 만들고 라벨을 확인해줘.',
        '이 제품 설명을 바탕으로 인스타그램 릴스 레퍼런스 3개를 찾아줘. 제품에 맞는 이유와 실제 반응 지표를 비교해줘.',
        '내 제품 사진과 이 레퍼런스로 짧은 광고 영상을 만들고 싶어. 필요한 것부터 하나씩 물어봐줘.',
    ]
    tracked = subprocess.check_output(
        ['git', '-C', str(repo), 'ls-files', '-z', 'plugins/photo-reference-studio'],
    ).decode().split('\0')
    files = []
    for item in filter(None, tracked):
        path = repo / item
        relative = path.relative_to(root).as_posix()
        if relative.startswith(('skills/', 'assets/')):
            if path.is_symlink() or not path.is_file():
                raise ValueError(f'Expected regular tracked file: {relative}')
            files.append((path, relative))
    skill_count = sum(relative.endswith('/SKILL.md') for _, relative in files)
    if skill_count != 44:
        raise ValueError(f'Review package scope before publishing: {skill_count} skills')
    destination = Path(destination).resolve()
    # Exclusive creation preserves an existing release archive.
    with ZipFile(destination, 'x', ZIP_DEFLATED) as archive:
        archive.writestr('photo-reference-studio/.codex-plugin/plugin.json',
                         json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
        for path, relative in sorted(files):
            archive.write(path, 'photo-reference-studio/' + relative)
    return {'version': manifest['version'], 'skills': skill_count,
            'files': len(files) + 1, 'archive': str(destination)}


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('archive', help='New output .zip path')
    args = parser.parse_args()
    print(json.dumps(package(args.archive), ensure_ascii=False, indent=2))
