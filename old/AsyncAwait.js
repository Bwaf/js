async function f() {
    return Promise.resolve(1);
}

f().then(alert); // 1

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    alert(result); // "done!"
}

f();

async function showAvatar() {

    // read our JSON
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();

    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
}

showAvatar();

//generator function

function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

// "generator function" creates "generator object"
let generator = generateSequence();
alert(generator); // [object Generator]

let range = {
    from: 1,
    to: 5,

    // for..of range calls this method once in the very beginning
    [Symbol.iterator]() {
        // ...it returns the iterator object:
        // onward, for..of works only with that object, asking it for next values
        return {
            current: this.from,
            last: this.to,

            // next() is called on each iteration by the for..of loop
            next() {
                // it should return the value as an object {done:.., value :...}
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// iteration over range returns numbers from range.from to range.to
alert([...range]); // 1,2,3,4,5

//////////////////

function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

    // 0..9
    yield* generateSequence(48, 57);

    // A..Z
    yield* generateSequence(65, 90);

    // a..z
    yield* generateSequence(97, 122);

}

let str = '';

for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z