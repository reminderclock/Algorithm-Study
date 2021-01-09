
// const fs = require('fs');
// const { parse } = require('path');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = fs.readFileSync('./10757.txt').toString().trim().split(' ')
;
// console.log(input);


// function sumDec2bin(dec1, dec2) {
//     let bin = dec1+dec2;
//     return (bin);
// }
function sumDec2bin(dec1, dec2) {
    dec1 = dec2bin(dec1);
    dec2 = dec2bin(dec2);
    let bin = byteadder(dec1, dec2);
    // return bin2dec(bin);
    return bin2dec(bin);
}
// console.log(sumDec2bin(1,2));
// console.log(sumDec2bin(8,2));
// console.log(sumDec2bin(10,2));


function dec2bin(decimal) {
    const answer = [];
    while (decimal>0) {
        answer.push(decimal%2);
        decimal=Math.floor(decimal/2);
    }
    return answer;
}

function byteadder(byteA, byteB) {  
    if(byteA.length!==byteB.length){
        fillArray(byteA, byteB);
    }
    const answer =[Boolean(byteA[0]^byteB[0])];
    let carry = (byteA[0] && byteB[0]);
    for(let i=1; i<byteA.length; i++) {
        let half1 =[(byteA[i] && byteB[i]), Boolean(byteA[i] ^ byteB[i])];
        let half2 = [(half1[1] && carry), Boolean(half1[1] ^ carry)];
        carry = (half2[0]||half1[0])
        answer.push((half2[1]));
    }
    answer.push(Boolean(carry));
    return answer;
}
function fillArray(byteA, byteB) {
    let min = byteA;
    if(min.length>byteB.length) {
        min = byteB;
    }
    for(let i=min.length; i<Math.max(byteA.length, byteB.length); i++) {
        min.push(0);
    }
    if(min === byteA){
        return byteadder(min, byteB);
    }
    return byteadder(byteA, min);
    // console.log(min ===byteB);
}
function bin2dec(bin) {
    let answer = 0;
    for(let i=0; i<bin.length; i++) {
        if(bin[i]===true){
            answer += (bin[i]*pow(i));
        }
    }
    return answer;
}
// 사칙연산 통한 계산으로 변경
function pow(i){
    let result =1;
    for(let j=0; j<i; j++) {
        result = result*2;
        if(result>9){
            result = result -10;
        }
    }
    return result;
}

const data = `19223372036854775807 9223372036854775808`;
const input = data.toString().split(' ').map((str)=>+str);
// console.log((input));
console.log(sumDec2bin(...input));