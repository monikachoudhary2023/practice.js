// Function to check divisibility by 2 and 3

// Write a Function to Add Two Numbers
function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(3, 5)); 
console.log(addNumbers(10, 15)); 

// Check if a Number is Even or Odd
function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(4)); 
console.log(isEven(7)); 

//Find the Maximum of Two Numbers
function maxOfTwo(a, b) {
    return a > b ? a : b;
}

console.log(maxOfTwo(10, 20)); 
console.log(maxOfTwo(7, 3)); 

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example Usage
console.log(reverseString("hello")); 
console.log(reverseString("JavaScript")); 

//Check if a Number is Prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); 

//Find the Factorial of a Number
function factorial(n) {
    if (n < 0) return "Invalid input";
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); 
console.log(factorial(0)); 


// Check if a String is a Palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 

// Generate a Random Number Between Two Values
function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(randomNumberBetween(1, 10)); 
console.log(randomNumberBetween(20, 30)); 
