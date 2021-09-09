function solution(num) {
  let n = num;
  let cnt = 0;
  while (n !== 1) {
    if (cnt === 500) return -1;
    n % 2 === 0 ? (n = n / 2) : (n = n * 3 + 1);
    cnt++;
  }
  return cnt;
}
