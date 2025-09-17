//Data type Coversion
let toNum = Number("123"); // 123
let toNum1 = Number("abc"); // NaN
let toNum2 = Number("123a"); // NaN
let toNum3 = Number(null); // 0
let toNum4 = Number(undefined); // NaN

let toStr = String(123); // "123"
let toStr1 = String(true); // "true"
let toStr2 = String([1, 2, 3]); // "1,2,3"
let toStr3 = String({key1: "val1", key2: 2, key3: true, key4: [1, 2, 3], key5 : StringDataType}); // "This is a string"
let toStr4 = String(null); // "null"
let toStr5 = String(undefined); // "undefined"
let toStr6 = String(NaN); // "NaN"
let toStr7 = String(Infinity); // "Infinity"

let toBool = Boolean(0); // false
let toBool1 = Boolean(1); // true
let toBool2 = Boolean(3); // true
let toBool3 = Boolean("abc"); // true
let toBool4 = Boolean(""); // false
let toBool5 = Boolean(undefined); // false
let toBool6 = Boolean(NaN); // false
let toBool7 = Boolean(Infinity); // true
let toBool8 = Boolean(null); // false

let toObj = Object("123"); // {0: "1", 1: "2", 2: "3"}
let toObj1 = Object(123); // {}
let toObj2 = Object(true); // {}
let toObj3 = Object([1, 2, 3]); // [1, 2, 3]
let toObj4 = Object(null); // {}
let toObj5 = Object(undefined); // {}
let toObj6 = Object(NaN); // {}
let toObj7 = Object(Infinity); // {}


let toArr = Array(1,"1",false); // [1, "1", false]
let toArr1 = Array(1); // [1]
let toArr2 = Array("1"); // ["1"]
let toArr3 = Array(true); // [true]
let toArr4 = Array(null); // [null]
let toArr5 = Array(undefined); // [undefined]
let toArr6 = Array(NaN); // [NaN]
let toArr7 = Array(Infinity); // [Infinity]

