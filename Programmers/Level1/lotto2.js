function solution(lottos, win_nums) {
  let arr = [6, 5, 4, 3, 2, 1, 0];
  let cnt = 0;
  var min =
    arr.indexOf(
      lottos.filter((e, index) => {
        if (e === 0) cnt++;
        return win_nums.includes(e);
      }).length
    ) + 1;
  if (min > 6) min = 6;
  if (cnt === 6) cnt = 5;
  return [min - cnt, min];
}
