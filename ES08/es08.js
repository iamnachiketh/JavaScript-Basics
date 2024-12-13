// Ecma Script 08 which was introduced in 2017

// It has added some of the features like,

// 1) Async/Await

//  Async await are a keywords in JS

//  Async is used with the function declaration

// await is used inside the function with an async operation

//  await can only be used with async

//  Async function return a promise

// If a function return a normal value async will wrap it inside a promise

// async function returnSomeValue() {
//     return "Hello";
// }

//console.log(returnSomeValue()); // Output: Promise {"Hello"} 1st executed

// What happens behind the scenes

//Example 2

// let getMovies = async () => {
//     console.log("Start");// 2nd executed
//     let response = await fetch("https://dummyapi.online/api/movies");// 5th executed
//     let data = await response.json(); // 7th executed
//     console.log(data.filter((x) => x.id < 11));
// }

// getMovies();

// getMovies() is called Execution Context is created after call stack is empty its pushed to the call stack

// now getMovies function starts to execute, once the JS encounters await in the 25th line the function execution of getMovies is paused

// After this encounter JS Interpreter will come out of the getMovies function and EC is poped out of the main stack stored it.

// JS interpreter starts to execute other functions.

// once the promise is resolved or rejected JS interpreter comes to the same line and resumes its execution.

// when another await is encountred same above process happens

// Once all the promises is resolved in that functioin and no lines to execute the function is deleted from the main stack.

//Example 3:

// async function getProducts() {
//     console.log("Starting!!"); // 3rd executed
//     let resp = await fetch("https://dummyapi.online/api/products"); // 6th executed
//     console.log("response fetched");
//     let data = await resp.json(); // 8th executed
//     console.log("Data fetched: ", data);
// }

// getProducts();

// console.log("Outside Function Scope"); //4th excuted.

//Under the hood async/await also uses promises but i just a different way of writting code

// Promises and async/await can be used but async/await is the newer versions.

// 2) Object.entries(), Object.values(), Object.keys()

let student = {
    name: "John",
    age: 20,
    marks: 90
}

console.log(Object.values(student));// Output: ["John",20,90]

console.log(Object.keys(student));// Output: ['name','age','marks']

console.log(Object.entries(student));// Output: [['name',"John"],['age',20],['marks',90]]

// Above methods will convert objects into arrays

// you can also traverse these entries like 

for(let [key,value] of Object.entries(student)){
    console.log(key+" -> "+ value);
}

// 3) String.padStart(targetLength,paddingString), String.padEnd(targetLength,paddingString)
// targetLength is basicaly to which length we have to populate the string
let s = "Hello world";

console.log("Hello world".padStart(s.length + 10,'Greetings ')); // Output: Greetings Hello world 

console.log("Hello world".padEnd(s.length + 3,'!')); // Output: Hello world!!!



