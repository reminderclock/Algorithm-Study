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

// 가장길이가 긴 1과 1 사이의 수
