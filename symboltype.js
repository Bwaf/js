//hour 10

let id = Symbol("id");

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
alert(id.toString()); //symbol ID now works
alert(id.description); // id

let user = { //belongs to another code
    name : "John"
};
user[id] = 1;
alert(user[id]);//can access the data using symbol as the key

