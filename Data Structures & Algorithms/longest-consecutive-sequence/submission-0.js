function Solution () {};

/**
 * @param {number[]} nums
 * @return {number}
*/

Solution.prototype.longestConsecutive = function(nums) {

    const numsSet = new Set(nums);

    let longest = 0;
    
    for(const num of numsSet) {

        if(!numsSet.has(num -1)) {
            
            let length = 1;

            while(numsSet.has(num + length)) {

                length += 1;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;

}