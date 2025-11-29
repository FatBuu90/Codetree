const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

for (let i = 0; i < input; i++) {
    let star = "";
    for (let j = input; j > i; j--) {
        star += "* ";
    }
    console.log(star);
}