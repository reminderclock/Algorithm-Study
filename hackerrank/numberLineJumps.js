// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    if(Number.isInteger((x1-x2)/(v2-v1)) && Math.sign((x1-x2)/(v2-v1)) === 1){
        return "YES";
    }
    else return "NO";
}
console.log(kangaroo(0,3,4,2))
console.log(kangaroo(0,2,5,3))