function Solution () {};

    /**
     * @param {string[]} strs
     * @returns {string}
     */
Solution.prototype.encode = function (strs) {

    let res = '';

    for(const word of strs) {
        res += word.length + '#' + word;
    }

    return res;

};

    /**
     * @param {string} str
     * @returns {string[]}
     */
Solution.prototype.decode = function (str) {

    let i = 0;
    let res = [];

    while(i < str.length) {

        const hashIndex = str.indexOf('#', i);
        const len = Number(str.substring(i, hashIndex));

        const start = hashIndex + 1;
        const end = start + len;

        const word = str.substring(start, end);

        res.push(word);

        i = end;

    }

    return res;

};