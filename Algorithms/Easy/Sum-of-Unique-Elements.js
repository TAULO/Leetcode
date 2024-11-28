/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    return nums
        .filter(n => nums.indexOf(n) === nums.lastIndexOf(n))
        .reduce((acc, curr) => acc + curr, 0)
};