function sol(n, l){
    let answer = 0;
    let man = new Array(n).fill(0);
    while (l.length !== 0){
    for (let j = 0; j < man.length; j++){
        if (man[j] == 0 && l){
        man[j] += l.shift();
        }
    }
    man = man.map(x => x = x -1);
    answer += 1;
    }
    answer += Math.max.apply(null, man);
    return answer;
}

const a = 3;
const b = [1, 2, 1, 3, 3, 3];

console.log(sol(a, b));