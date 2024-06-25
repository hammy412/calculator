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
    if (op === '+'){
        return add(a,b);
    } else if (op === '-'){
        return subtract(a,b);
    } else if (op === '*'){
        return multiply(a,b);
    } else if (op === '/'){
        return divide(a,b);
    }
}

const display = document.getElementById("display");

let displayValue; 

function updateDisplay(val){
    let div = document.createElement("div");
    div.textContent = val;
    display.appendChild(div);
    displayValue += val;
}

const Btn7 = document.getElementById("7");
Btn7.addEventListener("click", () => {
    updateDisplay("7");
});

const Btn8 = document.getElementById("8");
Btn8.addEventListener("click", () => {
    updateDisplay("8");
});

const Btn9 = document.getElementById("9");
Btn9.addEventListener("click", () => {
    updateDisplay("9");
});

const Btn4 = document.getElementById("4");
Btn4.addEventListener("click", () => {
    updateDisplay("4");
});

const Btn5 = document.getElementById("5");
Btn5.addEventListener("click", () => {
    updateDisplay("5");
});

const Btn6 = document.getElementById("6");
Btn6.addEventListener("click", () => {
    updateDisplay("6");
});

const Btn1 = document.getElementById("1");
Btn1.addEventListener("click", () => {
    updateDisplay("1");
});

const Btn2 = document.getElementById("2");
Btn2.addEventListener("click", () => {
    updateDisplay("2");
});

const Btn3 = document.getElementById("3");
Btn3.addEventListener("click", () => {
    updateDisplay("3");
});

const Btn0 = document.getElementById("0");
Btn0.addEventListener("click", () => {
    updateDisplay("0");
});

const BtnDec = document.getElementById(".");
BtnDec.addEventListener("click", () => {
    updateDisplay(".");
});

function clearDisplay(){
    while (display.hasChildNodes){
        display.removeChild(display.lastChild);
    }
    displayValue = "";
}

const AC = document.getElementById("AC");
AC.addEventListener("click", clearDisplay);

const BtnAdd = document.getElementById("+");
BtnAdd.addEventListener("click", () => {
    if (firstNum === ""){
        firstNum = parseFloat(displayValue);
        operator = "+";
    } else {
        operate(firstNum, operator, displayValue)
    }
    
});

const BtnEq = document.getElementById("=");
BtnEq.addEventListener("click", () => {
    secondNum = displayValue;
    

});


