// 두 수중 큰 수 찾기, 두수는 같지 않다. 
{
    function solution(a,b) {
        max = b;
        if(a>b) {
            max = a;
        }
        return console.log(max);
    }
    solution(4,3);
}
// 두 수중 작은 수 찾기
{
    function solution(a,b) {
        min = a;
        if(a>b) {
            min = b;
        }
        return console.log(min);
    }
    solution(2,3);
}
// 양수, 0, 음수 판별
{
    function solution(a) {
        if(a>0) {
            return  `양수`;
        }
        else if(a<0) {
            return `음수`;
        }
        else {
            return 0;
        }
    }
    console.log(solution(0));
}
// 두수의 차 절대값 출력
{
    function solution(a,b) {
        let sub = a - b;
        if(sub<0) {
            sub = -sub;
        }
        return sub;
    }
    console.log(solution(3,-5));
}
{
    function solution(a,b) {
        let sub = a - b;
        return Math.abs(sub);
    }
    console.log(solution(3,-5));
}

// 세 수중 가장 큰수 찾기
{
    function solution(a,b,c) {
        let max = a;
        if(max<b) {
            max = b;
        }
        if(max<c) {
            max = c;
        }
        return max;
    }
    console.log(solution(1,2,6));
}
// 세 수중 가장 작은 수 찾기
{
    function solution(a,b,c) {
        let min = a;
        if(min>b) {
            min = b;
        }
        if(min>c) {
            min = c;
        }
        return min;
    }
    console.log(solution(1,2,6));
}
// 홀수, 짝수 판별
{
    function solution(a) {
        let n = a;
        if(n%2 == 0) {
            return `짝수`;
        }
        else{
            return `홀수`;
        }
    }
    console.log(solution(3));
}
// 5의 배수 판별
{
    function solution(a) {
        let n = a;
        if(n%5 === 0) {
            return `5의 배수`;
        }
        else {
            return `!5의 배수`
        }
    }
    console.log(solution(21));
    console.log(solution(20));
}
// 나이에 따른 입장료 정가 10000원
// 7세 미만 무료, 7~60미만 정가
// 60~ 정가의 40%
{
    function solution(n) {
        let age = n;
        let cost = 10000;
        if(age<7){
            cost = 0;
        }
        else if(age>=60) {
            cost = cost*(40/100);
        }
        return cost;
    }
    console.log(solution(70));
}
// 3의 배수 && 5의 배수 판별
{
    function solution(a) {
        let n = a;
        if(n%3==0 && n%5==0) {
            return `5와3의 배수`;
        }
        else
        return `!(5와 3의 배수)`
    }
    console.log(solution(25));
    console.log(solution(15));
}
// 3의 배수 || 5의 배수 판별
{
    function solution(a) {
        let n = a;
        if(n%3==0 || n%5==0) {
            return `5 또는 3의 배수`;
        }
        else
        return `!(5 또는 3의 배수)`;
    }
    console.log(solution(15));
    console.log(solution(6));
    console.log(solution(4));
}
// 나이에 따른 공원 입장료
//8이상~70미만 100 / 나머지 무료
{
    function solution(a) {
        let age = a;
        let cost = 10000;
        if(age<8 || age>=70) {
            cost = 0;
        }
        return cost;
    }
    console.log(solution(40));
    console.log(solution(7));
    console.log(solution(71));
}
