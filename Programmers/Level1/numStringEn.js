function solution(s) {
let str = s;
let a = '';
const alpa = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
for(let i=0; i<alpa.length; i++) {
    a = str.replace(/[alpa[i]]/gi."")
}
return a;
// console.log(str.split('4'))
}
console.log(solution("one4seveneight"))