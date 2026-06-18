function Solution () {};

    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
Solution.prototype.characterReplacement = function (s, k) {

    const seen = new Map();

    let l = 0;

    let maxFreq = 0;

    let longest = 0;

    for(let r = 0; r < s.length; r++) {

        if(!seen.has(s[r])) {
            seen.set(s[r], 0);
        }

        const next = seen.get(s[r]) + 1;

        seen.set(s[r], next);

        maxFreq = Math.max(maxFreq, next);

        // Window length minus maxFreq is greater than k
        while((r - l + 1) - maxFreq > k) {
       
            seen.set(s[l], seen.get(s[l]) -1);
            l += 1;
        }

        longest = Math.max(longest, r - l + 1);
    }

    return longest;
};