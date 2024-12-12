// Hoisting is the process of moving the declaration of a variable to the top of access

// variables and functions which are declared with let, const, var are hoisted but in little bit different manner

// Hoisting with respect to var

console.log(student);// Output: undefined 
                     // because only declaration is moved to top and undefined is assigned.
var student = {
    name: "Alex",
    age: 22,
    place: "NYC"
}

// let deep dive into what happens

// Technically it is not moved up to before its declaration 

// What happens is JS has two phases 1) memory creation phase  2) execution phase

// During the memory creation phase all the variables and function present in the JS program memory will be allocated

// And undefined is assigned 

// During the execution phase value is assigned during the run time when console log statment is encountered  at the moment no value is assined only undefined is present so undefined is logged

// LET

console.log(employee); // you will get an error if run the code 
let employee = {
    id:1,
    name:"Harish",
    salary:20000
}

// Now in let hoisting will happen but in different manner

// let variable will be present in the TDZ (Temporal Dead Zone) 

// You have to intialize the variable before accessing 

// And also let variables are created during the execution phase and present in the TDZ there foreyou have to use let as blow mentioned

let user = {
    email:"jane@bridgelabz.com",
    username:"janeMarie"
}

console.log(user);

//CONST 

// It works similarly to let with respect to hoisting but once its intialized can not be reintialized.

const PI = 3.145654
console.log(PI);


