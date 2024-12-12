// Immideatly Invoked Function Expressions

// IIFE are used to prevent pollution form the global scope 

//There are some variable inside function which will get poluted from the global variable to prevent that we use IIFE

// we have to add ; after calling it because it tells the JS where to end it execution context

//but code editor will defaultly add ; 

//Example for Normal IIFE
(
    function(){
        let dbconnection = "DB Connection String";
        console.log(dbconnection);
    }
)();

//Example for named IIFE
(function dbconnection(){
        console.log("DB Connected");
})();

// Example for passing ans argument 
((name)=>{
    console.log(name);
})("name")
