function isEven(n:number): boolean {
    return n % 2 === 0;
}

const odd = isEven(7);
const even = isEven(8);
console.log(odd);
console.log(even);

function charCount(input: string|number): number {
    const inputStr = typeof input==='number'? input.toString(): input;
    return inputStr.split("").length;
}

const count1 = charCount("Henrik");
const count2 = charCount(123);

console.log(count1);
console.log(count2);

