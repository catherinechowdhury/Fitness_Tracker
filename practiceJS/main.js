// Note: use node main.js to run this file in the terminal

console.log("Hello World!");

// let allows you to declare a variable that can be reassigned later. It is block-scoped, meaning it is only accessible within the block it is defined in.
let name = "John";
console.log(name);

// const allows you to declare a variable that cannot be reassigned. It is also block-scoped.
const pi = 3.14;
console.log(pi);

// toFixed() method formats a number using fixed-point notation
let num = 3.14159;
console.log(num.toFixed(2)); // Output: 3.14

// Using concatenation to combine strings
let firstName = "Jane";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Using template literals to combine strings
let age = 30;
// Use backticks and ${} to embed variables in a string
let greeting = `Hello, my name is ${fullName} and I am ${age} years old.`;
console.log(greeting);

// Using an if statement to check a condition
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Using a for loop to iterate over an array
// arrays do not have to be of the same type, but in this case we are using an array of numbers nor does it have to be of a specific length
let numbers = [1, 2, 3, 4, 5];  
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//methods for arrays
let fruits = ["apple", "banana", "cherry"];
fruits.push("date");
console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]

fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "cherry"]


// while loop example
let count = 0;  
while (count < 5) {
    console.log(count);
    count++;
}

// Functions are reusable blocks of code that perform a specific task. They can take parameters and return values.
// Need the keyword function followed by the name of the function and parentheses. The code to be executed is enclosed in curly braces.

function findMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Call the function and store the result in a variable
let max = findMax(10, 20);
console.log(max); // Output: 20

//Arrow Functions are a more concise syntax for writing functions. They are often used for simple functions that do not require their own this context.
// They are defined using the => syntax.
const findMaxArrow = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

// Call the arrow function and store the result in a variable
let maxArrow = findMaxArrow(10, 20);
console.log(maxArrow); // Output: 20

// User object
const user = {
    name: "Alice",
    age: 25
}
console.log(user.name); // Output: Alice
console.log(user.age); // Output: 25

user.email = "alice@fakemail.com";
console.log(user); 

// Constructor for user objects
function User(name, age) {
    this.name = name;
    this.age = age;
}
const user1 = new User("Bob", 30);
console.log(user1.name); // Output: Bob
console.log(user1.age); // Output: 30