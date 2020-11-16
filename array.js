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

// 배열 a 요소 오른쪽으로 한칸씩 원형으로 이동
{
    function solution(arr) {
        let array = arr;
        let temp;
        temp = array[array.length-1];
        for(let i=array.length-1; i>=1; i--) {
            array[i] = array[i-1];
        }
        array[0] = temp;
        return array;
    }
    console.log(solution([1,2,3,4,5]));
}
// 배열 최댓값 구하기
{
    function solution(arr) {
        let array = arr;
        let max = array[0];
        for(let i=1; i<=array.length-1; i++) {
            if(max<array[i]){
                max = array[i];
            }
        }
        return max;
    }
    console.log(solution([1,6,2,8,99]));
}
{
    function solution(arr) {
        return Math.max(...arr);
    }
    console.log(solution([1,6,2,8,99]));
}
// 임의의 n개의 수 저장하고 배열에서 최솟값 출력
{
    function solution(n) {
        let arr =[];
        for(let i=0; i<=n-1; i++) {
            arr[i] = Math.ceil(Math.random()*100);
        }
        return Math.min(...arr);
    }
    console.log(solution(10));
}
// 에라토스테네스의 체
{
    function solution(n) {
        let arr =[];
        let result='';
        for(let i=0; i<=n; i++) {
            arr[i] =0;
        }
        for(i=2; i<=n; i++) {
            if(arr[i] == 0)
                for(let j=i*2; j<=n+1; j=j+i) {
                    arr[j] = 1;
                }
        }
        for(i=2; i<=n; i++){
            if(arr[i] == 0){
                result += `${i} `; 
            }
        }
        return result;
    }
    console.log(solution(100));

}
// 10진수를 2진수로 변환하여 배열에 저장하기
{
    function solution(n) {
        let arr=[];
        while(n>0) {
            arr.push(n%2);
            n = Math.floor(n/2);
        }
        return arr.reverse();
    }
    console.log(solution(8));
    console.log(solution(10));
}
// 배열에 저장된 2진수를 10진수로 변환하기
{
    function solution(arr) {
        let result=0;
        for(let i=arr.length-1; i>=0; i--) {
            result += arr[i]*Math.pow(2,arr.length-1-i)
        }
        return result;
    }
    console.log(solution([1,0,0,0]));
}
// 10진수를 임의의 진수로 변환
// a: 변환할 10진수 b: 임의의 진수 
{
    function solution(a,b) {
        let arr=[];
        while(a>0) {
            arr.push(a%b);
            a = Math.floor(a/b);
        }
        return arr.reverse('');
    }
    console.log(solution(8,8));
    console.log(solution(17,8));
}



