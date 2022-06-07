// https://leetcode.com/problems/longest-common-prefix/

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
let longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ''
    let firstString = strs[0]
    let result = ''
    for (let i =0; i < firstString.length; i++) {
        for (let j= 0; j< strs.length; j++) {
            if(firstString[i] !== strs[j][i]) {
               return result
              }
        }
        result += firstString[i]
    }
    return result
};