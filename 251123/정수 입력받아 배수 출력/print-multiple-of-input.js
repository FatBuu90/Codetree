const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

let result = "";

for (let i = 1; i < 6; i++){
    result += input * i + " ";
}

console.log(result);