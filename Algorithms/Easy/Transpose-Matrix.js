/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const transpose = []

    let index = 0;

    while (index < matrix[0].length) {
        let temp = []

        for (let row = 0; row < matrix.length; row++) {
            let currRow = matrix[row]

            temp.push(currRow[index])
        }

        transpose.push(temp)
        index++
    }

    return transpose
};