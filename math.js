// Question 1: Generate a random number between 1 and 100 (inclusive) using the
// Math.random() function and round it to the nearest integer. Store the result in a
// variable called randomNumber.

const randomNumber = Math.round(Math.random() * 100) + 1;

// Question 2: Write a JavaScript function called calculateFactorial that takes a
// number as an argument and returns its factorial.

// factorials are naturally recursive, so use recursion here...
const calculateFactorial = (number) => [0, 1].includes(number) ? 1 : number * calculateFactorial(number - 1);

console.log(`calculateFactorial(0) should be 1: ${calculateFactorial(0)}`);
console.log(`calculateFactorial(1) should be 1: ${calculateFactorial(1)}`);
console.log(`calculateFactorial(2) should be 2: ${calculateFactorial(2)}`);
console.log(`calculateFactorial(3) should be 6: ${calculateFactorial(3)}`);
console.log(`calculateFactorial(4) should be 24: ${calculateFactorial(4)}`);

// Question 3: Write a JavaScript function called calculatePower that takes two
// numbers, base and exponent, as arguments and returns the result of base raised to
// the power of exponent.

const calculatePower = (base, exponent) => Math.pow(base, exponent);

console.log(`calculatePower(2, 0) should be 1: ${calculatePower(2, 0)}`);
console.log(`calculatePower(2, 1) should be 2: ${calculatePower(2, 1)}`);
console.log(`calculatePower(2, 2) should be 4: ${calculatePower(2, 2)}`);