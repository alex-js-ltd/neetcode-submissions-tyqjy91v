function Solution () {};

    /**
     * @param {number[]} nums
     * @return {number[]}
     */
Solution.prototype.productExceptSelf = function (nums) {

    const len = nums.length;
    const res = new Array(len).fill(1);

    let prefix = 1;
    for(let i = 0; i < len; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for(let i = len - 1; i >= 0; i--) {
        res[i] *= suffix;
        suffix *= nums[i];
    }

    return res;

};