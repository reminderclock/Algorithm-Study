function solution(progress, speeds) {
    let answer = [];
    while(progress.length > 0) {
        for(let i=0; i<progress.length; i++) {
            if(progress[i]< 100) {
                progress[i] += speeds[i];
            }
        }
        let cnt =0;
        while(progress[0] >= 100) {
            progress.shift();
            // speeds.shift();
            cnt++;
        }
        if(cnt > 0) {
            answer.push(cnt);
        }
    }
    return answer;

}
console.log(solution([93,30,55],[1,30,5]))
console.log(solution([95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1]))