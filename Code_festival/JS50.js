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
    console.log(typeof(arr));
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

    for(var i=1; i<5; i+=2){
        a += i;
    }
    console.log(a+b);
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
        'eyesight':1
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
        let result='';
        for(let i=1; i<=n; i++) {
            let tree = '';
            for(let j=n-i; j>=0; j--){
                tree += ' ';
            }
            for(let k=1; k<=2*i-1; k++){
                tree += '*';
            }
            result += tree+'\n';
        }
        return result;
    }
    console.log(solution(5));
}

// 11. for를 이용한 기본 활용
// 1~100 모두 더하는 코드 완성
{
    let s = 0;
    for(let i = 1; i <= 100; i++){
        s +=i;
    }
    console.log(s)
}

// 12. 게임 캐릭터 클래스 만들기
// 다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와
// '파이어볼'이 출력되게 만드시오.
{
    // 여기에 클래스작성
    class Wizard{
        constructor(health, mana, armor) {
            this.health = health;
            this.mana = mana;
            this.armor = armor;
        }
        attack(){
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
        const planet=['수','금','지','화','목','토','천','해'];
        return planet[a-1];
    }
    console.log(solution(1));
    console.log(solution(2));

}

// 14. 3의 배수인가요?
// 3의 배수이면 박수를 출력, 아니면 숫자 출력
{   
    function solution(n) {
        let num=0;
        if(n%3===0) {
            num = '짝';
        }
        else{
        num=n;
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
     return height>=150 ? 'yes' : 'no';
 }
 console.log(solution(169));   
 console.log(solution(140));   
}
// 18. 평균 점수
// 입력: 20, 30, 40
// 출력: 30
{
    function solution(a,b,c) {
        let sum=0;
        sum = a+b+c;
        return (sum/3);
    }
    console.log(solution(20, 30, 40));
}
// 19. 제곱을 구하자
// 입력: a b
// 출력: a^b
{
    function solution(a, b) {
        return Math.pow(a,b);
    }
    console.log(solution(4,5));
}

// 20. 몫과 나머지
// 입력 : 10 2
// 출력 : 5 0
{
    function solution(a,b) {
        let value = Math.floor(a/b);
        let left = a%b;
        return `${value},${left}`;
    }
    console.log(solution(10,2));
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
    function solution(a,b) {
        let result=0;
        return b%a===0 ? true : false;
    }
    console.log(solution(2,10));
    console.log(solution(3,10));
}

// 23. ox문제
//console.log(10/3); ??
{
    console.log(10/3);
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
        return Math.PI*Math.pow(r,r);
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
        const planet={
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
    function solution(key,value) {
        const obj={};
        for(let i=0; i<key.length; i++) {
            obj[key[i]] = value[i];
        }
        return obj;
    }
    console.log(solution(['유진','정민'],[30,90]));

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
        let result='';
        for(let i=0; i<a.length-1; i++) {
            result += `${a[i]} ${a[i+1]}`+ '\n';
        }
        return result;
    }
    console.log(solution('Javascript'));
}

// 29. 대문자만 지나가세요
// 알파벳 하나만 입력 대문자-> YES / 아니면 NO
{
   function solution(a) {
       return a===a.toUpperCase() ? 'YES' : 'NO';
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
    function solution(a,b) {

        return a.indexOf(b);
    }
    console.log(solution('pineapple is yummy','apple'));
}
