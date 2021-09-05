function solution(numbers, hand) {
  const keybord = {
    left: [1, 4, 7],
    center: [2, 5, 8, 11],
    right: [3, 6, 9],
  };
  const left = [1, 4, 7];
  const center = [2, 5, 8, 11];
  const right = [3, 6, 9];
  const gapArr = [
    [1, 3],
    [2, 4, 6],
    [5, 7, 9],
    [8, 10],
  ];

  let leftHand = 10;
  let rightHand = 12;
  let answer = "";
  numbers
    .map((e) => {
      if (e === 0) {
        e = 11;
      }
      return e;
    })
    .forEach((e) => {
      if (left.includes(e)) {
        answer += "L";
        leftHand = e;
      } else if (right.includes(e)) {
        answer += "R";
        rightHand = e;
      } else if (center.includes(e)) {
        let gapL = Math.abs(e - leftHand);
        let gapR = Math.abs(e - rightHand);
        gapArr.forEach((data, index) => {
          if (data.includes(gapL)) {
            gapL = index + 1;
          }
          if (data.includes(gapR)) {
            gapR = index + 1;
          }
        });
        if (gapL < gapR) {
          answer += "L";
          leftHand = e;
        } else if (gapR < gapL) {
          answer += "R";
          rightHand = e;
        } else {
          let hands = hand[0].toUpperCase();
          answer += hands;
          if (hands === "L") {
            leftHand = e;
          } else {
            rightHand = e;
          }
        }
      }
    });
  return answer;
}
solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");
