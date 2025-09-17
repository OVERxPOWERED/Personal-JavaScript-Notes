//-------------------------------------------------
// This is just for some styling, Ignore this

let divs = document.querySelectorAll('.exEventListner');

divs.forEach((div) => {
    div.style.border = '2px solid red';
    div.style.textAlign = 'center';
    div.style.margin = '10px';
})
//------------------------------------------------------



// Ways to add event listner

// 1. adding event attribute to the html element
// 2. addEventListener
// 3. attachEvent
// 4. on

// 1st way => Mostly avoided as it is less scalable
// <div onclick = "functionName()"></div>

// 2nd way => Mostly used
const myDiv = document.querySelector('#exEventListner1');


myDiv.addEventListener('click', () => {
    myDiv.children[1].innerHTML = 'You clicked me';
    setTimeout(() => {
        myDiv.children[1].innerHTML = 'Click me';
    }, 1500)
}, false) // the third parameter optional and is false by default, to know more about this parameter refer Event Propogation part in this file.

// 3rd Ways => This was used for internet explorer compatibility
// 4th way => This is used in jQuery.
//--------------------------------------------------------------


// Event Object

// When an event occurs the brower returns an event object, which contains information about the event that occured.
const myDiv2 = document.querySelector('#exEventListner2');

myDiv2.addEventListener('click', (e) => {
    console.log(e);
});

// Main properties of event object (I will add more properties later, as I discover.)
// 1. type => Type of the event
// 2. timestamp => time at which the event occured
// 3. preventDefault => prevents the default action of an event
// 4. target => the target element on which the event occured
// 5. toElement => 
// 6. srcElement => 
// 7. clientX => position of the mouse on the x axis
// 8. clientY => position of the mouse on the y axis
// 9. screenX => position of the mouse on the screen on the x axis
// 10. screenY => position of the mouse on the screen on the y axis
// 11. pageX => position of the mouse on the entire web page on the x axis
// 12. pageY => position of the mouse on the entire web page on the y axis
// 13. altKey, ctrlKey, metaKey, shiftKey => state of the keyboard keys, wheather they are pressed or not.
// 14. keyCode => keycode of the pressed key

//---------------------------------------------------------------------

// Event Propogation

// Definiton => The process by which an event is passed from one element to another.

// It has two phases:
//   => 1. Capturing Phase
//   => 2. Bubbling Phase

//1. Capturing Phase 
// The third parameter of addEventListener is true.
// The events are executed in targeting flow from top(outside) to bottom(inside).

//2. Bubbling Phase
// The third parameter of addEventListener is false.
// The events are executed in bubbling flow from bottom(inside) to top(outside).

//Example
const myDiv3 = document.querySelector('#exEventListner3');

// Example of targeting
// when clicked on the p(child) element the event on the div is triggered first, then the event on its child.

// myDiv3.addEventListener('click', () => {
//     console.log("click inside the Third example div");
// }, true);

// myDiv3.children[1].addEventListener('click', () => {
//     console.log("clicked on p element");
// }, true);


// Example of bubbling
// when clicked on the p(child) element the event on the child is triggered first, then the event on the parent.

myDiv3.addEventListener('click', () => {
    console.log("click inside the Third example div");
}, false);

myDiv3.children[1].addEventListener('click', () => {
    console.log("clicked on p element");
}, false);

// e.stopPropogation
// This is a method that prevents the event from propogating further, to the parent element(in bubbling) or to child element(in targeting).