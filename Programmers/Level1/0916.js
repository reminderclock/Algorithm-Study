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

function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((e, index) => (e = e * (index + 1)));
}
solution(2, 5);

function solution(x, n) {
  return [...Array(n).keys()].map((e) => (e + 1) * x);
}

// 소수 만들기
const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [
      fixed + el.reduce((acc, curr) => acc + curr, 0),
    ]);
    results.push(...attached);
  });

  return results;
};
function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}
function solution(nums) {
  let sum = 0;
  let arr = getCombinations(nums, 3);
  for (const el of arr) {
    let data = el[0];
    if (data > 2 && data % 2 === 0) continue;
    else if (isPrime(data)) sum++;
  }
  return sum;
}

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}
function solution(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) sum++;
      }
    }
  }
  return sum;
}
