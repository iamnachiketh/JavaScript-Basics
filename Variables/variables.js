// Redeclaration 
var a = 10;

var a = 20;

console.log(a);// 20

// Global/ Functional scope
var b = 30;

xyz(); // Execution context is created moved to the call stack
function xyz(){ 

    d = 200; 
    console.log(b); // 30 clousers
    console.log(d);// 200
    console.log(c); //Undefined only declaration is hoisted
    {
        var c = 100
    }
    var d;

}

// Note: window object is provided by the browser 
//       Global object in provided by the node/v8 engine


//Redeclaration
let g = 10;
// let g = 20; // you will get syntax error

//Scope
{
    let h = 30;
    console.log(h);
}

// console.log(h);// NOT DEFINED coz scope of h is only limited to a block, Refference error.

//Temporal Dead Zone
//console.log(f); //Refference error coz its in temporal dead zone.
let f = 50;

//const

const pi = 3.45657;
//pi = 3.98676; // We will get an type error.
console.log(pi);


