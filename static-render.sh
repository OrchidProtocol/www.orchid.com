#!/bin/bash

# Any of these three variables can be overridden at the command line if necessary
[[ -n "$SCREEN" ]] || SCREEN=static-render-server
[[ -n "$OUT_DIR" ]] || OUT_DIR=dist/static
[[ -n "$PORT" ]] || PORT=3926

export PORT

function say() {
  [[ -t 2 ]] && echo $'\x1b[1m==> '$@$'\x1b[m' >&2 || echo '==> '$@ >&2
}

function warn() {
  [[ -t 2 ]] && echo $'\x1b[1;38;5;1m=!> '$@$'\x1b[m' >&2 || echo '=!>'$@ >&2
}

function disconnect() {
  say 'Stopping the server'

  screen -S $SCREEN -X stuff $'\000' || warn 'Failed to stop the server - it may still be running'
}

function chk-screen() {
  if screen -S $SCREEN -list >/dev/null 2>/dev/null; then
    warn "There is already a screen session open for '$SCREEN'."

    return 1
  fi

  return 0
}

if ! chk-screen; then
  warn 'Close it or choose a different session name.'
  warn '  (i.e. SCREEN=something-else ./static-render.sh'

  exit 1
fi

cd "$(dirname "$0")"

say 'Building server files...'
yarn build:ssr || exit 1

say 'Launching the server in a screen session'
chk-screen || warn 'Leaving it open will cause problems.'
screen -dmS $SCREEN yarn serve:ssr
trap disconnect EXIT

say 'Waiting a bit for the server to start...'
sleep 5

say 'Retrieving server files...'
[[ -d $OUT_DIR ]] && rm -rf $OUT_DIR
mkdir -p $OUT_DIR || exit 1
wget -nH -e robots=off -P$OUT_DIR -mE http://localhost:$PORT || exit 1

say 'Done.'
