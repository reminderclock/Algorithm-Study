function solution(s,n) {
    let str = s;
    let result = [];
    let sum = [];
    for(let i=0; i<s.length; i++) {
        result.push(str.charCodeAt(i)+n);
    }
    for(let j=0; j<result.length; j++) {
        if(result[j]>90 && result[j]-n<=90){
            result[j] = result[j]-90+64;
        }
        else if(result[j]>122 && result[j]-n<=122){
            result[j] = result[j]-122+96;
        }
        if(result[j]===32+n) {
            result[j] = 32;
        }
        console.log(result[j]);
        sum.push(String.fromCharCode(result[j]));
    }

    return sum.join('');
}