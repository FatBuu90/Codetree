const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(` `);

let a = Number(input[0]);
let b = Number(input[1]);

for (let i = 0; i < a; i++) {
    let star = "";
    for (let j = 0; j < b; j++) {
        star += "* ";
    }
    console.log(star);
}