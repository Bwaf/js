let user = new Object(); //object constructer syntax
let user = {}; //"object literal" syntax

let user = {    //an object
    name: "John",   //by key "name" store value "John"
    age: 30     //by key "age" store value "30"
    "likes birds": true //multiword property name must be quoted
};

alert(user.name);
alert(user.age);

user.isAdmin = true;
// delete user.age;

let key = prompt("What do you want to know about the user?", "name");
//yes
alert(uesr[key]); //John (if enter "name")