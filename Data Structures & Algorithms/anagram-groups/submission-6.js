function Solution () {};

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
Solution.prototype.groupAnagrams = function (strs) {

    const seen = new Map();

    for(const word of strs) {

        const key = Array.from(word).sort().join('');

        if(!seen.has(key)) {
            seen.set(key, []);
        }

        const prev = seen.get(key);
        const next = prev.concat(word);
        seen.set(key, next);
    }

    return [...seen.values()];

};