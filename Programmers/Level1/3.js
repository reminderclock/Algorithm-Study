function solution(a) {
        let array = [];
        let sum =0;
        while(a > 0) {
            array.push(a % 3);
            a = Math.floor(a/3); 
        }
         console.log(array);
        let lastIndex = array.length-1;
        for(let i=0; i<= lastIndex; i++) {
            sum += array[i]*Math.pow(3,lastIndex-i)
        }
    return sum;

    }