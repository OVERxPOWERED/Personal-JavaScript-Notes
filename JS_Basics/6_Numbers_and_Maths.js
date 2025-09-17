//Defining method
let num1 = 120.4567;
let num2 = new Number(10000000);

console.log(num1); // 120.4567
console.log(num2); // [Number: 20] this gives an object with some methods for numbers.

// Methods
console.log(num1.toString()); // "120.4567" this converts number to string
console.log(num1.toFixed(2)); // "120.46" this converts number to string with 2 decimal points and can have n digits after the decimal point
console.log(num1.toPrecision(1)); // "1e+2" this converts number to string with 1 significant digit
console.log(num1.toPrecision(3)); // "120" this converts number to string with 3 significant digits
console.log(num2.toLocaleString()); // "10,000,000" this converts number to string with local specific format by default it is US format
console.log(num2.toLocaleString("en-IN")); // "1,00,00,000" this converts number to string with local specific format for India
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(Math.random()); 
// this generates a random number between 0 and 1, 
// to get values between a defined range multiply the result with the upper limit of the range and add the lower limit of the range and
// to get integer values use Math.floor()/round()/ceil() method 
 
//Example

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // this generates a random number between 10 and 20