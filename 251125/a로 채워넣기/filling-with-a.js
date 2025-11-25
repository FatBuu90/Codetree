const fs = require("fs");
let text = fs.readFileSync(0).toString().trim();

const text1 = text.slice(0, 1);
const text2 = text.slice(2, text.length-2);
const text3 = text.slice(text.length-1);

let result = text1;
result += 'a';
result += text2;
result += 'a';
result += text3;

console.log(result);