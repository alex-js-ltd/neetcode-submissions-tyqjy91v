function Solution () {};

    /**
     * @param {string} s
     * @return {number}
     */
Solution.prototype.lengthOfLongestSubstring = function (s) {

    const window = new Set();

    let l = 0;
    let longest = 0;

    for(let r = 0; r < s.length; r++) {

        // Remove duplicates from window
        while(window.has(s[r])) {
            window.delete(s[l]);
            l += 1;
        }

        window.add(s[r]);

        let length = r - l + 1;
        longest = Math.max(longest, length);
    }

    return longest;
};