function solution(s) {
let result_s = '';
let store_s = s[0];
let count = 0;

for (let i of s){
  if (i === store_s){
    count += 1;
  } else{
    result_s += store_s + String(count);
    store_s = i;
    count = 1;
  }
}

result_s += store_s + String(count);
console.log(result_s);
}
console.log(solution('aaabbbbcdddd'));