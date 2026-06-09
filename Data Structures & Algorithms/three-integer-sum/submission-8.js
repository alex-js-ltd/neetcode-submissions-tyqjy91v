function Solution () {};

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
Solution.prototype.threeSum = function (nums) {

    // Sort the array
    nums.sort((a, b) => {
        return a - b;
    });

    const res = [];

     // Fix one number
    for(let start = 0; start < nums.length - 2; start++) {

        if(start > 0 && nums[start] === nums[start - 1]) {
            continue;
        }

        let l = start + 1;
        let r = nums.length - 1;

        while(l < r) {

            const sum = nums[start] + nums[l] + nums[r];

            if(sum === 0) {
            
            res.push([nums[start], nums[l], nums[r]]);

            l += 1;
            r -= 1;

            // Skip duplicates
            while(l < r && nums[l] === nums[l - 1]) {
                l += 1;
            }

            // Skip duplicates
            while(l < r && nums[r] === nums[r + 1]) {
                r -= 1;
            }

            }
            
            if (sum < 0) {
                l += 1;
            }

            if (sum > 0) {
                r -= 1;
            }
        }

    }

    return res;
};
