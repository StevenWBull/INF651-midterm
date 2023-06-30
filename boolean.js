// Question 1: Write a condition that checks whether a variable isRaining is true and
// a variable isSunny is false. Store the result in a variable called shouldStayInside.

let isRaining = true;
let isSunny = false;

const shouldStayInside = isRaining && !isSunny;
console.log(`shouldStayInside should be true: ${shouldStayInside}`);

// Question 2: Write a JavaScript function called hasPermission that takes two
// boolean parameters, isUserLoggedIn and isAdmin, and returns true if the user has
// permission and false otherwise.

const hasPermission = (isUserLoggedIn, isAdmin) => isUserLoggedIn && isAdmin;

console.log(`hasPermission(true, true) should be true: ${hasPermission(true, true)}`);
console.log(`hasPermission(true, false) should be false: ${hasPermission(true, false)}`);
console.log(`hasPermission(false, true) should be false: ${hasPermission(false, true)}`);

// Question 3: Write a JavaScript function called hasUniqueCharacters that takes a
// string as an argument and returns true if all characters in the string are unique and
// false otherwise.

// This solution assumes that the string is case-sensitive and that spaces adn special characters are allowed
// If spaces are not allowed, use string.replace(/\s/g, '') to remove all spaces and if case is not important, 
// use string.toLowerCase() to convert the string to lowercase before splitting the string into an array and checking for uniqueness

const hasUniqueCharacters = (string) => {
    // convert string to array, sort array, compare adjacent elements
    const sortedArray = string.split('').sort();
    for (let i = 0; i < sortedArray.length - 1; i++)
        if (sortedArray[i] === sortedArray[i + 1])
            return false;

    return true;
};

console.log(`hasUniqueCharacters('Steven') should be false: ${hasUniqueCharacters('Steven')}`);
console.log(`hasUniqueCharacters('banana') should be false: ${hasUniqueCharacters('banana')}`);
console.log(`hasUniqueCharacters('asdfghijklmno') should be true: ${hasUniqueCharacters('asdfghijklmno')}`);