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
x = -x;
alert(x);
}

