type Employee2 = {
    id: number,
    name: string,
    salary: number,
    department?: string
};

function parseStrings(arr: string[]) {
    return arr.filter((word: string) => word[0] === 'B');
}

const bWords = parseStrings(["Anna", "Bengt", "Bertil", "Kalle"]);
console.log(bWords);

function raise(employee: Employee2, raise: number){
    employee.salary += raise;
}

const nisse = {
    id: 1,
    name: "Nisse",
    salary: 46000
}

raise(nisse, 2000);
console.log(nisse);

function logEmployee(employee: Employee2 | string) {
    if(typeof employee === "string") {
        console.log(employee);
    } else {
        console.log(employee.name);
    }
}

logEmployee(nisse);
logEmployee("Kalle");

