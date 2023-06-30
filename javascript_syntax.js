// Question 1: Identify and correct the syntax errors in the following code:
//   var number = 10;
//   console.log (Number + 5);

var number = 10;
console.log(number + 5);

// Question 2: Write a JavaScript function called isEven that takes a number as an argument
// and returns true if the number is even and false if it is odd.

const isEven = (number) => {
    return number % 2 === 0;
};
console.log(`isEven(4) should be true: ${isEven(4)}`);
console.log(`isEven(5) should be false: ${isEven(5)}`);

// Question 3: Write a JavaScript function called isPalindrome that takes a string as an
// argument and returns true if it is a palindrome (reads the same forwards and backwards)
// and false otherwise.

const isPalindrome = (string) => {
    // convert string to array, reverse array, convert array to string, compare to original string
    return string === string.split('').reverse().join('');
};

console.log(`isPalindrome('racecar') should be true: ${isPalindrome('racecar')}`);
console.log(`isPalindrome('hello') should be false: ${isPalindrome('hello')}`);