function Solution () {};

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

Solution.prototype.groupAnagrams = function (strs) {

    const seen = new Map();

    for(const word of strs) {

        const key = [...word].sort().join('');

        if(seen.has(key)) {
            seen.set(key, [...seen.get(key), word]);
        } else {
            seen.set(key, [word]);
        }
       
    }

    const result = Array.from(seen.values());

    return result;

};