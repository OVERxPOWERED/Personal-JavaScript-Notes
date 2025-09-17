//Inheritance in JavaScript allows us to create a new class that is based on an existing class. The new class inherits properties and methods from the existing class, allowing for code reuse and the creation of more complex objects.


class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    //Yes in when we create a fuction inside a class we don't use fucntion keyword, it is called a method.
    getDetails(){
        console.log(`Username: ${this.username}\nEmail: ${this.email}\nPassword: ${this.password}`);
    }
    changePassword(newPassword){
        this.password = newPassword;
        console.log(`Password changed to: ${this.password}`);
    }
}

class Employee extends User {
    constructor(username, email, password, employeeId){
        // super() is used to call the constructor of the parent class (User in this case).
        // It allows the child class (Employee) to inherit properties from the parent class.
        super(username, email, password);
        this.employeeId = employeeId;
    }

    getEmployeeID(){
        console.log(`Employee ID: ${this.employeeId}`);
    }
}

let emp1 = new Employee("jane_doe", "XgkDv@example.com", "password123", "12345");
emp1.getDetails();
emp1.changePassword("new_password_123");
emp1.getDetails();
emp1.getEmployeeID();


// Output:
// Username: john_doe
// Email: XgkDv@example.com
// Password: password123
// Employee ID: 12345
// Password changed to: new_password_123
// Username: john_doe
// Email: XgkDv@example.com
// Password: new_password_123
// Employee ID: 12345