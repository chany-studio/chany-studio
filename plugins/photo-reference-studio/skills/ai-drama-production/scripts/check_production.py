#!/usr/bin/env python3
"""Offline consistency checks. Does not decode media or certify review truth."""
import argparse
import hashlib
import json
import math
from pathlib import Path


REVIEW_KEYS = ('story', 'performance', 'visual_continuity', 'audio_sync',
               'full_playback', 'business_claims', 'delivery')


def validate(data, base, mode='plan'):
    errors, warnings = [], []
    release = mode == 'release'

    def error(where, message):
        errors.append(f'{where}: {message}')

    def pending(where, message):
        (errors if release else warnings).append(f'{where}: {message}')

    def integer(value, where, minimum=0):
        if type(value) is not int or value < minimum:
            error(where, f'expected integer >= {minimum}')
            return False
        return True

    def number(value, where):
        if (type(value) not in (int, float) or value < 0
                or (type(value) is float and not math.isfinite(value))):
            error(where, 'expected finite nonnegative number')
            return False
        return True

    def string(value, where):
        if not isinstance(value, str) or not value.strip():
            error(where, 'expected nonempty text')
            return False
        return True

    def array(value, where):
        if not isinstance(value, list):
            error(where, 'expected array')
            return []
        return value

    def file(value, where):
        if value is None or value == '':
            pending(where, 'file not supplied')
            return None
        if not isinstance(value, str):
            error(where, 'expected path string or null')
            return None
        try:
            p = Path(value)
            if not p.is_absolute():
                p = base / p
            if not p.is_file() or p.stat().st_size == 0:
                pending(where, 'file missing or empty')
                return None
            return p
        except (OSError, ValueError):
            error(where, 'invalid or unreadable path')
            return None

    def rows(value, where):
        seen = set()
        for index, row in enumerate(array(value, where)):
            loc = f'{where}[{index}]'
            if not isinstance(row, dict):
                error(loc, 'expected object')
                continue
            ident = row.get('id')
            if string(ident, loc + '.id'):
                if ident in seen:
                    error(loc + '.id', 'duplicate ID')
                seen.add(ident)
            yield loc, row

    if not isinstance(data, dict):
        return {'mode': mode, 'ok': False, 'errors': ['root: expected object'], 'warnings': []}
    if type(data.get('schema_version')) is not int or data.get('schema_version') != 1:
        error('schema_version', 'expected 1')
    string(data.get('title'), 'title')
    fps = data.get('fps')
    if not isinstance(fps, dict):
        error('fps', 'expected num/den object')
    else:
        integer(fps.get('num'), 'fps.num', 1)
        integer(fps.get('den'), 'fps.den', 1)
    duration = data.get('duration_frames')
    duration_ok = integer(duration, 'duration_frames', 1)
    if type(data.get('audio_required')) is not bool:
        error('audio_required', 'expected boolean')
    if data.get('audio_required') is True:
        file(data.get('audio_mix'), 'audio_mix')

    last_end = 0
    shot_count = 0
    for loc, shot in rows(data.get('shots'), 'shots'):
        shot_count += 1
        string(shot.get('scene'), loc + '.scene')
        if shot.get('kind') not in ('generated', 'live', 'title', 'black'):
            error(loc + '.kind', 'unknown shot kind')
        start, end = shot.get('start'), shot.get('end')
        a = integer(start, loc + '.start')
        b = integer(end, loc + '.end', 1)
        if a and b:
            if end <= start:
                error(loc, 'end must exceed start')
            if start != last_end:
                error(loc, 'gap, overlap, or unsorted display interval')
            if duration_ok and end > duration:
                error(loc, 'shot exceeds timeline')
            last_end = end
        refs = array(shot.get('references'), loc + '.references')
        if shot.get('kind') == 'generated' and not refs:
            pending(loc + '.references', 'generated shot has no reference')
        for n, ref in enumerate(refs):
            file(ref, f'{loc}.references[{n}]')
        file(shot.get('output'), loc + '.output')
    if shot_count == 0:
        error('shots', 'at least one shot required')
    elif duration_ok and last_end != duration:
        error('shots', 'last end does not match duration_frames')

    for loc, line in rows(data.get('dialogue'), 'dialogue'):
        string(line.get('speaker'), loc + '.speaker')
        start, end = line.get('start'), line.get('end')
        a = integer(start, loc + '.start')
        b = integer(end, loc + '.end', 1)
        if a and b:
            if end <= start or (duration_ok and end > duration):
                error(loc, 'invalid dialogue timeline interval')
        measured = line.get('measured_frames')
        if measured is None:
            pending(loc + '.measured_frames', 'dialogue not measured')
        elif integer(measured, loc + '.measured_frames', 1) and a and b:
            if measured > end - start:
                error(loc, 'measured speech exceeds allocated interval')
        file(line.get('audio'), loc + '.audio')

    for loc, claim in rows(data.get('claims'), 'claims'):
        string(claim.get('text'), loc + '.text')
        if type(claim.get('used')) is not bool:
            error(loc + '.used', 'expected boolean')
        if claim.get('status') not in ('confirmed', 'pending', 'discarded'):
            error(loc + '.status', 'unknown claim status')
        if claim.get('used') is True:
            if claim.get('status') != 'confirmed':
                pending(loc, 'used claim is not confirmed')
            if not isinstance(claim.get('evidence'), str) or not claim['evidence'].strip():
                pending(loc + '.evidence', 'used claim has no evidence citation')

    budget = data.get('budget')
    if not isinstance(budget, dict):
        error('budget', 'expected object')
    else:
        string(budget.get('unit'), 'budget.unit')
        valid = True
        for key in ('spent', 'reserved', 'next_batch'):
            valid = number(budget.get(key), 'budget.' + key) and valid
        limit = budget.get('authorized_limit')
        limit_ok = limit is None or number(limit, 'budget.authorized_limit')
        if valid and limit_ok:
            total = sum(budget[key] for key in ('spent', 'reserved', 'next_batch'))
            if type(total) is float and not math.isfinite(total):
                error('budget', 'total is not finite')
            elif limit is None and total > 0:
                error('budget', 'cost exists without authorized limit')
            elif limit is not None and total > limit:
                error('budget', 'spent + reserved + next_batch exceeds limit')

    final = file(data.get('final_output'), 'final_output')
    final_hash = None
    if release and final:
        try:
            digest = hashlib.sha256()
            with final.open('rb') as stream:
                for chunk in iter(lambda: stream.read(1024 * 1024), b''):
                    digest.update(chunk)
            final_hash = digest.hexdigest()
        except OSError:
            error('final_output', 'cannot read file for hash')
    review_map = data.get('reviews')
    if not isinstance(review_map, dict):
        error('reviews', 'expected object')
    else:
        for key in REVIEW_KEYS:
            loc = 'reviews.' + key
            row = review_map.get(key)
            if not isinstance(row, dict):
                pending(loc, 'review not supplied')
                continue
            status = row.get('status')
            if status not in ('pending', 'pass', 'fail'):
                error(loc + '.status', 'unknown review status')
            if status != 'pass':
                pending(loc, 'review is not pass')
            if release:
                file(row.get('evidence'), loc + '.evidence')
                string(row.get('notes'), loc + '.notes')
                if final_hash is None or row.get('asset_sha256') != final_hash:
                    error(loc, 'review is not bound to current final output SHA-256')
    return {'mode': mode, 'ok': not errors, 'errors': errors, 'warnings': warnings,
            'scope': 'records/files only; no media playback or artistic certification'}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('manifest', type=Path)
    parser.add_argument('--mode', choices=('plan', 'release'), default='plan')
    args = parser.parse_args()
    try:
        data = json.loads(args.manifest.read_text(encoding='utf-8'),
                          parse_constant=lambda value: (_ for _ in ()).throw(ValueError(value)))
    except (OSError, UnicodeError, ValueError) as exc:
        print(json.dumps({'ok': False, 'errors': [f'Cannot read JSON: {exc}']}, ensure_ascii=False))
        return 2
    result = validate(data, args.manifest.parent, args.mode)
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0 if result['ok'] else 1


if __name__ == '__main__':
    raise SystemExit(main())
