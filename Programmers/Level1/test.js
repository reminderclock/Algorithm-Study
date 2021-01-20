function solution(answer) {
    let p1 = [1,2,3,4,5];
    let p2 = [2,1,2,3,2,4,2,5];
    let p3 = [3,3,1,1,2,2,4,4,5,5];
    let person = [p1, p2, p3]
    let result = [];
    let result2 = [];
    for(let k=0; k<person.length; k++) {
        let pIndex = 0;
        while(answer.length > person[k].length) {
            person[k].push(person[k][pIndex]);
            // console.log(p1);
            pIndex++;
            if(pIndex>person[k].length-1) pIndex = 0;
        }
    }
    for(let i=0; i<person.length; i++) {
        let index =0;
        let cnt =0; 
        for(let j=0; j<person[i].length; j++) {
            if(person[i][j]===answer[index]){
                cnt++;
            }
            index++;

        }
        result.push(cnt);
    }
    for(let r=0; r<3; r++) {
        if(Math.max(...result)===result[r]){
            result2.push(r+1);
        }
    }
    //  console.log(Math.max(...result));
    return result2;
}
console.log(solution([1,2,3,4,5,1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));
console.log(solution([2,1,2,3,2,4,2,5,2,1,2,3,2,4,2,5]));

{
    let a = [1,2];
    let b = [1,2,3]
    // console.log(Boolean(a[2]));
}