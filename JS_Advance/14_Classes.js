// To create a class in JavaScript, you can use the `class` keyword followed by the class name.
// Classes can have a constructor method, which is called when an instance of the class is created

// Example of a class with a constructor

class User{
    tradeName = "User"; // Instancex property
    // Yes, we don't use the `var`, `let`, or `const` keywords to define properties inside a class, they are defined directly.

    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    //Yes, when we create a fuction inside a class we don't use fucntion keyword, it is called a method.
    getDetails(){
        console.log(`Username: ${this.username}\nEmail: ${this.email}\nPassword: ${this.password}`);
    }
    changePassword(newPassword){
        this.password = newPassword;
        console.log(`Password changed to: ${this.password}`);
    }
}

let user1 = new User("john_doe", "kZK6T@example.com", "123456");
user1.getDetails();
user1.changePassword("new_password_123");
user1.getDetails();

// Output:
// Username: john_doe
// Email: kZK6T@example.com
// Password: 123456
// Password changed to: new_password_123
// Username: john_doe
// Email: kZK6T@example.com
// Password: new_password_123


// Behind the scenes, this below written code is what happens when we create a class in JavaScript.
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

    this.getDetails = function() {
        console.log(`Username: ${this.username}\nEmail: ${this.email}\nPassword: ${this.password}`);
    };

    this.changePassword = function(newPassword) {
        this.password = newPassword;
        console.log(`Password changed to: ${this.password}`);
    };
}

// or 

User.prototype.getDetails = function() {
    console.log(`Username: ${this.username}\nEmail: ${this.email}\nPassword: ${this.password}`);
}

User.prototype.changePassword = function(newPassword) {
    this.password = newPassword;
    console.log(`Password changed to: ${this.password}`);
}

// 