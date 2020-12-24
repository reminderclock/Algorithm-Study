// 위장
{
    function solution(clothes) {
        let answer = 1;
        let obj={};
        for(let i=0;i<clothes.length;i++){
            obj[clothes[i][1]]=(obj[clothes[i][1]] || 1) + 1;
        }
    
        for(let key in obj){
            answer *= obj[key];
        }
        
        return answer-1;
    }
    console.log(solution([6, 10, 2]));
    console.log(solution([3, 30, 34, 5, 9]));
}

// 최대값고 최솟값
{
function solution(s) {
    let n = s.split(' ').sort( (a,b) => a-b);
    let array = [];
    array.push(n[0]);
    array.push(n[n.length-1]);
    return array.join(' ');
}
console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
}
{
    function solution(s) {
        let array = s.split(' ');
        return `${Math.min(...array)} ${Math.max(...array)}`;
    }
console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
}

// 피보나치 수
{
    function solution(n) {
        let array = [0,1];
        for(let i=2; i<=n; i++) {
            array.push((array[i-1] + array[i-2])%1234567);
        }
        return array[n];
    }
    console.log(solution(3));
    console.log(solution(5));
}

// 다음큰숫자
{
    function solution(n) {
        let num=n+1;
        let temp;
        let nCnt=0;
        let numCnt = 0;
        while(n>0){
            if(n%2===1){
                nCnt++;
            }
            n = Math.floor(n/2);
        }
        while(true){
            temp = num;
            numCnt=0;
            while(temp>0){
                if(temp%2===1){
                    numCnt++;
                }
                temp = Math.floor(temp/2);
            }
        if(nCnt===numCnt) {
            return num;
        }
        num++;
    }
    }
    console.log(solution(78));
    console.log(solution(8));
    console.log(solution(15));
}
{
function solution(n,a=n+1) {
    return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
}
console.log(solution(78));
console.log(solution(8));
console.log(solution(15));
}
// 124 나라의 숫자
{
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
    console.log(solution(1));
    console.log(solution(2));
    console.log(solution(3));
    console.log(solution(6));
    console.log(solution(7));
    console.log(solution(8));
    console.log(solution(9));
}
// 최솟값 만들기
{
    function solution(a,b) {
        let sum=0;
        a.sort((x,y)=> x-y);
        b.sort((x,y) => y-x);
        while(a.length>0) {
            sum +=(a.pop()*b.pop());
        }
        return sum;
    }
    console.log(solution([1,4,2],[5,4,4]));
}
// 올바른 괄호
{
    function solution(s) {
        let array = s.split('');
        for(let i=1; i<array.length; i++) {
            if((array[i-1]+array[i])==="()"){
                array.splice(i-1,2);
                i=1;
            }
        }
        if(array.join('')==="()"){
            return true;
        }
        return false;
    }
    console.log(solution("()()"));
    console.log(solution("(())()"));
    console.log(solution(")()("));
    console.log(solution("(()("));
}
//두수의 최소공배수
{
    function solution(a,b) {
        if(Math.max(a,b)%Math.min(a,b)===0){
            return Math.max(a,b);
        }
        else {
            return a*b;
        }
    }
    console.log(solution(2,6));
    console.log(solution(2,7));
}
// n개의 최소공배수
{
    function solution(arr) {
        let array =[];
        // arr.sort( (a,b)=> b-a);
        while(arr.length>0) {
        let n = arr.pop();
        for(let i=0; i<arr.length; i++){
            if(arr[i]%n!==0){
                array.push(n);
                break;
            }
        }
        }
        return array;
    }
    console.log(solution([2,6,8,14]));
    console.log(solution([1,2,3]));
}
{
    function solution(arr) {
        let array =[];
        let array2=[];
        for(let i=0; i<arr.length; i++) {
            for(let j=1; j<=arr[i]; j++) {
                if(arr[i]%j===0 && array.includes(j)===false){
                    array.push(j);
                }
            }
        }
        for(let k=0; k<array.length; k++) {
            let n = array.pop();
            for(let y=0; y<array.length; y++) {
                if(array[y]%n!==0){
                    array2.push(n);
                    break;
                }
            }
        }

        return array2;
    }
    console.log(solution([2,6,8,14]));
    console.log(solution([1,2,3]));
}