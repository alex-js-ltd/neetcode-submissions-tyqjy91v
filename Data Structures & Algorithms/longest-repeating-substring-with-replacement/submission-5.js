function Solution() {};

    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
Solution.prototype.characterReplacement = function (s, k) {

    const seen = new Map();

    let l = 0;

    let highestFreq = 0;

    let longest = 0;

    for(let r = 0; r < s.length; r++) {

        if(!seen.has(s[r])) {
            seen.set(s[r], 0);
        }

        const freq = seen.get(s[r]) + 1;

        seen.set(s[r], freq);

        highestFreq = Math.max(highestFreq, freq);

        while((r - l + 1) - highestFreq > k) {

            // Remove the left most character from the window
            seen.set(s[l], seen.get(s[l]) - 1);

            // Slide window
            l += 1;
        }

        longest = Math.max(longest, r - l + 1);
    }

    return longest;
    
};