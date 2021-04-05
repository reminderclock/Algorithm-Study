function solution(n) {
    let num = String(n);
    let sum =0;
    for(let i=0; i<num.length; i++) {
        sum += parseInt(num[i]);
    }
    return num%sum===0 ? true:false;
}