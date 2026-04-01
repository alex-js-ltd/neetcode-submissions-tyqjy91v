function Solution () {

}
   /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
Solution.prototype.topKFrequent = function(nums,k) {

    const seen = new Map();


    nums.forEach((num) => {

        if(seen.has(num)) {

            const count = seen.get(num);

            seen.set(num, count + 1);
        }

        else {

            seen.set(num, 1);
        }
    });


    const entries = [...seen];

    const sorted = entries.toSorted(([,a],[,b]) => {

        return b - a;
    })

    return sorted.slice(0,k).map(([num]) => {

        return num;
    })

}