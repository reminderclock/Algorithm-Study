function solution(n) {
    let result = 0;
    for(let i=1; i<=n; i++) {
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