function Solution () {};

    /**
     * @param {character[][]} grid
     * @return {number}
     */
Solution.prototype.numIslands = function (grid) {

    if(!grid || grid.length === 0) {
        return 0;
    }

    const rows = grid.length;
    const cols = grid[0].length;

    let islands = 0;

    function dfs(r, c) {

        // Out of bounds
        if(r < 0 || r >= rows || c < 0 || c >= cols) {
            return;
        }
        
        // Water or already visited
        if(grid[r][c] === '0') {
            return;
        }

        // Mark land as visited
        grid[r][c] = '0';

        dfs(r + 1, c); // Up
        dfs(r - 1, c); // Down
        dfs(r, c + 1); // Right
        dfs(r, c - 1); // Left
    }

    for(let r = 0; r < rows; r++) {

        for(let c = 0; c <cols; c++ ) {

            if(grid[r][c] === '1') {
                islands += 1;
                dfs(r, c);
            }
        }
    }

    return islands;
};