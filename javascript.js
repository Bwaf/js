'use strict'


function hour1() {
alert('Hello world!');

let user = 'john';
let admin;

admin = user;

alert(admin);

let ourPlanet = 'earth';
let name = 'fish';

alert(`hello, ${name}!`);

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?

let age = prompt('Hw old are you?', 100);
alert(`you are ${age} years old!`);
}

function hour2() {
let isBoss = confirm('Are you the boss?');
alert(isBoss);

let userName = prompt("What do you want to be called?", "John");
alert(userName);

let value = true;
alert(typeof value);

value = String(value);
alert(typeof value);

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

let monkey = ("cookie monster");
alert(monkey);

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
}

function hour3() {
let x = 3;
let y = 10;
x = -x;
alert(x);
alert(y - x);
alert(8 ** 8);

let s = "my" + "string";
alert(s);

alert(2 + 2 + "1"); //would be 41

alert( +true );
alert( +"" );

let apple = "2";
let orange = "3";
alert( apple + orange );
alert( +apple + +orange );

let a, b, c;

a = b = c = 2 + 2;

alert(a);
alert(b);
alert(c);
//all should = 4

let cookie = 2;
cookie += 5;
cookie *= 2;
//equals 14
alert(cookie);

let counter = 2;
counter++; // same as counter = counter + 1;
alert(counter); //3
counter--; // same as counter = counter - 1;
alert(counter); //1
}

