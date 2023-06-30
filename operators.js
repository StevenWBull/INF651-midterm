// Question 1: Given the variables a = 10 and b = 3, what is the value of the
// following expression: a % b?

// 10 mod 3 is 1 which we can see proven below:

console.log(`10 mod 3 is ${10 % 3}`);

// Question 2: Write a JavaScript function called isInRange that takes a number as
// an argument and returns true if it falls within a specific range (e.g., between 10
// and 20) and false otherwise.

// This function assumes that 10 and 20 are inclusive, if we wanted to exclude them we would use > and < instead of >= and <=
const isInRange = (number) => number >= 10 && number <= 20;

console.log(`isInRange(5) should be false: ${isInRange(5)}`);
console.log(`isInRange(10) should be true: ${isInRange(10)}`);
console.log(`isInRange(15) should be true: ${isInRange(15)}`);

// Question 3: Given the variables a = 5, b = 3, and c = 2, what is the value of the
// following expression: a > b || c < b && a === c?

// This expression will be true because of precedence rules, and I will prove it below:
console.log(`a > b || c < b && a === c is ${5 > 3 || 2 < 3 && 5 === 2}`);

/* 
    In this expression, the && operator has higher precedence than the || operator, so the expression gets evaluated as follows:
        (c < b && a === c) evaluates to false
        (a > b) evaluates to true
        Finally, true || false evaluates to true
*/

