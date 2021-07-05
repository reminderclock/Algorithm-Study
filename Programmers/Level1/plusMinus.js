function solution(absolutes, signs) {
    let sum = 0;
    absolutes.map((e,index) => {
        if(signs[index]) sum += e;
        else sum += -e;
    })
    return sum;
}
console.log(solution([4,7,12], [true,false,true]))