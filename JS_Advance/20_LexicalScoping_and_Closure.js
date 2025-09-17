// Lexical Scoping
// Lexical scoping is a function that has access to its own scope, the outer function's scope, and the global scope, in simlpe terms it refers to a pair of "{}" any variable inside these braces will be allowed to be accessed by any child function inside it.
// However, the parent cannot access the child function's variables.
// Also the sibling functions cannot access each other's variables.
// Closure is created when a function is defined inside another function.
// This scenario is also called lexical scoping, where the scope of a variable is determined by its position in the source code.

// Example of Lexical Scoping

function Outer() {
    let outerVar = "I am outer variable";
    // console.log(innerVar); // This will throw an error as innerVar is not defined in this scope
    function Inner() {
        let innerVar = "I am inner variable";
        // let outerVar = "I am outer variable's inner copy"; // This overrides the outer variable, but does not affect the outer scope

        console.log(outerVar); // Accessing outer variable
        console.log(innerVar); // Accessing inner variable
    }
    Inner();
}


// Closure
// This concept allows a function to remember its lexical scope even when the function is executed outside that scope.
// A closure is a combination of a function bundled together with the lexical environment in which that function was declared.

// Example of Closure

function makeCounter() {
    let count = 0; // This variable is private to the makeCounter function
    return function() {
        count += 1; // This inner function has access to the count variable
        return count;
    };
}

const counter = makeCounter(); // Create a new counter instance
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
// As you can see, the inner function retains access to the count variable even after makeCounter has finished executing.