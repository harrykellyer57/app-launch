/*
 * Filename: complex_code.js
 * Content: Complex JavaScript code demonstrating various features and functionalities.
 */

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Function to find the nth Fibonacci number recursively
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Function to sort an array using bubble sort algorithm
function bubbleSort(arr) {
  let len = arr.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// Function to reverse a string
function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }

  return reversed;
}

// Generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Use a promise to fetch data from an API
function fetchDataFromAPI(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// Perform an async/await operation
async function performAsyncOperation() {
  try {
    const data = await fetchDataFromAPI("https://api.example.com/data");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Define an array of objects
let users = [
  { name: "John", age: 25 },
  { name: "Alice", age: 32 },
  { name: "Bob", age: 19 }
];

// Map the array of users to an array of names
let userNames = users.map(user => user.name);

// Log the user names
console.log(userNames);

// Create a new person object
let person = new Person("Mike", 40);

// Introduce the person
person.introduce();

// Calculate the 10th Fibonacci number
let fibonacciNumber = fibonacci(10);

console.log(`10th Fibonacci number: ${fibonacciNumber}`);

// Sort an array using bubble sort algorithm
let unsortedArray = [9, 3, 7, 1, 5];
let sortedArray = bubbleSort(unsortedArray);

console.log("Sorted Array:", sortedArray);

// Reverse a string
let originalString = "Hello, World!";
let reversedString = reverseString(originalString);

console.log("Reversed String:", reversedString);

// Generate random numbers
let randomNumber = getRandomNumber(1, 10);

console.log("Random Number:", randomNumber);

// Perform an async/await operation
performAsyncOperation();