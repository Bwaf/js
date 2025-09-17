'use strict'

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

let isBoss = confirm('Are you the boss?');
alert(isBoss);