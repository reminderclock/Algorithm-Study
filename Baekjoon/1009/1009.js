// const fs = require("fs");
// // const input = fs.readFileSync("dev/stdin").toString().trim().split("/n");
// const input = fs
// .readFileSync("./stdin.txt")
// .toString()
// .trim()
// .split("\r\n");
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
numArr.forEach((v) => solution(v));

function solution(line) {
  let [a, b] = line.map((v) => parseInt(v));
  a = a % 10;
  b = b % 4 ? b % 4 : 4;
  let answer = Math.pow(a, b) % 10 ? Math.pow(a, b) % 10 : 10;
  console.log(answer);
}