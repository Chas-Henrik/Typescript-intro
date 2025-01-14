"use strict";
const olle = {
    id: 100,
    name: "Olle",
    salary: 50000,
    role: "administrator",
    username: "olle26"
};
const pelle = {
    id: 100,
    name: "Pelle",
    salary: 60000,
    department: "Engineering"
};
//duck typing
function test(employee) {
    console.log("employee.name:", employee.name);
}
test(olle);
test(pelle);
test({ id: 23, name: "Kalle", salary: 34000 });
function getMaxVal(arr) {
    return Math.max(...arr.map((item) => (typeof item == "string") ? parseInt(item) : item));
}
const max1 = getMaxVal([5, 2, 3]);
const max2 = getMaxVal(["5", "7", "12"]);
const max3 = getMaxVal([5, "27", "1", 19]);
const numbersArray = [5, 2, 3];
const stringArray = ["5", "7", "12"];
const max4 = getMaxVal(numbersArray);
const max5 = getMaxVal(stringArray);
console.log("max1", max1);
console.log("max2", max2);
console.log("max3", max3);
console.log("max4", max4);
console.log("max5", max5);
class Test {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return `Hello ${this.name}`;
    }
    valueOf() {
        return this.name;
    }
}
const logTest = new Test("Pelle");
console.log(logTest.toString()); // Uses toString method
console.log("Value: " + logTest); // Uses the overridden object representation
