#!/usr/bin/awk -f

BEGIN {
    dQuote = "\""
    indent = "  "
}
/^# / {
    word = substr($0, 3)
}
/^## Definition/ {
    while (getline && $0 == "") {}
    # Escape latex sentinels - must come first to avoid catching quote escapes
    gsub(/\\/, "\\\\", $0)
    # Escape double quotes
    gsub(/"/, "\\\"", $0)
    def = $0
}
/^## Tags/ {
    while (getline && $0 == "") {}
    tags = $0
}
END {
    print "{"
    print print_json_key("word") double_quote(word) ","
    print print_json_key("definition") double_quote(def) ","
    print print_json_key("tagString") double_quote(tags)
    print "},"
}

function double_quote(text) {
    return dQuote text dQuote
}

function print_json_key(key) {
    return indent double_quote(key) ": "
}