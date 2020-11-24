// 덧셈과 곱셈
{
    function solution(a,b) {
        let sum=0;
        let mul=0
        sum = a+b;
        mul = a*b;
        return console.log(`${sum} ${mul}`);
    }
    solution(2,3);
}
{
    function solution() {
        return console.log();
    }
    solution();
}
// 몫과 나머지
{
    function solution(a, b) {
        let div = 0;
        let mod = 0;
        div = Math.floor(a/b);
        mod = a%b
        return console.log(`${div} ${mod}`);
    }
    solution(4,5);
}
// 직각 삼각형의 넓이와 둘레
{
    function solution(base, height) {
        let area = 0;
        let round = 0;
        let hypo = 0
        area = (base*height)/2
        hypo = Math.floor(Math.sqrt(Math.pow(base,base) + Math.pow(height,height)));
        round = base + height + hypo;
        return console.log(`${area} ${round}`);
    }
    solution(4,5);
}
// 사각형 넓이와 둘레
{
    function solution(row,column) {
        let area = 0;
        let around = 0;
        area = row*column;
        around = (row+column)*2;
        return console.log(`${area} ${around}`);
    
    }
    solution(4, 5)
}

// 원의 넓이와 둘레
{
        function solution(r) {
            let area = 0;
            let around = 0;
            area = Math.floor(Math.PI*Math.pow(r,r));
            around = Math.floor(2*Math.PI*r);
            return console.log(`${area} ${around}`);
        }
        solution(3);
}
// 총점과 평균
{
        function solution(a, b, c) {
            let sum = 0;
            let avg = 0
            sum = a+b+c;
            avg = sum/3;
            return console.log(`${sum} ${avg}`);
        }
        solution(70, 80, 90);
}
// 센티미터 -> 미터, 센티미터
{
        function solution(a) {
            let m = 0;
            let cm = 0;
            while(a>=100){
                m++;
                a = a-100;
            }
            cm =a;
            return console.log(`${m} ${cm}`);
        }
        solution(1200);
}
{
    function solution(a) {
        let m = Math.floor(a/100);
        let cm = a%100;
        return console.log(`${m} ${cm}`);
    }
    solution(1220);
}
// 미터 -> 킬로미터, 미터
{
        function solution(a) {
            let km =0;
            let m =0;
            while(a>=1000) {
                km++;
                a = a-1000;
            }
            m=a;
            return console.log(`${km} ${m}`);
        }
        solution(1800);
}
{
    function solution(a) {
        let km = Math.floor(a/1000);
        let m = a%1000;
        return console.log(`${km} ${m}`);
    }
    solution(1800);
}
// 초 단위 시간을 -> 시간, 분, 초 변환
{
        function solution(a) {
            let hour = 0;
            let minute = 0;
            let second = 0;
            while(a>=3600) {
                hour++;
                a -= 3600;
            }
            while(a>=60) {
                minute++;
                a -= 60;
            }
            second =a;
            return console.log(`${hour}:${minute}:${second}`);
        }
        solution(3754);
}
{
    function solution(a) {
        let second = a;
        let hour = Math.floor(second/3600);
        second %= 3600;
        let minute = Math.floor(second/60);
        second %= 60;

        return console.log(`${hour}:${minute}:${second}`);
    }
    solution(3754);
}
// 분 단위 -> 일, 시간, 분 변환
{
        function solution(a) {
            let day = 0;
            let hour = 0;
            let minute =0;
            while(a>=1440) {
                day++;
                a -= 1440;
            }
            while(a>=60) {
                hour++;
                a -= 60;
            }
            minute = a;
            return console.log(`${day} ${hour}:${minute}`);
        }
        solution(1500);
}
{
    function solution(a) {
        let minute = a;
        let day = Math.floor(minute/1440);
        minute %= 1440;
        let hour = Math.floor(minute/60);
        minute %= 60;
        return console.log(`${day} ${hour}:${minute}`);
    }
    solution(1500);
}
// 원 단위 돈을 -> 5만, 만, 5천, 천, 5백, 백, 5십, 십, 1원 변환
{
        function solution(a) {
            let fiveMilion = 0;
            let milion = 0
            let fiveThu = 0
            let thu = 0;
            let fiveHun = 0;
            let hun = 0;
            let fif = 0;
            let ten = 0;
            let one = 0;

            while(a>=50000) {
                fiveMilion++;
                a -= 50000;
            }
            while(a>=10000) {
                milion++;
                a -= 10000;
            }
            while(a>=5000) {
                fiveThu++;
                a -= 5000;
            }
            while(a>=1000) {
                thu++;
                a -= 1000;
            }
            while(a>=500) {
                fiveHun++;
                a -= 500;
            }
            while(a>=100) {
                hun++;
                a -= 100;
            }
            while(a>=50) {
                fif++;
                a -= 50;
            }
            while(a>=10) {
                ten++;
                a -= 10;
            }
            one = a;

            return console.log(`오만원권:${fiveMilion} 만원권:${milion} 오천원권:${fiveHun} 천원권:${thu} 오백원:${fiveHun} 백원:${hun} 오십원:${fif} 십원:${ten} 원:${one}`);
        }
        solution(67875);
}
{
    function solution(a) {
        let one = a;
        let fMil = Math.floor(one/50000);
        one %= 50000;
        let mil = Math.floor(one/10000);
        one %= 10000;
        let fThu = Math.floor(one/5000);
        one %= 5000;
        let thu = Math.floor(one/1000);
        one %= 1000;
        let fHun = Math.floor(one/500);
        one %= 500;
        let hun = Math.floor(one/100);
        one %= 100;
        let fif = Math.floor(one/50);
        one %= 50;
        let ten = Math.floor(one/10);
        one %= 10;
        return console.log(`오만원권:${fMil} 만원권:${mil} 오천원권:${fThu} 천원권:${thu} 오백원:${fHun} 백원:${hun} 오십원:${fif} 십원:${ten} 원:${one}`);
    }
    solution(67875);
}
{
    function solution(n) {
        let num =n;
        let newarr = [];
        let arr = [50000,10000,5000,1000,500,100,50,10,1];
        for(let i=0; i<arr.length; i++) {
            newarr.push(Math.floor(num/arr[i]));
            num = num%arr[i];
        }
        return newarr;
    }
    console.log(solution(50237));
}


