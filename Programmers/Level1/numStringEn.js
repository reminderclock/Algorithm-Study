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
// 로직
// 반복문으로 replace 처리
// 중복되는 문자를 모두 치환하기 위해서 replaceALL 함수 만들기
// 숫자형태로 return