function solution(n) {
    let array = [];
    let num = n;
    while(num>0) {
    if(num%3===0){
        array.push("4");
        num = Math.floor(num/3)-1;           
    }
    else{
        array.push(num%3);
        num = Math.floor(num/3);           
    }
    }
    return array.reverse().join('');
}