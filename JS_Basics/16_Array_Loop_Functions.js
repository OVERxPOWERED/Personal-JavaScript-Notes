// 1. for of loop
// 2. forEach loop
// 3. map loop
// 4. filter loop
// 5. find loop
// 6. reduce loop
// 7. some loop
// 8. every loop
// 9. includes loop

// Note: for...in loop can be used for iterating objects, for demonstrstion refer 17_Maps_vs_Object.js file.

// 1. for of loop
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}

// 2. forEach loop
// it has three parameters, first is the element, second is the index and third is the array itself.
// It retuns nothing(undefined).
colors.forEach(function (color) {
    console.log(color);
});

// 3. map loop
// it returns a new array of results.
const names = [{name: 'John'}, {name: 'Jane'}, {name: 'Doe'}];
const Greetings = names.map(function ({name}) {
    return name + ' hello';
});
console.log(Greetings);

// 4. filter loop
// it returns a new array of results.
const number = [1, 2, 3, 4, 5];
const evenNumbers = number.filter((num)=> num % 2 === 0);
// const evenNumbers = numbers.filter((num)=> {
// return num % 2 === 0
// });
// Returns an array of elements for which the expression is true, instead of the result of the expression.
console.log(evenNumbers);

// 5. reduce loop
// it returns a single value.
// This function reduces the array to a single value.
// the accumulator is the result of the previous iteration.
// the currentValue is the current array element for current iteration.
// The accumulator can be initialized with an initial value.
// After each iteration, the accumulator is updated with the currentValue.
const numbers = [1, 2, 3, 4, 5];
const initialValue = 0;
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValue);

console.log(sum);
