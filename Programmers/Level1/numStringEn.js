function solution(s) {
let str = s;
const alpa = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
for(let i=0; i<alpa.length; i++) str = replaceALL(str,alpa[i],i)
return parseInt(str);
}
function replaceALL(str,a, b) {
    return str.split(a).join(b)
}
console.log(solution("one4oneseveneight"))