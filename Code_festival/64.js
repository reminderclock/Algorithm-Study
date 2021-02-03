// 변형된 리스트
function solution(a,b) {
    let result1 = [];
    let result2 = [];
    for(let i=0; i<a.length; i++) {
        result1.push(a[i]);
        result1.push(b[i]);
        result2.push(result1);
        result1 = [];
    }
    return result2;
}
console.log(solution([1,2,3,4],['a','b','c','d']));