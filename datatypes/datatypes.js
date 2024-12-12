// typeof operator check the type of a variable

//Primitive


//Number
let a = 10;
let b = 2.78;
let y = 123e-5; // exponental value is also called as number

console.log(a," ",b);
console.log(typeof a);
console.log(typeof y);// number
console.log(typeof Infinity); // number


console.log("===============================================");

//String
let c = "Hello";
let d = "This is me!!";
console.log(c," ",d);
console.log(typeof c);//String

console.log("===============================================");


//bigint
let e = 454378956432456n;
console.log(e);
console.log(typeof e); //bigint 

console.log("===============================================");


//Boolean
let f = true;
console.log(f);
console.log(typeof f); // boolean

console.log("===============================================");


//Undefined
let h = undefined;
console.log(h);
console.log(typeof h); // undefined

console.log("===============================================");

//Symbol
let sym = Symbol("hello");
console.log(sym);
console.log(typeof sym);



console.log("===============================================");



//Non - Primitive
// Note: All the types of Wrapper Object are Object type.
//Object
let data = null;
console.log(data);
console.log(typeof data);// Object

console.log("===============================================");

//Array Object
let arr = [];
let arr2 = [10,"hello",23.987,true,{name:"alex"}];
console.log(arr);
console.log(arr2);
console.log(typeof arr); //Object

console.log("===============================================");

//Object
let i = {name:"alex",age:20,city:"Banglore"};
console.log(i);
console.log(typeof i); // Object

console.log("===============================================");

let numb = new Number(10);
console.log(numb);
console.log(typeof numb); // Object

console.log("===============================================");

let str = new String(10);
console.log(str);// '10'
console.log(typeof str);//Object

console.log("===============================================");

let bool = new Boolean(10);
console.log(bool);// true
console.log(typeof bool); // Object








