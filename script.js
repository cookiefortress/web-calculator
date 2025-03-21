console.log("Script loaded");

let operator = "";
let numContainer = "";
let num = "";


let display = document.querySelector("#display");

let one = document.querySelector("#one");
one.addEventListener("click", () => {
    num += "1";
    display.textContent = num;
});
let two = document.querySelector("#two");
two.addEventListener("click", () => {
    num += "2";
    display.textContent = num;
});
let three = document.querySelector("#three");
three.addEventListener("click", () => {
    num += "3";
    display.textContent = num;
});
let four = document.querySelector("#four");
four.addEventListener("click", () => {
    num += "4";
    display.textContent = num;
});
let five = document.querySelector("#five");
five.addEventListener("click", () => {
    num += "5";
    display.textContent = num;
});
let six = document.querySelector("#six");
six.addEventListener("click", () => {
    num += "6";
    display.textContent = num;
});
let seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    num += "7";
    display.textContent = num;
});
let eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    num += "8";
    display.textContent = num;
});
let nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    num += "9";
    display.textContent = num;
});
let zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
    num += "0";
    display.textContent = num;
});

let plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
    operator = "+";
    numContainer = num;
    num = "";
    display.textContent = operator;
});
let subtract = document.querySelector("#subtract");
subtract.addEventListener("click", () => {
    operator = "-";
    numContainer = num;
    num = "";
    display.textContent = operator;
});
let multiply = document.querySelector("#multiply");
multiply.addEventListener("click", () => {
    operator = "x";
    numContainer = num;
    num = "";
    display.textContent = operator;
});
let divide = document.querySelector("#divide");
divide.addEventListener("click", () => {
    operator = "/";
    numContainer = num;
    num = "";
    display.textContent = operator;
});



let equals = document.querySelector("#equalsButton");
equals.addEventListener("click", () => {
    num = operate(operator, parseInt(numContainer), parseInt(num));
    display.textContent = num;
    operator = "";
    numContainer = num;
    num = "";
    if (num == "ERROR") {
        num = "";
    }
});

let clear = document.querySelector("#clearButton");
clear.addEventListener("click", () => {
    num = "";
    numContainer = "";
    operator = "";
    display.textContent = num;
});


function add(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function times(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}
function operate(oper, a, b) {
    switch(oper) {
        case "+":
            return add(a, b);
        case "-":
            return minus(a, b);
        case "x":
            return times(a, b);
        case "/":
            if (b == 0) {
                console.log("Divide by 0 error");
                display.textcontent = "ERROR";
                return "ERROR";
            }
            return division(a, b);
        case "":
            console.log("No operands provided");
            num = "";
            numContainer = "";
            operator = "";
            display.textContent = num;
            return "";
        default:
            console.log("No operands provided");
            num = "";
            numContainer = "";
            operator = "";
            display.textContent = num;
    }
}