// function solution(nums) {
//     var answer = 0;
//     let set2 = new Set(nums)
//     if([...set2].length > nums.length/2) {
//         answer = nums.length/2;
//     }
//     else answer = [...set2].length;
//     return answer;
// }
// 로직
// 1. 최대 n/2 여야 한다.
// 2. 범위 안에서 최대 종류를 선택해야 한다.

//keyword: Set()

function solution(nums) {
    const max = nums.length/2;
    const uniqueCount = new Set(nums).size
    return (uniqueCount > max) ? max: uniqueCount;
}

console.log(solution([3,1,2,3]))
console.log(solution([3,3,3,2,2,4]))
console.log(solution([3,3,3,2,2,2]))