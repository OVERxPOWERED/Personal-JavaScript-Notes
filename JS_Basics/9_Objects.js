// // => Definition

// //Object - is a collection of key-value pairs
// //Object is a reference type   
// //-----------------------------------------------------

// // => Declaration

// //Constructor - creates a singleton object i.e. it is one of its type
// let obj2 = new Object();
// obj2.key1 = "val1";
// obj2.key2 = "val2";
// obj2.key3 = "val3";
// console.log(obj2); // {key1: "val1", key2: "val2", key3: "val3"}


// //------------------------------------------------------------


// //literal - doesn't create a singleton

// let obj1 = {
//     key4: "val1",
//     key5: "val2",
//     key6: "val3",
// }
// //-----------------------------------------------------------

// => Creating an instance of an existing object
// let obj7 = Object.create(obj1); // creates a new object with obj1 as its prototype
// console.log(obj7); // {}

// // => Accessing Values

// /*method 1 */ console.log(obj1.key1);// "val1"
// /*method 2 */ console.log(obj1["key2"]);// "val2" // Needs key as a string
// //-------------------------------------------------------------


// // => Symbol as a key
// let mySym = Symbol("key1");

// let obj3 = {
//     [mySym]: "val1",
// }

// console.log(obj3[mySym]); // "val1", symbol is not passed as a string
// console.log(obj3); // {Symbol(key1): "val1"}
// //------------------------------------------------------------------

// // => Methods
// Object.freeze(obj1); // makes the object immutable, i.e. it cannot be changed
// Object.keys(obj1); // returns an array of keys
// Object.values(obj1); // returns an array of values
// Object.entries(obj1); // returns an array of key-value pairs
// //-----------------------------------------------------------------------------


// // => Combining objects
// /*method1 => */let obj4 = { ...obj1, ...obj2 };
// /*method2 => */let obj5 = Object.assign({}, obj1, obj2); // all the values of the objects are copied to the first(target) object, if obj1 would have been the first argument all the values of obj2 would have been copied to obj1
// // we probided an empty object to return a new object with the values of both obj1 and obj2

// console.log(obj5); // {key1: "val1", key2: "val2", key3: "val3", key4: "val1", key5: "val2", key6: "val3"}
// console.log(obj1); // {key4: "val1", key5: "val2", key6: "val3"}
// //-------------------------------------------------------------------------------------

// // => Checking the existence of a key
// /*method1 => */console.log("key1" in obj1); // true
// /*method2 => */console.log(obj1.hasOwnProperty("key1")); // true
// //-------------------------------------------------------------------------------------


// // => Destructuring
let obj6 = {
    key1: "val1",
    key2: "val2",
    key3: "val3",
    key4: "val4",
}

const {key1, key2} = obj6; // destructuring the object, now keys can be used without referencing the object
console.log(key1);

const {key3 : k3} = obj6; // we can also have an abreviation for a key
console.log(k3);

function myFunc({key1, key2}){
    //Here key1 and key2 are destructured from obj6
    console.log(`${key1} ${key2}`); ;
}

myFunc(obj6);