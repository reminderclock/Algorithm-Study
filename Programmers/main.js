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
//약수의합
{
    function solution(n) {
        let result= 0;
        for(let i=1; i<=n; i++) {
            if(n%i===0) {
                result += i;
            }
        }
        return result;
    }
    console.log(solution(12));
}
//자릿수 더하기
{
    function solution(n) {
        let num=String(n);
        let result = 0;
        for(let i=0; i<num.length; i++) {
            result += parseInt(num[i]);
        }
        return result;
    }
    console.log(solution(123));
}
{
    function solution(n) {
        return String(n).split('').reduce((acc, curr) => acc + parseInt(curr),0);
    }
    console.log(solution(123));
}
{
    function solution(s) {
        let str = s.split(' ');
        let word = [];
        let sum =[];
        for(let i=0; i<str.length; i++) {
            word = [];
            for(let j=0; j<str[i].length; j++) {
                if(j%2===0){
                    word.push((str[i][j]).toUpperCase());
                }
                else{
                    word.push((str[i][j]).toLowerCase());
                }
            }
            sum.push(word.join(''));
        }
        return sum.join(' ');
    }
    console.log(solution("try hello world"));
}
// 자연수 뒤집어서 배열로 만들기
{
    function solution(n) {
        const num = String(n);
        const result = [];
        for(let i=num.length-1; i>=0; i--){
            result.push(parseInt(num[i]));
        }
        return result;
    }
    console.log(solution(12345));
}
//정수 내림차순으로 배치하기
{
    function solution(n) {
        let num = String(n);
        let result = [];
        for(let i=0; i<num.length; i++) {
            result.push(parseInt(num[i]));
        }
        result.sort( (a,b) => (b-a));
        return parseInt(result.join(''));
    }
    console.log(solution(118372));
}
{
    function solution(n) {
        const num = String(n);
        const result = num.split('').sort().join('');
        return Number(result);
    }
    console.log(solution(118372));
}
// 시저암호
{
    function solution(s,n) {
        let str = s;
        let result = [];
        let sum = [];
        for(let i=0; i<s.length; i++) {
            result.push(str.charCodeAt(i)+n);
        }
        for(let j=0; j<result.length; j++) {
            if(result[j]>90 && result[j]-n<=90){
                result[j] = result[j]-90+64;
            }
            else if(result[j]>122 && result[j]-n<=122){
                result[j] = result[j]-122+96;
            }
            if(result[j]===32+n) {
                result[j] = 32;
            }
            console.log(result[j]);
            sum.push(String.fromCharCode(result[j]));
        }

        return sum.join('');
    }
    console.log(solution('a b',1));
}
// 짝수와 홀수
{
    function solution(n) {
        return n%2 === 0 ? "Even" : "Odd";
    }
    console.log(solution(3));
    console.log(solution(4));
}
//평균
{
    function solution(n) {
        let result = 0;
        for(let i=0; i<n.length; i++) {
            result += n[i];
        }
        result = result/n.length;
        return result;
    }
    console.log(solution([1,2,3,4]));
}
{
    function solution(n) {
        return n.reduce( (a,b) => a+b)/n.length;
    }
    console.log(solution([1,2,3,4]));
}
// 정수제곱근 판별
{
    function solution(n) {
        let result = 0;
        for(let i=1; i<n; i++) {
            if(Math.pow(i,2)===n) {
                result = Math.pow(i+1,2);
                break;
            }
        }
        if(result===0) {
            result = -1;
        }
        return result;
    }
    console.log(solution(121));
    console.log(solution(3));
}
// 가장작은수 제거
{
    function solution(arr) {
        let min = arr[0];
        let index = 0;
        for(let i=1; i<arr.length; i++) {
            if(min>arr[i]) {
                min = arr[i];
                index = i;
            }
        }
        arr.splice(index,1);
        if(arr.length===0){
            arr.push(-1);
        }
        return arr;
    }
    console.log(solution([4,3,2,1]));
    console.log(solution([4,5,7,1,9]));
    console.log(solution([10]));
    console.log(solution([0]));
}
{
    function solution(arr) {
        if (arr.length === 1 ) {
            return [-1]
        }
        const minValue = Math.min.apply(null, arr)
        const index = arr.findIndex(value => value === minValue)
        arr.splice(index, 1)
        return arr
    }
}
// 최대공약수, 최소공배수
{
    function solution(n, m) {
        let result = [];
        for(let i=Math.min(n,m); i>=1; i--) {
            if(n%i===0 && m%i===0) {
                result[0] = i;
                break;
            }
        }
        for(let j=Math.max(n,m); j<=n*m; j++) {
            if(j%n===0 && j%m===0) {
                result[1] = j;
                break;
            }
        }
        return result;
    }
    console.log(solution(3,12));
    console.log(solution(2,5));
}
{
    function solution(n) {
        let cnt =0;
        while(n>1) {
        if(n%2===0) {
            cnt++;
            n = Math.floor(n/2);
        }
        else {
            cnt++;
            n = n*3+1;
        }
        if(cnt>=500) {
            cnt = -1;
            break;
        }
    }
        return cnt;
    }
    console.log(solution(6));
    console.log(solution(16));
    console.log(solution(626331));
}
// 핸드폰 번호 가리기
{
    function solution(phone_number) {
        let num = phone_number.split('');
        for(let i=0; i<num.length-4; i++) {
            num[i] = "*";
        }
        return num.join('');
    }
    console.log(solution('01033334444'));
}
//하샤드 수
{
    function solution(n) {
        let num = String(n);
        let sum =0;
        for(let i=0; i<num.length; i++) {
            sum += parseInt(num[i]);
        }
        return num%sum===0 ? true:false;
    }
    console.log(solution(10));
    console.log(solution(12));
    console.log(solution(11));
    console.log(solution(13));
}