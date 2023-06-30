// Question 1: Declare a variable called name and assign it a string value of your
// choice. Then, display a message that says "Hello, [name]!" using the value of the
// name variable.

const name = 'Steven';

console.log(`Hello, ${name}!`);
// or in browser alert(`Hello, ${name}!`); node doesn't have access to alert

// Question 2: Create two variables, x, and y, and assign them numerical values.
// Swap the x and y values using a third variable and display the updated values.

let x = 5;
let y = 10;

console.log(`Before swap x is ${x} and y is ${y}`);

let temp = x;
x = y;
y = temp;

console.log(`After swap x is ${x} and y is ${y}`);