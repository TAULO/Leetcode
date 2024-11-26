/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    return Number(n).toString(2).split("").filter(bit => parseInt(bit) > 0).length
};