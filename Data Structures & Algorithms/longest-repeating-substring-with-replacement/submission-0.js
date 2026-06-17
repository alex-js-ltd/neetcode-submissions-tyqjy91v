

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

    let maxFreq = 0;

    for(let r = 0; r < s.length; r++) {

        const char = s[r];

        if(!window.has(char)) {
            window.set(char, 0);
        }

        const prev = window.get(char);
        const next = prev + 1;

        window.set(char, next);

        maxFreq = Math.max(maxFreq, next);

        

        while(r - l + 1 - maxFreq > k) {
            window.set(s[l], window.get(s[l]) - 1);
            l += 1;
        }

        longest = Math.max(longest, r - l + 1);


    }

    return longest;

};