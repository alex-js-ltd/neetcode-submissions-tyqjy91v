

function Solution () {

}

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

Solution.prototype.groupAnagrams = function (strs) {

    const seen = new Map();

    for(const word of strs) {

        const key = [...word].toSorted().join('');

        const group = seen.get(key)
        
        if(group) {

            group.push(word);
            
            seen.set(key, group);
        } else {

            seen.set(key, [word]);
        }
    }

    return [...seen.values()];
}