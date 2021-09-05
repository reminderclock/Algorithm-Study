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
