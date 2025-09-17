// Block of code that can be used multiple times, it accepts arguments and returns a value

// => Declaring a function

// method1 -> here function call can be made before function declaration
function Function_name(arguments) {
    console.log("BODY");
    return arguments; // return statement is optional, here I am returning true as a value anything can be returned
}

// method2 -> here function call cannot be made before function declaration
// This is because the function is stored in a variable, and variables cannot be used before declaration.
let func1 = function (arguments) {
    console.log("BODY");
    return arguments;
}
//------------------------------------------------------------------------------

// => Parameters

// Arguments Array -> contains all the values passed to the function, it is the default parameter
function func2() {
    return arguments[0];
}

let result = func2("hello");
console.log(result);

// Default parameters
// Here if we don't pass any value to the parameters it will take the default value given during declaration
function func3(a = 10, b = 20) {
    return a + b;
}

// Rest parameters
function func4(a, b, ...c) {
    console.log(a, b, c); 
}
func4(1, 2, 3, 4, 5); // [1,2,3,4,5]
//here a = 1, b = 2, and then the remaining(rest) parameters will be stored in the array c i.e. c = [3,4,5]
//This is due to we used "..."(rest operator(aka spread operator)) before "c" 
//this helps to handle any number  of arguments passed to the function in a single parameter
//-------------------------------------------------------------------------------------------------------


// => Arrow functions

// this keyword -> refers to the current context object, 
// ex. 
let obj1 = {
    key1: "val1",
    func1: function(){
        console.log(this.key1);
        console.log(this); // here this keyword refers to the object
    }
}

// Declaration of an arrow function

//method1
let arrowFunc1 = (arguments)=>{
    console.log("BODY");
    return arguments;
}

//method2 -> this method is called implecit return method and is used when the function only has a single statement
let arrowFunc2 = (arguments) => arguments; 
let arrowFunc3 = (arguments) => (arguments); // can be wrapped in paranthesis, but if wrapped in curly brackets using return statement will become compulsury
//----------------------------------------------------------------------------------------------------------


// => Immediatly Invoked Functions Expressions (IIFE) 
// These are used to protect from global scope pollution.
// These are functions that are executed immediately after they are defined on their own without a function call.
// To write an IIFE we just need to the wrap the function in paranthesis, followed by a set of paranthesis.
// We might face a problem in the rest of the code below IIFE because if we don't end the statement with a semicolon it will throw an error.

// Example

let IIFE = ((arguments)=>{arguments})(); // this is gonna get executed immediatly

(function IIFE2(arguments){ // this is a named IIFE
    return arguments;
})(); // this is gonna get executed immediatly

(function(){ // this is unnamed IIFE
    return arguments;
})();

// Passing arguments to an IIEF
(function IIFE2(param){
    return param;
})("param"); // we pass any arguments through paranthesis.