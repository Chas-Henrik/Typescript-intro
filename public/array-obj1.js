"use strict";
function parseStrings(arr) {
    return arr.filter((word) => word[0] === 'B');
}
const bWords = parseStrings(["Anna", "Bengt", "Bertil", "Kalle"]);
console.log(bWords);
function raise(employee, raise) {
    employee.salary += raise;
}
const nisse = {
    id: 1,
    name: "Nisse",
    salary: 46000
};
raise(nisse, 2000);
console.log(nisse);
function logEmployee(employee) {
    if (typeof employee === "string") {
        console.log(employee);
    }
    else {
        console.log(employee.name);
    }
}
logEmployee(nisse);
logEmployee("Kalle");
