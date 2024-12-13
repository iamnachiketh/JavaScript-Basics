


// 1. Nullish Coalescing (??)

// The ?? operator provides a default value only if the left-hand side is null or undefined.

let value = null ?? "default value"; // Returns "default value"

let value2 = 0 ?? "default value";   // Returns 0 (because 0 is not null or undefined)

// 2. Optional Chaining (?.)

// The ?. operator allows you to access deeply nested properties without throwing an error if any intermediate value is null or undefined.

let user = { name: "Alice", address: { city: "NYC" } };

console.log(user.address?.city);  // "NYC"

console.log(user.address?.zip);   // undefined (no error)

console.log(user.contact?.phone); // undefined (no error)

// 3. Dynamic Imports (import())

//The import() function allows you to dynamically load modules during runtime, which is especially useful for code-splitting or conditional imports.

if (condition) {
    import('./module.js').then(module => {
        module.doSomething();
    });
}


// 4) Promise.allSettled([p1,p2,p3]) allSettled will wait for every promise to give a response(successful/faliure dosent matter).

// which ever promise(p1,p2,p3) took max time for response that will be the time take by allSettled the result will be in an array


const p1 = fetch("https://dummyapi.online/api/pokemon");
p1
.then((resp)=>console.log())
.catch((error)=>console.log())


const p2 = fetch("https://online/api/todos");
p2
.then(()=> console.log())
.catch((error)=>console.log())

const p3 = fetch("https://dummyapi.online/api/products");
p3
.then((response)=>console.log())
.catch((error)=>console.log())


Promise.allSettled([p1,p2,p3])
.then((response)=>console.log(response))
.then((json)=>console.log(json))
.catch((error)=>console.log(error));


// 5. BigInt

// The BigInt type allows you to work with integers larger than the Number.MAX_SAFE_INTEGER (2^53 - 1).

let bigNumber = 1234567890123456789012345678901234567890n; // Add "n" to define a BigInt

let sum = bigNumber + 10n; // Works with other BigInts

console.log(sum); // 1234567890123456789012345678901234567900n

// You cannot mix BigInt with regular numbers:

let result = bigNumber + 10; // Output:TypeError




