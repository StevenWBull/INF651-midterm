// Question 1: Write a while loop that prints the numbers from 1 to 20.

let i = 1;
while (i <= 20) {
    console.log(i);
    i++;
};

// Question 2: Write a JavaScript function called calculateSum that takes a positive
// integer n as an argument and returns the sum of all numbers from 1 to n.

const calculateSum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    };
    return sum;
};

/* 
    You could also use the formula for the sum of an arithmetic series here n * (n + 1) / 2
    const calculateSum = (n) => n * (n + 1) / 2;
*/

console.log(`calculateSum(1) should be 1: ${calculateSum(1)}`);
console.log(`calculateSum(2) should be 3: ${calculateSum(2)}`);
console.log(`calculateSum(3) should be 6: ${calculateSum(3)}`);

// Question 3: Write a JavaScript function called calculateFactorialIterative that
// takes a positive integer n as an argument and calculates its factorial using a loop
// instead of recursion.

const calculateFactorialIterative = (n) => {
    let product = 1;
    for (let i = 1; i <= n; i++) {
        product *= i;
    };
    return product;
};

console.log(`calculateFactorialIterative(0) should be 1: ${calculateFactorialIterative(0)}`);
console.log(`calculateFactorialIterative(1) should be 1: ${calculateFactorialIterative(1)}`);
console.log(`calculateFactorialIterative(2) should be 2: ${calculateFactorialIterative(2)}`);
console.log(`calculateFactorialIterative(3) should be 6: ${calculateFactorialIterative(3)}`);
console.log(`calculateFactorialIterative(4) should be 24: ${calculateFactorialIterative(4)}`);