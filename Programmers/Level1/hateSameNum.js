function solution(arr) {
    let array = [];
    for(let i=0; i<arr.length; i++) {
        if(array[array.length-1]===arr[i]) {
            continue;
        }
        array.push(arr[i]);
    }
    return array;
}