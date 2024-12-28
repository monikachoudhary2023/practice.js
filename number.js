//Write a Program to reverse a string in JavaScript.
function reverseString(str) 
{
  return str.split("").reverse().join("");
}

console.log(reverseString("GeeksForGeeks"));

//Count Vowels in a String in JavaScript?
function countVowels(str) {
    let count = 0;
    // Include both lowercase and uppercase vowels
    const vowels = 'aeiouAEIOU'; 
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("hello geek"));

//Remove Duplicates from an Array in JavaScript?
function removeDuplicates(arr) 
{
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) 
  {
      if (!uniqueArray.includes(arr[i]))
      {
          uniqueArray.push(arr[i]);
      }
  }
  return uniqueArray;
}

console.log(removeDuplicates([5, 2, 5, 6, 6, 7]));
