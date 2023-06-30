// Question 1: Write a condition that checks whether a variable isRaining is true and
// a variable isSunny is false. Store the result in a variable called shouldStayInside.

const isRaining = true;
const isSunny = false;

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