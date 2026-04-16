function Solution () {};

    /**
     * @param {number[]} nums
     * @return {number}
     */

Solution.prototype.longestConsecutive = function (nums) {

    const seen = new Set(nums);
    let longest = 0;

    for(const n of nums) {

        if(!seen.has(n - 1)) {
            let length = 1;

            while(seen.has(n + length)) {
                length += 1;
            }

            longest = Math.max(length, longest);
        }
    }

    return longest;

};