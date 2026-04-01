

function Solution () {};
  /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
Solution.prototype.isAnagram = function (s, t) {

    const seen = new Map();

    for(const char of s) {

        const count = seen.get(char);

        if(!count) {
            seen.set(char, 1);
        }

        else {
            seen.set(char, count + 1);
        }

    }

    for(const char of t) {

        if(!seen.has(char)) {
            return false;
        }

        const next = seen.get(char) -1;

        if(next === 0) {
            seen.delete(char);
        } else  {

            seen.set(char, next);
        }
    }

    return seen.size === 0;

};