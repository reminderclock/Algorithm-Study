function solution(N, stages) {
    var answer = [];
    let result2 = [];
    let set1 = new Set(stages);
    let arr = Array.from(set1);
    for(let i=0; i<arr.length; i++) {
        let result = stages.filter(n => {
            if(n === arr[i]) {
                return { n : (n ===2).length }
            }
        });
        answer.push(result)
    }
    answer.sort((a,b) => {
        if(a.length ===1 && b.length ===1) {
            return a[0]-b[0];
        }
        else return (b.length-a.length)
    });
    for(let j=0; j<answer.length; j++) {
        if(answer[j]>N) {
            result2.push(N);
            continue;
        }
        result2.push(answer[j][0]+1);
    }
    return result2;
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));