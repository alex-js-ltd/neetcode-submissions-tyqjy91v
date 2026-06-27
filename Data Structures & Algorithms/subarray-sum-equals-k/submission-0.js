function Solution () {};

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
Solution.prototype.subarraySum = function (nums, k) {

    const seen = new Map();
    seen.set(0, 1);

    let res = 0;

    let currentSum = 0;

    for(const num of nums) {

        currentSum += num;

        const need = currentSum - k;

        if(seen.has(need)) {
            res += seen.get(need);
        }

        if(!seen.has(currentSum)) {
            seen.set(currentSum, 0);
        }

        const freq = seen.get(currentSum) + 1;
        seen.set(currentSum, freq);

        
    }
    
    return res;
      

};
