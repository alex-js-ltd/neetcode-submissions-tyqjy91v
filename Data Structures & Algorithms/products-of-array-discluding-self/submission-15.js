function Solution () {};

    /**
     * @param {number[]} nums
     * @return {number[]}
     */
Solution.prototype.productExceptSelf = function (nums) {

    const res = Array.from({length: nums.length}, () => {
        return 1;
    });

    let prefix = 1;

    for(let l = 0; l < nums.length; l++) {
        res[l] = prefix;
        prefix *= nums[l];
    }

    let suffix = 1;

    for(let r = nums.length -1; r >= 0; r--) {
        res[r] *= suffix;
        suffix *= nums[r];
    }

    return res;


};
