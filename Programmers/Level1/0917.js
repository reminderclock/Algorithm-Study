function solution(numbers) {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return arr
    .filter((e) => !numbers.includes(e))
    .reduce((acc, curr) => acc + curr, 0);
}
function solution(numbers) {
  return 45 - numbers.reduce((acc, curr) => acc + curr, 0);
}

//
function solution(price, money, count) {
  const answer =
    Array.from({ length: count }, (_, i) => i + 1)
      .map((e) => e * price)
      .reduce((acc, curr) => acc + curr, 0) - money;
  return answer > 0 ? answer : 0;
}

//
function solution(table, languages, preference) {
  let max = 0;
  return table
    .map((e) => {
      let [first, ...second] = e.split(" ");
      e = [first, second];
      return e.map((e2, index2) => {
        let cnt = 1;
        let array2 = [];
        if (index2 > 0)
          e2 = e2
            .map((e, index3, array) => {
              if (languages.indexOf(e) !== -1)
                cnt = preference[languages.indexOf(e)];
              return (array.length - index3) * cnt;
            })
            .filter((e4, index4, array) => languages.includes(e2[index4]))
            .reduce((acc, curr) => acc + curr, 0);
        return e2;
      });
    })
    .map((e, index) => {
      if (max < e[1]) max = e[1];
      return e;
    })
    .filter((e, index) => max === e[1])
    .map((e) => e[0])
    .sort()[0];
}
solution(
  [
    "SI JAVA JAVASCRIPT SQL PYTHON C#",
    "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
    "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
    "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
    "GAME C++ C# JAVASCRIPT C JAVA",
  ],
  ["PYTHON", "C++", "SQL"],
  [7, 5, 5]
);
