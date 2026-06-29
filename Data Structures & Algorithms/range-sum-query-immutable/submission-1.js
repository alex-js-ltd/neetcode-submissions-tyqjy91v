    /**
     * @param {number[]} nums
     */
function NumArray(nums) {
    this.nums = nums;
}

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
NumArray.prototype.sumRange = function (left, right) {

    let prefix = 0;

    for(let i = left; i <= right; i++) {
        prefix += this.nums[i];
    }

    return prefix;
};