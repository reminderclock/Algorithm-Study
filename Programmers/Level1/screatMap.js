function solution(n, arr1, arr2) {
    let result1 = [];
    let result2 = [];
    for(let i=0; i<n; i++) {
        let arr=[];
        while(arr1[i]>0) {
            arr.push(arr1[i]%2);
            arr1[i] = Math.floor(arr1[i]/2);
        }
        if(arr.length<n) {
            while(arr.length<n) {
                arr.push(0);
            }
        }
        result1.push(arr.reverse());
    }
    for(let j=0; j<n; j++) {
        let arr3=[];
        while(arr2[j]>0) {
            arr3.push(arr2[j]%2);
            arr2[j] = Math.floor(arr2[j]/2);
        }
        if(arr3.length<n) {
            while(arr3.length<n) {
                arr3.push(0);
            }
        }
        result2.push(arr3.reverse());
    }
    console.log(result1);
    console.log(result2)

}
console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));