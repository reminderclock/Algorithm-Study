function solution(strings, n) {
  return strings.sort().sort((a, b) => {
    return a[n] < b[n] ? -1 : a[n] > b[n] ? 1 : 0;
  });
}
solution(["sun", "bed", "car"], 1);
