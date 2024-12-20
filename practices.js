// Printing hello world
console.log("Hello, World!");

// Basic mathematical operations
function addNumbers(a, b) {
    return a + b;
}

function swapNumbers(a, b) {
    [a, b] = [b, a];
    return [a, b];
}

function findSquareRoot(num) {
    return Math.sqrt(num);
}

// Conversion
function kmToMiles(km) {
    return km * 0.621371;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Checking number's nature
function checkNumberNature(num) {
    if (num > 0) return "Positive";
    if (num < 0) return "Negative";
    return "Zero";
}

// Generating a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}

// Checking if a number is odd or even
function isOddOrEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// Checking if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Finding the largest number among three
function largestAmongThree(a, b, c) {
    return Math.max(a, b, c);
}

// Finding factorial of a number
function factorial(num) {
    if (num < 0) return -1;
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

// Finding Armstrong number in any interval
function isArmstrongNumber(num) {
    let sum = 0;
    const digits = num.toString().split("").map(Number);
    const power = digits.length;
    digits.forEach(d => {
        sum += Math.pow(d, power);
    });
    return sum === num;
}

function findArmstrongNumbersInInterval(start, end) {
    let armstrongNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isArmstrongNumber(i)) {
            armstrongNumbers.push(i);
        }
    }
    return armstrongNumbers;
}

// Checking if numbers have the same last digit
function hasSameLastDigit(a, b) {
    return a % 10 === b % 10;
}

// Checking palindrome
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

// Everything about any string
function stringOperations(str) {
    return {
        length: str.length,
        uppercase: str.toUpperCase(),
        lowercase: str.toLowerCase(),
        reversed: str.split("").reverse().join("")
    };
}

// Finding factors of numbers
function findFactors(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

// Printing Fibonacci sequence
function fibonacciSequence(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
}

// Replacing characters of a string
function replaceCharacters(str, target, replacement) {
    return str.split(target).join(replacement);
}

// Reversing characters of a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Sorting words in alphabetical order
function sortWordsAlphabetically(sentence) {
    return sentence.split(" ").sort().join(" ");
}

// Example calls
console.log(addNumbers(5, 3));
console.log(swapNumbers(2, 4));
console.log(findSquareRoot(16));
console.log(kmToMiles(5));
console.log(celsiusToFahrenheit(30));
console.log(checkNumberNature(-3));
console.log(generateRandomNumber());
console.log(isOddOrEven(7));
console.log(isPrime(11));
console.log(largestAmongThree(10, 20, 15));
console.log(factorial(5));
console.log(findArmstrongNumbersInInterval(100, 500));
console.log(hasSameLastDigit(27, 37));
console.log(isPalindrome("racecar"));
console.log(stringOperations("Hello"));
console.log(findFactors(12));
console.log(fibonacciSequence(10));
console.log(replaceCharacters("hello world", "o", "a"));
console.log(reverseString("hello"));
console.log(sortWordsAlphabetically("the quick brown fox"));