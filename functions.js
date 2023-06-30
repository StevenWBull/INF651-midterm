// Question 1: Write a JavaScript function called reverseString that takes a string as
// an argument and returns the reversed version of the string.

// split string into array, reverse array, join array into a reveresed string
const reverseString = (string) => string.split('').reverse().join('');

console.log(`reverseString('hello') should be 'olleh': ${reverseString('hello')}`);
console.log(`reverseString('world') should be 'dlrow': ${reverseString('world')}`);

// Question 2: Write a JavaScript function called calculateBMI that takes a person's
// weight (in kilograms) and height (in meters) as arguments and returns their body
// mass index (BMI).

// BMI formula: kg / m^2, I decided to round to 2 decimal places to make the output more readable
const calculateBMI = (weight, height) => (weight / (height ** 2)).toFixed(2);

console.log(`calculateBMI(60, 1.7) should be 20.76: ${calculateBMI(60, 1.7)}`);
console.log(`calculateBMI(70, 1.7) should be 24.22: ${calculateBMI(70, 1.7)}`);

// Question 3: Write a JavaScript function called capitalizeWords that takes a
// sentence as an argument and returns the sentence with each word capitalized.

// split sentence into array on the spaces, map over array to capitalize first letter of each word, join array back into a sentence on spaces
const capitalizeWords = (sentence) => sentence.split(' ').map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');

console.log(`capitalizeWords('hello world') should be 'Hello World': ${capitalizeWords('hello world')}`);
console.log(`capitalizeWords('steven is crazy') should be 'Steven Is Crazy': ${capitalizeWords('steven is crazy')}`);