function solution(seoul) {
    let index =0;
    for(let i=0; i<seoul.length; i++) {
        if(seoul[i]==="Kim"){
            index =i;
        }
    }
    return `김서방은 ${index}에 있다`;
}