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
alert(user); //toString name:john
alert(+user); //valueOf 1000
alert(user + 500); //money goes up by 500