fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(response => response.json())
    .then(githubUser => new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    }))
    .catch(error => alert(error.message));

// the execution: catch -> catch
new Promise((resolve, reject) => {

    throw new Error("Whoops!");

}).catch(function (error) { // (*)

    if (error instanceof URIError) {
        // handle it
    } else {
        alert("Can't handle such error");

        throw error; // throwing this or another error jumps to the next catch
    }

}).then(function () {
    /* doesn't run here */
}).catch(error => { // (**)

    alert(`The unknown error has occurred: ${error}`);
    // don't return anything => execution goes the normal way

});

window.addEventListener('unhandledrejection', function (event) {
    // the event object has two special properties:
    alert(event.promise); // [object Promise] - the promise that generated the error
    alert(event.reason); // Error: Whoops! - the unhandled error object
});

new Promise(function () {
    throw new Error("Whoops!");
}); // no catch to handle the error