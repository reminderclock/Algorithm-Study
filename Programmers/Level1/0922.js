function solution(A) {
  let answer = 0;
  A.sort((a, b) => a - b);
  if (A.length === 0) return 1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== i + 1) {
      answer = i + 1;
      break;
    }
  }
  if (answer === 0) answer = A[A.length - 1] + 1;
  return answer;
}
solution([]);

function solution(A) {
  let min;
  for (let i = 1; i < A.length; i++) {
    let num1 = A.slice(0, i).reduce((acc, curr) => acc + curr, 0);
    let num2 = A.slice(i).reduce((acc, curr) => acc + curr, 0);
    let diff = Math.abs(num1 - num2);
    if (diff === 0) return 0;
    if (i === 1 || min > diff) min = diff;
  }
  return min;
}
solution([3, 1, 2, 4, 3]);
// 효율성 안나옴

function solution(A) {
  let sum = A.reduce((acc, curr) => acc + curr, 0);
  let leftSum = A[0];
  let rightSum = sum - leftSum;
  let min;
  let diff;
  for (let i = 1; i < A.length; i++) {
    diff = Math.abs(rightSum - leftSum);
    if (i === 1 || min > diff) min = diff;
    leftSum += A[i];
    rightSum -= A[i];
  }
  return min;
}
solution([3, 1, 2, 4, 3]);

//하나의 합을 다시 빼주는 형식으로 알고리즘 짜기
// 초기 값 셋팅 제대로!!!
