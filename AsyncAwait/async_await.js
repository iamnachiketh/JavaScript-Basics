//  Async await are a keywords in JS

//  Async is used with the function declaration

// await is used inside the function with an async operation

//  await can only be used with async

//  Async function return a promise

// If a function return a normal value async will wrap it inside a promise

async function returnSomeValue() {
    return "Hello";
}

console.log(returnSomeValue()); // Output: Promise {"Hello"} 1st executed

// What happens behind the scenes

//Example 2

let getMovies = async () => {
    console.log("Start");// 2nd executed
    let response = await fetch("https://dummyapi.online/api/movies");// 5th executed
    let data = await response.json(); // 7th executed
    console.log(data.filter((x)=>x.id<11));
}

getMovies();

// getMovies() is called Execution Context is created after call stack is empty its pushed to the call stack

// now getMovies function starts to execute, once the JS encounters await in the 25th line the function execution of getMovies is paused

// After this encounter JS Interpreter will come out of the getMovies function and EC is poped out of the main stack stored it.

// JS interpreter starts to execute other functions.

// once the promise is resolved or rejected JS interpreter comes to the same line and resumes its execution.

// when another await is encountred same above process happens

// Once all the promises is resolved in that functioin and no lines to execute the function is deleted from the main stack.

//Example 3:

async function getProducts(){
    console.log("Starting!!"); // 3rd executed
    let resp = await fetch("https://dummyapi.online/api/products"); // 6th executed
    console.log("response fetched");
    let data = await resp.json(); // 8th executed
    console.log("Data fetched: ",data);
}

getProducts();

console.log("Outside Function Scope"); //4th excuted.

//Under the hood async/await also uses promises but i just a different way of writting code 

// Promises and async/await can be used but async/await is the newer versions.