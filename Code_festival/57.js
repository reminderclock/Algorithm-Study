function solution(a) {
    let cnt=0;
    for(let i=0; i<=a; i++) {
        if(i.toString().includes('1')){
            cnt++;
        }
    }
    return cnt;
}
console.log(solution(1000));
console.log(solution(10));