function solution(n) {
    const suso= new Array(n).fill(true);
    // console.log(suso);
    suso[0] = false;
    for (let i = 2; i ** 2 <= n; i++) {
      if (suso[i - 1] === true) {
        for (let j = i ** 2; j <= n; j += i) {
          suso[j - 1] = false;
        }
      }
    }
    console.log(suso)
    return suso.filter((e) => e).length;
  }

// function solution(n) {
//     let arr=[];
//     let cnt =0;
//     for(let i=0; i<=n; i++) {
//         arr[i]=0;
//     }
//     for(let k=2; k<=n; k++) {
//         if(arr[k]===0) {
//             for(let j=k*2; j<=n; j=j+1) {
//                 arr[j] =1;
//             }
//         }
//     }
//     for(let o=2; o<=n; o++) {
//         if(arr[o]===0) {
//             cnt++;
//         }
//     }
//     return cnt;
// }
console.log(solution(10));
console.log(solution(5));