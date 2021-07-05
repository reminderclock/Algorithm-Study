// function solution(absolutes, signs) {
//     let sum = 0;
//     absolutes.map((e,index) => {
//         if(signs[index]) sum += e;
//         else sum += -e;
//     })
//     return sum;
// }
// 로직
// 1. 해당 배열을 반복문을 통해 더한다.
// 2. 더해줄때 부호를 셋팅해준다.
function solution(absolutes, signs) {
    return absolutes.reduce((acc, value, index) => acc + (value*(signs[index]?1:-1)), 0)
}
console.log(solution([4,7,12], [true,false,true]))