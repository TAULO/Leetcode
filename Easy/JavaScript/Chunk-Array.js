/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if (size > arr.length && arr.length < 1) return arr

    const chunk = []

    for (let i = 0; i < arr.length; i += size) {
        chunk.push(arr.slice(i, i + size))
    }

    return chunk
};
