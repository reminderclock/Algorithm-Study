// 위장
{
    function solution(clothes) {
        let answer = 1;
        let obj={};
        for(let i=0;i<clothes.length;i++){
            obj[clothes[i][1]]=(obj[clothes[i][1]] || 1) + 1;
        }
    
        for(let key in obj){
            answer *= obj[key];
        }
        
        return answer-1;
    }
    console.log(solution([6, 10, 2]));
    console.log(solution([3, 30, 34, 5, 9]));
}

// 최대값고 최솟값
{
function solution(s) {
    let n = s.split(' ').sort( (a,b) => a-b);
    let array = [];
    array.push(n[0]);
    array.push(n[n.length-1]);
    return array.join(' ');
}
console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
}
{
    function solution(s) {
        let array = s.split(' ');
        return `${Math.min(...array)} ${Math.max(...array)}`;
    }
console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
}

// 피보나치 수
{
    function solution(n) {
        let array = [0,1];
        for(let i=2; i<=n; i++) {
            array.push((array[i-1] + array[i-2])%1234567);
        }
        return array[n];
    }
    console.log(solution(3));
    console.log(solution(5));
}