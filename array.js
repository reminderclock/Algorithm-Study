// 1~n까지수 저장하고 출력
{
    function solution(n) {
        let arr =[];
        for(let i=1; i<=n; i++) {
            arr[i-1] = i;
        }
        return arr;
    }
    console.log(solution(10));
}
{
    function solution(n) {
        let arr = [];
        for(let i=1; i<=n; i++) {
            arr.push(i);
        }
        return arr;
    }
    console.log(solution(10));
}
// a~1까지수 저장하고 출력
{
    function solution(n) {
        let arr = [];
        for(let i=n; i>=1; i--) {
            arr[n-i] = i;
        }
        return arr;
    }
    console.log(solution(12));
}
{
    function solution(n) {
        let arr =[];
        for(let i=n; i>=1; i--) {
            arr.push(i);
        }
        return arr;
    }
    console.log(solution(12));
}
// 10 20 30 ~n*10 저장하고 출력
{
    function solution(n) {
        let arr=[];
        for(let i=1; i<=n; i++) {
            arr[i-1] = i*10;
        }
        return arr;
    }
    console.log(solution(10));

}
// 배열 요소 거꾸로 뒤집기
{
    function solution(n) {
        let arr =[];
        let arr2 = [];
        for(let i=1; i<=n; i++) {
            arr[i-1] = i;
        }
        for(let k=n; k>=1; k--) {
            arr2[n-k]=arr[k-1];
        }
        return arr2;
    }
    console.log(solution(10));
}
// 같은배열에 뒤집기
{
    function solution(n) {
        let arr=[];
        let temp;
        for(let i=1; i<=n; i++) {
            arr[i-1] = i;
        }
        let mid = Math.floor(n/2);
        for(let j=1; j<=mid; j++) {
            temp = arr[j-1];
            arr[j-1] = arr[n-j];
            arr[n-j] = temp;
        }
        return arr;
    }
    console.log(solution(5));
}
// 같은배열에 뒤집기 내장함수 사용
{
    function solution(n) {
        let arr =[];
        for(let i=1; i<=n; i++) {
            arr[i-1] = i;
        }
        arr.reverse();
        return arr;
    }
    console.log(solution(10));
}
// 배열 a 요소 왼쪽으로 한칸씩 원형으로 이동
{
    function solution(arr) {
        let temp;
        let array = arr;
        temp = array[0];
        for(let i=1; i<=array.length-1; i++) {
            array[i-1] = array[i];
        }
        array[array.length-1] = temp;
        return array;
    }
    console.log(solution([1,2,3,4,5]));
}

