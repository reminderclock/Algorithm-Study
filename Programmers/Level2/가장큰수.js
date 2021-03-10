function soluction(numbers) {
    let result = [];
    for(let i=0; i<numbers.length; i++) {
        let moveNum = numbers.pop();
        numbers.unshift(moveNum);
        // for(let j=0;)
    }

}
console.log(soluction([6,10,2]));
console.log(soluction([3, 30, 34, 5, 9]));