function solution(n) {
  const min = Math.min(...n);
  return n.length === 1 ? [-1] : n.filter((e) => e !== min);
}
