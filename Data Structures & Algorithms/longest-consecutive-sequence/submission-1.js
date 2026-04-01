function Solution () {};

/**
 * @param {number[]} nums
 * @return {number}
*/

Solution.prototype.longestConsecutive = function(nums) {

    const numsSet = new Set(nums);

    let longest = 0;

    for(const n of numsSet) {

        if(!numsSet.has(n - 1)) {

            let length = 1;

            while(numsSet.has(n + length)) {
                length += 1
            }

            longest = Math.max(length, longest);

        }
    }

    return longest;
}