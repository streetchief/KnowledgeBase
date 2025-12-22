import { readdir } from "node:fs/promises";

// FIXME: exclude folders
const files = await readdir('./knowledge', { withFileTypes: true });
let maxLength = 0;

const categories = files.reduce((store, entry) => {
    const { name } = entry
    const isReadme = name === 'README.md';
    const isDirectory = entry.isDirectory()
    if (isReadme || isDirectory) return store

    const category = name.split('-')?.[0]
    maxLength = Math.max(maxLength, category.length)

    if (!store.has(category)) {
        const pretty = category[0].toUpperCase() + category.substring(1)
        store.set(category, pretty)
    }

    return store
}, new Map());

console.log(
    `Categories
${''.padStart(maxLength, '-')}
${Array.from(categories.values())
        .sort()
        .join('\n')}
`)
