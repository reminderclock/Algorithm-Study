function solution(s) {
  const obj = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  let answer = "";
  let temp = "";
  for (const data of s) {
    temp += data;
    for (const [apla, num] of Object.entries(obj)) {
      if (temp === apla || temp === num) {
        answer += num;
        temp = "";
        break;
      }
    }
  }
  return parseInt(answer);
}
