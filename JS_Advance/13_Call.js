// call() 
// This method is used to call a fuction of an object, for another object using the this keyword.
// It allows you to set the value of "this" keyword in the function to a specific object.
// It takes two arguments, the first argument is the object to which you want to set the "this" keyword, and the second argument is the arguments to be passed to the function.
// It mimics the behavior of inheritance in JavaScript, allowing you to call a function of one object with another object as the context.
// Example:

function setUsername(username){
    this.username = username;
}

function createUser1(username, email, password){
    setUsername(username);
    this.email = email;
    this.password = password;
}

let user1 = new createUser1("Ramesh", "kZK6T@example.com", "123456");
console.log(user1); // createUser {email: "kZK6T@example.com", password: "123456"}
// Why was user name not printed?
// Because setUsername is not bound to the user1 object, so it does not have access to the this keyword of user1.
// In simple words, we are setting username in setUsername function, so it belongs to the object of the setUsername function, not the createUser function object.
// user1 is the instance of createUser, so it does not have access to the username property of setUsername function.
// Therefore, to call the method of setUsername[object] function, we need to use call() with it.

function createUser2(username, email, password){
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

let user2 = new createUser2("Bach na saka", "WVHb0@example.com", "123456");
console.log(user2); // createUser {username: "Bach na saka", email: "kZK6T@example.com", password: "123456"}
