alert(obj);

anotherObj[obj] = 123;

let num = Number(obj);

let n = +obj;
let delta = date1 - date2;

let greater = user1 > user2;

let total = obj1 + obj2;

let user = {
    name: "john",
    money: 1000,

    toString() {
        return `{name: "${this.name}"}`
    },

    valueOf() {
        return this.money;
    }
};
alert(user);
alert(+user);
alert(user + 500);