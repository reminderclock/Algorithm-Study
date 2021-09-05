function solution(n) {
  const three = [...n.toString(3)].reverse().join("");
  return parseInt(three, 3);
}
solution(45);
