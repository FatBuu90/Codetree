const fs = require("fs");
const a = fs.readFileSync(0).toString().trim();

let string = ["apple", "banana", "grape", "blueberry", "orange"]

let cnt = 0;
for (let i = 0; i < 5; i++) {
    if (string[i][2] === a || string[i][3] === a) {
        console.log(string[i]);
        cnt++;
    }
}

console.log(cnt);