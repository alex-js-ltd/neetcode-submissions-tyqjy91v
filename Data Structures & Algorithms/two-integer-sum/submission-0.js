

function Solution () {

}


Solution.prototype.twoSum = function (nums, target) {


    const seen = new Map();


    for(let i = 0; i <nums.length; i++) {

        const needs = target - nums[i];

        if(seen.has(needs)) {

            return [seen.get(needs), i]
        }

        else {

            seen.set(nums[i], i);
        }

    }

    return [];

}