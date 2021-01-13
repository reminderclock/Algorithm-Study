const reverse = function(x) {
    let str = x.toString().split('').reverse();
    if(str[str.length-1]==='-'){
        let minus = str.pop();
        str.unshift(minus);
    }
    let result = parseInt(str.join(''));
    return Math.abs(result)>Math.pow(2,31) ? 0 : result;
}
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(-12349103482984));
console.log(reverse(120));
console.log(reverse(-120));
console.log(Math.pow(2,31));
console.log(Math.pow(-2,31));