// static keyword is used to define static i.e. private properties and methods in a class, that can't be accessed from outside the class, by its instances, or by any child classes.

//Example of static properties and methods in a class:


class User{

    // Note: To use static properties and methods, we use the we use the class name instead of 'this'keyword before the property or method name.
    // As you can see in line 23

    static userCount = 0; // Static property to keep track of the number of users, 

    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
        User.userCount++; // Increment user count when a new user is created
    }

    //Yes, when we create a fuction inside a class we don't use fucntion keyword, it is called a method.
    getDetails(){
        console.log(`Username: ${this.username}\nEmail: ${this.email}\nPassword: ${this.password}`);
        // console.log(`Total Users: ${User.userCount}`); // Accessing static property
    }
    changePassword(newPassword){
        this.password = newPassword;
        console.log(`Password changed to: ${this.password}`);
    }
    static getUserCount() {
        return this.userCount;
    }
}

const user1 = new User("john_doe", "kZK6T@example.com", "123456");
user1.getDetails();

const user2 = new User("jane_doe", "XgkDv@example.com", "password123"); // user2
user2.getDetails();

console.log(`Total Users: ${user2.getUserCount()}`); // this will give an error, because getUserCount is a static method and should be called on the class itself, not on an instance.
