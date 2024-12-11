// Function Statment
function student() {
    s = "Student Reads";
    console.log(s)
    var s;
}

//Arrow function
let doSomething = () =>{

}

//Annonymous Arrow function
()=>{

}

// Function expression.
let multiplyByTwo = (num) => num*2; 
console.log(ghi(10));


// FIRST CLASS FUNCTIONS

// Functions which can act as variables is called as first class functions

// You can pass a function to other function.

// You can return a function from another function.


let add = function(a,b){ // storing it inside a variable add.
    console.log(a+b);
}
console.log(add); // displays the whole function

// Above function can be stored inside a variable.

//HIGHER ORDER FUNCTIONS

// These are the functions which takes function as an argument or which returns function as an argument.

let sub = (a,b) =>{
    return a - b;
}

let operation = (ops) =>{
    console.log(ops(20,10));
}

operation(sub); // Passing another function.


// Function returing another function.
let greet = ()=>{
    return function(){
        console.log("Greeting!!!");
    }
}

let greetPeople = greet();
greetPeople(); // Greeting

//Note: hoisting also happens with respect to functions too