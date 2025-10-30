function sayHi() {
    alert("Hello");
}

// global functions are methods of the global object:
window.sayHi();

alert(window.innerHeight); // inner window height

// change the background color to red
document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);