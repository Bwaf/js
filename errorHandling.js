//try-catch syntax
try {
    //code
    alert('Start of try runs');  // (1) <--
    //no errors
    alert('End of try runs');   // (2) <--

    monkeymonkey;//error, variable not defined
} catch (err) {
    //error handling
    alert('Error has occurred!'); // (3)

    alert(err.name); // ReferenceError
    alert(err.message); // lalala is not defined
    alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)

    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    alert(err); // ReferenceError: lalala is not defined
}

// let json = '{"name":"John", "age": 30}'; // data from the server

// let user = JSON.parse(json); // convert the text representation to JS object

// // now user is an object with properties from the string
// alert(user.name); // John
// alert(user.age);  // 30

let json = "{ bad json }";

try {

    let user = JSON.parse(json); // <-- when an error occurs...
    alert(user.name); // doesn't work

} catch (err) {
    // ...the execution jumps here
    alert("Our apologies, the data has errors, we'll try to request it one more time.");
    alert(err.name);
    alert(err.message);
}