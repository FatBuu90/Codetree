const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(`\n`);

let a = Number(input[0]);
let b = input[1].split(` `);
let result = "";

for (let i = a-1; i >= 0; i--) {
    if (b[i] % 2 == 0) {
        result += b[i];
        if (i > 0) {
            result += ' ';
        }
    }    
}

console.log(result);