function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

// "generator function" creates "generator object"
let generator = generateSequence();
alert(generator); // [object Generator]

let one = generator.next();

alert(JSON.stringify(one)); // {value: 1, done: false}