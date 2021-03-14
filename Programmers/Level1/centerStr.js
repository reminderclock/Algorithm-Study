function solution(s) {
    let centerString ='';
    if(s.length%2===1) {
        centerString = s[(s.length-1)/2];
    }
    else 
    centerString = s.slice((s.length/2)-1,(s.length/2)+1)
    return centerString;
}