// hour 10

let user = {}; //user without property
alert(user.address.street); // causes an error

// document.querySelector('.elem') is null if there's no element
// let html = document.querySelector('.elem').innerHTML;// error if it's null

alert(user.address ? user.address.street : undefined);

let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;

alert(user.address ? user.address.street ? user.address.street.name : null : null);