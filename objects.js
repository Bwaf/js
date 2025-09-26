//hour 8 ---------
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

function makeUser(name, age) {
    return {
        name, //same as name: name
        age //same as age: age
    };
}

let player = {name: "John", age: 30};

alert("age" in user); //true user.age exists
alert("blabla" in user); //false user.blabla does not exist

let obj = {
    test: undefined
};

alert(obj.test); //its undefined
alert("test" in obj);//true, the property exists