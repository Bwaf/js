//hour 10
'use strict'

let id = Symbol("id");

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
alert(id.toString()); //symbol ID now works
alert(id.description); // id

let user = { //belongs to another code
    name : "John"
    [id]: 123
};
user[id] = 1;
alert(user[id]);//can access the data using symbol as the key

user[id] = "Their id value";

//script uses "id" property 
user.id = "Our id value";

user.id = "Their value";

for (let key user) alert(key);//name age (no symbol)

alert("Direct: " + user[id]); //Direct: 123