function Solution () {};

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
Solution.prototype.subarraySum = function (nums, k) {

    // Create freq map of prefix sum
    const seen = new Map();
    seen.set(0, 1);

    let count = 0;

    let prefix = 0;

    for(let i = 0; i < nums.length; i++) {

        prefix += nums[i];

        const need = prefix - k;

        if(seen.has(need)) {
            count += seen.get(need);
        }

        if(!seen.has(prefix)) {
            seen.set(prefix, 0);
        }

        const freq = seen.get(prefix) + 1;
        seen.set(prefix, freq);
    }

    return count;

};