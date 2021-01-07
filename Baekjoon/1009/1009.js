const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split("/n");
const input = fs
.readFileSync("./stdin.txt")
.toString()
.trim()
.split("\r\n");
const a = input.map((num) =>num.split(' '));
a.shift();
const arr=[];
a.forEach( (num) =>{
    if((num[0][num[0].length-1])==='0'&& (num[1][num[1].length-1])==='0'){
        return arr.push(0);
    }
    arr.push(Math.pow((num[0][num[0].length-1]),(num[1][num[1].length-1])))
});
const lastInfo=arr.map( (num) => num.toString()[num.toString().length-1]);
lastInfo.forEach((num)=>{
    if(num == 0){
        num = 10;
    }
    console.log(parseInt(num));
});