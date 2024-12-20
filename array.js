//Find the Smallest Number in an Array

function findSmallest(arr) {
    return Math.min(...arr);
}

console.log(findSmallest([5, 3, 8, 2, 10])); 
console.log(findSmallest([12, 4, 7, 19, 1])); 

//Filter Odd Numbers
function filterOdds(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filterOdds([1, 2, 3, 4, 5])); 
console.log(filterOdds([10, 13, 15, 20])); 

//Sum of All Elements in an Array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example Usage
console.log(sumArray([1, 2, 3, 4])); 
console.log(sumArray([5, 10, 15])); 
console.log(sumArray([])); 

//Check if All Numbers Are Greater Than a Value 
function allGreaterThan(arr, threshold) {
    return arr.every(num => num > threshold);
}

// Example Usage
console.log(allGreaterThan([10, 15, 20], 5)); 
console.log(allGreaterThan([3, 8, 2], 5)); 
console.log(allGreaterThan([], 5)); 

//Factorial of a Number 
function factorial(n) {
    if (n < 0) return "Invalid input"; 
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example Usage
console.log(factorial(5)); 
console.log(factorial(0)); 
console.log(factorial(-1)); 
//Merge Two Arrays 
function mergeArrays(arr1, arr2) {
    let merged = [...arr1]; 
    for (let i = 0; i < arr2.length; i++) {
        merged.push(arr2[i]); 
    }
    return merged;
}

// Example Usage
console.log(mergeArrays([1, 2], [3, 4])); 
console.log(mergeArrays([5], [6, 7, 8])); 


