// Question 1: Calculate the square root of a given number and store the result in a
// variable called result.

const result = Math.sqrt(4);
console.log(`The square root of 4 is ${result}`);

// Question 2: Write a JavaScript function called isPrime that takes a number as an
// argument and returns true if it is a prime number and false otherwise.

const isPrime = (number) => {
    // 1 is not prime
    if (number === 1)
        return false;
    // 2 is prime
    if (number === 2)
        return true;

    // check if number is divisible by any number between 2 and number - 1. If it is, return false, if it isn't, return true.
    for (let i = 2; i < number; i++) {
        if (number % i === 0)
            return false;
    }
    return true;
};

console.log(`isPrime(1) should be false: ${isPrime(1)}`);
console.log(`isPrime(2) should be true: ${isPrime(2)}`);
console.log(`isPrime(3) should be true: ${isPrime(3)}`);
console.log(`isPrime(4) should be false: ${isPrime(4)}`);
console.log(`isPrime(5) should be true: ${isPrime(5)}`);
console.log(`isPrime(6) should be false: ${isPrime(6)}`);

// Question 3: Write a JavaScript function called generateRandomNumber that takes
// two numbers, min, and max, as arguments and returns a random number between
// min and max

// Assuming here that the min and max should be inclusive and that only integers are allowed
const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`generateRandomNumber(1, 4) should be between 1 and 4 (inclusive): ${generateRandomNumber(1, 4)}`);