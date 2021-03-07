function solution(i) {
    let idx = i.split(/[0-9]번: /g);
    idx.shift();

    for(let i=0; i<idx.length; i++){
    idx[i] = idx[i].replace(/ /g, '').split(',');

    for(let j=0; j<idx[i].length; j++){
    idx[i][j] = parseInt(idx[i][j], 10);
    }
    }

    let answer = [];
    for(let i of idx){
    for (let j of i){
    if(!answer.includes(j)){
        answer.push(j);
    }
    }
}
    return answer;
}

let i = "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4";
console.log(solution(i));