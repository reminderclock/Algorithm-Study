function solution(frame, page){
    let runTime = 0;
    let temp = [];
    if (frame === 0){
        runTime = page.length * 6;
        return runTime;
    }
    for (let i of page){
        if (temp.includes(i)){
            temp.splice(temp.indexOf(i), 1);
            temp.push(i);
            runTime += 1;
        } else {
        if (temp.length < frame){
            temp.push(i);
        } else {
            temp.shift(); 
            temp.push(i);
        }
        runTime += 6;
    }
    }
    return runTime;
}

const f = parseInt(prompt(), 10);
const page = prompt().split('');
console.log(solution(f, page));