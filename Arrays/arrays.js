// Array is basically an object with data stored in a continues manner 

// Array is an index based DS

// JS has lot of inbult function which can be help 

// Inside array you can also store heterogenous data

let arr = [20,34,14,56,90];

// Adds  the element at the end of array
arr.push(90);

// Deletes the element at the end of an array
arr.pop();


//Gets the length of the array.
console.log(arr.length);


//check if passed element in the present in the array or not
console.log(arr.includes(20))


// There are some of the functions which works same like string


// This function will delete the elements in the array from index 2 and how many elements to be deleted
// This function modifies the actual array
// Using this function we can also push elements inside the array
console.log(arr.splice(2,1,100,250));

// This function will basically concatinates the elements to the passed string and returns string.
console.log(arr.join(" "));


// It will iterate through the array
arr.forEach((value,index)=>{
    console.log(index,"->",value);
});

// map function will take a callback function which will take each element and perform operation on it and strore the value in an new array
arr.map((x)=>x*2);

// this function will fillter out elements based on the condition if the condition is false it removes the element return new filtered array. 
arr.filter((x)=>x%2);


// This function will reduce array element into single value and returns the value.
arr.reduce((acc,cur)=>{
    acc +=cur;
    return acc;
},0)

// can do all the above operation like map, filter, reduce together.
arr
.map((x)=>x*3)
.filter((x)=>x>100)
.reduce((acc,cur)=>{
    acc +=cur;
    return acc;
})


// There are lot of other functions but above mentioned are important functions.