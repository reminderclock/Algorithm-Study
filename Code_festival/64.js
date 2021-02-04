function solution(s) {
    let str = s;
    let cnt = 0;
    while(str>=7) {
        str = str-7;
        cnt++;
    }
    while(str>=3) {
        str = str-3;
        // cnt++;
    }
    if(str !== 0) {
        return -1;
    }
    return cnt;
}
console.log(solution('24'));
console.log(solution('25'));
console.log(solution('14'));