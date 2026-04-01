

function Solution () {

}

Solution.prototype.hasDuplicate = function(nums) {

const seen = new Set(nums);

return seen.size !== nums.length;
}