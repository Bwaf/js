//hour 10

let id = Symbol("id");

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
alert(id.toString()); //symbol ID now works
alert(id.description);