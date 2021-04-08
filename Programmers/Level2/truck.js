// Level2 다리를 지나는 트럭
// 다리의 길이, 다리가 견딜수 있는 무게, 트럭의 무게
function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    // 다리를 지난 트럭
    let resultArr = [];
    // 다리를 건더는 트럭
    let stateArr = [];
    let cnt = [];
    for(let i=0; i<truck_weights.length; i++) {
        cnt.push(0);
    }
    // 총 걸린 시간 
    let totalTime = 0;
    stateArr.push(truck_weights.shift());
    time++;
    
    // 트럭 전부 처리할동안
    while(truck_weights.length > 0 && stateArr.length >0) {
        if(truck_weights.length === 0 && stateArr.length === 0){
            break;
        }
        let sum = stateArr.reduce((acc, curr) => acc+curr,0)
        if(sum+truck_weights[0] <= weight) {
            stateArr.push(truck_weights.shift())
            cnt.pop();
        }
        time++;
        if(time>bridge_length) {
            resultArr.push(stateArr.shift());
            if(stateArr.length !== 0) {
                totalTime += time;
                time--;
            }
            else {
                totalTime += time;
                time=0;
            }
        }
    }
    return totalTime;
}
console.log(solution(2,10,[7,4,5,6]))
console.log(solution(100,100,[10]))
console.log(solution(100,100,[10,10,10,10,10,10,10,10,10,10]))