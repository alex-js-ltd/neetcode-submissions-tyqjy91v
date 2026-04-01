function Solution() {};

    /**
     * @param {number[]} nums
     * @return {boolean}
     */
Solution.prototype.hasDuplicate = function (nums) {

    const seen = new Set();

    for(const n of nums) {
        if(seen.has(n)) {
            return true;
        }
        else {
            seen.add(n);
        }
    }

    return false;
};