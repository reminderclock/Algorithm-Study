// function solution(nums) {
//     var answer = 0;
//     let set2 = new Set(nums)
//     if([...set2].length > nums.length/2) {
//         answer = nums.length/2;
//     }
//     else answer = [...set2].length;
//     return answer;
// }

function solution(nums) {
    const max = nums.length/2;
    const uniqueCount = new Set(nums).size
    return (uniqueCount > max) ? max: uniqueCount;
}

console.log(solution([3,1,2,3]))
console.log(solution([3,3,3,2,2,4]))
console.log(solution([3,3,3,2,2,2]))