function solution(N) {
  let str = N.toString(2);
  const arr = [];
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      cnt++;
    } else {
      arr.push(cnt);
      cnt = 0;
    }
  }
  return Math.max(...arr);
}
solution(8);
solution(10);
solution(11);

// 가장 긴 1 사이의 0의 길이를 반환해야함.
// 1과 1사이를 받아와야 한다.

function solution(A, K) {
  const arr = A;
  if (K % A.length === 0) return A;
  for (let i = 1; i <= K % A.length; i++) {
    let last = arr.pop();
    arr.unshift(last);
  }
  return arr;
}
solution([3, 8, 9, 7, 6], 3);

// 효율성을 위해 나누어줌
