const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(`\n`);

let cnt_t = 0;
let cnt_f = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] % 3 == 0 && input[i] % 5 == 0) {
        cnt_t += 1;
        cnt_f += 1;
    } else if (input[i] % 5 == 0) {
        cnt_f += 1;
    } else if (input[i] % 3 == 0) {
        cnt_t += 1;
    } else {
        continue;
    }
}
console.log(cnt_t, cnt_f);