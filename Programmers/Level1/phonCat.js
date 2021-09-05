function solution(nums) {
  let cnt = nums.length / 2;
  let newSetSize = new Set(nums).size;
  return newSetSize > cnt ? cnt : newSetSize;
}
solution([3, 1, 2, 3]);
