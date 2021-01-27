function diagonalDifference(arr) {
    let n = arr.length; 
    let rLine = 0;
    let lLine = 0;
    for(let i=0; i<n; i++) {
        rLine += arr[i][i];
        lLine += arr[i][n-1-i];
    }
    return Math.abs(rLine-lLine);
}

// data = []
// console.log(diagonalDifference(data));
