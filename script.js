console.log("Script loaded");

let numOne = 0;
let numTwo = 0;
let operator = "";

let display = document.querySelector("#display");

let one = document.querySelector("#one");
one.addEventListener("click", () => {
    if (display.textContent.includes(operator)) numTwo += 1;
    else numOne += 1;
});

let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");

let plus = document.querySelector("#plus");
let subtract = document.querySelector("#subtract");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");

let equals = document.querySelector("#equalsButton");
equals.addEventListener("click", () => {
    operate(operator, numOne, numTwo);
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
function operate(operator, a, b) {
    switch(operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            minus(a, b);
            break;
        case "x":
            times(a, b);
            break;
        case "/":
            division(a, b);
            break;
        default:
            console.log("No operands provided");
    }
}