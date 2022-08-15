const calc = [];
let display = "";

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const cl = document.querySelector("#clear");

const input = document.querySelector("input");

one.addEventListener("click", () => {
    calc.push(1);
    display += "1";
    input.value = display;
});

two.addEventListener("click", () => {
    calc.push(2);
    display += "2";
    input.value = display;
});

three.addEventListener("click", () => {
    calc.push(3);
    display += "3";
    input.value = display;
});

four.addEventListener("click", () => {
    calc.push(4);
    display += "4";
    input.value = display;
});

five.addEventListener("click", () => {
    calc.push(5);
    display += "5";
    input.value = display;
});

six.addEventListener("click", () => {
    calc.push(6);
    display += "6";
    input.value = display;
});

seven.addEventListener("click", () => {
    calc.push(7);
    display += "7";
    input.value = display;
});

eight.addEventListener("click", () => {
    calc.push(8);
    display += "8";
    input.value = display;
});

nine.addEventListener("click", () => {
    calc.push(9);
    display += "9";
    input.value = display;
});

zero.addEventListener("click", () => {
    if (calc.length > 0){
        calc.push(0);
        display += "0";
        input.value = display;
    }
});

cl.addEventListener("click", () => {
    display = "";
    while(calc.length > 0){
        calc.pop();
    }
    input.value = display;
});