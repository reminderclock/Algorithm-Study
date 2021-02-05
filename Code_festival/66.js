// 블럭탑 쌓기
function solution(arr, rule) {
    let result = [];
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
        if(!rule.includes(arr[i][j])) {
            arr[i][j].substr(1);
        }
    }
    }
    // for(let j=0; j<arr.l)
    return arr;
}
console.log(solution(["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"], "ABD"));