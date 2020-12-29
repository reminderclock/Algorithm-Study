// 1. 배열의 삭제 
// 다음 배열에서 400, 500 삭제하는 code 입력하세요
{
    var nums = [100, 200, 300, 400, 500];
    nums.pop(500);
    nums.pop(400);
    console.log(nums)
}
// 2. 배열의 내장함수
// <pass>부분에 배열의 내장함수를 이용하여 코드를 입력하고 
//다음과 같이 출력되게 하세요.
{
    //데이터
    var arr = [200, 100, 300];
    //pass
    arr.splice(2, 0, 1000);
    console.log(arr);

    //출력
    // [200, 100, 10000, 300]
}
// 3. 변수의 타입
// 출력값으로 옳은 것은?
{
    var arr = [100, 200, 300];
    console.log(typeof (arr));
}
// 4. 변수의 타입2
// typeof(a) 출력값과 알맞지 않은 것은
// 1) a = 1,  number
// 2) a = 2.22, boolean 2 
// 3) a = 'p', string
// 4) a = [1,2,3] object 

// 5. for문 계산
{
    var a = 10;
    var b = 2;

    for (var i = 1; i < 5; i += 2) {
        a += i;
    }
    console.log(a + b);
}
// 6. true인것 하나있음.
// NaN, 1, "", 0, undefined // 1

// 7. 변수명으로 사용할수 없는 것 2개
// age Age let _age 1age
// let lage
// 8. 객체의 키이름 중복
// 출력값은?
{
    var d = {
        'height': 180,
        'weight': 78,
        'weight': 84,
        'temperature': 36,
        'eyesight': 1
    };
    console.log(d['weight']);
}

// 9. concat을 활용한 출력방법
// 소스 완성하여 날짜, 시간 출력
{
    var year = '2019';
    var month = '04';
    var day = '26';
    var hour = '11';
    var minute = '34';
    var second = '27';

    var result = year.concat(`/${month}/${day} ${hour}:${minute}:${second}`);
    console.log(result);
}

// 10. 별찍기###
// 트리만드시오
// 입력 5 
// 출력 

{
    function solution(n) {
        let result = '';
        for (let i = 1; i <= n; i++) {
            let tree = '';
            for (let j = n - i; j >= 0; j--) {
                tree += ' ';
            }
            for (let k = 1; k <= 2 * i - 1; k++) {
                tree += '*';
            }
            result += tree + '\n';
        }
        return result;
    }
    console.log(solution(5));
}

// 11. for를 이용한 기본 활용
// 1~100 모두 더하는 코드 완성
{
    let s = 0;
    for (let i = 1; i <= 100; i++) {
        s += i;
    }
    console.log(s)
}

// 12. 게임 캐릭터 클래스 만들기
// 다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와
// '파이어볼'이 출력되게 만드시오.
{
    // 여기에 클래스작성
    class Wizard {
        constructor(health, mana, armor) {
            this.health = health;
            this.mana = mana;
            this.armor = armor;
        }
        attack() {
            console.log('파이어볼');
        }
    }

    const x = new Wizard(545, 210, 10);
    console.log(x.health, x.mana, x.armor);
    x.attack();

    // 출력
    // 545 210 10
    // 파이어볼
}

// 13. 몇번째 행성인가요?
// 수, 금, 지, 화, 목, 토, 천, 해 총 8개 입니다. 
// 저희는 태양계의 n번째 행성이 무엇인지 알고싶어요
// 해당 n을 입력하면 행성이름 출력됩니다. 
// 입력 : 1
// 출력 : 수성

{
    function solution(a) {
        const planet = ['수', '금', '지', '화', '목', '토', '천', '해'];
        return planet[a - 1];
    }
    console.log(solution(1));
    console.log(solution(2));

}

// 14. 3의 배수인가요?
// 3의 배수이면 박수를 출력, 아니면 숫자 출력
{
    function solution(n) {
        let num = 0;
        if (n % 3 === 0) {
            num = '짝';
        }
        else {
            num = n;
        }
        return num;
    }
    console.log(solution(3));
    console.log(solution(7));

}

// 15. 자기소개
// 입력 : 홍길동
// 출력 : 안녕하세요. 저는 홍길동입니다.
{
    function solution(name) {

        return `안녕하세요. 저는${name}입니다.`;
    }
    console.log(solution('홍길동'));
}

// 16. 로꾸꺼
// 문장 입력되면 거꾸로 출력하는 프로그램 만드세요.
// 입: 거꾸로
// 출: 로꾸거
{
    function solution(str) {
        let newstr = str.split('').reverse().join('');
        return newstr;
    }
    console.log(solution('로꾸꺼'));

}
// 17. 놀이기구 키제한
// 150 이상 yes / no
// 입력 : 키
// 출력 : yes or no
{
    function solution(height) {
        return height >= 150 ? 'yes' : 'no';
    }
    console.log(solution(169));
    console.log(solution(140));
}
// 18. 평균 점수
// 입력: 20, 30, 40
// 출력: 30
{
    function solution(a, b, c) {
        let sum = 0;
        sum = a + b + c;
        return (sum / 3);
    }
    console.log(solution(20, 30, 40));
}
// 19. 제곱을 구하자
// 입력: a b
// 출력: a^b
{
    function solution(a, b) {
        return Math.pow(a, b);
    }
    console.log(solution(4, 5));
}

// 20. 몫과 나머지
// 입력 : 10 2
// 출력 : 5 0
{
    function solution(a, b) {
        let value = Math.floor(a / b);
        let left = a % b;
        return `${value},${left}`;
    }
    console.log(solution(10, 2));
}

// 21. set 만드는 방법###
// 자료형에 상관없이 원시 값, 객체참조 모두 유일한 값 저장가능
// 각종 집합 , 배열->set , 전개 가능 
{

    var a = new Set('javascrpt');
    console.log(a);
}

// 22. 배수인지 확인하기
// a: 지정수 b: a의 배수인지 확인하는 수
{
    function solution(a, b) {
        let result = 0;
        return b % a === 0 ? true : false;
    }
    console.log(solution(2, 10));
    console.log(solution(3, 10));
}

// 23. ox문제
//console.log(10/3); ??
{
    console.log(10 / 3);
}

// 24. 전부 대문자로 바꿔주세요
// 입력 : mary
// 출력 : MARY
{
    function solution(a) {
        return a.toUpperCase();
    }
    console.log(solution('serwf'));
}

// 25. 원의 넓이를 구하세요
// 입력 : 반지름길이
// 출력 : 원넓이
{
    function solution(r) {
        return Math.PI * Math.pow(r, r);
    }
    console.log(solution(2));
}

// 26. 행성2
// 수, 금, 지, 화, 목, 토, 천, 해
// Mer, Ven, Ear, Mar, Jup, Sat, Ura, Nep
// 입: 수
// 출: Mer
// 매치 출력
{
    function solution(a) {
        const planet = {
            '수성': 'mer',
            '금성': 'ven',
            '지구': 'Ear',
            '화성': 'Mar',
            '목성': 'Jup',
            '토성': 'Sat',
            '천왕성': 'Ura',
            '해왕성': 'Nep'

        }
        return planet[a];
    }
    console.log(solution('수성'));
}

// 27. 객체 만들기 #
// 입 a: ['유진', '정민']
// 입 b: [30, 90]
// 출: {'유진': 30, '정민':90}
{
    function solution(key, value) {
        const obj = {};
        for (let i = 0; i < key.length; i++) {
            obj[key[i]] = value[i];
        }
        return obj;
    }
    console.log(solution(['유진', '정민'], [30, 90]));

}

// 28. 2-gram
// 문자열에서 2개의 연속된 요소 출력
// Javascript
// J a
// a v
// v a
// a s
// s c
// c r
// r i 
// i p 
// p t 
{
    function solution(a) {
        let result = '';
        for (let i = 0; i < a.length - 1; i++) {
            result += `${a[i]} ${a[i + 1]}` + '\n';
        }
        return result;
    }
    console.log(solution('Javascript'));
}

// 29. 대문자만 지나가세요
// 알파벳 하나만 입력 대문자-> YES / 아니면 NO
{
    function solution(a) {
        return a === a.toUpperCase() ? 'YES' : 'NO';
    }
    console.log(solution('m'));
    console.log(solution('M'));

}

// 30. 문자열 속 문자 찾기#####
// 찾는 문자시작 index 반환
// 입력 a: pineapple is yummy
// 입력 b: apple
// 출력 4
// indexOf() 주어진 값과 일치하는 첫번째 인덱스 반환
{
    function solution(a, b) {

        return a.indexOf(b);
    }
    console.log(solution('pineapple is yummy', 'apple'));
}

// 31. 자바스크립트 자료형의 복잡도 ###자료형 시작복잡도
// 배열 내장 함수의 시간 복작도가 O(1)이 아닌 것을 모두 고르시오.
// arr[i], arr.push(5), arr.slice(), arr.pop(), arr.includes(5)
// arr.slice(), arr.includes


// 32. 문자열 만들기
// 문자열 단어 갯수 출력
// 입: '안녕 홍길동'
// 출: 2
{
    function solution(a) {
        return a.split(' ').length;
    }
    console.log(solution('안녕 홍길동'));
}

// 33. 거꾸로 출력하기
// 입:  1 2 3 4 5
// 출: 5 4 3 2 1
{
    function solution(a) {
        return a.split(' ').reverse().join(' ')
    }
    console.log(solution('1 2 3 4 5'));
}

// 34. sort 구현하기####
// 오름차순 YES  / else NO
// 입력 175 39 2  42 
// 출력 NO
{
    function solution(a) {
        let temp = [];
        for (let i = 0; i < a.length; i++) {
            temp.push(a[i]);
        }
        let sort = a.sort((x, y) => x - y);
        return temp === sort ? 'yes' : 'no';
    }
    console.log(solution([175, 39, 2, 42]));
}

// 35. Factory 함수 사용하기 ###
// 2제곱, 3제곱, 4제곱 할수 있는 Factory 함수 만들기
// pass 에 코드 작성하여 two함수 완성하시오.
{
    function one(n) {
        function two(value) {
            const sqr = Math.pow(value, n);
            return sqr;
        }
        return two;
    }

    const a = one(2);
    const b = one(3);
    const c = one(4);

    console.log(a(10));
    console.log(b(10));
    console.log(c(10));
}

// 36. 구구단 출력하기
// 1~9 까지 하나 입력 하면 그 결과 출력
// 입: 2
// 출: 2 4 6 8 12 14 16 18
{
    function solution(n) {
        let num = '';
        for (let i = 1; i <= 9; i++) {
            num += n * i + ' ';
        }
        return num;
    }
    console.log(solution(2));
}

// 37. 반장선거 ### reduce
// 입: 원범 혜원 혜원 혜원 혜원 유진 유진
// 출: 혜원(이)가 4표로 반장이 되었습니다.
// reduce() 메서드는 배열의 각 요소에 대해 주어진 
// 리듀서함수를 실행하고 ,하나의 결과값을 반환
// 4개의 인자: 누산기, 현재값, 현재 인덱스, 원본 배열
{

    const items = ["Widget", "Gadget"];
    const prices = [9.95, 22.95];
    const cart = items.map((x, i) => ({ name: x, price: prices[i] }));
    console.log(cart);
}


// 38. 호준이의 아르바이트###
// 1~3위 학생에게 사탕을 준다, 중복가능
// 입: 97 86 75 66 55 97 85 97 97 95
// 출: 6
// sort, 
{
    function solution(arr) {
        let cnt =0;
        let set = new Set(arr);
        let unique = [...set];
        unique.sort((a,b) => b-a);
        unique.splice(3);
        for(let i=0; i<arr.length; i++) {
            if(unique.includes(arr[i])){
                cnt++;
            }
        }
        return cnt;
    }
    console.log(solution([97, 86, 75, 66, 55, 97, 85, 97, 97, 95]));
}

// 39. 오타수정하기
// 모든 q를 e로 바꾸는 프로그램 작성
// 입: hqllo my namq is hyqwon
// 출: hello my name is hyewon
// 1. 함수사용
// 2. 정규식사용
{
    function solution(n) {
        let num = n.split('');
        for (let i = 0; i < num.length; i++) {
            if (num[i] === 'q') {
                num[i] = 'e';
            }
        }
        return num.join('');
    }
    console.log(solution('hqllo my namq is hyqwon'));

}

// 40. 놀이동산에 가자
// 총 몇명 탈수 있는 지 알수있는 프로그램 작성
// 입: 50 제한 무게
// 입: 5 사람 수
// 입: 20 각 사람 몸무게
// 입: 20
//     20 
//     20 
//     20 
// 출: 2
{
    function solution(limit, cnt, person) {
        let sum =0;
        let n=0;
        for(let i of person){
            sum += i;
            n++;
            if(sum>limit){
                sum -= i;
                n--;
                return n;
            }
        }
        return n;
    }
    console.log(solution(50, 5, [20,20,20,20,20]));
}

// 41. 소수판별
// 숫자 주어지면 소수인지 아닌지 판별하는 프로그램 YES or NO
{
    function solution(n) {
        let cnt = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                cnt++;
            }
        }
        return cnt === 2 ? 'yes' : 'no';
    }
    console.log(solution(7));
    console.log(solution(4));
}

// 42. 2020년#
// 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨요일일까요?
// a, b를 입력 받아 2020년 a월 b일이 무슨요일인지 리턴하는 함수 solution 완성
// 요일이름 SUN, MON, THE, WED, THU, FRI, SAT
// a =5, b = 24라면 5월 24일은 일요일이므로 "SUN" 반환
// 제한조건
// 2020년은 윤년입니다.
// 2020년 a월 b일은 실제로 있는 날입니다.
// 13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다. 
{
    function solution(a, b) {
        const day = ["MON", "TUE", "WEN", "THU", "FRI", "SAT", "SUN"];

        const x = new Date(`2016-${a}-${b}`);

        return day[x.getDay()];
    }

    solution(4, 5);

}

{
    function solution(array, commands) {
        let answer = [];
        for (let a = 0; a < commands.length; a++) {
            let i = commands[a][0];
            let j = commands[a][1];
            let k = commands[a][2];

            let newArray = array
                .slice(i - 1, j)
                .sort((a, b) => a - b);
            answer.push(newArray[k - 1]);

        }
        return console.log(answer);
    }
    solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);
}

{
    function solution(a, b) {
        const day = ["MON", "TUE", "WEN", "THU", "FRI", "SAT", "SUN"];

        const x = new Date(`2016-${a}-${b}`);
        return day[x.getDay()];
    }
}

// 43. 10진수를 2진수로 
// 입: 10진수
// 출: 2진수로
{
    function solution(n) {
        let result = [];
        while (n > 0) {
            result.push(n % 2);
            n = Math.floor(n / 2);
        }
        return result.reverse().join('');
    }
    console.log(solution(8));
}

// 44. 각 자리수의 합
// 사용자가 입력한 양의 정수의 각 자리수의 합 구하는 프로그램 작성
// 입: 18234
// 출: 18
{
    function solution(n) {
        let sum = 0;
        let arr = n.split('');
        for (let i = 0; i < arr.length; i++) {
            sum += parseInt(arr[i]);
        }
        return sum;
    }
    console.log(solution('18234'));
}

// 45. getTime()함수 사용하기#
// Date객체 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 
// 이후로 지금까지 흐른시간을 천분의 1초 단위(ms)로 반환합니다.
// 이를 이용하여 현재 연도(2019)를 출력해보세요.
{
    const year = new Date().getFullYear();
    console.log(year);
}

// 46. 각 자리수의 합2
// 1부터 20까지의(20을 포함) 모든 숫자를 일력로 놓고 모든 자릿수의 총합을 구하세요.
// 101112131415
// 1+0+1+1.....
{
    let array = [];
    let sum = 0;
    for (let i = 1; i <= 20; i++) {
        array.push(i);
        sum += i;
    }
    console.log(array.join(''));
    console.log(sum);


}

// 47. set 자료형의 응용#
// 중복데이터 삭제
// 중복데이터 삭제, 실제 접수 명단이 몇명인지 
// 중복 제거하여 실제 접수인원 출력
{
    // 객체표현식으로 생성
    const people = {
        이호준: "01050442903",
        이호상: "01051442904",
        이상: "01058442904",
        이호상: "01051442904",
        이호상: "01051442904",
        이준: "010991442904",
        이호상: "01051442904",
        이지상: "01050442904",
        이호상: "01051442904"

    };
    // set 생성
    let result = new Set();
    // people을 셋에 더한다. 
    for (let key in people) {
        result.add(people[key]);
    }
    console.log(result.size);
}

// 48. 대소문자 바꿔서 출력하기
// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력
// 입: AAABBccdd
// 출: aaabbCCDD
{
    function solution(n) {
        let arr = n.split('');
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i].toUpperCase()) {
                arr[i] = arr[i].toLowerCase();
            }
            else {
                arr[i] = arr[i].toUpperCase();
            }
        }
        return arr.join('');
    }
    console.log(solution('AAABBccdd'));
}

// 49. 최댓값 구하기
// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들중 최댓값 반환
// 입: 10 9 8 7 6 5 4 3 2 1
// 출: 10
{
    function solution(arr) {
        return Math.max(...arr);
    }
    console.log(solution([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
}

// 50. 버블정렬 구현#
// 두인접한 원소를 검사하여 정렬하는 방법을 말합니다.
// 시간복잡도는 느리지만 코드가 단순하기 때문에 자주 사용
// 아래 완성
{
    // function bubble(arr) {
    //     let result = arr.slice();

    //     for(let i = 0; i < result.length-1; i++){
    //         for(###){
    //            // if(result[j] > result[j + 1]){
    //             /####
    //         }
    //         }
    //     }
    //     return result;
    // }

    // const items = prompt('입력').split(' ').map((n) =>{
    //     return parseInt(n, 10);
    // });

    // console.log(bubble(items));

}
