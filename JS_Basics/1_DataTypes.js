// Data types

//-> Primitive Data Types
let StringDataType = "This is a string";
let NumberDataType = 123;
let BooleanDataType = true;
let BigIntDataType = 1234567890123456789012345678901234567890n; // Big Int
let SymbolDataType = Symbol("This is a symbol");
let NullDataType = null;
let UndefinedDataType = undefined;

//-> Non-Primitive Data Types
let ArrayDataType = [1, 2, 3, 4, 5];
let ObjectDataType = {key1: "val1", key2: 2, key3: true, key4: [1, 2, 3], key5 : StringDataType};
let FunctionDataType = function(){}; // Function is also a data type in JS.

// => To check the data type of a variable, we can use the typeof operator.

// console.log(typeof StringDataType); -> string
// console.log(typeof NullDataType); -> object (Remember this for interview purposes.)
// console.log(typeof UndefinedDataType); -> undefined (Remember this for interview purposes.)

