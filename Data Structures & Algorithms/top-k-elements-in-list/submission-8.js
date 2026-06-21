function Solution () {};

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
Solution.prototype.topKFrequent = function (nums, k) {

    const seen = new Map();

    for(const n of nums) {

        if(!seen.has(n)) {
            seen.set(n, 0);
        }

        const freq = seen.get(n) + 1;

        seen.set(n, freq);
    }

    const buckets = new Array(nums.length + 1).fill().map(() => {
        return [];
    });

    for(const [num, count] of seen.entries()) {
        buckets[count].push(num);
    }

    const res = [];

    for(let i = buckets.length -1; i >= 0; i--) {

     buckets[i].forEach((n) => {
        res.push(n);
     });

        if(res.length === k) {
            return res;
        }
    }


};