function Solution () {};

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
Solution.prototype.topKFrequent = function (nums, k) {

    const seen = new Map();

    for(const n of nums) {

        if(!seen.get(n)) {
            seen.set(n, 0);
        }

        seen.set(n, seen.get(n) + 1);

        
    }

    const entries = Array.from(seen.entries());

    const sorted = entries.sort(([,a], [,b]) => {
        return b - a
    })

    return sorted.slice(0, k).map(([n]) => {
        return n;
    })

};