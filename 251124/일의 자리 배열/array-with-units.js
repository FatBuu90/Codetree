const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(` `);

let secondLast = Number(input[0]);
let firstLast = Number(input[1]);
let sum = 0;

let result = secondLast + " " + firstLast + " ";

for (let i = 0; i < 8; i++) {
    sum = secondLast + firstLast;
    if(sum >= 10) {
        sum -= 10;
        result += sum;
    } else {
        result += sum;
    }
    secondLast = firstLast;
    firstLast = sum;
    if (i != 7) {
        result += " ";
    } 
}

console.log(result);