// FUNCTIONID TEHTE POHISED
// +-*/ ONCLICK TAKE FIRST VALUE FROM DIV INNERHTML
// ADD +-*/ TO CALCULATOR SCREEN
// USER ENTERS SECOND VALUE
// UPON ANS OR NEW +-*/ CLICK ADD ANSWER TO ANSWER ROW ON CALCULATOR
// CLEAR CALCULATION ROW

// FURHTER USE CLEAR ANSWER ROW
// IF PRESS ANS USE PREVIOUS ANSWER FOR NEW CALCULATION
// ELSE ADD NEW NUMBER INPUT TO CALCULATION ROW

const calculationRow = document.querySelector("#answer-row");
const answerRow = document.querySelector("#calculation-row");

let hasBeenOperated = false;

let operatorToUse = "";

let previousNumber = 0;

// CLEAR BUTTON
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", event =>{
    hasBeenOperated = false;
    previousOperator = "";
    calculationRow.textContent="";
    answerRow.textContent="";
    operatorToUse = ""
    previousNumber = 0;
});

// MAKE NUMBERS APPEAR ON CALCULATOR SCREEN
const numberButton = document.querySelectorAll(".number-button");
numberButton.forEach( el => el.addEventListener("click", event =>{
    let contentToAdd = event.target.textContent;
    let currentContent = calculationRow.textContent;
    let newContent = currentContent.concat(contentToAdd);
    calculationRow.textContent = newContent;
}));

// +-/= CALL OPERATE FUNCTION
const calculationButton = document.querySelectorAll(".calculation-button");
calculationButton.forEach(el => el.addEventListener("click", event =>{
    let currentOperator = event.target.textContent;
    operate(currentOperator);
}));
const answerButton = document.querySelector("#answer");
answerButton.addEventListener("click", event =>{
    let currentOperator = event.target.textContent;
    operate(currentOperator);
});

function operate(operator){
    if(hasBeenOperated){
        let currentNumber = calculationRow.textContent;
        if(operatorToUse == "+"){
            add(currentNumber);
            operatorToUse = operator;
            addOperator(operator);
        } else if(operatorToUse == "-"){
            divide(currentNumber);
            operatorToUse = operator;
            addOperator(operator);
        } else if( operatorToUse == "x"){
            multiply(currentNumber);
            operatorToUse = operator;
            addOperator(operator);
        } else if( operatorToUse == "/"){
            divide(currentNumber);
            operatorToUse = operator;
            addOperator(operator);
        }
    }else{
        let addToAnswerRow = calculationRow.textContent.concat(operator); 
        answerRow.textContent = answerRow.textContent.concat(addToAnswerRow);
        previousNumber = calculationRow.textContent;
        calculationRow.textContent = "";
        operatorToUse = operator;
        hasBeenOperated = true;
    };
};
// ADD OPERATOR AFTER CALCULATION DONE WHEN NEEDED AND CLEAR ROW
function addOperator(operator){
    if(operator =="="){
        calculationRow.textContent = "";
    } else{
        answerRow.textContent = answerRow.textContent.concat(operator);
        calculationRow.textContent = "";
    }
}
// MAIN CALCULATION FUNCTIONS
function add(a){
    let n1 = parseInt(previousNumber);
    let n2 = parseInt(a);
    let answer = n1 + n2;
    answerRow.textContent = answerRow.textContent = answer;
    previousNumber = answer;
};
function subtract(a){
    let n1 = parseInt(previousNumber);
    let n2 = parseInt(a);
    let answer = n1 - n2;
    answerRow.textContent = answerRow.textContent = answer;
    previousNumber = answer;
};
function multiply(a){
    let n1 = parseInt(previousNumber);
    let n2 = parseInt(a);
    let answer = n1 * n2;
    answerRow.textContent = answerRow.textContent = answer;
    previousNumber = answer;
};
function divide(a){
    let n1 = parseInt(previousNumber);
    let n2 = parseInt(a);
    let answer = n1 / n2;
    answerRow.textContent = answerRow.textContent = answer;
    previousNumber = answer;
};

// DISABLE CALC BUTTONS

// ENABLE CALC BUTTONS