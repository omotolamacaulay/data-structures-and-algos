// https://leetcode.com/problems/palindrome-number/
// Input: x = 121 Output: true
var isPalindrome = function(x) {
    let turnToString = x.toString()
    const separate = turnToString.split("");
    const flip = separate.reverse()
    const y = flip.join("")
    if (y != x) {
        return false
    } else {
        return true
    }
};