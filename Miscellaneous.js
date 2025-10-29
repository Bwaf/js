let target = {};
let proxy = new Proxy(target, {}); // empty handler

proxy.test = 5; // writing to proxy (1)
alert(target.test); // 5, the property appeared in target!

alert(proxy.test); // 5, we can read it from proxy too (2)

for (let key in proxy) alert(key); // test, iteration works (3)

let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return 0; // default value
        }
    }
});

alert(numbers[1]); // 1
alert(numbers[123]); // 0 (no such item)