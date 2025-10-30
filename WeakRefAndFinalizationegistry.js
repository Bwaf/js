//  the user variable holds a strong reference to the object
let user = { name: "John" };

// copied the strong reference to the object into the admin variable
let admin = user;

// let's overwrite the value of the user variable
user = null;

// the object is still reachable through the admin variable