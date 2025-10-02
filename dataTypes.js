// HOUR 11

let john = {
    name: "John",
    sayHi: function () {
        alert("Hi buddy!");
    }
};

john.sayHi(); // Hi buddy!

let str = "Hello";

alert(str.toUpperCase()); // HELLO

let n = 1.23456;

alert(n.toFixed(2)); // 1.23

alert(typeof 0); // "number"

alert(typeof new Number(0)); // "object"!

let zero = new Number(0);

if (zero) { // zero is true, because it's an object
    alert("zero is truthy!?!");
}

let num = Number("123"); // convert a string to number

alert(null.test); // error

str.test = 5;

alert(str.test);

// let billion = 1000000000;

// We also can use underscore _ as the separator:

// let billion = 1_000_000_000;

let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)