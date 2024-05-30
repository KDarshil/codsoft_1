let decimalAdded = false;

function appendValue(value) {
    if (value === '.') {
        if (decimalAdded) {
            return;
        }
        decimalAdded = true;
    }
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    decimalAdded = false;
}

function calculate() {
    let displayValue = document.getElementById('display').value;
    if (displayValue === '') {
        return;
    }
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        decimalAdded = false;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        decimalAdded = false;
    }
}
