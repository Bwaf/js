//try-catch syntax
try {
    //code
    alert('Start of try runs');  // (1) <--
    //no errors
    alert('End of try runs');   // (2) <--
} catch (err) {
    //error handling
    alert('Catch is ignored, because there are no errors'); // (3)
}