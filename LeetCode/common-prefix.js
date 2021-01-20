var longestCommonPrefix = function(strs) {
    if([...new Set(strs)].length ===1){
        return strs[0];
    }
    for(let j=0; j<=200; j++) {
        for(let i=1; i<strs.length; i++) {
            if(strs[0][j] !== strs[i][j]) {
                return strs[0].slice(0,j);
            }
        }
    }
    return "";
};
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix([])); 
console.log(longestCommonPrefix(["a"])); 
console.log(longestCommonPrefix(["a","a","a"])); 
console.log(longestCommonPrefix(["aaa" ,"aa", "aaa"])); 