// Prototype is predefined properties present in a JS object

//Example 
let arr = [];

arr.push(20);
arr.push(10);
arr.push(80);
arr.push(40);

arr.pop();

arr.forEach((value)=>console.log(value));

// There are other more methods these methods are attached to the user defined object by the js through prototypal inheritance

// If we want to access the hidden object we have to use __proto__ and its optional for non browser

// How proto works

let object = {
    name: 'John',
    age: 20
}

let object2 = {
    name: 'Jane',
}

object2.__proto__ = object;
object2.age = 21
console.log(object2);

// Prototypal inheritance is the process of inheriting all the properties of one object to another.

// For objects in modren javascript we can use Object.getPrototypeOf for  clean code.

//Methods and properties are going to be shared among all the instances saving the memory.