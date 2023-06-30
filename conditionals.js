// Question 1: Write an if-else statement that checks whether a variable num is
// positive, negative, or zero. Print the appropriate message accordingly.

const num = 5;
if (num > 0)
    console.log(`${num} is positive`);
else if (num < 0)
    console.log(`${num} is negative`);
else
    console.log(`${num} is zero`);

// Question 2: Write a JavaScript function called getDiscount that takes a purchase
// amount as an argument. If the purchase amount is greater than $100, apply a 10%
// discount. If it is less than or equal to $100, apply a 5% discount. Return the
// discounted amount.

const getDiscount = (purchaseAmount) => purchaseAmount > 100 ? purchaseAmount - (purchaseAmount * 0.1) : purchaseAmount - (purchaseAmount * 0.05);

console.log(`getDiscount(50) should be 47.5 (5%): ${getDiscount(50)}`);
console.log(`getDiscount(100) should be 95 (5%): ${getDiscount(100)}`);
console.log(`getDiscount(200) should be 180 (10%): ${getDiscount(200)}`);

// Question 3: Write an if-else statement that checks whether a year is a leap year.
// Print "Leap year" if it is divisible by 4 but not divisible by 100, or if it is divisible
// by 400. Otherwise, print "Not a leap year".

const year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    console.log(`${year} is a leap year`);
else
    console.log(`${year} is not a leap year`);
