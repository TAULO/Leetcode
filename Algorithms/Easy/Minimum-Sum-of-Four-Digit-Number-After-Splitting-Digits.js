/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    num = num.toString()

    const sorted = [...num].sort()

    return parseInt(sorted[0] + sorted[2]) + parseInt(sorted[1] + sorted[3])
};