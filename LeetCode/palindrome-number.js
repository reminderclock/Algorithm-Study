var isPalindrome = function(x) {
    let arr = x.toString().split('');
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== arr[arr.length-1-i]){
            return false;
        }
    }
    return true;
}
console.log(isPalindrome(12345));
console.log(isPalindrome(1234));
console.log(isPalindrome(121));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(10));
// console.log(isPalindrome(1234));