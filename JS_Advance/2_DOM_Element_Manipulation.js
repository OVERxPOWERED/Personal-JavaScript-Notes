// Press Ctrl + f to find any topic in this file

// Content Of this file: 

// 1. Selecting elements in DOM.
// 2. Selecting and styling elements of a selected element.
// 3. Style manipulation of selected elements.
// 4. Manupulating the content(Text) of selected elements.
// 5. Attribute manipulation of selected elements.
// 6. Adding elements to the DOM.
// 7. Removing elements from the DOM.
// 8. Replacing elements in the DOM.

// Different ways to select elements in DOM

/* 1st way : getElementById 
    getElementById is used to select single element using id*/
let myDiv = document.getElementById('d1');

/* 2nd way : getElementsByClassName 
    getElementsByClassName is used to select multiple elements using class name*/
let myP = document.getElementsByClassName('text');

/* 3rd way : getElementsByTagName 
    getElementsByTagName is used to select multiple elements using tag name*/
let myH1 = document.getElementsByTagName('h1');

/* 4th way : querySelectorAll 
    querySelectorAll is used to select multiple elements using CSS selectors*/
let myDiv2 = document.querySelectorAll('#d2');

/* 5th way : querySelector 
    querySelector is used to select single element using CSS selectors*/
let myDiv3 = document.querySelector('#d3');

// Selecting and Styling parent elements of a selected element
let myli = document.querySelector("li");
myli.parentElement.style.backgroundColor = "cyan";

// Selecting and styling sibling element
myli.nextElementSibling.style.backgroundColor = "violet";

// Selecting and Styling child elements of a selected element
let myList = document.querySelector("#colors");

//1st way : querySelectorAll and querySelector method
myList.querySelectorAll('li')[2].style.color = "red";
myList.querySelector('li').style.color = "red";

//2nd way : children property of the selected element
let myListItems = myList.children; // returns an array of child elements of the selected element
myListItems[1].style.color = "red";
//myList.children[1].style.color = "red";

//3rd way : firstElementChild property of the selected element
myList.firstElementChild.style.color = "green";

//4th way : lastElementChild property of the selected element
myList.lastElementChild.style.color = "blue";


//******************************
/* 
Note: All these selector properties that we used on the document can also be used on the selected elements to select the elements inside them. When we use selector properties on document, it selects elements in the document, similarly when used on an element selects the elements inside it.*/       
//******************************
//-------------------------------------------------------------------------


// Style manipulation of selected elements

// 1st way : style property
myDiv.style.backgroundColor = "red";
myDiv.style.color = "#fff";
myDiv.style.padding = "10px";
myDiv.style.margin = "5px";
myDiv.style.borderRadius = "5px";
myDiv.style.textAlign = "justify";

// 2nd way : style property with CSS as a string
let myDiv2Style = "background-color:gray; color: #fff; padding: 10px; margin: 5px; border-radius: 5px; text-align: justify;";
myDiv2[0].style = myDiv2Style; // Its was selected using querySelectorAll which returns an array of elements and to style them we have to use index

// 3rd way : style property with CSS as a object
let myDiv3StyleObj = {
    backgroundColor: "green",
    color: "#fff",
    padding: "10px",
    margin: "5px",
    borderRadius: "5px",
    textAlign: "justify"
};
Object.assign(myDiv3.style, myDiv3StyleObj);
//-----------------------------------------------------------------------------------------

// Attribute manipulation of selected elements

// Changing values of attributes (prefer method1 over method2)
// 1st way : setAttribute => This method is sometimes better because it does not fetch the current value pf the attribute before manipulating it.
myDiv.setAttribute('title', 'This is a div element'); // overwrites the existing attribute
// 2nd way : changing the attribute directly as a property => This method also retreives the value of the attribute before overwriting it, which can be costly
myDiv.title = "This is a div element"; // overwrites the existing attribute

// Getting values of attributes
// 1st way : getAttribute
console.log(myDiv.getAttribute('title')); // This is a div element
// 2nd way : getting the attribute directly as a property
console.log(myDiv.title); // This is a div element

// Removing attributes
myDiv.removeAttribute('title');
//-----------------------------------------------------------------------------------------

// Manupulating the content of selected elements

// Getting and setting text (prefer method4 for adding text because it is more optimized as compared to others because they always first need to traverse the entire DOM tree before adding text.)

// 1st way : innerText
console.log(myP[0].innerText); // returns the visible text content of the element
myP[0].innerText = "This is a paragraph element"; // overwrites the visible text content of the element

// 2nd way : textContent
console.log(myP[1].textContent); // returns all the text content of the element either visible or hidden
myP[1].textContent = "This is a paragraph element"; // overwrites the all the text content of the element

// 3rd way : innerHTML
console.log(myP[2].innerHTML); // returns all the content of the element including HTML tags inside it.
myP[2].innerHTML = "<strong>This is a paragraph element</strong>"; // overwrites the all the content of the element including HTML tags inside it.

// 4th way : documents.createTextNode(); // Preffered
const myText = document.createTextNode("This is a text node");
document.body.appendChild(myText);
//-----------------------------------------------------------------------------------------

// Diffrences btw Node List, Array amd HTML Collection: 

// 1. Node List:
// Node List is a collection of nodes, such as elements, text nodes, comments, and processing instructions.
// Node List is an array-like object but not an array.
// Node List is returned by querySelectorAll method.
// Node List has forEach method but does not have other array methods.

// 2. Array:
// Array is a collection of elements.
// Array is an object.
// Array is returned by getElementsByClassName, getElementsByTagName, and querySelectorAll methods.
// Array has forEach method and other array methods.

// 3. HTML Collection:
// HTML Collection is a collection of HTML elements.
// HTML Collection is an object.
// HTML Collection is returned by getElementsByClassName and getElementsByTagName methods.
// HTML Collection does not have forEach method and other array methods.
//--------------------------------------------------------------------

// About Node list
// Node list is a collection of nodes, such as elements, text nodes, comments, and processing instructions.
// To get a node list of a selected element we use childNodes property.
let myNodeList = myList.childNodes;
console.log(myNodeList); // returns a node list of all child nodes of the selected elements
// Output: 
// 0:text (The next line that we give when typing is also considered as a node i.e. text node)
// 1:li.color 
// 2:text 
// 3:li.color 
// 4:text 
// 5:li.color 
// 6:text 
// length:7 
// [[Prototype]]: NodeList
//--------------------------------------------------------------------

// Creating new elements and appending them to the DOM

// Creating new elements

function newListItem( color) {
    let newLi = document.createElement('li');
    // newLi.innerText = color;
    newLi.appendChild(document.createTextNode(color));
    newLi.style.color = color;
    return newLi;
}

let newLi = newListItem("Black");
let newLi2 = newListItem("Violet");
let newLi3 = newListItem("Brown");
let newLi4 = newListItem("Gold");
let newLi5 = newListItem("Bailly");

// Appending new elements to the DOM

// 1st way : appendChild
myList.appendChild(newLi); // appendChild function appends the new element to the end of the selected element
//myList.append(newLi3); // append function appends the new element to the end of the selected element (similar to appendChild)

// 2nd way : insertBefore
myList.insertBefore(newLi2, myList.children[0]); // insertBefore function appends the new element before the specified element
// parameters: (new element, element before which the new element is to be appended)

// 3rd way : insertAdjacentElement
myList.insertAdjacentElement('beforeend', newLi3); // insertAdjacentElement function appends the new element before the selected element
//parameters: (position, new element)
// positions: beforebegin, afterbegin, beforeend, afterend

// 4th way : insertAdjacentHTML
myList.insertAdjacentHTML('afterbegin', '<li style="color: white;">White</li>'); // insertAdjacentHTML function appends the new element before the selected element
//parameters: (position, new element)
// positions: beforebegin, afterbegin, beforeend, afterend
// here "new element" must be in string format

// 5th way : insertAdjacentText
myList.insertAdjacentText('afterend', 'Orange'); // insertAdjacentText function appends the new element before the selected element
//parameters: (position, new element)
// positions: beforebegin, afterbegin, beforeend, afterend
// here "new element" must be in string format

// 6th way : replaceChild
myList.replaceChild(newLi5, myList.children[0]); // replaceChild function replaces the specified element with the new element

// 7th way : replaceWith
myList.children[0].replaceWith(newLi4); // replaceWith function replaces the specified element with the new element

// 8th way : outerHTML
myList.children[0].outerHTML = '<li style="color: red;">Red</li>'; // outerHTML function replaces the specified element with the new element
//----------------------------------------------------------------


// Removing elements from the DOM

// 1st way : removeChild
myList.removeChild(myList.children[5]); // removeChild function removes the specified element from the selected element
//myList.remove(myList.children[0]); // remove function removes the specified element from the selected element

// 2nd way : remove
myList.children[3].remove(); // remove function removes the selected element from the DOM

