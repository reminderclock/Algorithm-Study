function solution(board, moves) {
  let i = 0;
  const arr = [];
  const boardArr = board;
  for (const mp of moves) {
    for (const bp of boardArr) {
      let line = bp[mp - 1];
      if (line !== 0) {
        arr.push(line);
        bp[mp - 1] = 0;
        if (arr[arr.length - 1] === arr[arr.length - 2]) {
          arr.pop();
          arr.pop();
          i = i + 2;
        }
        break;
      }
    }
  }
  return i;
}
