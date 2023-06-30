// Question 1: Given the string "Hello, World!", write code to convert it to
// uppercase and store the result in a variable called uppercaseString.

const string = 'Hello, World!';
const uppercaseString = string.toUpperCase();

// Question 2: Write a JavaScript function called countVowels that takes a string as
// an argument and returns the number of vowels present in the string.

// convert string to array, filter out non-vowels, return length of filtered array
const countVowels = (string) => string.split('').filter((char) => 'aeiou'.includes(char)).length;

console.log(`countVowels('hello') should be 2: ${countVowels('hello')}`);
console.log(`countVowels('world') should be 1: ${countVowels('world')}`);
console.log(`countVowels('aeiou') should be 5: ${countVowels('aeiou')}`);


// Question 3: Write a JavaScript function called truncateString that takes a string
// and a number maxLength as arguments and returns a truncated version of the
// string if it exceeds maxLength, appending an ellipsis ("...") at the end.

const truncateString = (string, maxLength) => string.length > maxLength ? string.substring(0, maxLength) + '...' : string;

// We can use string defined on line 4 here...
console.log(`truncateString('${string}', 5) should be 'Hello...': ${truncateString(string, 5)}`);
console.log(`truncateString('${string}', 20) should be 'Hello, World!': ${truncateString(string, 20)}`);
console.log(`truncateString('${string}', 8) should be 'Hello, W...': ${truncateString(string, 8)}`);