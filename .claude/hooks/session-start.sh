#!/bin/bash
# Installs graphify in Claude Code cloud sessions so the graph hooks in
# .claude/settings.json can run. Local machines: install once with
# `pip install graphifyy` (or `uv tool install graphifyy`).
set -uo pipefail
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi
if ! command -v graphify >/dev/null 2>&1; then
  python3 -m pip install --quiet --disable-pip-version-check graphifyy >/dev/null 2>&1 \
    || python3 -m pip install --quiet --disable-pip-version-check --break-system-packages graphifyy >/dev/null 2>&1 \
    || true
fi
exit 0
