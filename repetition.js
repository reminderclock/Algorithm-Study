
// 1~10출력
{
    function solution() {
        let n ='';
        for(let i=1; i<=10; i++) {
            n += `${i} `;
        }
        return n
    }
    console.log(solution());
}
// 10~1출력
{
    function solution() {
        let n='';
        for(let i=10; i>0; i--) {
            n += `${i} `;
        }
        return n;
    }
    console.log(solution());
}
// 1~100 까지 합
{
    function solution() {
        let n = 0;
        for(let i=1; i<=100; i++) {
            n += i;
        }
        return n;
    }
    console.log(solution());
}
// 1~작성 값 까지의 합(1이상의)
{
    function solution(a) {
        let n =0;
        for(let i=1; i<=a; i++) {
            n += i;
        }
        return n;
    }
    console.log(solution(5));
}
// 1~100 합 중 짝수 합
{
    function solution() {
        let n= 0;
        for(let i=2; i<=100; i+=2) {
            n += i;
        }
        return n
    }
    console.log(solution());
}
// 1 -2 3 -4 ~ 99 -100 합구하기
{
    function solution() {
        let n =0;
        for(let i =1; i<=100; i++) {
            if(i%2===0) {
                n += -i;
            }
            else{
                n += i;        
            }
        
        }
        return n;
    }
    console.log(solution());
}
// 1~100 6의 배수만 음수 까지의 합
{
    function solution() {
        let n=0;
        for(let i=1; i<=100; i++) {
            if(i%6===0) {
                n += -i;
            }
            else{
                n += i;
            }
        }
        return n;
    }
    console.log(solution());
}
// 계승 구하기 팩토리얼
{
    function solution(a) {
        let fact = 1;
        for(let i=1; i<=a; i++) {
            fact *=i;
        }
        return fact;
    }
    console.log(solution(3));
    console.log(solution(4));
}
// 약수 구하기
{
    function solution(a) {
        let n = '';
        for(let i=1; i<=a; i++) {
            if(a%i===0) {
                n += `${i} `;
            }
        }
        return n;
    }
    console.log(solution(5));
    console.log(solution(8));
}
// 약수와 약수의 개수 
{
    function solution(a) {
        let n = '';
        let cnt =0;
        for(let i=1; i<=a; i++) {
            if(a%i===0) {
                n += `${i} `;
                cnt++;
            }
        }
        return `${n} ${cnt}`
    }
    console.log(solution(4));
    console.log(solution(8));
}
// a의 입력수까지의 배수
{
    function solution(a,b) {
        let n ='';
        for(let i=1; i<=b; i++) {
            if(i%a===0) {
                n += `${i} `;
            }
        }
        return n;
    }
    console.log(solution(5,100));
}
// 배수 판별
// a / b:a의배수
{
    function solution(a,b) {
        if(b%a===0) {
            return `배수`;
        }
        else{
            return `!배수`;
        }
    }
    console.log(solution(4,5));
    console.log(solution(2,10));
}
// 공약수 구하기
{
    function solution(a,b) {
        let n = '';
        let min = a;
        if(min>b) {
            min = b;
        }
        for(let i=1; i<=min; i++) {
            if(min%i===0 && min%i===0) {
                n += `${i} `;
            }
        }
        return n;
    }
    console.log(solution(8,10));
    console.log(solution(20, 100));
}
// 세수의 공약수 
{
    function solution(a,b,c) {
        let n = '';
        let min = a;
        if(min>b && b<c) {
            min =b;
        }
        if(min>c && c<b) {
            min =c;
        }
        for(let i=1; i<=min; i++) {
            if(a%i===0 && b%i===0 && c%i===0){
            n += `${i} `;
            }
        }
        return n;
    }
    console.log(solution(20,10,30));
}
// 입력값까지 공배수 구하기
// c까지
{
    function solution(a,b,c) {
        let n = '';
        for(let i=1; i<=c; i++) {
            if(i%a===0 && i%b===0) {
                n += `${i} `;
            }
        }
        return n;
    }
    console.log(solution(2,5,100));
}
// 최대공약수
{
    function solution(a,b) {
        let n =0;
        let min = a;
        if(min>b) {
            min =b;
        }
        for(let i=1; i<=min; i++) {
            if(a%i===0 && b%i===0){
                n = i;
            }
        }
        return n;
    }
    console.log(solution(60, 120));
    console.log(solution(144, 120));
}
// 최소공배수
{
    function solution(a,b) {
        let n=0;
        let min = a;
        if(min>b) {
            min =b;
        }
        for(let i=min; i>1; i--) {
            if(a%i===0 && b%i===0){
            n = i;
            }
        }
        return n;
    }
    console.log(solution(20,60));
    console.log(solution(7,14));
}
// 소수 판별
{
    function solution(a) {
        let cnt =0;
        for(let i=1; i<=a; i++) {
            if(a%i===0){
            cnt++;
            }
        }
        if(cnt===2) {
            return `${a}는 소수`;
        }
        else
        return `${a}는 !소수`;
    }
    console.log(solution(5));
    console.log(solution(4));
}
// 소수의 합
{
    function solution(a) {
        let n = '';
        for(let i=2; i<=a; i++) {
            let cnt =0;
            for(let j=1; j<=i; j++) {
                if(i%j===0) {
                    cnt++;
                }
            }
            if(cnt===2) {
                n += `${i} `;
            }
        }
        return n;
    }
    console.log(solution(12));
    console.log(solution(100));
}
// 소수 개수
{
    function solution(a) {
        let decimalCnt=0;
        for(let i=2; i<=a; i++) {
            let cnt =0;
            for(let j=1; j<=i; j++) {
                if(i%j===0) {
                    cnt++;
                }
            }
            if(cnt===2){
                decimalCnt++;
            }
        }
        return decimalCnt;
    }
    console.log(solution(12));
    console.log(solution(100));
}

// -(1/2)+(2/3)-(3/4)+(4/5)-(5/6)...-(99/100) 합
{
    function solution() {
        let n =0;
        for(let i=1; i<=99; i++) {
            if(i%2!==0) {
                n += -(i/(i+1));
            }
            else{
                n += i/(i+1);
            }
        }
        return n;
    }
    console.log(solution());
}

//구구단
{
    function solution() {
        let n ='';
        for(let i=2; i<=9; i++) {
            for(let j=1; j<=9; j++) {
                n += `${i}*${j}=${i*j} `;
            }
            n += '\n';
        }
        return n;
    }
    console.log(solution());
}
//수찍기1
{
    function solution() {
        let n='';
        for(let i=5; i>=1; i--) {
            for(let j=1; j<=i; j++) {
                n += j;
            }
            n += '\n';
        }
        return n;
    }
    console.log(solution());
}
//수찍기2
{
    function solution() {
        let n = '';
        for(let i=1; i<=5; i++) {
            for(let j=1; j<=i; j++) {
                n += j;
            }
            n += '\n';
        }
        return n;
    }
    console.log(solution());
}
//수찍기3
{
    function solution() {
        let n='';
        for(let i=1; i<=5; i++) {
            for(let j=1; j<=i; j++) {
                n += i;
            }
            n += '\n';
        }
        return n;
    }
    console.log(solution());
}
//수찍기4
{
    function solution() {
        let n='';
        for(let i=5; i>=1; i--) {
            for(let j=1; j<=i; j++) {
                n += i;
            }
            n += `\n`;
        }
        return n;
    }
    console.log(solution());
}
//수찍기5
{
    function solution() {
        let n = '';
        for(let i=1; i<=5; i++) {
            for(let j=5-i; j>=1; j--) {
                n += ' ';
            }
            for(let k=1; k<=i*2-1; k++) {
                n += k;
            }
            n += '\n';
        }
        return n;
    }
    console.log(solution());
}
//수찍기6
{
function solution(a) {
    let n ='';
    for(let i=1; i<=a; i++) {
        for(let j=1; j<=i; j++) {
            n += i;
        }
        n += '\n';
    }
    return n;
}
console.log(solution(9));
}
//별찍기 / n항만큼 트리모양
{
function solution(a) {
    let n =a;
    let result = '';
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=n-i; j++) {
            result += ' ';
        }
        for(let k=1; k<=2*i-1; k++) {
            result += '*';
        }
        result += '\n';
    }
    return result;
}
console.log(solution(6));
}
