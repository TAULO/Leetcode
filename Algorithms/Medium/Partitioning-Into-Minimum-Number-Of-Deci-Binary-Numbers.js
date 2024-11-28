/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let arr = []
    for (let i = 0; i < n.length; i++) {
        const num = parseInt(n[i])
        let index = 0


        while (num > index) {
            index++
        }
        arr.push(index)
    }

    return arr.sort().pop()
};

/**
 * @param {string} n
 * @return {number}
 */
var minPartitionsSort = function(n) {
    return parseInt([...n].sort().pop())
}

/**
 * @param {string} n
 * @return {number}
 */
var minPartitionsFast = function(n) {
    let maxVal = 0

    for (let i = 0; i < n.length; i++) {
        const num = parseInt(n[i])

        maxVal = maxVal < num ? num : maxVal
    }

    return maxVal
};
