function solution(x, n) {
    let arr = [];
    for(let i=1; i<=n; i++) {
        arr.push(x*i);
    }
    console(arr);
    return arr;
}