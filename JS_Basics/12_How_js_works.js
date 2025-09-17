// => Executoion Context
// This means how the code is executed in the browser/ or any other environment.
// When the execution begins the first thing that happens is the creation of the Global Execution Context.
// Note: In the browser, the global execution context is the window object, while in Node.js, the global execution context is the global object.
// Note: Javascript is a single-threaded language, which means it can execute only one task at a time.

// There are two types of Execution Context:
// 1. Global Execution Context
// 2. Functional Execution Context
// 3. Eval Execution Context

// => Steps of execution:
// 1. Global Creation Phase : In this phase, the JS engine creates the global object and assigns it to the variable such as window or global, which can be then referenced using this keyword.
// 2. Memory Creation Phase(Creation Phase) : In this phase, the JS engine allocates memory for the variables and functions. This is also known as the Hoisting phase. This is also caled as the FIrst cycle.
//      - All the variables are assigned a default value of undefined.
//      - All the functions are stored in the memory, with their name and definition.
// 3. Code Execution Phase : In this phase, the JS engine assigns values to the variables and executes the functions line by line.
//      - The JS engine assigns values to the variables.
//      - The JS engine executes the functions line by line.
//      - A new execution lcontext is created for each function, which again consists of a memory and a code execution phase.
//      - Once the function is executed the execution context is destroyed and the Result of the function is returned to the calling function or global execution context.


// => Call stacks
// A call stack is a data structure that stores information about the active subroutines of a computer program.
// It is used to manage the execution of functions and methods in a program.
// Any function that is called is added to the top of the call stack, and any function that returns is removed from the top of the call stack.
// In the bottom-most of the call stack is the global execution context.