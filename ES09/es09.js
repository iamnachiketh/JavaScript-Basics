// Ecma Script 09 which was introduced in 2018

// It has added some of the features like,

// 1) Rest/Spread Operator: 

// Spread operator.
// It is used to get indivisual properties on an object

let employee = {
    id:1,
    name: 'John',
    age: 30
}

const {name, ...newEmployee} = employee;

console.log(name); //Output: John

console.log(newEmployee);// Output: { id:1, age:30}


// Rest operator

function display(...args){
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }
    console.log();
}

display(20,30)
display(10,70,64,36);


// Async iteration 

let arr = [20,30,54];

// await is used to run async operation in a serial manner
for await (let val of arr){
    console.log(val);
}


// Promise.finally()

const p1 = fetch("https://dummyapi.online/api/pokemon");
p1
.then((resp)=>console.log(resp))
.catch((error)=>console.log(error))
.finally(()=>{
    console.log("Close Connection with the database");
})

// There are some code we want to run no matter whether the  promies is resolved or rejected

// We can write those code inside finally's callback.