// class MyClass {
//   // class methods
//   constructor() { ... }
//   method1() { ... }
//   method2() { ... }
//   method3() { ... }
//   ...
// }

// class User {

//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         alert(this.name);
//     }

// }

// // Usage:
// let user = new User("John");
// user.sayHi();

class User {

    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }

}

let user = new User("John");
alert(user.name); // John

user = new User(""); // Name is too short.

class Button {
    constructor(value) {
        this.value = value;
    }

    click() {
        alert(this.value);
    }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // undefined

class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        alert(`${this.name} stands still.`);
    }

}

class Rabbit extends Animal {
    hide() {
        alert(`${this.name} hides!`);
    }

    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!

class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}