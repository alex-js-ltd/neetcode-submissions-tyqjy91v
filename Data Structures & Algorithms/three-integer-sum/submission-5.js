function Solution() {}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
Solution.prototype.threeSum = function (nums) {

  const sorted = nums.slice().sort((a, b) => a - b);

  const result = [];

  for(let i = 0; i<sorted.length -2; i++) {

    if(i > 0 && sorted[i] === sorted[i - 1]) {
        continue;
    }

    if(sorted[i] > 0) {
        break;
    }

    let l = i + 1;
    let r = sorted.length -1;

    while(l < r) {

        const sum = sorted[i] + sorted[l] + sorted[r];

        if(sum === 0) {
            result.push([sorted[i], sorted[l], sorted[r]]);
            l += 1;
            r -= 1;
        

        while(l < r && sorted[l] === sorted[l -1]) {
            l += 1;
        }

        while(l < r && sorted[r] === sorted[r + 1]) {
            r -= 1;
        }

        } else if(sum < 0) {
                l += 1;
            
            }

            else {
                r -= 1;
            }
    }

  }

  return result;
};
