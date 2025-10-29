//Proxy and Reflect


let target = {};
let proxy = new Proxy(target, {}); // empty handler

proxy.test = 5; // writing to proxy (1)
alert(target.test); // 5, the property appeared in target!

alert(proxy.test); // 5, we can read it from proxy too (2)

for (let key in proxy) alert(key); // test, iteration works (3)

let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós'
};

dictionary = new Proxy(dictionary, {
    get(target, phrase) { // intercept reading a property from dictionary
        if (phrase in target) { // if we have it in the dictionary
            return target[phrase]; // return the translation
        } else {
            // otherwise, return the non-translated phrase
            return phrase;
        }
    }
});

// Look up arbitrary phrases in the dictionary!
// At worst, they're not translated.
alert(dictionary['Hello']); // Hola
alert(dictionary['Welcome to Proxy']); // Welcome to Proxy (no translation)

let numbers = [];

numbers = new Proxy(numbers, { // (*)
    set(target, prop, val) { // to intercept property writing
        if (typeof val == 'number') {
            target[prop] = val;
            return true;
        } else {
            return false;
        }
    }
});

numbers.push(1); // added successfully
numbers.push(2); // added successfully
alert("Length is: " + numbers.length); // 2

numbers.push("test"); // TypeError ('set' on proxy returned false)

alert("This line is never reached (error in the line above)");


let user = {
    name: "John",
    _password: "***"
};

user = new Proxy(user, {
    get(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        }
        let value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value; // (*)
    },
    set(target, prop, val) { // to intercept property writing
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        } else {
            target[prop] = val;
            return true;
        }
    },
    deleteProperty(target, prop) { // to intercept property deletion
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        } else {
            delete target[prop];
            return true;
        }
    },
    ownKeys(target) { // to intercept property list
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
});

// "get" doesn't allow to read _password
try {
    alert(user._password); // Error: Access denied
} catch (e) { alert(e.message); }

// "set" doesn't allow to write _password
try {
    user._password = "test"; // Error: Access denied
} catch (e) { alert(e.message); }

// "deleteProperty" doesn't allow to delete _password
try {
    delete user._password; // Error: Access denied
} catch (e) { alert(e.message); }

// "ownKeys" filters out _password
for (let key in user) alert(key); // name


//Eval: run a code string


let value = eval('1+1');
alert(value); // 2

let x = 1;
{
    let x = 5;
    window.eval('alert(x)'); // 1 (global variable)
}


//Currying


function curry(f) { // curry(f) does the currying transform
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}

// usage
function sum(a, b) {
    return a + b;
}

let curriedSum = curry(sum);

alert(curriedSum(1)(2)); // 3


function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}




//Reference Type

let user = {
    name: "John",
    hi() { alert(this.name); },
    bye() { alert("Bye"); }
};

user.hi(); // works

// now let's call user.hi or user.bye depending on the name
(user.name == "John" ? user.hi : user.bye)(); // Error!



//BigInt

const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt("1234567890123456789012345678901234567890");

const bigintFromNumber = BigInt(10); // same as 10n