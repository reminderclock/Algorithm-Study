function solution(s) {
  if ((s.length === 4 || s.length === 6) && !isNaN(s) && !s.includes("e")) {
    return true;
  } else return false;
}
