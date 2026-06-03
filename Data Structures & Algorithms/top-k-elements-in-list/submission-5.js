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
            seen.set(n, 0)
        }

        const next = seen.get(n) + 1;

        seen.set(n, next);
    }

    const entries = [...seen.entries()];

    const sorted = entries.sort(([,a], [,b]) => {

        return b - a;
    });

    const mapped = sorted.map(([num]) => {

        return num;

    });

    return mapped.slice(0, k);

};