// 위장
{
    function solution(clothes) {
        let answer = 1;
        let obj={};
        for(let i=0;i<clothes.length;i++){
            obj[clothes[i][1]]=(obj[clothes[i][1]] || 1) + 1;
        }
    
        for(let key in obj){
            answer *= obj[key];
        }
        
        return answer-1;
    }
    console.log(solution([6, 10, 2]));
    console.log(solution([3, 30, 34, 5, 9]));
}