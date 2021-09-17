function solution(numbers) {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return arr
    .filter((e) => !numbers.includes(e))
    .reduce((acc, curr) => acc + curr, 0);
}
function solution(numbers) {
  return 45 - numbers.reduce((acc, curr) => acc + curr, 0);
}

//
function solution(price, money, count) {
  const answer =
    Array.from({ length: count }, (_, i) => i + 1)
      .map((e) => e * price)
      .reduce((acc, curr) => acc + curr, 0) - money;
  return answer > 0 ? answer : 0;
}
