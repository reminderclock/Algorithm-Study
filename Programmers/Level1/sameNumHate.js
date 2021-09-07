function solution(arr) {
  return arr.filter((e, index, arr) => e !== arr[index + 1]);
}
solution([1, 1, 3, 3, 0, 1, 1]);
