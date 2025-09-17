// Definition
// Fetch is a modern way to make HTTP requests in the browser.
// It returns a promise that resolves to a Response object, or rejects with an error.
// Therefore we can use .then and .catch to handle the response or error.

//=================================================================
// Interview Question => if an api returns an error code 404, it will be returned in which block .then or .catch block.
// answer is then, because it is also considered a reponse and error only occurs if it is not able to make a request or the api was not able to return data
//=================================================================

// In 9_Promises we saw that the fetched data was getting printed before all the code.
// This is because because the fetch request instead of going to the task queue it goes to a speacial priority queue namely microtask queue.

// syntax
fetch('https://randomuser.me/api/',{/* Headers can be passed here(optional) */}).then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
});
//=========================================================================

// => Fetch Interfaces

// 1. Window.fetch() and WorkerGlobalScope.fetch()
// The fetch() method used to fetch a resource.

// 2. Headers
// Represents response/request headers, allowing you to query them and take different actions depending on the results.

// 3. Request
// Represents a resource request.

// 4. Response
// Represents the response to a request.


// When fetch is called, two things happen 
// 1st => Reserving memory for data(variable), and two arrays onFullfilled[] and onRejection[]
//        onFullfilled[] => carries the resolution of the promise.
//        onRejection[] =>   carries the rejection of the promise.
// 2nd => Handles browser(chrome etc.)/environment(node etc.) based api.
//        A network request is send through either the brower or environment.
//        If the request is sent successfully, data returned is sent to the onFullfilled[] array, otherwise onRejection[].
//        Initially the value of data(variable) is empty, onFullfilled[] and onRejection[] provide a function, which is responsible for setting the value of data(variable) when the request if resolved/rejected.      
