var isSameTree = function(p, q) {
    if(p.length !== q.length) {
        return false;
    }
    for(let i=0; i<q.length; i++) {
        if(p[i] !== q[i]) {
            return false
        }
    }
    return true;
    
};
console.log(isSameTree([1,2,3], [1,2,3]));
console.log(isSameTree([1,2], [1, null, 2]));
console.log(isSameTree([1,2,1], [1, 1, 2]));