function Solution () {};

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
Solution.prototype.topKFrequent = function (nums, k) {

    const seen = new Map();

    for(n of nums) {

        if(!seen.has(n)) {
            seen.set(n, 0);
        }

        const prev = seen.get(n);
        const next = prev + 1;

        seen.set(n, next);
    }

    const entries = [...seen.entries()];

    const sorted = entries.sort(([,a], [,b]) => {

        return b - a;
    });

    return sorted.slice(0, k).map(([k]) => {

        return k;
    })


};