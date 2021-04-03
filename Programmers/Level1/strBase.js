function solution(s) {
    let bool = false;
    if((s.length===4 || s.length===6) && Number(s)===parseInt(s)){
        bool = true;
    }
    return bool;
}