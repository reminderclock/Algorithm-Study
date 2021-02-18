
const user_input = prompt('입력해주세요').split(' ');
const n = parseInt(user_input[0], 10);
const k = parseInt(user_input[1], 10);

function sol(n, k) {
  let index = 0;
  let q = [];
  for(let i = 0; i < n; i++){
    q.push(i + 1);
  }

  while (q.length > 2) {
    if (index > q.length-1) {
      index -= q.length;
    }

    q.splice(index, 1);
    index += k;
    index -= 1;
  }

  return q;
}

console.log(sol(n, k));