let name1 = {
    firstname:"Alex",
    lastname:"Smith",
    printFullName:function(place){
        console.log(this);
        console.log(this.firstname+" "+this.lastname);
    }
}

let name2 = {
    firstname:"John",
    lastname:"Doe"
}

// Now i want to print full name of name2 using name1 printFullName function for that we have to use call

// This is called function borrowing

// If the function has parameters then the first argument will be reference to this parameter

// It will bind the function with another object

// printFullName(name2, args1,args2......)

name1.printFullName.call(name2,"NYC");


// Apply also similar to call but you have to pass arguments in a form of array.

name1.printFullName.apply(name2,["NYC"]);



// Bind method return the function rather than calling it

let printName = name1.printFullName.bind(name2,"NYC");
printName();
