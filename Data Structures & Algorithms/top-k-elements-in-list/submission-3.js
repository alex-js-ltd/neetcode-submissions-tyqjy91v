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

        const next = seen.get(n) + 1;

        seen.set(n, next);
    }

    const entries = [...seen.entries()];

    const sorted = entries.sort((a, b) => {

        const [,countA] = a;
        const [,countB] = b;

        return countB - countA;

    })

    const result = sorted.slice(0, k).map(([k, v]) => {
        return k;
    });

    return result;

};