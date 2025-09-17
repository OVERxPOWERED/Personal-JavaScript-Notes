//Used to store multiple values of differet types in a single variable, in js these are resizable.
//Uses 0 based indexing.


// => Definition
let arr1 = [1,"hd",true, [3,"r",false], {"A":1,"B":2}];
let arr2 = new Array(5,"b",true);  
let arr3 = [3,1,4,6,2];
//--------------------------------------------------

// => Accessing
let first = arr1[0]; // 1
let second = arr1[1]; // "hd"
let third = arr1[2]; // true
let fourth = arr1[3]; // [3,"r",false]
let fifth = arr1[3][0]; // 3
let sixth = arr1[4] // {"A":1,"B":2}
let seventh = arr1[4]["A"]; // 1
//----------------------------------------------------

// => Methods
console.log(arr1.length); // 5
arr1.push(6); // adds 6 to the end
arr1.pop(); // removes the last element
console.log(arr1.includes(6));  // true
console.log(arr1.indexOf(6)); // 5
arr3.reverse(); // reverses the array
arr3.sort(); // sorts the array
let arr4 = arr3.join("-"); // takes the separator string as argument, and returns a string.
console.log(arr4); // 3-1-4-6-2
const myEle = arr1.find((ele)=> ele == 'hd')
//----------------------------------------------------


// => slice & splice
let array1 = [1,2,3,4,5];

let array2 = array1.slice(2,4); // [3,4] does not include 4th element and does not change the original array
console.log("A ", array1);
let array3 = array1.splice(2,4); // [3,5] changes the original array by removing/deleting section of the array between the given range
console.log("B ", array1);
//----------------------------------------------------


// => Joining arrays

let arr5 = [1,2,3];
let arr6 = [4,5,6];

let arr7 = arr5.concat(arr6); // [1,2,3,4,5,6] returns a new array without changing the original array
let arr8 = arr7.concat("HELLO"); // [1,2,3,4,5,6,"HELLO"] concat() can also be used to add elements to the end of the array

arr5 = [...arr5, ...arr6]; // [1,2,3,4,5,6] joining using spread operator, the original array is getting changed here.
//-------------------------------------------------------


// => Turning a multidimensional array into a 1D array
let arr9 = [1,2 ,[3, 4 ,[5, 6]]];
let arr10 = arr9.flat(Infinity); // [ 1, 2, 3, 4, 5, 6 ] returns a new array without changing the original array, parameter = depth(number of levels)
// let arr10 = arr9.flat(1); //  [ 1, 2, 3, 4, [ 5, 6 ] ]
// let arr10 = arr9.flat(2); //  [ 1, 2, 3, 4, 5, 6 ]
console.log(arr10); // [ 1, 2, 3, 4, 5, 6 ]
//-------------------------------------------------------


// => Turning any data to an array
// Array.from -> turns any data to an array
console.log(Array.isArray("Hello")); // false
let arr11 = Array.from("Hello"); // ["H", "e", "l", "l", "o"]

let arr12 = Array.from({key1: "val1", key2: "val2"}); 
console.log(arr12); // []

let arr13 = Array.from(Object.keys({key1: "val1", key2: "val2"}));
console.log(arr13); // ["key1", "key2"]

let arr14 = Array.from(Object.values({key1: "val1", key2: "val2"}));
console.log(arr14); // ["val1", "val2"]

let arr15 = Array.from(Object.entries({key1: "val1", key2: "val2"}));
console.log(arr15); // [["key1", "val1"], ["key2", "val2"]]
console.log(arr15.flat(Infinity)); // ["key1", "val1", "key2", "val2"]

// Array.of -> turns any collection of data to an array
let arr16 = Array.of(1,2,3, "Hello"); // [1, 2, 3, "Hello"]