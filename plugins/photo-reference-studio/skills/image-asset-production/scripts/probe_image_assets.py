#!/usr/bin/env python3
"""Read-only image preflight. Requires Pillow; never edits source pixels."""
import argparse
import hashlib
import json
from pathlib import Path

from PIL import Image


def positive(value):
    number = int(value)
    if number <= 0:
        raise argparse.ArgumentTypeError("must be positive")
    return number


def probe(path, require_alpha=False, min_width=None, min_height=None):
    result = {"path": str(path.resolve()), "issues": []}
    try:
        digest = hashlib.sha256()
        with path.open("rb") as stream:
            for chunk in iter(lambda: stream.read(1024 * 1024), b""):
                digest.update(chunk)
        with Image.open(path) as source:
            source.load()
            width, height = source.size
            has_alpha = "A" in source.getbands() or "transparency" in source.info
            alpha = source.convert("RGBA").getchannel("A")
            histogram = alpha.histogram()
            total = width * height
            bounds = alpha.getbbox()
            result.update({
                "sha256": digest.hexdigest(), "format": source.format,
                "width": width, "height": height, "mode": source.mode,
                "frames": getattr(source, "n_frames", 1),
                "icc_present": bool(source.info.get("icc_profile")),
                "alpha_capable": has_alpha, "alpha_extrema": list(alpha.getextrema()),
                "fully_transparent_pixels": histogram[0],
                "partially_transparent_pixels": sum(histogram[1:255]),
                "fully_opaque_pixels": histogram[255],
                "transparent_fraction": histogram[0] / total,
                "visible_bbox_alpha_gt_0": list(bounds) if bounds else None,
                "visible_size": [bounds[2] - bounds[0], bounds[3] - bounds[1]] if bounds else [0, 0],
                "touches_canvas_edge": bool(bounds and (
                    bounds[0] == 0 or bounds[1] == 0 or bounds[2] == width or bounds[3] == height)),
            })
            if require_alpha and (not has_alpha or histogram[255] == total):
                result["issues"].append("NO_EFFECTIVE_TRANSPARENCY")
            if bounds is None:
                result["issues"].append("EMPTY_VISIBLE_IMAGE")
            if getattr(source, "n_frames", 1) > 1:
                result["issues"].append("MULTIFRAME_FIRST_FRAME_ONLY")
            if min_width and width < min_width:
                result["issues"].append("CANVAS_WIDTH_BELOW_REQUEST")
            if min_height and height < min_height:
                result["issues"].append("CANVAS_HEIGHT_BELOW_REQUEST")
        result["technical_status"] = "NEEDS_REVIEW" if result["issues"] else "CHECKED"
    except (OSError, ValueError, Image.DecompressionBombError) as exc:
        result.update({"technical_status": "ERROR", "error": str(exc)})
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("paths", type=Path, nargs="+")
    parser.add_argument("--require-alpha", action="store_true")
    parser.add_argument("--min-width", type=positive)
    parser.add_argument("--min-height", type=positive)
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    if args.output and args.output.exists():
        parser.error("output already exists; choose a new report path")
    records = [probe(p, args.require_alpha, args.min_width, args.min_height) for p in args.paths]
    report = {
        "scope": "Read-only technical properties, first frame only. Not a visual or motion quality pass.",
        "assets": records,
    }
    payload = json.dumps(report, ensure_ascii=False, indent=2) + "\n"
    if args.output:
        with args.output.open("x", encoding="utf-8") as stream:
            stream.write(payload)
        print(json.dumps({"output": str(args.output.resolve()), "assets": len(records),
                          "needs_review": sum(r["technical_status"] != "CHECKED" for r in records)}))
    else:
        print(payload)
    return 1 if any(r["technical_status"] != "CHECKED" for r in records) else 0


if __name__ == "__main__":
    raise SystemExit(main())
