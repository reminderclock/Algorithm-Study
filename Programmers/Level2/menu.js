function solution(orders, course) {
    let alpa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let alpaArr = [];
    for(let i=0; i<alpa.length; i++) {
        alpaArr.push([alpa[i],0]);
    }
    let answer = [];
    for(let j=0; j<orders.length; j++) {
        for(let k=0; k<alpaArr.length; k++) {
            if(orders[j].includes(alpaArr[k][0])){
                alpaArr[k][1] = alpaArr[k][1]+1;
            }
        }
    }
    let newArr = [];
    for(let l=0; l<alpaArr.length; l++) {
        let alpaNum = 0;
        for(let o=l+1; o<alpaArr.length; o++) {
            console.log(alpaArr[1][1])
            if(alpaArr[l][1] === alpaArr[o][1]) {
                alpaNum = alpaArr[l][0]+ alpaArr[o][0];
            }
        }
        newArr.push([alpaNum, alpaArr[l][1]]);
    }
    return newArr;
}
console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]));
