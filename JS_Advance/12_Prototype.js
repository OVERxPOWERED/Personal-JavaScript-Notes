// Javascript has a prototyple based inheritance system.
// Prototype is a special object in javascript which is used to add new properties and methods to existing objects.

//In js all the entities are objects, or we can say are child of Object class.
// Ex:

function myFunc(){
    return "Hello" + myFunc.Name;
}
myFunc.Name = " OP";


console.log(myFunc instanceof Object); // true
console.log(myFunc());

//We can add new properties and methods to existing objects using prototype.