function solution(left, right) {
    let answer = 0;
    for(let i=left; i<= right; i++) {
        let arr = [];
        for(let j=1; j<=i; j++) {
            if(i%j === 0)arr.push(j);
        }
        if(arr.length%2 === 0) answer+=i;
        else answer-=i;
    }
    return answer;
}
console.log(solution(13,17))

// 로직
// 1. 범위의 수를 반복문 돌린다.
// 2. 해당 수의 약수의 개수를 저장한다.
// 3. 약수의 갯수에 따른 수의 부호를 정해 더해준다.