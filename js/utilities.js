function getInputValue(inputId) {
    const inputField = document.getElementById(inputId)
    const inputValueString = inputField.value
    const inputValue = parseFloat(inputValueString)
    inputField.value = ''
    return inputValue
}

function getElementValue(elementId) {
    const elementField = document.getElementById(elementId)
    const elementValueString = elementField.innerText
    const elementValue = parseFloat(elementValueString)
    return elementValue
}



function setElementById(elementId, newValue) {
    const textElementName = document.getElementById(elementId)

    textElementName.innerText = newValue

}