const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(` `);
const result = [];
let str = "";

for (let i = 0; i < input.length; i++) {
    result.push(input[i]);
}
result.reverse();
for (let i = 0; i < result.length; i++) {
    str += result[i];
}
console.log(str);
