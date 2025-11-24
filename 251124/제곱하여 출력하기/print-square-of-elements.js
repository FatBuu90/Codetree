const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(`\n`);

const N = Number(input[0]);
const nums = input[1].split(` `);

let result = "";

for (let i = 0; i < N; i++) {
    result += (Number(nums[i]) ** 2);
    if(i+1 != N){
        result += " ";
    }
}

console.log(result);