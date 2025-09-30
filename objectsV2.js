//hour 9


// these objects do the same

user = {
    sayHi: function () {
        alert("Hello");
    }
};

// method shorthand looks better, right?
user = {
    sayHi() { // same as "sayHi: function(){...}"
        alert("Hello");
    }
};

let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(user.name); // "user" instead of "this"
    }

};