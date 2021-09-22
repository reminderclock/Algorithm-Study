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
