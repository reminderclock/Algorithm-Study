function solution(lottos, win_nums) {
    let min= 0;
    let max = 0;
    let arr= [6,5,4,3,2,1];
    for(let i=0; i<lottos.length; i++) {
        if(win_nums.includes(lottos[i])) {
            min++;
        }
        if(lottos[i]===0) {
            max++;
        }
    }
    max+=min;
    if(min<=1)min=6;
    else min = arr.indexOf(min)+1;
    if(max<=1)max=6;
    else max = arr.indexOf(max)+1;
    let arr2= [max, min];
    return arr2;

}
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))
console.log(solution([7,8,9,10,11,12], [1,2,3,4,5,6]))