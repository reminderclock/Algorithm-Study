// 이상한 369
function solution(n) {
    const num = String(n).split('');
    let result = 0;
    let cnt = 1; 
    const numArr = {3: 1, 6: 2, 9: 3};
    while(num.length !== 0) {
      result += numArr[parseInt(num.pop(), 10)] * cnt;
      cnt *= 3;
    }
    return result;
  }
  console.log(solution(39));