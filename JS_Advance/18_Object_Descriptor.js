// What are descriptors in JavaScript?
// Descriptors are objects that define the properties of an object's own properties in JavaScript.

const myObj = {
    name: 'John',
    age: 30,
    isEmployed: true
}

// => Getting property descriptors of an object
// These methods return a hard copy of the property descriptor, meaning that modifying the returned descriptor will not affect the original object.

// 1st way: Using Object.getOwnPropertyDescriptor to get the descriptor of a specific property of an object
// This method returns a property descriptor for an own property (if it exists) of the specified object.
// If only object's name is passed as an argument, it returns undefined because the object is not a property it is an object itself.
const myDescriptor = Object.getOwnPropertyDescriptor(myObj, 'name');
console.log("1st way to get property descriptor for a specific property");
console.log(myDescriptor);
console.log("")
// Output:
// {
//     value: 'John',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

// 2nd way: Using Object.getOwnPropertyDescriptors to get all descriptors of an object
// This method returns an object containing all own property descriptors of the specified object.
const myDescriptor2 = Object.getOwnPropertyDescriptors(myObj);
console.log("2nd way to get property descriptor for all properties of an object");
console.log(myDescriptor2);
console.log("")
// Output:
// {
//   name: {
//     value: 'John',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   age: { value: 30, writable: true, enumerable: true, configurable: true },
//   isEmployed: { value: true, writable: true, enumerable: true, configurable: true }
// }



// => Modifying a property descriptor

// 1st way: Using Object.defineProperty to redefine the property with a new descriptor
Object.defineProperty(myObj, 'name', {
    writable: false, // Making the 'name' property non-writable
    // the rest of the properties remain the same
    // we don't need to redefine them if we don't want to change them
});
console.log("2nd way to modify property descriptor for a specific property");
//console.log(myDescriptor); // This will still show the original descriptor because we didn't change the reference of myDescriptor, i.e. it is old descriptor
// To see the updated descriptor, we need to get it again from the object
console.log(Object.getOwnPropertyDescriptor(myObj, 'name')); // This will show the updated
console.log("")
// Output:
// {
//     value: 'John',
//     writable: false,
//     enumerable: true,
//     configurable: true
// }

// 2nd way: Using Object.defineProperties to redefine multiple properties at once
Object.defineProperties(myObj, {
    age: {
        writable: false // Making the 'age' property non-writable
    },
    name: {
        enumerable: false // Making the 'isEmployed' property non-enumerable
    }
});
console.log("3rd way to modify property descriptor for multiple properties of an object");
console.log(Object.getOwnPropertyDescriptors(myObj));
console.log("")

// => Properties of a property descriptor

// - value: The value associated with the property.
// - writable: A boolean indicating if the property can be changed.
// - enumerable: A boolean indicating if the property shows up during enumeration(looping for-in) of the properties on the object.
// - configurable: A boolean indicating if the property descriptor can be changed and if the property can be deleted.