function solution(lottos, win_nums) {
    const rank = [6,6,5,4,3,2,1]
    const min = [];
    const zero = [];
    lottos.map(e => {
        if(win_nums.includes(e)) min.push(0);
        if(e === 0) zero.push(0);
    })
    return [rank[zero.length+min.length], rank[min.length]];
}
console.log(solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]))