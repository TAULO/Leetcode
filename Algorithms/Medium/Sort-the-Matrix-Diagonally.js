/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    let diagonals = {}
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            let key = i - j
            if (!diagonals[key]) diagonals[key] = []
            diagonals[key].push(mat[i][j])
        }
    }

    for (let key in diagonals) {
        diagonals[key].sort((a, b) => a - b);
    }

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            let key = i - j;
            mat[i][j] = diagonals[key].shift();
        }
    }

    return mat
};