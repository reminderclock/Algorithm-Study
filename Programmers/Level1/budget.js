function solution(d, budget) {
  let ds = d.sort((a, b) => a - b);
  let curr = budget;
  let cnt = 0;
  if (ds[0] > budget) return 0;
  for (const data of ds) {
    if (curr < 0) {
      cnt--;
      break;
    } else if (curr === 0) {
      break;
    }
    curr = curr - data;
    cnt++;
  }
  return cnt;
}
