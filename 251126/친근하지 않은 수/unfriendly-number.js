const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

let count = 0;
for (let i = 1; i <= input; i++){
    if(i % 2 == 0 || i % 3 == 0 || i % 5 == 0) {
        continue;
    }
    count += 1;
}
console.log(count);