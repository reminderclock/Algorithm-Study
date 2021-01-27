// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
    let sum = s+m-1;
    if(sum < n) {
        return sum;
    }
    else{
        if(sum%n ===0) {
            return n;
        }
        else {
            return sum%n;
        }
    }

}
console.log(saveThePrisoner(5,2,1));
console.log(saveThePrisoner(5,2,2));
console.log(saveThePrisoner(7,19,2));
console.log(saveThePrisoner(3,7,3));

// function saveThePrisoner(n, m, s){
//     const sum = s + m - 1;
//     return sum < n ? sum : sum % n || n;
//   }