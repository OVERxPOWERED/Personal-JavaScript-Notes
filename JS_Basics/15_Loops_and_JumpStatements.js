// 1. for loop
// Syntax: 
// for(initialization; condition; increment/decrement) 
// { 
//    code block 
//}
// Example:
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. while loop
// Syntax:
// while(condition) {
//    code block
//}
// Example:
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// 3. do while loop
// Syntax:
// do {
//    code block
// } while(condition);
// Example:
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// 4. break statement
// Syntax:
// break;
// Example:
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// 5. continue statement
// Syntax:
// continue;
// Example:
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

// 6. label statement
// Syntax:
// label_name: statement
// Example:
outer: for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 3 && j === 3) {
            break outer;
        }
        console.log(i, j);
    }
}

// 7. return statement
// Syntax:
// return value;(value is optional)
// Example:
function sum(a, b) {
    return a + b;
}