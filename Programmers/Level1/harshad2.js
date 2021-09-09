function solution(n) {
  return n %
    n
      .toString()
      .split("")
      .reduce((acc, curr) => acc + +curr, 0) ===
    0
    ? true
    : false;
}
