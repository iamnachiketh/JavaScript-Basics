// Event Loop is one of the most important part of JavaScript.

// Event Loop is a program which constantly check whether the call stack is empty or not 

// If the call stack is empty it will push the Execution Context of the callback function to the Main Stack

// Suppose you have a promise.


fetch('https://dummyapi.online/api/movies')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error)=>console.log(error.message));

// Above api gets some details about a movie 

// The fetch function is a promise which returns a promise

// The then function is a callback function which gets executed when the promise is resolved

// The catch function is a callback function which gets executed when the promise is rejected

// 


display(); // Hoisting
function display() {
    console.log("Inside Display function");
}

// After Executing the display function the Global Execution Context will also poped out of the main stack.

// now after executing display execution context of display function and global execution context the main stack will be empty.

// The promise will present in the microtask queue.

// Event Loop checks the main task and it is empty

// Even loop again checks if the microtask queue is empty or not.

// If microtask queue is not empty immideatly event loop will push the callback function of the promise to main stack

// If microtask is empty then it checks callback queue if any call back function is present then it will be pushed to main stack by event loop

// After completion of the execution of all the promises and callback functions program gets terminated.