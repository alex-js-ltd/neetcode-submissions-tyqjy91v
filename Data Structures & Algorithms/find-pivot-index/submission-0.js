function Solution () {};


    /**
     * @param {number[]} nums
     * @return {number}
     */
Solution.prototype.pivotIndex = function (nums) {

    const length = nums.length;

    const leftSum = Array.from({length}, () => {
        return 0;
    });

    const rightSum = Array.from({length}, () => {
        return 0;
    });

    let prefix = 0;
    for(let l = 0; l <length; l++) {
        leftSum[l] = prefix;
        prefix += nums[l];
    }

    let suffix = 0;
    for(let r = length -1; r >= 0; r--) {
        rightSum[r] += suffix;
        suffix += nums[r];
    }

    console.log(leftSum);
    console.log(rightSum);

    for(let i = 0; i < length; i++) {
        if(leftSum[i] === rightSum[i]) {
            return i;
        }
    }

    return -1;
};