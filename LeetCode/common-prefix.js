var longestCommonPrefix = function(strs) {
    // let a= strs[0].lengt;
    if(strs.length === 0) {
        return "";
    }
    for(let k=0; k<strs.length; k++) {
        if(strs[k].length ===0) {
            return "";
        }
    }
    if(strs.length === 1) {
        return strs[0];
    }
    if([...new Set(strs)].length ===1){
        return str[0];
    }
    for(let j=0; j<100; j++) {
        for(let i=1; i<strs.length; i++) {
            if(strs[0][j] !== strs[i][j]) {
                if(j === 0) {
                    return "";
                }
                return strs[0].slice(0,i);
            }
        }
    }
};
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix([])); 
console.log(longestCommonPrefix(["a"])); 