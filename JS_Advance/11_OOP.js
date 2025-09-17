// Object oriented programming (OOP) is a progaramming paradigm, its just a style to write code.
// Classes were introduced in ES6, they are used to create objects, they are just a template to create objects.

// 1. this keyword

const user = {
    // constructor: ()=>{
    //     return {...user}
    // },
    username: "John",
    isLoggedIn: true,
    giveThis: function () {
        console.log(this);
    }
}

user.giveThis(); // output:{ username: 'John', isLoggedIn: true, giveThis: [Function: giveThis] }
console.log(this) // output: {}

// Explanation : The va;lue of "this" is different because it depends on the current context, in object the context is the object itself, so the value of "this" is the object itself, while in global context the value of "this" is the global scope context in execution context.
//               Hence "this" keyword gives the current context object.
//==============================================================================


// 2. new keyword
// "new" is a contructor function that helps to create a new instance of an object, class or function.
// step1 => When we use the new keyword, it creates an empty object.
// step2 => It calls a constructor function, which packs all the arguments and properties into the object.
// step3 => It injects this new object into the "this" keyword(context).

function User(username, isLoggedIn) {
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.getName = function () {
        console.log(this.username);
    }

    return this; // return this explicitly is optional, because it happens implicitly
}

let user1 = new User("Ramesh", false);
let user2 = new User("Bach na saka", true);

user1.getName(); // Ramesh
user2.getName(); // Bach na saka

console.log(user1.constructor()); // this is a constructor function, which implicitly exists, when we are creating instances.

// instanceof operator
//Used to check if an object is an instance of a class or not.
console.log(user1 instanceof User); // true
