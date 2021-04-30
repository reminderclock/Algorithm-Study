function solution(s) {
    let arr = s.split(' ').map(s => s.split(''));
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            if(j%2===1) {
                arr[i][j] = arr[i][j].toLowerCase();
            }
            else {
                arr[i][j] = arr[i][j].toUpperCase();
            }
        }
    }
    return arr.map(s => s.join('')).join(' ');
}