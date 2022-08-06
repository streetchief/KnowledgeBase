#!/usr/bin/env bash

set -eox pipefail

echo 'foo'
file='index.html';

for FILE in *; 
    do echo -e "$FILE\nLoops Rule\!" > $FILE; 
    cat $FILE; 
done