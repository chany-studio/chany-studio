"""Regression cases for production failures; synthetic files are not film QC."""
import copy
import hashlib
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

from check_production import REVIEW_KEYS, validate


class ProductionTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.base = Path(self.tmp.name)
        for name in ('final.bin', 'shot.bin', 'voice.bin', 'ref.bin', 'review.md'):
            (self.base / name).write_text('synthetic test fixture: ' + name)
        digest = hashlib.sha256((self.base / 'final.bin').read_bytes()).hexdigest()
        self.data = {
            'schema_version': 1, 'title': 'Fixture', 'fps': {'num': 24000, 'den': 1001},
            'duration_frames': 240, 'audio_required': True, 'audio_mix': 'voice.bin',
            'shots': [
                {'id': 'S1', 'scene': 'A', 'kind': 'generated', 'start': 0, 'end': 120,
                 'references': ['ref.bin'], 'output': 'shot.bin'},
                {'id': 'S2', 'scene': 'A', 'kind': 'generated', 'start': 120, 'end': 240,
                 'references': ['ref.bin'], 'output': 'shot.bin'}],
            'dialogue': [{'id': 'D1', 'speaker': 'A', 'start': 100, 'end': 160,
                          'measured_frames': 55, 'audio': 'voice.bin'}],
            'claims': [{'id': 'C1', 'text': 'Example', 'used': True,
                        'status': 'confirmed', 'evidence': 'test-only source'}],
            'budget': {'unit': 'credits', 'authorized_limit': 10,
                       'spent': 4, 'reserved': 2, 'next_batch': 4},
            'final_output': 'final.bin',
            'reviews': {key: {'status': 'pass', 'evidence': 'review.md',
                              'notes': 'Synthetic record only', 'asset_sha256': digest}
                        for key in REVIEW_KEYS}}

    def tearDown(self):
        self.tmp.cleanup()

    def result(self, mode='release'):
        return validate(self.data, self.base, mode)

    def test_complete_records_and_cross_cut_dialogue(self):
        self.assertTrue(self.result()['ok'])

    def test_gap(self):
        self.data['shots'][1]['start'] = 121
        self.assertFalse(self.result()['ok'])

    def test_overlap(self):
        self.data['shots'][1]['start'] = 119
        self.assertFalse(self.result()['ok'])

    def test_duplicate_id(self):
        self.data['shots'][1]['id'] = 'S1'
        self.assertFalse(self.result()['ok'])

    def test_duration_mismatch(self):
        self.data['duration_frames'] = 241
        self.assertFalse(self.result()['ok'])

    def test_long_dialogue(self):
        self.data['dialogue'][0]['measured_frames'] = 61
        self.assertFalse(self.result()['ok'])

    def test_unknown_voice_duration(self):
        self.data['dialogue'][0]['measured_frames'] = None
        self.assertTrue(self.result('plan')['ok'])
        self.assertFalse(self.result()['ok'])

    def test_missing_reference(self):
        self.data['shots'][0]['references'] = ['missing.png']
        self.assertTrue(self.result('plan')['ok'])
        self.assertFalse(self.result()['ok'])

    def test_missing_final_file(self):
        self.data['final_output'] = None
        self.assertFalse(self.result()['ok'])

    def test_unconfirmed_business_claim(self):
        self.data['claims'][0]['status'] = 'pending'
        self.assertFalse(self.result()['ok'])

    def test_unused_claim_can_stay_pending(self):
        self.data['claims'][0].update(status='pending', used=False)
        self.assertTrue(self.result()['ok'])

    def test_reserved_cost_counts(self):
        self.data['budget']['reserved'] = 3
        self.assertFalse(self.result()['ok'])

    def test_no_authorized_limit(self):
        self.data['budget']['authorized_limit'] = None
        self.assertFalse(self.result('plan')['ok'])

    def test_zero_cost_planning_without_limit(self):
        self.data['budget'].update(authorized_limit=None, spent=0, reserved=0, next_batch=0)
        self.assertTrue(self.result('plan')['ok'])

    def test_nan_budget(self):
        self.data['budget']['spent'] = float('nan')
        self.assertFalse(self.result()['ok'])

    def test_boolean_frame_rejected(self):
        self.data['shots'][0]['start'] = False
        self.assertFalse(self.result()['ok'])

    def test_invalid_fps(self):
        self.data['fps']['den'] = 0
        self.assertFalse(self.result()['ok'])

    def test_pending_review(self):
        self.data['reviews']['full_playback']['status'] = 'pending'
        self.assertFalse(self.result()['ok'])

    def test_export_changed_after_review(self):
        (self.base / 'final.bin').write_text('new output')
        self.assertFalse(self.result()['ok'])

    def test_missing_evidence(self):
        self.data['reviews']['audio_sync']['evidence'] = 'missing.md'
        self.assertFalse(self.result()['ok'])

    def test_missing_audio_mix(self):
        self.data['audio_mix'] = None
        self.assertFalse(self.result()['ok'])

    def test_malformed_nested_types_do_not_crash(self):
        for key in ('shots', 'dialogue', 'claims', 'budget', 'reviews', 'fps'):
            with self.subTest(key=key):
                broken = copy.deepcopy(self.data)
                broken[key] = 7
                self.assertFalse(validate(broken, self.base, 'release')['ok'])

    def test_bad_json_cli(self):
        path = self.base / 'broken.json'
        path.write_text('{broken')
        out = subprocess.run([sys.executable, str(Path(__file__).with_name('check_production.py')),
                              str(path)], capture_output=True, text=True)
        self.assertEqual(out.returncode, 2)
        self.assertFalse(json.loads(out.stdout)['ok'])

    def test_cli_plan_and_release(self):
        path = self.base / 'manifest.json'
        path.write_text(json.dumps(self.data))
        script = str(Path(__file__).with_name('check_production.py'))
        good = subprocess.run([sys.executable, script, str(path), '--mode', 'release'],
                              capture_output=True, text=True)
        self.assertEqual(good.returncode, 0)
        self.data['reviews']['story']['status'] = 'pending'
        path.write_text(json.dumps(self.data))
        bad = subprocess.run([sys.executable, script, str(path), '--mode', 'release'],
                             capture_output=True, text=True)
        self.assertEqual(bad.returncode, 1)


if __name__ == '__main__':
    unittest.main(verbosity=2)
