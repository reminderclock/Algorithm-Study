function solution(A, K) {
  const arr = [];
  let arr2 = [];
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    if (max < A[i].toString().length) max = A[i].toString().length;
    arr2.push(A[i]);
    if ((i + 1) % K === 0) {
      arr.push(arr2);
      arr2 = [];
    }
    // if (i === A.length - 1) arr.push(arr2);
  }
  if (A.length % K !== 0) arr.push(arr2);
  let total = "";
  let totalLine = "";
  let line = "-".repeat(max);
  let cnt1 = 0;
  let cnt2 = 0;
  for (let j = 0; j < arr.length; j++) {
    let total2 = "";
    cnt1++;
    cnt2 = 0;
    for (let k = 0; k < arr[j].length; k++) {
      cnt2++;
      let empty = " ".repeat(max - arr[j][k].toString().length);
      totalLine += "+";
      totalLine += line;
      totalLine += "+";
      totalLine += "\n";
      totalLine += "|";
      totalLine += empty;
      totalLine += arr[j][k];
      // if (cnt2 === arr[j].length) {
      //   totalLine += "+";
      //   totalLine += "\n";
      // }
      total2 += totalLine;
      totalLine + "";
      console.log(total2);
    }
    // console.log(total2);
    total += total2;
    total += "/n";
    // totalLine = "";
  }
  // console.log(arr);
  // return total;
  // for (let i = 1; i <= K; i++) {}
}
console.log(solution([4, 35, 80, 123, 12345, 44, 8, 5], 10));
// console.log(solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3], 4));
// console.log(solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3, 22, 35], 4));
