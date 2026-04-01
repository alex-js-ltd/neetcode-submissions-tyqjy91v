function Solution () {};

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
Solution.prototype.twoSum = function (nums, target) {

    const seen = new Map();

    for(let i = 0; i<nums.length; i++) {

        const need = target - nums[i];

        if(seen.has(need)) {
           return [i, seen.get(need)];
        }

        else {
            seen.set(nums[i], i);    
        }
    }

};