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


const numberButton = document.querySelectorAll(".number-button")
numberButton.forEach( el => el.addEventListener("click", event =>{
    let contentToAdd = event.target.textContent;
    let currentContent = calculationRow.textContent;
    let newContent = currentContent.concat(contentToAdd);
    calculationRow.textContent = newContent;
}));
