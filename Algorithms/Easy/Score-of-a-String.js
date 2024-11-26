/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let sum = 0

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        let nextChar = s[i + 1]

        if (nextChar) {
            sum += Math.abs(char.charCodeAt() - nextChar.charCodeAt())
        }
    }

    return sum
};