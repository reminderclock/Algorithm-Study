function solution(a, b) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const answer = new Date(2016, a - 1, b);
  return week[answer.getDay()];
}
solution(5, 24);
