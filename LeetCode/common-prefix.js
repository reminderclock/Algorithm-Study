var longestCommonPrefix = function(strs) {
    let arr = strs.map((str)=>str.split(''));
    let a = arr.shift();
    let arr = [];
    for(let i=0; i<strs.length; i++) {
        arr.push(strs[i].substr(0,1));
        console.log(arr);
        if([...new Set(arr)].length>1) {
            return strs[0].substr(0,i-1);
        }
        arr = [];
    }
    // for(let i=0; i<strs.length; i++) {
    //     for(let j=0; j<strs[i].length; j++) {
    //         console.log(strs[i][j]);
    //     }
    // }
};
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));