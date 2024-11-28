/**
 * @param {number[][]} grid
 */
var NeighborSum = function (grid) {
    this.grid = grid
};

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function (value) {
    const grid = this.grid

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (value === grid[i][j]) {
                let buttom = 0, top = 0;

                if (grid[i + 1]) {
                    buttom = grid[i + 1][j] ?? 0
                }

                if (grid[i - 1]) {
                    top = grid[i - 1][j] ?? 0
                }

                const left = grid[i][j - 1] ?? 0
                const right = grid[i][j + 1] ?? 0

                return left + buttom + right + top
            }
        }
    }

    return 0
};

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function (value) {
    const grid = this.grid

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (value === grid[i][j]) {
                let leftButtom = 0, rightButtom = 0, leftTop = 0, rightTop = 0


                if (grid[i + 1]) {
                    leftButtom = grid[i + 1][j - 1] ?? 0
                    rightButtom = grid[i + 1][j + 1] ?? 0
                }

                if (grid[i - 1]) {
                    leftTop = grid[i - 1][j - 1] ?? 0
                    rightTop = grid[i - 1][j + 1] ?? 0
                }

                return leftButtom + rightButtom + leftTop + rightTop
            }
        }
    }

    return 0
}


/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */