// sync - syncronization/blocking operation.

// Javascript executes programs line by line.

// one line executed after another line.

// first execution context of thses function directly pushed on to main stack excuted by main thread

let xyz = () =>{
    console.log("syncronized normal arrow function"); // 1st this is executed 
}
xyz();
console.log("outside xyz function!!"); // 2nd this is executed


// ASYNC - non - blocking oprations like promise, callback functions.

// callback function and promises are pushed callback queue and microtask queue

// microtask queue has more priority than callback queue.

// EVENT LOOP will constantly check if the main stack is empty or not.

// if the main stack is empty then if any execution context present in microtask queue 

// EVENT LOOP pushs that EC to main stack.

// if not it will push EC present in the call back to queue.

let count = 0;
setTimeout(()=>{ // 5th these will get executed after 5 seconds or 5000 milli seconds.
    count += 1; // clousers
    console.log(count); 
},5000);// this will executed later after the below promise is executed that means low priority compared to promise.

console.log("outside setTimeout"); // 3rd thses will get executed





let input = 20;
setTimeout(()=>{ // last excution its waiting time is 6s.
    console.log(input); // after 6s this executed callback queue has low priority.
},6000);

let pr = new Promise((resolve,reject)=>{ //promise has more priority
    if(input === 20){ // strict equality.
        resolve();
    }else{
        reject();
    }
});

pr.then(()=>{ // 4th this is executed.
    console.log("Promise has been resolved!!");
})
.catch(()=>{
    console.log("promise is rejected");
});

