
function Solution () {};

    /**
     * @param {number[]} prices
     * @return {number}
     */
Solution.prototype.maxProfit = function (prices) {

    let l = 0;
    let r = 0;

    let maxProfit = 0;

    while(r < prices.length) {

        const buyPrice = prices[l];
        const sellPrice = prices[r];

        if(buyPrice < sellPrice) {
            
            const profit = sellPrice - buyPrice;
            maxProfit = Math.max(maxProfit, profit);
        }

        else {
            l = r;
        }

        r += 1;
    }

    return maxProfit;


};