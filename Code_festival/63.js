// 친해지고 싶어
function solution(s) {
    let arr = s.split(' ');
    let newArr = arr.map(e => e.substr(0,1)).join('');
    return newArr;
}
console.log(solution('복잡한 세상 편하게 살자'));