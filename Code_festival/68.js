// 버스 시간표
function solution(a, b) {
let busTime = a.map(e => e.split(':').map(s => +s));
let nowTime = b.split(":").map(e => +e);
let result = [];
let result2= [];
for(let i=0; i<busTime.length; i++) {
    for(let k=0; k<busTime[i].length; k++) {
        if(k==0) {
            result.push((busTime[i][k]-nowTime[k])*60);
            continue;
        }
        result.push(busTime[i][k]-nowTime[k]); 
    }
    result2.push(result);
    result = [];
} 
let result3 =[];
for(let j=0; j<result2.length; j++) {
    let time = result2[j][0]+result2[j][1]
    if( time< 0 ) {
        result3.push('지나갔습니다');
        continue;
    }
    else {
        let hour = 0;
        let minute = 0;
        while(time>=60) {
            hour++;
            time = time%60;   
        }
        minute = time;
        result3.push(`${hour}시간 ${minute}분`);
    }
    // result3.push(result3[j][0]+result3[j][1]);
}
return result3;
}
console.log(solution(["12:30", "13:20", "14:13"], "12:40"));