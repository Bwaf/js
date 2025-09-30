//hour 9


// these objects do the same

// user = {
//     sayHi: function () {
//         alert("Hello");
//     }
// };

// // method shorthand looks better, right?
// user = {
//     sayHi() { // same as "sayHi: function(){...}"
//         alert("Hello");
//     }
// };

// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         alert(user.name); // "user" instead of "this"
//     }

// };

// let admin = user;
// user = null; // overwrite to make things obvious

// admin.sayHi(); // TypeError: Cannot read property 'name' of null

//if used this.name instead of user.name inside of the alert, the code wouldnt work



let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
    alert(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name);


function User(name) {
    if (!new.target) { // if you run me without new
        return new User(name); // ...I will add new for you
    }

    this.name = name;
}

let john = User("John"); // redirects call to new User
alert(john.name); // John



