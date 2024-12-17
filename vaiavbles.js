// Create a dictionary with  words and their meanings
const dictionary = {
    "JavaScript": "A high-level, versatile programming language commonly used for web development.",
    "Algorithm": "A step-by-step procedure to solve a problem or perform a task.",
    "Variable": "A container for storing data values in programming.",
    "Function": "A reusable block of code that performs a specific task.",
    "Object": "A collection of properties and methods that represent real-world entities in programming."
};

// Function to get the meaning of a word
function getMeaning(word) {
    word = word.charAt(0).toUpperCase() + word.slice(1); // Capitalize first letter
    if (dictionary[word]) {
        console.log(`Meaning of "${word}": ${dictionary[word]}`);
    } else {
        console.log(`"${word}" is not in the dictionary.`);
    }
}

// Example usage:
console.log("=== Word Meaning Dictionary ===");
getMeaning("JavaScript");
getMeaning("Algorithm");
getMeaning("Variable");
getMeaning("Function");
getMeaning("Object");
getMeaning("Loop"); // Word not in the dictionary



