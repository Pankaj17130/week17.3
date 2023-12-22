// 04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
// them values and log their values to the console before and after they are declared to demonstrate variable
// hoisting.

console.log(firstvariable); // undefined
console.log(secondvariable); // undefined
console.log(thirdvariable); // ReferenceError: Cannot access 'thirdvariable' before initialization

let firstvariable = "pankaj";
var secondvariable = "kumar";
const thirdvariable = "yadav";

console.log(firstvariable); // "pankaj"
console.log(secondvariable); // "kumar"
console.log(thirdvariable); // "yadav"

