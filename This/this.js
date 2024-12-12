// this has different meaning in different context

// THIS IN GLOBAL SPACE

// the value of this in global space is global object

console.log(this);// In Browser its in window object

//THIS INSIDE A TRADITIONAL FUNCTION

// Inside a function the value depends on the use of strict mode or non strict mode 

// If the strict mode is present then it will give undefined

// In non - strict mode this keyword allways point to

function display(){
    console.log(this); // output: window, global object since i am using non - strict mode
}

// THIS INSIDE NON - STRICT MODE (THIS - SUBSTITUTION)

// If we are in non - strict mode and this keyword is undefined or null then JS will replace this with global or window object



// THIS INSIDE OBJECTS METHOD

let employee = {
    ename:"Alex",
    age:22,
    displayDetails:function(){
        console.log(this); // this keyword will point to current object or employee object.
    }
}

employee.displayDetails();



// THIS IN NESTED ARROW FUNCTION

let car = {
    brand:"bmw",
    model:"x3",
    price:8768976,
    displayDetails:()=>{
        let details = () =>{
            console.log(this);
        }
        details();
    }
}

// Inside a arrow function this keyword will be enclosing lexical execution context the whole employee object.

//THIS IN DOM

//This keyword in DOM will point to the html element where it was used

//Example

// <button onClick="alert(this)"> click me </button>

// button element will be present in the this keyword

