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