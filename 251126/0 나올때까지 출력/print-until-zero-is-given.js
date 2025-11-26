const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(`\n`);
let index = 0;
while (input[index] != 0) {
    console.log(input[index]);
    index++;
}