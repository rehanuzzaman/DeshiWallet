function getInputValueByID() {
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(amount);
    return convertedValue;
}

function getElementById(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}