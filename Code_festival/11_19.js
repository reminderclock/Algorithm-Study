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

