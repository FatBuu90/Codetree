const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

let sum = 0;
let count = 0;
for (let i = 1; i <= 100; i++) {
    if (input > sum) {
        sum += i;
        count = i;
    } else {
        break;
    }
}
console.log(count);