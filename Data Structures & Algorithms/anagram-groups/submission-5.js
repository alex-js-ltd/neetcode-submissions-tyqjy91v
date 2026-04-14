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
        prev.push(word);

        seen.set(key, prev);
    }

    console.log(seen);
    return [...seen.values()];

};