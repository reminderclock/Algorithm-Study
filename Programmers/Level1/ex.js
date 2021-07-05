function solution(absolutes, signs) {
    return absolutes.reduce((acc, value, index) => acc + (value*(signs[index]?1:-1)), 0)
}
console.log(solution([4,7,12], [true,false,true]))