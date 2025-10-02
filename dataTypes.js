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

alert(7.3e9);  // 7.3 billions (same as 7300000000 or 7_300_000_000)

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

let mсs = 0.000001;

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

alert(0xff); // 255
alert(0xFF); // 255 (the same, case doesn't matter)

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert(a == b); // true, the same number 255 at both sides

//strings

let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

function sum(a, b) {
    return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines

// let guestList = "Guests: // Error: Unexpected token ILLEGAL
//   * John";

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

alert(str1 == str2); // true

pow(2, 2) = 4
pow(2, 3) = 8
pow(2, 4) = 16

function pow(x, n) {
    let result = 1;

    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

alert(pow(2, 3)); // 8

let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 1600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};

// The function to do the job
function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
        return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
        }
        return sum;
    }
}

alert(sumSalaries(company)); // 7700
