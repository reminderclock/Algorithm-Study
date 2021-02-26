function solution(n, k) {
    let num = n.toString().split('');
    let answer = [];
    num.sort((a,b) => b-a);
    console.log(num);
    for(let i=0; i<num.length; i++){
        answer.push(num[i]);
        if(answer.length === k) {
            break;
        }
    }
    return parseInt(answer.join(''));

}
console.log(solution(12345978, 2));
console.log(solution(2356215295, 5));