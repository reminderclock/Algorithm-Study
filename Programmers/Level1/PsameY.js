function solution(s) {
  let str = s.toLowerCase();
  let pCnt = 0;
  let yCnt = 0;
  for (const data of str) {
    if (data === "p") pCnt++;
    else if (data === "y") yCnt++;
  }
  return pCnt === yCnt ? true : false;
}
solution("pPoooyY");
solution("Pyy");
// solution("qwer
