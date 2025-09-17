// Maps
// Maps are a new object type in ES6 (2015). They are used to store key-value pairs.
// Maps are similar to objects, but there are some key differences.
// Maps are ordered collections, which means that the order of items is preserved.
// Maps are iterable, which means that they can be looped over using a for...of loop.   
// but they can't be iterated through for...in loop.
// Maps can have objects as keys.
// Maps have unique keys, which means that duplicate keys are not allowed.

/* Declaration */ let myMap = new Map();

/* Initialization */
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

// /* Accessing */
/* Method1*/console.log(myMap.get("key1")); // value1
/* Method2*/console.log(myMap["key2"]); // value2

// /* Iterating */
for (let [key, value] of myMap) {
    console.log(key); // key1, key2, key3
    console.log(value); // value1, value2, value3
}
for (let entries of myMap) {
    console.log(entries); // ["key1", "value1"], ["key2", "value2"], ["key3", "value3"]
}
for (let key of myMap.keys()) {
    console.log(key); // key1, key2, key3
}
for (let value of myMap.values()) {
    console.log(value); // value1, value2, value3
}
for (let entries of myMap.entries()) {
    console.log(entries); // ["key1", "value1"], ["key2", "value2"], ["key3", "value3"] 
}

/* Methods */
console.log(myMap.size); // 3
console.log(myMap.has("key1")); // true
console.log(myMap.delete("key1")); // true if deleted
console.log(myMap.delete("key4")); // false if not
myMap.clear(); // clears the map
console.log(myMap.size); // 0

/* Objects */
// Refer DataTypes.js for more details
// Objects are not iterable through for...of loops.
// Objects can have only string or symbol as keys.
// Objects have no size property.
// Objects have no clear method.

let myObj = {
    key1: "val1",
    key2: "val2",
    key3: "val3",
}

/* Iterating */ // Objects are not iterable through loops directly, we use for...in loop.   
// for...in loop only returns the keys, for values we need to use myObj[key].
// if used with an array returns the index, because arrays are also objects with indexes as keys.
for (let key in myObj) {
    console.log(key); // key1, key2, key3
    console.log(myObj[key]/* myObj.key */); // val1, val2, val3
}