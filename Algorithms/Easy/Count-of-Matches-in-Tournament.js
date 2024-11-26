/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let count = 0

    while (n > 1) {
        if (n % 2 === 0) {
            count += n / 2
            n = n / 2
        } else {
            count += (n - 1) / 2
            n = (n - 1) / 2 + 1
        }
    }

    return count
};

var numberOfMatchesRecursive = function(n) {
    if (n === 1)  return 0

    if (n % 2 === 0) {
        return n / 2 + numberOfMatchesRecursive(n / 2)
    } else {
        return (n-1) / 2 + numberOfMatchesRecursive((n-1) / 2 + 1)
    }
}