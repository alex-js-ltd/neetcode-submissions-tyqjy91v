
function Solution () {};

    /**
     * @param {number[]} nums
     * @return {number[]}
     */
Solution.prototype.productExceptSelf = function (nums) {

    const res = Array.from({length: nums.length}, () => {
        return 0;
    });

    let prefix = 1;

    for(let i = 0; i < nums.length; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;

    for(let i = nums.length -1; i >= 0; i--) {
        res[i] *= suffix;
        suffix *= nums[i];
    }

    return res;

};