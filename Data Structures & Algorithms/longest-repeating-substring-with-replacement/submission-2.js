function Solution () {};

    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
Solution.prototype.characterReplacement = function (s, k) {

    const window = new Map();

    let l = 0;

    let longest = 0;

    let highestFreq = 0;

    for(let r = 0; r < s.length; r++) {

        if(!window.has(s[r])) {
            window.set(s[r], 0);
        }

        const next = window.get(s[r]) + 1;

        window.set(s[r], next);

        highestFreq = Math.max(highestFreq, next);

        while((r - l + 1) - highestFreq > k) {
            window.set(s[l], window.get(s[l]) - 1);
            l += 1;
        }

        const length = r - l + 1;

        longest = Math.max(longest, length);
    }

    return longest;
};