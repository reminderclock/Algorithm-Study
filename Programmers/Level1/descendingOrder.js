function solution(s) {
    let str = s.split('').filter(a=>a===a.toLowerCase())
    .sort().reverse().join('');
    let strUpper = s.split('').filter(a=>a===a.toUpperCase())
    .sort().reverse().join('');
    
    return str+strUpper;
}