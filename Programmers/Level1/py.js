function solution(s) {
    let str = s.toLowerCase();
    let p=0;
    let y=0;
    for(let i=0; i<str.length; i++){
        if(str[i]=="p"){
            p++;
        }
        else if(str[i]=="y"){
            y++;
        }
    }
    return p === y ? true : false;
}