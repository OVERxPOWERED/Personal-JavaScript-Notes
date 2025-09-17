//OPERATORS

// 1. Arithmetic Operators => +, -, *, /, %, ++, --
let sum = 1+2; // 3
let diff = 2-1; // 1
let product = 2*3; // 6
let quotient = 4/2; // 2
let remainder = 5%2; // 1
let increment = 1++; // 2
let decrement = 2--; // 1
let power = 2**3; // 8

//2. Assignment Operators => =, +=, -=, *=, /=, %=, **=, <<=, >>=, >>>=, &=, ^=, |=
let a = 1;
let b = 2;
b += a; // b = b + a => 3   
b -= a; // b = b - a => 1
b *= a; // b = b * a => 2
b /= a; // b = b / a => 2
b %= a; // b = b % a => 0
b **= a; // b = b ** a => 2

//3. Comparison Operators => ==, ===, !=, !==, >, <, >=, <=
let x = 1;
let y = 0;
console.log(x == y); // false
console.log(x === y); // false
console.log(x != y); // true
console.log(x !== y); // true
console.log(x > y); // true
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <= y); // false

//4. Logical Operators  => &&, ||, !
let True = true;
let False = false;
console.log(True && False); // false
console.log(True && True); // true
console.log(True || False); // true
console.log(False || False); // false
console.log(!True); // false
console.log(!False); // true

//5. Bitwise Operators => &, |, ^, ~, <<, >>
//6. String Operators => + (concatenation)
let str1 = "1" + 2; // "12"
let str2 = "1" + 2 + 1; // "121"
let str3 = 1 + 2 + "1"; // "31" This happens because of the rule of left to right associativity. 
//7. Ternary Operators => condition ? true : false;

