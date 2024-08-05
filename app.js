"use strict";


//function desperation
const sumOfAandB = calc(10,5);
console.log(sumOfAandB);

function cals(a,b) {
    return a  + b;
}


//function experation
const logger = function () {
    console.log("Hellow world");
};
logger();



// arrow function
const calc = (a, b) => a + b;

console.log(calc(10, 5));

const calc = (a) => {
    console.log("!");
    return a;
};