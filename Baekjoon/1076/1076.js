
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 테스트케이스
function solution(input) {
const color = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
let result ='';
for(let i=0; i<3; i++) {
    for(let j=0; j<color.length; j++) {
        if(input[i]===color[j]){
            if(result.length ===2){
                result = result*Math.pow(10,j);
                return result;
            }
            result += j.toString();
        }
    }
}
return result;
}
const data = `black
yellow
red`
const input = data.toString().split('\n')
console.log(input);
console.log(solution(input));