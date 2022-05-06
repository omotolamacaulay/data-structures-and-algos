// https://leetcode.com/problems/roman-to-integer/

let romanToInt = function(s) {
    const symbol = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let number = 0; 
    for(let i= 0; i< s.length; i++) {
        const present = symbol[s[i]]
        const next =symbol[s[i+1]]
        if(present < next) {
           number -= present
           } else {
               number += present
           }
    }
    return number;
};