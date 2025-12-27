function clearContainer(element) {
    while (element.lastChild) {
        element.removeChild(element.lastChild);
    }
}

export {
    clearContainer,
}