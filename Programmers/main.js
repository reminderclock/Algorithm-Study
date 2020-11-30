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
//x만큼 간격있는 n개의 숫자
{
    function solution(x,n) {
        let arr =[];
        let i=1;
        while(arr.length!==n) {
            arr.push(x*i);
            i = i+1;
        }
        return arr;
    }
    console.log(solution(2,5));
}
{
    function solution(x, n) {
        let arr = [];
        for(let i=1; i<=n; i++) {
            arr.push(x*i);
        }
        return arr;
    }
    console.log(solution(2,5));
    console.log(solution(-4,2));

}
function solution(x, n) {
    return [...Array(n).keys()].map(v => (v + 1) * x);
}
// 행렬의 덧셈
{
    function solution(arr1, arr2) {
        let array = [];
        let newArray = [];
        for(let i=0; i<arr1.length; i++) {
            for(let j=0; j<arr1[i].length; j++) {
                array.push(arr1[i][j]+arr2[i][j]);
            }
            newArray.push(array);
            array = [];
        }
        return newArray;
    }
    console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]));
}
function sumMatrix(A,B){
    return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}
{
    function solution(n,m) {
        let line ='';
        for(let i =1; i<=m; i++) {
            for(let j=1; j<=n; j++) {
                line += '*';
            }
            line += '\n';
        }
        return line;
    }
    console.log(solution(5,3));
}
// 직사각형 별찍기
{
//     process.stdin.setEncoding('utf8'); 
//     process.stdin.on('data', data => { 
//         const n = data.split(" "); 
//         const a = Number(n[0]), b = Number(n[1]); 
//         for(let i=0; i<b; i++){ 
//             let str = ""; 
//         for(let j=0; j<a; j++){ 
//             str = str + "*" 
//         } 
//         console.log(str) 
//     } 
// });

}
{
//     process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     const row = '*'.repeat(a)
//     for(let i =0; i < b; i++){
//         console.log(row)
//     }

// });
}
//k번째수
{
    function solution(array, commands) {
        let answer = [];
        for(let a=0; a<commands.length; a++){
            let i = commands[a][0];
            let j = commands[a][1];
            let k = commands[a][2];
            
            let newArray = array.slice(i-1, j);
            newArray.sort((x,y) => x-y);
            let result = newArray[k-1];
            answer.push(result);
        }
        return answer;
    }
}
//2016
{
    function solution(a,b) {
        const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

        const x = new Date(`2016-${a}-${b}`);
        return (day[x.getDay()]);
    }
}
//가운데글자 가져오기
{
    function solution(s) {
        let centerString ='';
        if(s.length%2===1) {
            centerString = s[(s.length-1)/2];
        }
        else 
        centerString = s.slice((s.length/2)-1,(s.length/2)+1)
        return centerString;
    }
    console.log(solution('abcde'));
    console.log(solution('qwer'));
}
{
    function solution(s) {
        const mid = Math.floor(s.length/2);
        return s.length%2===1 ? s[mid] : s[mid-1]+s[mid];
    }
    console.log(solution('abcde'));
    console.log(solution('qwer'));
}
{
    function soluction(s) {
        return s.substr(Math.ceil(s.length/2)-1,s.length % 2 === 0 ? 2 : 1);  
    }
    console.log(solution('abcde'));
    console.log(solution('qwer'));
}
//3진법 뒤집기
{
    function solution(n) {
        let arr = [];
        let result = 0;
        while(n>0) {
            arr.push(n%3);
            n = Math.floor(n/3);
        }
        for(let i=0; i<arr.length; i++) {
            result += arr[arr.length-i-1]*Math.pow(3,i);
        }
        return result;
    }
    console.log(solution(45));
    console.log(solution(125));
}
{
    const solution = (n) => {
        return parseInt([...n.toString(3)].reverse().join(""), 3);
    }
    console.log(solution(45));
    console.log(solution(125));
}
// 같은 숫자는 싫어
{
    function solution(a) {
        let newArray= [a[0]];
        for(let i=1; i<a.length; i++){
            if(a[i-1] !== a[i]){
            newArray.push(a[i]);
            }
        }
        return newArray;
    }
    console.log(solution([1,1,3,3,0,1,1]));
    console.log(solution([4,4,4,3,3]));
}
{
    function solution(a) {
        let newArray= [a[0]];
        for(let i=1; i<a.length; i++){
            if(a[i-1] === a[i]){
            continue;
            }
            newArray.push(a[i]);
        }
        return newArray;
    }
}
{
    function solution(arr) {
        let array = [];
        for(let i=0; i<arr.length; i++) {
            if(array[array.length-1]===arr[i]) {
                continue;
            }
            array.push(arr[i]);
        }
        return array;
    }
    console.log(solution([1,1,3,3,0,1,1]));
    console.log(solution([4,4,4,3,3]));
}
// 나누어 떨어지는 숫자배열
{
    function solution(arr, divisor) {
        let a=[];
        let cnt =0;
        for(let i=0; i<arr.length; i++) {
            if(arr[i]%divisor===0) {
                a.push(arr[i]);
                cnt++;
            }
        }
        a.sort( (x,y) => x-y);
        return (cnt === 0 ? [-1] : a);
    }
}
{
    function solution(arr, divisor) {
        let array = [];
        arr.sort( (a,b) => a-b);
        for(let i=0; i<arr.length; i++) {
            if(arr[i]%divisor===0) {
                array.push(arr[i]);
            }
        }
        if(array.length===0){
            array.push(-1);
        }
        return array;
    }
    console.log(solution([10,9,7,5],5));
    console.log(solution([3,2,6],10));
}
// 두정수의 합
{
    function solution(a,b) {
        let array =[a,b].sort( (x,y) => x-y);
        let sum = 0;
        for(let i=array[0]; i<=array[1]; i++) {
            sum += i;
        }
        return sum;
    }
}
{
    function solution(a,b) {
        let min = Math.min(a,b);
        let max = Math.max(a,b);
        let sum = 0;
        for(let i=min; i<=max; i++) {
            sum += i;
        }
        return sum;
    }
    console.log(solution(3,5));
    console.log(solution(3,3));
}
// 문재열 내 p와 y의 개수
{
    function solution(s) {
        let str = s.toLowerCase();
        let pCnt = 0;
        let yCnt =0;
        for(let i=0; i<str.length; i++) {
            if(str[i]==='p'){
                pCnt++;
            }
            else if(str[i]==='y') {
                yCnt++;
            }
        }
        return pCnt===yCnt ? true : false;
    }
    console.log(solution('pPoooyY'));
    console.log(solution('Pyy'));
}
// 소수찾기
{
    function solution(n) {
        const suso= new Array(n).fill(true);
        suso[0] = false;
        for (let i = 2; i ** 2 <= n; i++) {
        if (suso[i - 1] === true) {
            for (let j = i ** 2; j <= n; j += i) {
            suso[j - 1] = false;
            }
        }
        }
        return suso.filter((e) => e).length;
    }
}


