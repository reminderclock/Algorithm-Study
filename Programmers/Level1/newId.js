function solution(new_id) {
    let answer = '';
    let check_lower = /[a-z]/;
    const incluArr = ['-', '_', '.'];
    // for(let i=0; i<new_id.length; i++) {
    //     if(new_id[i].toLowerCase() !== new_id[i]) {
    //         answer += new_id[i].toLowerCase();
    //     }
    //     else if(incluArr.includes(new_id(i))) {

    //     }
    //     else answer += new_id[i];
    // }
    let arr = new_id.split('');
    let a =  arr
    .map(v => {
        if(!isNaN(v)) return Number(v);
        else return v.toLowerCase()
    })
    .filter(v => {
        return !isNaN(v) || check_lower.test(v) || incluArr.includes(v)
    })
    // for(let i=0; i<a.length-1; i++) {
    //     if()
    // }
    if(a[0] === undefined) a = ['a']
    return a;
}
console.log(solution(".2..!@BaT#*..y.abcdefghijklm"))
console.log(solution(""))