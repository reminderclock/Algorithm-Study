// 문자열 내림차순으로 배치하기
{
function solution(s) {
    let str = s.split('').filter(a=>a===a.toLowerCase())
    .sort().reverse().join('');
    let strUpper = s.split('').filter(a=>a===a.toUpperCase())
    .sort().reverse().join('');
    
    return str+strUpper;
}
    console.log(solution('AZSDbssigqgta'));
}
// 대문자 소문자보다 작다. 기본 sort()
{
    function solution(s) {
        let str = s.split('').sort().reverse().join('');
        return str;
    }
    console.log(solution('AZSDbssigqgta'));
}
{
    function solution(s) {
        return s
        .split('')
        .sort()
        .reverse()
        .join('');
    }
    console.log(solution('AZSDbssigqgta'));
}
// 수박수박수박...
{
    function solution(n) {
        let result = '';
        for(let i=0; i<n; i++){
        if(result.length%2==0) {
            result += '수';
        }
        else
        result += '박';
    }
        return result;
    }
    console.log(solution(4));
    console.log(solution(5));
}
{
    function solution(n) {
        return '수박'.repeat(n/2) + (n%2 === 1 ? '수':'');
    }
    console.log(solution(4));
    console.log(solution(5));
}