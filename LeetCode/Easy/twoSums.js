// https://leetcode.com/problems/two-sum/
// nums = [2,7,11,15], target = 9
let twoSum = function(nums, target) {
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                answer.push(i);
                answer.push(j);
                return answer
            }
        }
    }
    return null;
};