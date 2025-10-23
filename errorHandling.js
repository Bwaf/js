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
}