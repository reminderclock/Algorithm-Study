// 핸드폰 번호 가리기
function solution(phone_number) {
  return phone_number
    .split("")
    .map((e, index) => {
      if (phone_number.length - index > 4) e = "*";
      return e;
    })
    .join("");
}
solution("01033334444");

function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}
solution("01033334444");

function solution(phone_number) {
  return (
    "*".repeat(phone_number.length - 4) +
    phone_number.substring(phone_number.length - 4)
  );
}
solution("01033334444");

function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

function solution(phone_number) {
  return phone_number
    .split("")
    .fill("*", 0, phone_number.length - 4)
    .join("");
}

// 행렬 덧셈
function solution(arr1, arr2) {
  return arr1.map((e1, index1) =>
    e1.map((e2, index2) => {
      return (e2 = e2 + arr2[index1][index2]);
    })
  );
}
solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);

//  x 간격 만큼 숫자
function solution(x, n) {
  const arr = [];
  let i = x;
  while (arr.length < n) {
    arr.push(i);
    i += x;
  }
  return arr;
}
