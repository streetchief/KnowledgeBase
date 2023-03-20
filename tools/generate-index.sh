#!/usr/bin/env bash

# Set bash "strict mode"
# <http://redsymbol.net/articles/unofficial-bash-strict-mode/>
set -euo pipefail
IFS=$'\n\t'

# regex looks for "readme" plus optional ".md" plus string end "$"
FILES=($(git ls-tree --full-tree -r --name-only HEAD | grep -Ei "readme(?:\.md)$"))

# target directory and filename
INDEX_FILE="docs/readme-index.md"

# delete old index if it exists
if test -f "$INDEX_FILE"; then
    rm "$INDEX_FILE"
fi

touch "$INDEX_FILE"

HEADER="# Readme Index"

# assuming index will be in docs/, we need to go up a dir
SELF_REF=".$0"

echo "$HEADER" >>"$INDEX_FILE"
echo "" >>"$INDEX_FILE"
echo "This is an [auto-generated]($SELF_REF) index of the readme files in our repository:" >>"$INDEX_FILE"
echo "" >>"$INDEX_FILE"

# generate markdown link like: [path/to/file/](../filepath)
# n.b. assuming the index file is inside docs directory, go up one level
for file in "${FILES[@]}"; do
    echo "- [$file](../$file)" >>"$INDEX_FILE"
done

echo "Finished generating: $INDEX_FILE"
