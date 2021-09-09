function solution(n) {
  let str = n.toString();
  let sum = 0;
  for (const data of str) {
    sum += +data;
  }
  return sum;
}
