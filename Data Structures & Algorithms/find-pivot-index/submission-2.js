function Solution () {};

    /**
     * @param {number[]} nums
     * @return {number}
     */
Solution.prototype.pivotIndex = function (nums) {

    const leftSum = Array.from({length: nums.length}, () => {
        return 0;
    });

    const rightSum = Array.from({length: nums.length}, () => {
        return 0;
    });


    let suffix = 0;

    for(let i = nums.length -1; i >= 0; i--) {
        rightSum[i] = suffix;
        suffix += nums[i];
    }

    let prefix = 0;

    for(let i = 0; i < nums.length; i++) {
        leftSum[i] = prefix;
        prefix += nums[i];

        if(leftSum[i] === rightSum[i]) {
            return i;
        }
    }


    return -1;


};