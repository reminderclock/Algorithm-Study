function soluction(numbers) {
    // 두값을 비교후 최대값을 리턴 
    var answer = numbers
                .map(c=> c.toString())
                .sort((a,b) => (b+a) - (a+b)).join('');
    return answer[0]==='0'? '0' : answer;

}
console.log(soluction([6,10,2]));
console.log(soluction([3, 30, 34, 5, 9]));