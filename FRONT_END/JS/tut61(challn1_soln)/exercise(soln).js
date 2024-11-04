//  create a faulty calculator  using js
//  this faulty calculator does following
//  1.It takes two numbers as input from the User
//  2. It performs wrong operation as follows:-

//  +  ----> -
//  *  -----> +
//  -   -----> /
//  /  ------>  **

//  It performs wrong operation 10% of the Times 
 
// ## This is written by code with Harry
// let random=Math.random()
// let a=prompt("Enter first number")
// let b=prompt("Enter second number")
// let c=prompt("Enter the operation to perform")
// let obj={
//     "+":"-",
//     "*":"+",
//     "-":"/",
//     "/":"**"


// }
// if (random>0.1) //Then perform correct operation//
//     {
//       alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
//     }
// else{  //Then perform faulty operations
//     c=obj[c]
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

// }

// This is written by gpt
let random = Math.random();
let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
let c = prompt("Enter the operation to perform");

// Validate if the operation is one of the supported arithmetic operators
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
};

if (random > 0.1) {
    // Perform the correct operation
    alert('The result is ' + eval(a + ' ' + c + ' ' + b));
} else {
    // Perform the faulty operation
    if (obj[c]) {
        c = obj[c];
        alert('The result is ' + eval(a + ' ' + c + ' '+ b));
    } else {
        alert('Invalid operation entered.');
    }
}
