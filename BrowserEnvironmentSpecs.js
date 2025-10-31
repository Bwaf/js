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

alert(location.href); // shows current URL
if (confirm("Go to Wikipedia?")) {
    location.href = "https://wikipedia.org"; // redirect the browser to another URL
}


//DOM tree

document.body.style.background = 'red'; // make the background red

setTimeout(() => document.body.style.background = '', 3000); // return back 


// Node Properties: type, tag and contents

alert(document.body instanceof HTMLBodyElement); // true
alert(document.body instanceof HTMLElement); // true
alert(document.body instanceof Element); // true
alert(document.body instanceof Node); // true
alert(document.body instanceof EventTarget); // true