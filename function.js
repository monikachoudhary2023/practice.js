// Function to check divisibility by 2 and 3
function isDivisibleBy2And3(number) {
    if (number % 2 === 0 && number % 3 === 0) {
        return `${number} is divisible by both 2 and 3.`;
    } else if (number % 2 === 0) {
        return `${number} is divisible by 2 but not by 3.`;
    } else if (number % 3 === 0) {
        return `${number} is divisible by 3 but not by 2.`;
    } else {
        return `${number} is not divisible by 2 or 3.`;
    }
}

// Input: Replace with any number you want to test
let testNumber = 12; // Change this value to test other numbers

// Output result
console.log(isDivisibleBy2And3(testNumber));
