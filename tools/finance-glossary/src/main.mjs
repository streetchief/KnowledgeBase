import { clearContainer } from "./utils.mjs";
import jsonArray from '../glossary.json' with { type: 'json'};

//#region HTMLElements

const sidebar = document.querySelector('aside ul#word-list')
const wordBlock = document.getElementById('word')
const definitionBlock = document.getElementById('definition')
const clearWordSelectionButton = document.getElementById('clear-word')
const searchInput = document.getElementById('word-input')
const suggestions = document.getElementById('suggestions')
const tagWordsContainer = document.getElementById('tag-words')

//#endregion

//#region setup
const tagProp = 'data-tag'
const definitionIndex = new Map()
const tagsIndex = new Map()
let selectedTag;

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

tagsIndex.forEach((word, tag) => addTagToSidebar(tag))
clearWordSelectionButton.addEventListener('click', clearMain)
searchInput.addEventListener('keydown', handleSubmit)

//#endregion

//#region methods

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

function handleTagClick(tag) {
    clearMain()
    selectedTag = tag;
    const wordsForTag = tagsIndex.get(tag)

    wordsForTag.forEach(word => {
        const button = document.createElement('button')
        button.innerText = word
        button.classList.add('link-style')
        button.addEventListener('click', (event) => {
            const word = event.target.innerText;
            handleWordClick(word)
        });

        tagWordsContainer.appendChild(button)
    })
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
    clearTagWordsContainer()
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

function clearTagWordsContainer() {
    clearContainer(tagWordsContainer)
}

//#endregion
