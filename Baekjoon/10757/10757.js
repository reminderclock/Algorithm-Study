
const fs = require('fs');
const { parse } = require('path');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./10757.txt').toString().trim().split(' ')
;
console.log(input);
console.log(sumDec2bin(input));

function sumDec2bin(input) {
    let result = input[0]+input[1];
    return result;
}