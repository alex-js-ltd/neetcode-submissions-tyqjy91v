function Solution () {};

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
Solution.prototype.topKFrequent = function (nums, k) {

    // Create freq map
    const seen = new Map();

    for(const n of nums) {

        if(!seen.has(n)) {
            seen.set(n, 0);
        }

        const freq = seen.get(n) + 1;

        seen.set(n, freq);
    }

    // Create buckets
    const buckets = Array.from({length: nums.length + 1}, () => {
        return [];
    });

    for(const [num, freq] of seen.entries()) {
        buckets[freq].push(num);
    }

    // Iterate in reverse order
    const res = [];

    for(let i = buckets.length -1; i >= 0; i--) {

        for(const n of buckets[i]) {
            res.push(n);
            if(res.length === k) {
                return res;
            }
        }
    }
  

    return res;
};