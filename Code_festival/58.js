function solution(a) {
    let arr = a.toString().split('');
    let arr2=[];
    let cnt=0;
    for(let i=arr.length-1; i>=0; i--) {
        if(cnt !==0 && cnt%3===0) {
            arr2.push(',');
            cnt=0;
        }
        arr2.push(arr[i]);
        cnt++;
    }
    return arr2.reverse().join('');
}
console.log(solution(123456789));
console.log(solution(1234567891));