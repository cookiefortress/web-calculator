console.log("Script loaded");

let display = document.querySelector("#display");

let x = "";
let y = "";
let oper = "";

const maxLength = 13;

// Create an array of buttons for each digit 0-9
// Listen to the buttons to get values
const digits = Array.from(document.querySelectorAll(".digit"));
for (let digit of digits) {
    digit.addEventListener("click", () => {
        if (!oper) {
            x += digit.textContent;
            display.textContent = x;
            if (display.textContent.length > maxLength) {
                display.textContent = display.textContent.slice(0, maxLength);
            }
        }
        else if (oper) {
            y += digit.textContent;
            display.textContent = x + oper + y;
        }
    });
}

// Determines the value of oper depending on which button the user presses.
// Displays it on the display
const operators = Array.from(document.querySelectorAll(".operator"));
for (let operator of operators) {
    if (x == NaN) {
        clearCalc();
    }
    operator.addEventListener("click", () => {
        if (display.textContent.includes("+") || display.textContent.includes("-") ||
        display.textContent.includes("x") || display.textContent.includes("/")) {
            x = operate(parseInt(x), parseInt(y), oper);
            display.textContent = x;
            y = "";
        }
        else if (y !== "") {
            y = "";
        }
        oper = operator.textContent;
        console.log(oper);
        display.textContent += oper;
    });
}

let equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    x = operate(parseInt(x), parseInt(y), oper);
    if (x !== "x / 0 error") x = Math.round(x * 100) / 100;
    display.textContent = x;
    if (x == "x / 0 error") {
        x = "";
        y = "";
        oper = "";
    }
});

function operate(x, y, oper) {
    switch (oper) {
        case "+":
            x = x + y;
            return x;
        case "-":
            x = x - y;
            return x;
        case "x":
            x = x * y;
            return x;
        case "/":
            if (y == 0) {
                return "x / 0 error";
            }
            x = x / y;
            return x;
        default:
            console.log("Insufficient operands");
    }
}

let clear = document.querySelector(".clear");
clear.addEventListener("click", clearCalc);

function clearCalc() {
    x = "";
    y = "";
    oper = "";
    display.textContent = "";
}