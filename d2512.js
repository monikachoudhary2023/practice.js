// slice function
let arr = [5, 6, 7];
arr = arr.slice(1); 
// Create a new array without the first element
console.log(arr);

// Write a Program to use a callback function?

function greet(name, callback) {
    callback(`Hello, ${name}!`);
}
greet('Geek', message => console.log(message));

//Write a code to create an arrow function?
const add = (a, b) => a + b;
console.log(add(6, 2));

//Write a Program to add a property to an object?
const obj = { name: 'Riya' };
obj.age = 21;
console.log(obj);

//Find the largest number in an array in JavaScript. Using the spread operator (...) or Math.max:
function findLargest(arr) {
    // Math.max() is used to find the largest number
    return Math.max(...arr); 
}
console.log(findLargest([99, 5, 3, 100, 1]));

//Write a Program to delete a property from an object?
const obj = { name: 'Riya', age: 21 };
delete obj.age;
console.log(obj);

//Write a Program to find a sum of an array?
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([15, 6, 10, 2]));

//Write a Program to print Fibonacci sequence up to n terms?
function fibonacci(n) {
    let num1 = 0, num2 = 1, nextNum;

    console.log("Fibonacci Sequence:");

    for (let i = 1; i <= n; i++) {
        console.log(num1);
        nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
    }
}

fibonacci(9);

// Calculate the Power of a Number in JavaScript?
function power(base, exponent) 
{
  return base ** exponent;
}

console.log(power(3, 4));
//Write a Program to print the frequency of elements in an array?
function frequency(arr) {
    const freq = {};
    for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]]) {
            freq[arr[i]] += 1;
        } else {
            freq[arr[i]] = 1;
        }
    }
    return freq;
}

console.log(frequency([1, 1, 2, 3, 3, 4]));

//Write a Program to count the occurrences of a character in a string in JavaScript?
//split method
function countChar(str, char) 
{
  return str.split(char).length - 1;
}

console.log(countChar('GeeksForGeeks', 'G'));
//using loop method
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countChar('GeeksForGeeks', 'G'));

// Write a Program to merge two arrays in JavaScript?
function mergeArrays(arr1, arr2) {
    
    return arr1.concat(arr2);
}

console.log(mergeArrays([5, 6], [7, 8]));