/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let count = 0
    let week = 0

    let index = 0
    let day = 0

    while (index < n) {
        if (index !== 0 && index % 7 === 0) {
            day = ++week
        }

        count += (day + 1)
        index++
        day++
    }

    return count
};