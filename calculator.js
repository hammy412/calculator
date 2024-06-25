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

let firstNum;
let operator;
let secondNum;

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

const Btn7 = document.getElementById("7");
Btn7.addEventListener("click", () => {
    let div = document.createElement("div");
    div.textContent = "7";
    display.appendChild(div);
    displayValue += "7";
});

const Btn8 = document.getElementById("8");
Btn8.addEventListener("click", () => {
    let div = document.createElement("div");
    div.textContent = "8";
    display.appendChild(div);
    displayValue += "8";
});

const Btn9 = document.getElementById("9");
Btn9.addEventListener("click", () => {
    let div = document.createElement("div");
    div.textContent = "9";
    display.appendChild(div);
    displayValue += "9";
});

const Btn4 = document.getElementById("4");
Btn4.addEventListener("click", () => {
    let div = document.createElement("div");
    div.textContent = "4";
    display.appendChild(div);
    displayValue += "4";
});

const Btn5 = document.getElementById("5");
Btn5.addEventListener("click", () => {
    let div = document.createElement("div");
    div.textContent = "5";
    display.appendChild(div);
    displayValue += "5";
});

const Btn6 = document.getElementById("6");
Btn6.addEventListener("click", () => {
    let div = document.createElement("div");
    div.textContent = "6";
    display.appendChild(div);
    displayValue += "6";
});

const Btn1 = document.getElementById("1");
Btn1.addEventListener("click", () => {
    let div = document.createElement("div");
    div.textContent = "1";
    display.appendChild(div);
    displayValue += "1";
});

const Btn2 = document.getElementById("2");
Btn2.addEventListener("click", () => {
    let div = document.createElement("div");
    div.textContent = "2";
    display.appendChild(div);
    displayValue += "2";
});

const Btn3 = document.getElementById("3");
Btn3.addEventListener("click", () => {
    let div = document.createElement("div");
    div.textContent = "3";
    display.appendChild(div);
    displayValue += "3";
});


