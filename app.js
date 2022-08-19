//Utilities
const calc = [];
let display = "";
let decimal = false;
// selecting elements
//Numbers
const numObj = {
    one:  document.querySelector("#one"),
    two: document.querySelector("#two"),
    three: document.querySelector("#three"),
    four: document.querySelector("#four"),
    five: document.querySelector("#five"),
    six: document.querySelector("#six"),
    seven: document.querySelector("#seven"),
    eight: document.querySelector("#eight"),
    nine: document.querySelector("#nine"),
    zero: document.querySelector("#zero")
};
const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

//Operations
const operationObj = {
    mul: document.querySelector("#multiply"),
    div: document.querySelector("#divide"),
    add: document.querySelector("#add"),
    sub: document.querySelector("#subtract"),
    modu: document.querySelector("#modulo")
};
const operation = ["mul", "div", "add", "sub", "modu"];
const sign = ["*", "/", "+", "-", "%"];

//Other functions
const cl = document.querySelector("#clear");
const equal = document.querySelector("#equal");
const del = document.querySelector("#delete");
const input = document.querySelector("input");
const dec = document.querySelector("#decimal");

console.log(cl);

// Adding events to elements
//Numbers
for (let i = 0; i <= 9; i++){
    numObj[num[i]].addEventListener("click", () => {
        if (display === "*" || 
                display === "/" || 
                    display === "+" || 
                        display === "-" || 
                            display === "%"){
            display = "";
        }
        if (i == 0){
            if (calc.length > 0){
                display += "0";
                input.value = display;
                }
        }
        else {
            display += i;
            input.value = display;
        }
    });
}

//Operations
for (let i = 0; i < 5; i++){
    operationObj[operation[i]].addEventListener("click", () => {
        if (calc.length === 0){
            calc.push(parseFloat(display));
            calc.push(sign[i]);
        }
        else if (calc[calc.length - 1] === "/" ||
                     calc[calc.length - 1] === "*" || 
                        calc[calc.length - 1] === "-" ||
                            calc[calc.length - 1] === "+" ||
                                calc[calc.length - 1] === "%"){
                                    calc.pop();
                                    calc.push(sign[i]);
        }
        display = sign[i];
        decimal = false;
        input.value = display;
        display = "";
    });
}

//Other features
cl.addEventListener("click", () => {
    display = "";
    while(calc.length > 0){
        calc.pop();
    }
    input.value = "";
    decimal = false;
});

dec.addEventListener("click", () => {
    if (!decimal){
        display = display + ".";
        input.value = display;
        decimal = true;
    }
});

del.addEventListener("click", () => {
    if (display.length != 0){
        if (display[display.length - 1] == "."){
            decimal = false;
        }
        display = display.slice(0, display.length - 1);
        input.value = display;
    }
    else if(calc.length === 0) {
        input.value = "";
    }
})


equal.addEventListener("click", () => {
    if (calc.length != 0){
        let num2 = parseFloat(display);
        let ope = calc[calc.length - 1];
        calc.pop();
        let num1 = calc[calc.length - 1];
        calc.pop();
        
        switch (ope){
            case "*": display = (num1 * num2);
                        break;
            case "+": display = (num1 + num2);
                        break;
            case "-": display = (num1 - num2);
                        break;
            case "/":   if (num2 === 0){
                            display = "Error"
                        }
                        else{
                            display = ((num1 / num2).toFixed(3));
                        }
                        break;
            case "%": if (num2 === 0){
                        display = "Error"
                      }
                      else{
                          display = (num1 % num2).toFixed(3);
                      }
        }
        input.value = display;
        display = "";
    }
    else {
        number = 0;
        display = "";
        input.value = "Error";
    }
    decimal = false;
});


// Old code (note: - code is redesigned to keep it short)
// one.addEventListener("click", () => {
//     calc.push(1);
//     display += "1";
//     input.value = display;
// });

// two.addEventListener("click", () => {
//     calc.push(2);
//     display += "2";
//     input.value = display;
// });

// three.addEventListener("click", () => {
//     calc.push(3);
//     display += "3";
//     input.value = display;
// });

// four.addEventListener("click", () => {
//     calc.push(4);
//     display += "4";
//     input.value = display;
// });

// five.addEventListener("click", () => {
//     calc.push(5);
//     display += "5";
//     input.value = display;
// });

// six.addEventListener("click", () => {
//     calc.push(6);
//     display += "6";
//     input.value = display;
// });

// seven.addEventListener("click", () => {
//     calc.push(7);
//     display += "7";
//     input.value = display;
// });

// eight.addEventListener("click", () => {
//     calc.push(8);
//     display += "8";
//     input.value = display;
// });

// nine.addEventListener("click", () => {
//     calc.push(9);
//     display += "9";
//     input.value = display;
// });

// zero.addEventListener("click", () => {
//     if (calc.length > 0){
//         calc.push(0);
//         display += "0";
//         input.value = display;
//     }
// });

// mul.addEventListener("click", () => {
//     display = "*";
//     if (calc[calc.length - 1] === "*" || 
//             calc[calc.length - 1] === "/" || 
//                 calc[calc.length - 1] === "+" ||
//                     calc[calc.length - 1] === "-" ||
//                         calc[calc.length - 1] === "%"){
//                             calc.pop();
//                         }
//     if (calc.length === 0){
//         calc.push(0);
//     }
//     calc.push("*");
//     input.value = display;
// });


// mul.addEventListener("click", () => {
//     display = "*";
//     if (calc[calc.length - 1] === "*" || 
//             calc[calc.length - 1] === "/" || 
//                 calc[calc.length - 1] === "+" ||
//                     calc[calc.length - 1] === "-" ||
//                         calc[calc.length - 1] === "%"){
//                             calc.pop();
//                         }
//     if (calc.length === 0){
//         calc.push(0);
//     }
//     calc.push("*");
//     input.value = display;
// });

// div.addEventListener("click", () => {
//     display = "/";
//     if (calc[calc.length - 1] === "*" || 
//             calc[calc.length - 1] === "/" || 
//                 calc[calc.length - 1] === "+" ||
//                     calc[calc.length - 1] === "-" ||
//                         calc[calc.length - 1] === "%"){
//                             calc.pop();
//                         }
//     if (calc.length === 0){
//         calc.push(0);
//     }
//     calc.push("/");
//     input.value = display;
// });

// add.addEventListener("click", () => {
//     display = "+";
//     if (calc[calc.length - 1] === "*" || 
//             calc[calc.length - 1] === "/" || 
//                 calc[calc.length - 1] === "+" ||
//                     calc[calc.length - 1] === "-" ||
//                         calc[calc.length - 1] === "%"){
//                             calc.pop();
//                         }
//     if (calc.length === 0){
//         calc.push(0);
//     }
//     calc.push("+");
//     input.value = display;
// });

// sub.addEventListener("click", () => {
//     display = "-";
//     if (calc[calc.length - 1] === "*" || 
//             calc[calc.length - 1] === "/" || 
//                 calc[calc.length - 1] === "+" ||
//                     calc[calc.length - 1] === "-" ||
//                         calc[calc.length - 1] === "%"){
//                             calc.pop();
//                         }
//     if (calc.length === 0){
//         calc.push(0);
//     }
//     calc.push("-");
//     input.value = display;
// });

// modu.addEventListener("click", () => {
//     display = "%";
//     if (calc[calc.length - 1] === "*" || 
//             calc[calc.length - 1] === "/" || 
//                 calc[calc.length - 1] === "+" ||
//                     calc[calc.length - 1] === "-" ||
//                         calc[calc.length - 1] === "%"){
//                             calc.pop();
//                         }
//     if (calc.length === 0){
//         calc.push(0);
//     }
//     calc.push("%");
//     input.value = display;
// });