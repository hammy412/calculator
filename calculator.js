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

const Btn_7 = document.getElementById("7");
Btn_7.addEventListener("click", () => {
    let div = document.createElement("div");
    div.textContent = "7";
    display.appendChild(div);
});