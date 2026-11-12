#!/usr/bin/env python3
"""Read-only media evidence. Explicit expectations only; never artistic QA."""
import argparse
from fractions import Fraction
import hashlib
import json
import math
from pathlib import Path
import shutil
import subprocess
import sys


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('media', type=Path)
    ap.add_argument('--ffprobe', default='ffprobe')
    ap.add_argument('--width', type=int)
    ap.add_argument('--height', type=int)
    ap.add_argument('--fps', help='Exact rational, e.g. 30000/1001')
    ap.add_argument('--duration', type=float)
    ap.add_argument('--tolerance', type=float, default=0.05, help='Seconds, technical tolerance only')
    ap.add_argument('--require-audio', action='store_true')
    ap.add_argument('--output', type=Path)
    args = ap.parse_args()
    if args.output and args.output.exists():
        ap.error('Output already exists; select a new report path')
    if not args.media.is_file():
        ap.error('Media file does not exist')
    exe = shutil.which(args.ffprobe)
    if not exe:
        ap.error('ffprobe not found; supply its verified path')
    if not math.isfinite(args.tolerance) or args.tolerance < 0:
        ap.error('Tolerance must be finite and nonnegative')
    if args.duration is not None and (not math.isfinite(args.duration) or args.duration <= 0):
        ap.error('Expected duration must be finite and positive')
    for dimension in (args.width, args.height):
        if dimension is not None and dimension <= 0:
            ap.error('Expected dimensions must be positive')
    try:
        expected_fps = Fraction(args.fps) if args.fps else None
        if expected_fps is not None and expected_fps <= 0:
            raise ValueError('nonpositive fps')
    except (ValueError, ZeroDivisionError):
        ap.error('Expected fps must be a positive rational')
    result = subprocess.run([exe, '-v', 'error', '-show_streams', '-show_format',
                             '-of', 'json', str(args.media.resolve())],
                            capture_output=True, text=True, timeout=120)
    if result.returncode:
        print(result.stderr, file=sys.stderr)
        return 2
    data = json.loads(result.stdout)
    streams = data.get('streams', [])
    videos = [s for s in streams if s.get('codec_type') == 'video' and not s.get('disposition', {}).get('attached_pic')]
    audios = [s for s in streams if s.get('codec_type') == 'audio']
    checks = []
    def check(name, expected, actual, passed):
        checks.append(dict(name=name, expected=expected, actual=actual, passed=bool(passed)))
    video = videos[0] if videos else {}
    for key in ('width', 'height'):
        expected = getattr(args, key)
        if expected is not None:
            check(key, expected, video.get(key), video.get(key) == expected)
    if expected_fps is not None:
        actual = video.get('avg_frame_rate', '0/0')
        try:
            equal = Fraction(actual) == expected_fps
        except (ValueError, ZeroDivisionError):
            equal = False
        check('average_fps', str(expected_fps), actual, equal)
    if args.duration is not None:
        raw = video.get('duration', data.get('format', {}).get('duration'))
        try:
            actual_duration = float(raw)
            equal = math.isfinite(actual_duration) and abs(actual_duration - args.duration) <= args.tolerance
        except (TypeError, ValueError):
            actual_duration, equal = None, False
        check('duration_seconds', args.duration, actual_duration, equal)
    if args.require_audio:
        check('audio_stream', True, bool(audios), bool(audios))
    sha = hashlib.sha256()
    with args.media.open('rb') as f:
        for block in iter(lambda: f.read(1024 * 1024), b''):
            sha.update(block)
    report = dict(path=str(args.media.resolve()), bytes=args.media.stat().st_size,
                  sha256=sha.hexdigest(), metadata=data, checks=checks,
                  expectation_result=('PASS' if all(c['passed'] for c in checks) else 'FAIL') if checks else 'NOT_REQUESTED',
                  limitations=['Metadata only; average frame rate does not prove constant frame cadence.',
                               'No visual, auditory, factual, rights, or native-project verification.'])
    encoded = json.dumps(report, ensure_ascii=False, indent=2) + '\n'
    if args.output:
        with args.output.open('x', encoding='utf-8') as f:
            f.write(encoded)
        print(json.dumps({'report': str(args.output), 'expectation_result': report['expectation_result']}, ensure_ascii=False))
    else:
        print(encoded)
    return 1 if any(not c['passed'] for c in checks) else 0


if __name__ == '__main__':
    sys.exit(main())
