
function Solution () {};

    /**
     * @param {number[]} heights
     * @return {number}
     */
Solution.prototype.maxArea = function (heights) {

    let l = 0;
    let r = heights.length -1;

    let maxArea = 0;

    while(l < r) {

         // Distance between the two walls
        const width = r - l;
        // Water level is limited by the shorter wall
        const height = Math.min(heights[l], heights[r]);
        // Area of current container
        const area = width * height;

        maxArea = Math.max(maxArea, area);

        if(heights[l] < heights[r]) {
            l += 1;
        }

        else {
            r -= 1;
        }
    }

    return maxArea;

};
