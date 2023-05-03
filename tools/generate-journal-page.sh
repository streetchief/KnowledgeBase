#!/usr/bin/env bash

# Set bash "strict mode"
# <http://redsymbol.net/articles/unofficial-bash-strict-mode/>
set -euo pipefail
IFS=$'\n\t'

# Formatting linux date:
# %D – Display date as mm/dd/yy
# %Y – Year (e.g., 2020)
# %m – Month (01-12)
# %B – Long month name (e.g., November)
# %b – Short month name (e.g., Nov)
# %d – Day of month (e.g., 01)
# %j – Day of year (001-366)
# %u – Day of week (1-7)
# %A – Full weekday name (e.g., Friday)
# %a – Short weekday name (e.g., Fri)
# %H – Hour (00-23)
# %I – Hour (01-12)
# %M – Minute (00-59)
# %S – Second (00-60)
# %n - Newline character
today=$(date -I)
filename="$today.md"
echo "# $(date '+%A %B %d %Y%n')" >> "$filename"
echo "" >> "$filename"
