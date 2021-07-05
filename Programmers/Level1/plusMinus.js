// function solution(absolutes, signs) {
//     let sum = 0;
//     absolutes.map((e,index) => {
//         if(signs[index]) sum += e;
//         else sum += -e;
//     })
//     return sum;
// }
function solution(absolutes, signs) {
    return absolutes.reduce((acc, value, index) => acc + (value*(signs[index]?1:-1)), 0)
}
console.log(solution([4,7,12], [true,false,true]))