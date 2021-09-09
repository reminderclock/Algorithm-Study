function solution(n, m) {
  let data1 = 1;
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  for (let i = 1; i <= min; i++) {
    if (n % i === 0 && m % i === 0) data1 = i;
  }
  let start = max;
  while (true) {
    if (start % n === 0 && start % m === 0) break;
    start++;
  }
  // for(let i=1)
  return [data1, start];
}
