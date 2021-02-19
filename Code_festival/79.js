function rotate(a, t){
    let b = a.slice();
    let c = [];
    for (let i = 0; i < t; i++){
        b.unshift(b.pop());
    }
    for (let i in a){
        c.push(Math.abs(a[i]-b[i]));
    }
    const m = Math.min.apply(null, c);
    let index = c.indexOf(m);

    console.log("index :", index);
    console.log("value :", a[index], b[index]);
}

const l = [10, 20, 25, 27, 34, 35, 39];
const turn = prompt('순회 횟수는?');

rotate(l, turn);