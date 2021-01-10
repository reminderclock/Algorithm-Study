// const fs = require("fs");
// // const input = fs.readFileSync("dev/stdin").toString().trim().split("/n");
// const input = fs
// .readFileSync("./stdin.txt")
// .toString()
// .trim()
// .split("\r\n");
function solution(numArr) {
    numArr.forEach(el => {
        let line = 1;
        for(let i=0; i<parseInt(el[1]); i++) {
            line = parseInt((line*el[0]).toString()[(line*el[0]).toString().length-1]);
        }
        if(line === 0) {
            line = 10;
        }
        console.log(line)
    });
}
const data = `5
1 6
3 7
6 2
7 100
9 635
10 2
10 10`;
const input = data.toString().split("\n");
const cnt =parseInt(input.shift());
const numArr = input.map((num) => num.split(' '));
solution(numArr);
