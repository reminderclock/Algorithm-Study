function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let num = i;
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        num = Math.floor(num / j);
        cnt++;
      }
    }
    if (cnt % 2 === 0) {
      answer += i;
    } else {
      answer += -1 * i;
    }
  }
  return answer;
}
