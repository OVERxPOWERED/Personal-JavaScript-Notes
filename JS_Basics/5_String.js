let str1 = "Hello";
let str2 = "World";

//***********String concatenation***********
console.log(str1 + " " + str2); // Hello World, use string interpolation instead of concatenation, because it preffered in modern JS.

//***********String interpolation***********
console.log(`This is sting interpolation: ${str1} ${str2}`); // This is sting interpolation: Hello World

//***********Methods to define a string***********
let str3 = new String("Hello");
//This gives an object of type String, which conssists of a string value and methods to manipulate the string.
// String { "Hello" }
// 0: "H"
// 1: "e"
// 2: "l"
// 3: "l"
// 4: "o"
// length: 5
// __proto__: this is the prototype of the object, which contains methods to manipulate the string.

//***********String methods***********
let str4 = "Hello World";
console.log(str4.length); // 11
console.log(str4.toUpperCase()); // HELLO WORLD
console.log(str4.toLowerCase()); // hello world
console.log(str4.charAt(0)); // H
console.log(str4.indexOf("W")); // 6
console.log(str4.lastIndexOf("W")); // 6
console.log(str4.includes("World")); // true
console.log(str4.startsWith("Hello")); // true
console.log(str4.endsWith("World")); // true
console.log(str4.substring(0, 5)); // Hello , value of the last index is not included, converts negative index to 0.
console.log(str4.slice(-1, -5)); // supports negative index, so it starts from the end of the string.
console.log(str4.trim()); // removes white spaces from the start and end of the string.
console.log(str4.replace("World", "Universe")); // Hello Universe
console.log(str4.split(" ")); // ["Hello", "World"], splits the string based on the provided separator and returns an array.



