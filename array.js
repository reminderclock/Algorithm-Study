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

