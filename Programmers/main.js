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
//문자열을 정수로
{
    function solution(str) {
        return parseInt(str);
    }
    console.log(solution("1234"));
    console.log(solution("-1234"));
}
{
    function solution(str) {
        return Number(str);
    }
    console.log(solution("1234"));
    console.log(solution("-1234"));
}
// 김서방 찾기
{
    function solution(seoul) {
        let index =0;
        for(let i=0; i<seoul.length; i++) {
            if(seoul[i]==="Kim"){
                index =i;
            }
        }
        return `김서방은 ${index}에 있다`;
    }
    console.log(solution(['Kim','sj']));
    console.log(solution(['sj','Kim']));
}
{
    function solution(seoul) {
        const index = seoul.indexOf('Kim');
        return `김서방은 ${index}에 있다`
    }
    console.log(solution(['Kim','sj']));
    console.log(solution(['sj','Kim']))
}
//문자열 다루기 기본
{
    function solution(s) {
        let bool = false;
        if((s.length===4 || s.length===6) && Number(s)===parseInt(s)){
            bool = true;
        }
        return bool;
    }
    console.log(solution('1234'));
    console.log(solution('1aa4'));
}
// 문자열 내 마음대로 정렬하기
{
    function solution(strings, n) {
        for(let i=0; i<strings.length; i++) {
            strings[i] = strings[i][n] + strings[i];
        }
        strings.sort();
        for(let j=0; j<strings.length; j++) {
            strings[j] = strings[j].slice(1);
        }
        return strings;
    }
    console.log(solution(["sun", "bed", "car"], 1));
}
{
    function solution(strings, n) {
        return strings.sort((a,b) => a[n]===b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
    }
    console.log(solution(["sun", "bed", "car"], 1));
}