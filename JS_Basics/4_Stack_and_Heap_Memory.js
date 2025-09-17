// Stack memory : Stores primitive data types, user receives a copy of the data.
// Example: 
let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20
//In the above example b received a copy of a, so changing b does not affect a.

// Heap memory : Stores non-primitive data types, user receives a reference to the data.
// Example:
let obj1 = {name: 'John'};
let obj2 = obj1;
obj2.name = 'Doe';
console.log(obj1); // {name: 'Doe'}
console.log(obj2); // {name: 'Doe'}
//In the above example obj2 received a reference to obj1, so changing obj2 also affects obj1.