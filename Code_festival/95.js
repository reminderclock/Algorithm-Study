let N = parseInt(prompt('도장의 크기를 입력하세요.'), 10);

let stmp = [];
for (let i = 0; i < N; i++){
    let tmp = prompt('도장을 입력하세요').split(' ').map(x => parseInt(x, 10));
    stmp.push(tmp);
}

const k = parseInt(prompt('회전수를 입력하세요'), 10);

function solution(stmp,n) {
    N = stmp.length;
    let p = [];
    for(let i = 0; i < N; i++){
    p.push(Array(N).fill(0));
    }
    p = sum_matrix(p, stmp);
    for(let i = 0; i < n; i++) {
        stmp = rotate(stmp);
        p = sum_matrix(p, stmp);
    }
    return p;
}
function rotate(stmp){
    N = stmp.length;
    let rot = [];
    for(let i = 0; i < N; i++){
        rot.push(Array(4).fill(0));
    }
    for (let i = 0; i < N; i++){
        for (let j = 0; j < N; j++){
        rot[j][N-1-i] = stmp[i][j];
        }
    }
    return rot;
    }
function sum_matrix(p,stmp){
    for(let i = 0; i < p.length; i++){
        for(let j = 0; j < p[0].length; j++){
        p[i][j] += stmp[i][j];
        }
    }
    return p;
    }
console.log(solution(stmp, k));