function Solution () {};
   /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
Solution.prototype.twoSum = function (nums, target) {

    const seen = new Map();
    const res = [];

    nums.forEach((n, i) => {

        const need = target - n;

        if(seen.has(need)) {
           res.push(i);
           res.push(seen.get(need));
        }

        seen.set(n, i);
    })

    return res;

};