/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let holder = ""
    x = x + ""
    for (let i = x.length - 1; i >= 0; i--) {
        holder += x[i]
    }
    return holder === x
};