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
