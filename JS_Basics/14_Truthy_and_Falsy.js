

// Flasy Values : 0, '', undefined, null, NaN, false

// Truthy Values : 1 or any non-zero number, '0', 'false', 'undefined', 'null', 'NaN', ' ', [], {}, true, function(){}

// let val1 = undefined || 10;
let val1 = null || 10;
console.log(val1);

// Thsi similar above operation can be done using Nullish Coalescing Operator
// let val2 = undefined ?? 10;
let val2 = null ?? 10;
console.log(val2);