function Solution () {};

   /**
     * @param {number[]} prices
     * @return {number}
     */
Solution.prototype.maxProfit = function(prices) {

  let maxProfit = 0;
  let minPrice = Infinity;

  for(const price of prices) {

    maxProfit = Math.max(maxProfit, price - minPrice);
    minPrice = Math.min(minPrice, price);
  }
  
    return maxProfit;
};
