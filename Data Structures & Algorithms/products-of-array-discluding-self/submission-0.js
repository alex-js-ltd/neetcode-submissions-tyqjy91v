function Solution () {

}

Solution.prototype.productExceptSelf = function(nums) {

    const result = [];

    for(let i = 0; i<nums.length; i++) {

     const arr = nums.filter((_, index) => {
        return index !== i;
     });

    const product = arr.reduce((acc, curr) => {
        return acc * curr;
    });

    result.push(product);
    }

    return result;
}