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

    alert(true || true);   // true
    alert(false || true);  // true
    alert(true || false);  // true
    alert(false || false); // false

    if (1 || 0) {
        alert("True");
    }

    let hour = 12;
    let isWeekend = true;

    if (hour < 10 || hour > 18 || isWeekend) {
        alert('The office is closed');
    }

    alert(1 || 0); //1

    alert(null || 1); //1
    alert(null || 0 || 1); //1

    alert(undefined || null || 0); //0

    let firstName = "";
    let lastName = "";
    let nickName = "SuperCoder";

    alert(firstName || lastName || nickName || "Anonymous"); // SuperCoder

    alert(true && true);   // true
    alert(false && true);  // false
    alert(true && false);  // false
    alert(false && false); // false
}

function hour6() {
    result = (a !== null && a !== undefined) ? a : b;
    //common use for ?? is to provide a default value
    //for example, here we show user if it's value isn't null/unedified, otherwise Anonomous

    let user;

    alert(user ?? "Anonymous");
    user = "user";
    alert(user ?? "Anonymous");//john (user is not null/undefined)

    let firstName = null;
    let lastName = null;
    let nickName = "superCoder";

    //shows first defined value:
    alert(firstName ?? lastName ?? nickName ?? "Anonymous");//superCoder
    alert(firstName || lastName || nickName || "Anonymous");//superCoder (shows first true value)

    let height = 0;
    let width = 0;

    alert(height || 100); //100
    alert(height ?? 100); //100

    height = null;
    width = null;

    let area = (height ?? 100) * (width ?? 50);
    alert(area);//5000

    //let x = 1 && 2 ?? 3;//syntax erro

    let x = (1 && 2) ?? 3;//this works
    alert(x);

    //for of, and for in

    let i = 0;

    while (i < 3) { //shows 0, then 1, then 2
        alert(i);
        i++;
    }
}

function hourSixForLoops() {
    // let i = 0;
    // while (i < 3) { // shows 0, then 1, then 2
    //     alert(i);
    //     i++;
    // }

    let i = 3;
    // while (i) {
    //     alert(i);
    //     i--;
    // }

    while (i) alert(i--);
}

function hour7() {
    let i = 0

    // do {
    //     alert(i);
    //     i++;
    // } while (i < 3);

    // for (let i = 0; i < 3; i++) {
    //     alert(i);
    // }
    // alert(i);//3, since i isn't set in the for loop

    // for (; ;) {
    //     // repeats without limits
    // }

    outer: for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {

            let input = prompt(`Value at coords (${i},${j})`, '');

            // if an empty string or canceled, then break out of both loops
            if (!input) break outer; // (*)

            // do something with the value...
        }
    }

    alert('Done!');

    let a = 2 + 2;

    switch (a) {
        case 3:
            alert('Too small');
            break;
        case 4:
            alert('Exactly!');
            break;
        case 5:
            alert('Too big');
            break;
        default:
            alert("I don't know such values");
    }
}

let sum = 0;

while (true) {

    let value = +prompt("Enter a number", '');

    if (!value) break; // (*)

    sum += value;

}
alert('Sum: ' + sum);

let monkeyFinder = "worst thing ever";

function funny() {
    let message = "yummy cookies";
    alert(message);
}
alert(message);//error, because the variable is local to the function

function stupidMonkey() {
    alert("screw" + monkeyFinder());
}
stupidMonkey();

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did your parents allow you?');
    }
}

let sayHi = function () {
    alert("hello");
};

function hunter() {
    alert("Cat");
}
alert(hunter); //shows the functions code

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("You agreed.");
}

function showCancel() {
    alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);