const calculationRow = document.querySelector("#answer-row");
const answerRow = document.querySelector("#calculations");
const screenOperator = document.querySelector("#calculation-operator");


let hasBeenOperated = false;
let currentOperator = null;
let firstNumber = "";
let secondNumber = "";


// CLEAR BUTTON
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", event => {
    calculationRow.innerText = "";
    answerRow.innerText = "";
    screenOperator.innerText = "";
    currentOperator = null;
    firstNumber = "";
    secondNumber = "";
});

// MAKE NUMBERS APPEAR ON CALCULATOR SCREEN
const numberButton = document.querySelectorAll(".number-button");
numberButton.forEach(el => el.addEventListener("click", event => {
    let contentToAdd = event.target.innerText;
    let currentContent = calculationRow.innerText;
    let newContent = currentContent.concat(contentToAdd);
    calculationRow.innerText = newContent;
}));


// +-/= CALL OPERATE FUNCTION
const calculationButton = document.querySelectorAll(".calculation-button");
calculationButton.forEach(el => el.addEventListener("click", event => {
    let operator = event.target.innerText;
    operatorUsed(operator);
}));

const answerButton = document.querySelector("#answer");
answerButton.addEventListener("click", event =>{
    let operator = event.target.innerText;
    operatorUsed(operator);
});

// WHAT HAPPENS WHEN AN OPERATOR IS CLICKED
function operatorUsed(operator) {
    secondNumber = calculationRow.innerText;
    let operateWith = screenOperator.innerText;
// BLOCK INPUTS ON EMPTY CALCULATOR
    if(firstNumber == "" && secondNumber == ""){
        return;
// FIRST NUMBER INPUT
    } else if (firstNumber == "") {
        firstNumber = calculationRow.innerText;
        answerRow.innerText = firstNumber;
        calculationRow.innerText = "";
        if(operator !== "="){
            screenOperator.innerText = operator;
        };
// CHANGE OPERATOR WHEN NO SECOND NUMBER ENTERED
    } else if (secondNumber == "") {
        if(operator !== "="){
            screenOperator.innerText = operator;
        };
// CALCULATE WHEN BOTH NUMBERS AND OPERATOR EXISTS
    } else if (operateWith !=="") {
        firstNumber = answerRow.innerText;
        let answer = operate(firstNumber, secondNumber, operateWith);
        answerRow.innerText = answer;
        calculationRow.innerText = "";
        if(operator == "="){
            screenOperator.innerText = "";
        } else {
            screenOperator.innerText = operator;
        }
    }
};

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
            break;

        case "-":
            return subtract(a, b);
            break;

        case "/":
            return divide(a, b);
            break;

        case "x":
            return multiply(a, b);
            break;
    }
}
// ADD OPERATOR AFTER CALCULATION DONE WHEN NEEDED AND CLEAR ROW


// MAIN CALCULATION FUNCTIONS
function add(a, b) {
    let n1 = parseFloat(a);
    let n2 = parseFloat(b);
    let answer = n1 + n2;
    return answer;
};
function subtract(a, b) {
    let n1 = parseFloat(a);
    let n2 = parseFloat(b);
    let answer = n1 - n2;
    return answer;
};
function multiply(a, b) {
    let n1 = parseFloat(a);
    let n2 = parseFloat(b);
    let answer = n1 * n2;
    return answer;
};
function divide(a, b) {
    let n1 = parseFloat(a);
    let n2 = parseFloat(b);
    let answer = n1 / n2;
    return answer;
};

// CHECK IF CALC BUTTON IS CURRENTLY ACTIVE
// DISABLE CALC BUTTONS
// ENABLE CALC BUTTONS


