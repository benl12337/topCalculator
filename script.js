function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}

function operate(op, a, b) {
    if (op == "+") {
        return add(a, b);
    } else if (op == "-") {
        return subtract(a, b);
    } else if (op == "x") {
        return multiply(a, b);
    } else if (op == "÷") {
        return divide(a, b);
    }
}

let enterSecondNumber = false;
let numberInputs = 0;
let inputNumber = "";
let operator = "";
let inputNumberTwo = "";
let result = "";
let inputHistory = "";

const calcDisplay = document.querySelector('#resultDisplay');
const resultDisplay = document.querySelector('#inputDisplay');

// loop through each button and add an event listener
const buttons = document.querySelectorAll(".calcButton");
buttons.forEach(button => {
    button.addEventListener('click', function() {
                if (!enterSecondNumber) {
                    inputNumber += this.innerText;
                    calcDisplay.innerText = inputNumber;
                } else {
                    inputNumberTwo += this.innerText;
                    calcDisplay.innerText = inputNumberTwo;
                }
                inputHistory += this.innerText;
    });
});

// loop through operator buttons 
const operatorButtons = document.querySelectorAll(".opButton");
operatorButtons.forEach(opButton => {
    opButton.addEventListener('click', function() {
        operator = this.innerText;
        enterSecondNumber = true;
        console.log(this.innerText);
        inputHistory += " " + this.innerText + " ";
        resultDisplay.innerText = inputHistory;
    });
});

// check if equals sign pressed
const equalButton = document.querySelector("#equalButton");
equalButton.addEventListener('click', function() {
    inputNumber = parseInt(inputNumber);
    inputNumberTwo = parseInt(inputNumberTwo);
    console.log(inputNumber, inputNumberTwo, operator);
    result = operate(operator, inputNumber, inputNumberTwo);
    resultFound = true;
    inputNumberTwo = "";
    inputNumber = result;
    calcDisplay.innerText = result;
    resultDisplay.innerText = inputHistory;
    console.log(inputHistory);
});

// clear all the results and reset variables
const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener('click', function() {
    inputNumber = "";
    inputNumberTwo = "";
    operator = "";
    result = "";
    enterSecondNumber = false;
    calcDisplay.innerText = "";
    inputHistory = "";
    resultDisplay.innerText = "";
});