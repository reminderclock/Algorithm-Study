function solution(n, lost, reserve) {
    let realReserve = reserve.filter(r => !lost.includes(r));
    let realLost = lost.filter(r => !reserve.includes(r));

    for(let i=0; i<realReserve.length; i++) {
        for(let j=0; j<realLost.length; j++) {
            if(Math.abs(realReserve[i]-realLost[j])===1 && realReserve[i]!==0 && realLost[j]!==0) {
                realLost.splice(j,1);
                realReserve.splice(i,1);
                j=0;
                i=0;
            }
        }
    }
    return n-realLost.length;
}