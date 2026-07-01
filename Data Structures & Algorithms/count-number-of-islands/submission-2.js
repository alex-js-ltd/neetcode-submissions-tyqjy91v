function Solution () {};

    /**
     * @param {character[][]} grid
     * @return {number}
     */
Solution.prototype.numIslands = function (grid) {

    if(grid == null) {
        return 0;
    }

    if(grid.length === 0) {
        return 0;
    }

    const rows = grid.length;
    const cols = grid[0].length;

    let count = 0;

    function dfs(r, c) {

        // Out of bounds
        if(r < 0 || r >= rows || c < 0 || c >= cols) {
            return;
        }

        // Water
        if(grid[r][c] !== '1') {
            return;
        }
        
        // If we reach an island do have to mutate the grid here?
        grid[r][c] = 'X';
    
        dfs(r, c +1);
        dfs(r, c -1);
        dfs(r +1, c);
        dfs(r -1, c);
    }

    for(let r = 0; r < rows; r++) {

        for(let c = 0; c < cols; c++) {

           if(grid[r][c] === '1') {
                count += 1;
           }
           dfs(r, c);
        }
    }

    return count;
};