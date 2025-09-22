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

    alert(`hello ${1}`); // ?

    alert(`hello ${"name"}`); // ?

    alert(`hello ${name}`); // ?

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

    alert(Boolean(1)); // true
    alert(Boolean(0)); // false
    alert(Boolean("hello")); // true
    alert(Boolean("")); // false
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

    alert(+true);
    alert(+"");

    let apple = "2";
    let orange = "3";
    alert(apple + orange);
    alert(+apple + +orange);

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
    alert(counter); //2

    let cookieMonster = ++counter;
    alert(cookieMonster);
    cookieMonster = counter++;
    alert(cookieMonster);

    counter = 0;
    counter++;
    ++counter;
    alert(counter);//2
    alert(++counter);//3
    alert(counter++);//3

    counter = 1;
    alert(2 * ++counter);//4

    counter = 1;
    alert(2 * counter++);//2 because counter++ returns "old" value

    let funny = (1 + 2, 3 + 4);
    alert(funny);// 7 since 1+2 was thrown away and replaced with 3+4

    let paradox = 1;
    let superkellen = 1;

    alert("answer the last two onto the cookie monster");

    let logan = ++paradox;//2
    let fish = superkellen++;//1

    alert(logan);
    alert(fish);
}

function hour4() {
    alert(2 > 1);
    alert(2 == 1);
    alert(2 != 1);

    let result = 5 > 4;
    alert(result);

    alert('Z' > 'A');//True
    alert('Glow' > 'Glee');//True
    alert('Bee' > 'Be');//Truee

    alert('2' > 1);//'2' becomes a number
    alert('01' > 1);//'01' becomes 1

    alert(true == 1);
    alert(false == 0);
    let a = 0;
    alert(Boolean(a));//false

    let b = "0";
    alert(Boolean(b));// true

    alert(a == b);//true

    alert(0 == false);
    alert('' == false);

    alert(0 === false);//False
    alert(null === undefined);//false
    alert(null == undefined);//true

    alert(null > 0);
    alert(null == 0);
    alert(null >= 0);

    let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

    if (year < 2015) {
        alert('Too early...');
    } else if (year > 2015) {
        alert('Too late');
    } else {
        alert('Exactly!');
    }
}

function hour5() {
    let message;
    let login = prompt('Whats your login?' 'username');

    if (login == 'Employee') {
        message = 'Hello';
    } else if (login == 'Director') {
        message = 'Greetings';
    } else if (login == '') {
        message = 'No login';
    } else {
        message = '';
    }
}

