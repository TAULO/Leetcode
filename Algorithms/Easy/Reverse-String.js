/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const temp = []
    let j = 0

    for (let i = s.length - 1; i >= 0; i--) {
        temp[j++] = s[i]
    }

    for (let i = 0; i < temp.length; i++) {
        s[i] = temp[i]
    }
};