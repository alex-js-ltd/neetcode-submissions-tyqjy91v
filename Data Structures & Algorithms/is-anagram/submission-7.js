function Solution () {};

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

Solution.prototype.isAnagram = function (s, t) {

    const seen = new Map();

    for(const char of s) {

        if(!seen.has(char)) {
            seen.set(char, 0);
        }

        const next = seen.get(char) + 1;

        seen.set(char, next);
    }


    for(const char of t) {

        if(!seen.has(char)) {
            return false;
        }

        const next = seen.get(char) - 1;

        if(next === 0) {
            seen.delete(char);
        } else {
            seen.set(char, next);
        }

  
    }

    return seen.size === 0;

};