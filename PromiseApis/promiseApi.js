// There are 4 promise apis they are

// all, allSettled, race, any

// Promise.all()

// Promise.all([p1,p2,p3]) in all SUCCESSFUL api calls 

// In all we give array of promise and all promise successful then which ever promise(p1,p2,p3) took max time for successful response that will be the time take by all

// That means all will wait for every promise to be successful. successful response are returned in an array.

//Promise.all([p1,p2,p3]) in any one promise FAILURE case

// If any one of the promise (p1,p2,p3) is failed all will return that faliure promise it dosent care about other promise if they are rejected/resolved

// It will return the first promise that has been rejected


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

Promise.all([p1,p2,p3])
.then((response)=>console.log(response))
.then((json)=>console.log(json))
.catch((error)=>console.log(error));



// Promise.allSettled([p1,p2,p3]) allSettled will wait for every promise to give a response(successful/faliure dosent matter).

// which ever promise(p1,p2,p3) took max time for response that will be the time take by allSettled the result will be in an array


Promise.allSettled([p1,p2,p3])
.then((response)=>console.log(response))
.then((json)=>console.log(json))
.catch((error)=>console.log(error));



// Promise.race([p1,p2,p3]) which ever the first promise that fetches the result that is returned

// If it is success the object is returned as a single value

// If it is failure the error objects is returned as a single value

Promise.race([p1,p2,p3])
.then((response)=>console.log(response))
.then((json)=>console.log(json))
.catch((error)=>console.log(error));



//Promise.any([p1,p2,p3]) which ever the first promies that fetches the result this is returned

// If the first promise returned is an error then it will check for next promise that has a successful response

// If all the promise is returned as failure, it will return an aggregate error in an array.

Promise.any([p1,p2,p3])
.then((response)=>console.log(response))
.then((json)=>console.log(json))
.catch((error)=>console.log(error));


//Lingo used in promies 
// settled - got the result 1) resolved
//                          2) rejected


