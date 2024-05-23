#!/bin/bash

# Copied from:
# gfxmonk.net/2012/06/17/my-new-bash-script-prelude.html

set -eu
set -o pipefail
export PS4='+ ${FUNCNAME[0]: +${FUNCNAME[0]}():}line ${LINENO}: '
syslogname="$(basename "$0")[$$]"
exec 3<> >(logger -t "$syslogname")
BASH_XTRACEFD=3
echo "Tracing to syslog as $syslogname"
unset syslogname
debug() { echo "$@" >&3; }
set -x
