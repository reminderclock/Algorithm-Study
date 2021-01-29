function solution(s) {
    let arr = s.split('');
    let result= [];
    for(let i=0; i<50; i++) {
        result.push('=');
    }
    result.splice(24-Math.floor(arr.length/2),arr.length,...arr);
    return result.join('');
}
console.log(solution('hi'));
console.log(solution('hio'));
console.log(solution('hiop'));
console.log(solution('hiopl'));