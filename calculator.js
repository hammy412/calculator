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

let previousValue = "";
let operator = "";
let currentValue = "";

let error = false;

function operate(a, op, b){
    a = parseFloat(a);
    b = parseFloat(b);
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

let clear = document.getElementById("AC");
let equal = document.getElementById("=");
let decimal = document.getElementById(".");
let del = document.getElementById("delete");

let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");

let currentDisplay = document.getElementById("current");
let previousDisplay = document.getElementById("previous");

numbers.forEach((number) => number.addEventListener("click", () => {
    handleNumber(number.textContent);
    currentDisplay.textContent = currentValue;
}));

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (currentValue === ""){
            return;
        }
        handleOperator(operator.textContent);
        if (error){
            error = false;
            return;
        }
        previousDisplay.textContent = previousValue + " " + operator.textContent;
        currentDisplay.textContent = currentValue;
    });
});

clear.addEventListener("click", () => {
    previousValue = "";
    currentValue = "";
    operator = "";
    currentDisplay.textContent = "";
    previousDisplay.textContent = "";
});

equal.addEventListener("click", () => {
    if (previousValue === "" || currentValue === ""){
        return;
    }
    handleEqual();
    if (error){
        error = false;
        return;
    }
    previousDisplay.textContent = "";
    currentDisplay.textContent = currentValue;
});

decimal.addEventListener("click", () => {
    handleDecimal();
    currentDisplay.textContent = currentValue;
});


del.addEventListener("click", () => {
    handleDelete();
    currentDisplay.textContent = currentValue;
    console.log(currentValue);
});

function handleNumber(num){
    if (currentValue.length < 15){
        currentValue += num;
    }
}

function handleOperator(op){
    if (previousValue === ""){
        operator = op;
        previousValue = currentValue;
        currentValue = "";
    } else {
        let result = operate(previousValue, operator, currentValue);
        if (handleError(result)){
            error = true;
            return;
        }
        result = round(result);
        operator = op;
        previousValue = result;
        currentValue = "";
    }
}

function handleEqual(){
    let result = operate(previousValue, operator, currentValue);
    if (handleError(result)){
        error = true;
        return;
    }
    result = round(result);
    currentValue = result.toString();
    previousValue = "";
}

function round(num){
    return Math.round(num * 1000) / 1000;
}

function handleDecimal(){
    if (!currentValue.includes(".")){
        currentValue += ".";
    }
}

function handleError(num){
    if (isNaN(num) || num === Infinity){
        previousValue = "";
        currentValue = "";
        operator = "";
        previousDisplay.textContent = "";
        currentDisplay.textContent = "Error";
        return true;
    }
    return false; 
}

function handleDelete(){
    if (currentValue !== ""){
        currentValue = currentValue.slice(0, -1);
    }
}





