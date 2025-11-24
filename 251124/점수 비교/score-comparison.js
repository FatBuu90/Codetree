const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(`\n`);

let a = input[0].split(` `);
let b = input[1].split(` `);

let a_math = Number(a[0]);
let a_eng = Number(a[1]);
let b_math = Number(b[0]);
let b_eng = Number(b[1]);

if( a_math > b_math && a_eng > b_eng ) {
    console.log(1);
}else {
    console.log(0);
}