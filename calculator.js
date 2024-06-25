function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

let firstNum = "";
let operator = "";
let secondNum = "";

function operate(a, op, b){
    if (op === "+"){
        return add(a,b);
    } else if (op === "-"){
        return subtract(a,b);
    } else if (op === "*"){
        return multiply(a,b);
    } else if (op === "/"){
        return divide(a,b);
    }
}

const display = document.getElementById("display");

let displayValue = ""; 

function updateDisplay(val){
    let div = document.createElement("div");
    div.textContent = val;
    display.appendChild(div);
    displayValue += val;
}

let buttonsArray = document.querySelectorAll(".num");
buttonsArray.forEach((button) => {
    button.addEventListener("click", () => {
        updateDisplay(button.textContent);
    });
});


const BtnDec = document.getElementById(".");
BtnDec.addEventListener("click", () => {
    updateDisplay(".");
});

function clear(){
    while (display.hasChildNodes){
        display.removeChild(display.lastChild);
    }
    displayValue = "";
    firstNum = "";
    operator = "";
    secondNum = "";
}

const AC = document.getElementById("AC");
AC.addEventListener("click", clear);

const BtnAdd = document.getElementById("+");
BtnAdd.addEventListener("click", () => {
    
});

const BtnEq = document.getElementById("=");
BtnEq.addEventListener("click", () => {

});


