// 민규의 악수
function solution(n){
  let person = 0;
  let totalShake = 0;
  let temp = 0;
  while(true){
    totalShake = parseInt((person*(person-1))/2, 10);
    if(n < totalShake){
      break;
    }
    temp = totalShake;
    person += 1;
  }
  return [parseInt(n-temp, 10), person];
}

const cnt = 59;
console.log(solution(cnt));