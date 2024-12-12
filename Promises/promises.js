// Promise is an object which represents eventual execution of a task or failure of a task of an Async operation

// Using promise we can have control over our code

//Example
let num = 12; // Check is this number is prime or not
let promise = new Promise((resolve, reject) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return reject("Not a Prime Number");
    }
    resolve("Prime Number");
});

promise
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

// when promise resolve is called then callback function is executed

//when promise is rejected, reject method callback function is executed 

// Promises has the more priority than normal callback function

// Promises are stored in the microtask queue before pushing to main stack by event loop

//Promise Chaning

//Promise Chaining is a technique where we use then() method to chain multiple promises together

// Example for an Ecommerce application 

let response = paymentRequest("/payments");

response
    .then(() => {
        return orderConfirmation("/order");
    })
    .then(() => {
        return orderShipment("/shipment");
    })
    .then(() => {
        return orderSummary("/summary");
    })
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error));


// We also can have multiple catch in the promises

// In the above example the handeling of all the error is same so we can mention single catch

// Any rejection by one promise caught by catch

// If the handeling senario is different for different promise the we have to mention n catch

//Example 

let resp = paymentRequest("/payments");

resp
    .then(() => orderConfirmation("/order"))
    .catch((error1) => console.log("Order " + error1))
    .then(() => orderShipment("/shipment"))
    .catch((error2) => console.log("Shipment " + error2))
    .then(() => orderSummary("/summary"))
    .catch((error3) => console.log("Summary " + error3))
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error));

// writting return in the callback is very important to propogate one promise to another

// But in Arrow function it is directly returned. 