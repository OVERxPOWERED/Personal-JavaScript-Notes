// => Input in JavaScript
// - There multiple ways to take input in JavaScript.


// 1st =>
// - In browsers, we can use the prompt() function to take input from the user.
// - The prompt() function displays a dialog box that prompts the user for input.
// - The function takes two arguments: the first is the message to display, and the second is the default value for the input field.
// - The function returns the value entered by the user as a string.
// - The prompt() function is deprecated in modern browsers and should not be used.
// - Example:
// let name = prompt("Enter your name:", "John Doe");


// 2nd =>
// - In Node.js, we can use the process.stdin object to take input from the console.
// - The process.stdin object is a readable stream that represents the standard input (stdin) of the process.
// - We can use the on() method of the process.stdin object to listen for the 'data' event, which is emitted when the user enters input.
// - The 'data' event handler receives a Buffer object that contains the input data.
// - We can use the toString() method of the Buffer object to convert the data to a string.
// - Example:
// process.stdin.on('data', (data) => {
//   let input = data.toString().trim();
//   console.log(`You entered: ${input}`);
// });

// 3rd =>
// - In Node.js, we can also use the readline module to take input from the console.
// - The readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.
// - We can use the createInterface() method of the readline module to create a readline.Interface object.
// - The createInterface() method takes an options object that specifies the input and output streams.
// - Example:
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question('What is your name? ', (answer) => {
//   console.log(`Hello, ${answer}!`);
//   rl.close();
// });
