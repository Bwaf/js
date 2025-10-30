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

function* gen() {
    let ask1 = yield "2 + 2 = ?";

    alert(ask1); // 4

    let ask2 = yield "3 * 3 = ?"

    alert(ask2); // 9
}

let generator = gen();

alert(generator.next().value); // "2 + 2 = ?"

alert(generator.next(4).value); // "3 * 3 = ?"

alert(generator.next(9).done); // true


//Async iteration and generators

