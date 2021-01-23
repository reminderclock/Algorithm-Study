function mathBrackets(e){
    let count = 0;
    for (let i=0; i<e.length; i++){
        if (e[i] === '('){
            count++;
        }
        if (e[i] === ')'){
            count--;
        }
    }
    if (count !== 0){
        return false;
    }
    
    let 괄호 = [];
    for (let i in e){
        if (e[i] === '(') {
            괄호.push('(');
        }
            
        if (e[i] === ')') {
            if (괄호.length === 0) {
                return false;
            }
            괄호.pop();
        }   
    }
    return true;
}
    

const n = prompt('입력.').split('');

if (mathBrackets(n) === true) {
    console.log('YES');
} else {
    console.log('NO');
}