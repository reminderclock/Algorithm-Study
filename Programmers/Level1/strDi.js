function solution(s) {
  return s
    .split("")
    .sort((a, b) => {
      return a < b ? 1 : a > b ? -1 : 0;
    })
    .join("");
}
