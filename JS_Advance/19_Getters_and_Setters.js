// Getters and Setters in JavaScript
// These are special methods that allow you to define how properties of an object are accessed and modified.
// Getters are used to retrieve the value of a property, while setters are used to set the value of a property.
// In JavaScript, you can define getters and setters using the `get` and `set` keywords, and if either one is defined, the other must also be defined.

// Example of a simple object with a getter and setter

class Person{
    constructor(name){
        this._name = name; // Using underscore to indicate that this is a private property, it can be accessed directly but should be treated as private.
    }

    set name(newName){
        console.log("Setting name to:", newName);
        this._name = newName;
    }

    get name(){
        return `The name is ${this._name}`; // this.Pname;
    }
}

const p1 = new Person("John");


console.log("\nWhen p1.name is used it calls the getter method");
console.log(p1.name,"\n"); // The name is John

console.log("When p1.Pname is used directly accesses the property");
console.log(p1._name,"\n"); // John

console.log("When p1.Pname = 'Bob'; is used it directly updates the property");
p1.name = 'Bob';
console.log(p1._name);
console.log(p1.name,"\n"); // The name is John


console.log("When p1.name = 'Alice'; is used it calls the setter method");
p1.name = 'Alice'; // Setting name to: Alice
console.log(p1.name,"\n"); // The name is Alice
console.log(p1._name,"\n"); // Alice
