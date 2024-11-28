/**
 * @param {string} num
 * @return {boolean}
 */

var isBalanced = function(num) {
    let even = 0
    let unEven = 0
    var arr =  [...num]

    arr.forEach((n, i) => {
        if (i % 2 === 0) {
            even += parseInt(n)
        } else {
            unEven += parseInt(n)
        }
    })

    return even === unEven
};