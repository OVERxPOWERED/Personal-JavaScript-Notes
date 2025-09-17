// => Definition
// A promise is an object that represents the outcome of an asynchronous operation.
// Properties => 
// 1. state => pending, fulfilled, rejected
// 2. value => value of the promise
// 3. reason => reason of the rejection of the promise

// => History
// Before ES6, promises were consumed but can't be accessed directly, so people used libraries like blue bird, q, etc.
// But now these libraries are irrelavent to use because promises are natively supported in core JS.

// => Creating a promise
const promise1 = new Promise((resolve, reject)=>{
    // Any Async Task
    // Such as, DB calls, API calls, Network calls, cryptographgy etc.
});
//==========================================================================

// => .then, .catch and .finally
// these receive a callback function and return a promise

// .then => is used to handle the success of the promise
// .catch => is used to handle the failure of the promise
// .finally => is used to handle both the success and failure of the promise, it is kind of a default function of the promise, which run either if the promise is resolved or rejected.
//              can be used to clean up resources, such as closing a network connection, or cleaning up a file after writing to it,                
//===============================================================================

// => Resolving a promise
// resolve is a method provided by the promise object to resolve the promise.
// The below examples explain how to resolve a promise


// Example 1

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Promise2 created successfully");
    }, 2000);
});

promise2.then((value)=>{
    console.log("Promise2 consumed");
}).catch((error)=>{
    console.log(error);
});

// Output
// Promise created successfully

// Explanation => Here code in .then didn't work because we didn't connect it to .then, to connect we need to resolve the promise.
// To resolve the promise, we need to call the resolve() method in the promise.

// Example 2

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Promise3 created successfully");
        resolve();
    }, 2000);
});

promise3.then((value)=>{
    console.log(value + " Promise3 consumed");
}).catch((error)=>{
    console.log(error);
});

// Output2 
// Promise3 created successfully
// Promise3 consumed

// Explanation => Here the code in the .then did run becasue we resolved the promise.

// => Returning data from a promise
// To return data and receive it in the .then we pass some data to the resolve function while resolving the promise.

// Example 3

const promise4 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Promise4 created successfully");
        resolve("Hello");
    }, 2000);
});

promise4.then((value)=>{
    console.log(value + " Promise4 consumed");
}).catch((error)=>{
    console.log(error);
});

// Output3
// Promise4 created successfully
// Hello Promise4 consumed
//=================================================================================


// => Demonstrating Rejection of a promise
const promise5 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        // suppose while calling an api there is an error
        let error = true;
        if(error){
            reject("Promise5 rejected");
        }
        else{
            resolve("Error occured : Promise5 resolved");
        }
    }, 2000);
});

promise5.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});

// Output4
// Error occured : Promise5 resolved

// Explanation => Here the code in the .catch run becasue we rejected the promise, and yes we can return an error message in the reject function.
//==================================================================================

// => Handling a promise using async and await
// async => is used to declare a function as asynchronous.
// await => is used to wait for the promise to be resolved, it can only be used in async functions.
const promise6 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        // suppose while calling an api there is an error
        let error = true;
        if(error){
            reject("Promise6 rejected");
        }
        else{
            resolve("Error occured : Promise6 resolved");
        }
    }, 2000);
});

async function ConsumePromise6(){
        const response = await promise6;
        console.log(response);  
}

// Output5
// There will be an error showing that the catch block is not handled

// Explanation => The problem with async await is that it does not handle rejections properly.

// => Handling Rejection in Async Await
// We use try & catch blocks to handle rejections in the async function to handle rejections.

const promise7 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        // suppose while calling an api there is an error
        let error = true;
        if(error){
            reject("Promise7 rejected");
        }
        else{
            resolve("Promise7 resolved");
        }
    }, 2000);
});

async function ConsumePromise7(){
    try{
        const response = await promise7;
        console.log(response);  
    }
    catch(error){
        console.log(error);
    }
}

// Output6
// Error occured : Promise6 resolved

// Explanation => Here the error is handled in the catch block.
//====================================================================


// Hence we can either use .then and .catch or use async and await to handle promises.

// Practice

fetch('https://randomuser.me/api/').then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(`ERROR : ${err}`);
})