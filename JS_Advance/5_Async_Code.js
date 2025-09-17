// Refer most data about async from my  HTML, CSS, JS copy

// setTimeout( handler_function, time )
// Executes the function after the specified time.
// Ex => 
document.addEventListener('click',()=>{
    setTimeout( ()=>{
        console.log("BURHANUDDIN")
    }, 2000); //1000 => 1s
})
// Time is given in miliseconds

// Example of clearTimeout
let timeoutId = setTimeout(()=>{
    document.querySelector('h1').innerHTML = "The text got changed";
}, 5000);

document.querySelector('button').addEventListener('click',()=>{
    clearTimeout(timeoutId);
})

// There is also a third parameter to setTimeout, which is the parameter to the handler function.
// Example => setInterval( handler_function, time , parameters_for_handler_function )
//---------------------------------------------------------------------------------------------------------

// setInterval( handler_function, time , parameters_for_handler_function )
// Similar to setTimeout, but executes the function repeatedly after the specified time.

// Instead of clearTimeout, clearInterval is used to clear the interval.