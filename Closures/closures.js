// Closures are basically a combination on functions and its lexical environment

// When a function access the data that is outside ofits own scope is called as closures

// Impure functions are function which also depends on data outside of its own scope.

// Closures are stored in heap memory and later it is grabage collected 

// since it gets stored in heap memory it lot of memory and computation power.

// Closures is basically used for data encapsulation. eg:

//Eexample 1
function Bank(){
    let _accnumber = 4564373278763;

    function getAccountNumber(){
        return _accnumber;
    }

    function setAccountNumber(accno){
        _accnumber = accno;
    }

    return {
        getAccountNumber,
        setAccountNumber
    }
}

let User1 = Bank();

console.log(User1.getAccountNumber());

User1.setAccountNumber(4378965423456);

console.log(User1.getAccountNumber());


// Example 2:

for(var i =0;i<5;i++){
    function print(){
        console.log(i); //Output: 5,5,5,5,5
    }
    setTimeout(print,100);
}

// since var is a global scope it will be attached to the global space.