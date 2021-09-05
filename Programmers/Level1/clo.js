function solution(n, lost, reserve) {
  let reserveArr = reserve
    .filter((e) => !lost.includes(e))
    .sort((a, b) => a - b);
  return (
    n -
    lost
      .filter((lo) => !reserve.includes(lo))
      .sort((a, b) => a - b)
      .filter((e) => {
        const po = reserveArr.find((data) => Math.abs(data - e) === 1);
        if (!po) return true;
        reserveArr = reserveArr.filter((el) => el !== po);
      }).length
  );
}
solution(5, [2, 4], [1, 3, 5]);
solution(5, [2, 4], [3]);

function solution(n, lost, reserve) {
  var answer = 0;
  let lostArr = lost.filter((e) => !reserve.includes(e)).sort((a, b) => a - b);
  let reserveArr = reserve
    .filter((e) => !lost.includes(e))
    .sort((a, b) => a - b);
  let lostLength = lostArr.length;
  let reserveLength = reserveArr.length;

  for (const e of lostArr) {
    if (lostLength === 0) break;
    for (const data of reserveArr) {
      if (Math.abs(e - data) === 1) {
        lostLength--;
        reserveArr = reserveArr.filter((el) => el !== data);
        break;
      }
    }
  }
  return n - lostLength;
}
