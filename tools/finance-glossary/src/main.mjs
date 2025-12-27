import { clearContainer } from "./utils.mjs";
import jsonArray from './glossary.json' with { type: 'json'};

//#region HTMLElements

const sidebar = document.querySelector('aside ul#tag-list')
const wordBlock = document.getElementById('word')
const definitionBlock = document.getElementById('definition')
const clearWordSelectionButton = document.getElementById('clear-word')
const searchInput = document.getElementById('word-input')
const suggestions = document.getElementById('suggestions')
const tagWordsContainer = document.getElementById('tag-words')
const wordListContainer = document.getElementById('word-list')
const wordFilter = document.getElementById('word-filter');

//#endregion

//#region setup
const asButtons = 'as-buttons'
const listAllTag = 'list-all'
const tagProp = 'data-tag'
const definitionIndex = new Map()

/** @type {Map<string, string[]} */
const tagsIndex = new Map()

for (const { word, definition, tagString } of jsonArray) {
    definitionIndex.set(word, definition)
    const tags = tagString.split(',')
    tags.forEach(tag => {
        if (!tagsIndex.has(tag)) {
            tagsIndex.set(tag, [])
        }

        const wordsForTag = tagsIndex.get(tag)
        wordsForTag.push(word)
    })

    addSuggestion(word)
}

addTagToSidebar(asButtons)
addTagToSidebar(listAllTag)
tagsIndex.forEach((_word, tag) => addTagToSidebar(tag))
clearWordSelectionButton.addEventListener('click', clearMain)
searchInput.addEventListener('keydown', handleSubmit)
wordFilter.addEventListener('input', handleFilterChange)
addAllWords()

//#endregion

//#region methods
function addAllWords() {
    addWordsAsList(getAllWords())
}

function handleFilterChange(event) {
    const search = event.target.value;
    const length = search.length;

    clearWordList();

    if (length === 0) {
        addAllWords()
        return
    }

    const normalized = search.toLowerCase();
    const includesNormalized = term => term.toLowerCase().includes(normalized)
    const wordsToAdd = [];

    for (const [word, def] of definitionIndex.entries()) {
        if (includesNormalized(def) || includesNormalized(word)) {
            wordsToAdd.push(word)
        }
    }

    addWordsAsList(wordsToAdd)
}

function handleSubmit(event) {
    if (event.key !== 'Enter') return;
    clearTagWordsContainer()
    const word = event.target.value;
    handleWordClick(word)
}

function addTagToSidebar(tag) {
    const listItem = document.createElement('li')
    const button = document.createElement('button')
    button.innerText = tag
    button.classList.add('link-style')
    button.addEventListener('click', (event) => {
        const tag = event.target.innerText;
        handleTagClick(tag)
    })

    listItem.appendChild(button)
    sidebar.appendChild(listItem)
}

function getAllWords() {
    return Array.from(definitionIndex.keys()).flat().sort();
}

function addWordsAsButtons(words) {
    words.forEach(word => {
        const button = document.createElement('button')
        button.innerText = word
        button.setAttribute('type', 'button')
        button.addEventListener('click', (event) => {
            const word = event.target.innerText;
            handleWordClick(word)
        });

        tagWordsContainer.appendChild(button)
    })
}

function addWordsAsList(words) {
    words.forEach(word => {
        const paragraph = document.createElement('p')
        const strong = document.createElement('strong')
        strong.innerText = word;
        paragraph.appendChild(strong)
        const spacer = document.createTextNode(': ')
        paragraph.appendChild(spacer)
        const definition = document.createTextNode(definitionIndex.get(word))
        paragraph.appendChild(definition)
        wordListContainer.appendChild(paragraph)
    })
}

function handleTagClick(tag) {
    clearMain()
    let wordsForTag;

    if (tag === asButtons || tag === listAllTag) {
        wordsForTag = getAllWords()
    } else {
        wordsForTag = tagsIndex.get(tag);
    }

    if (tag === asButtons) {
        addWordsAsButtons(wordsForTag)
    } else {
        addWordsAsList(wordsForTag)
    }
}

function addSuggestion(word) {
    const option = document.createElement('option')
    option.innerText = word;
    option.setAttribute('value', word)
    suggestions.appendChild(option)
}

function handleWordClick(word) {
    clearMain()
    const definition = definitionIndex.get(word)
    wordBlock.innerText = word
    definitionBlock.innerText = definition
}

function clearMain(_event) {
    clearWordBlock();
    clearDefinition();
    clearSearch();
    clearTagWordsContainer();
    clearWordList()
    clearWordFilter()
}

function clearWordBlock() {
    wordBlock.innerText = ''
}

function clearDefinition() {
    definitionBlock.innerText = ''
}

function clearSearch() {
    searchInput.value = ''
}

function clearWordList() {
    clearContainer(wordListContainer)
}

function clearWordFilter() {
    wordFilter.value = ''
}

function clearTagWordsContainer() {
    clearContainer(tagWordsContainer)
}

//#endregion
