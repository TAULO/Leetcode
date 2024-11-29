/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const double = s + s
    const res = double.slice(1, double.length -1);

    return res.includes(s)
};