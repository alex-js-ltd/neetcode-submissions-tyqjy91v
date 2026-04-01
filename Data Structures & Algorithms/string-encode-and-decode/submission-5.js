function Solution () {};

    /**
     * @param {string[]} strs
     * @returns {string}
     */
Solution.prototype.encode = function (strs) {

  let str = '';

  for(const word of strs) {
    str += word.length + '#' + word;
  }

  return str

};

    /**
     * @param {string} str
     * @returns {string[]}
     */
Solution.prototype.decode = function (str) {
  const res = [];
  let i = 0;

  while(i < str.length) {

    const hashPosition = str.indexOf('#', i);
    const len = Number(str.slice(i, hashPosition));
    const start = hashPosition + 1;
    const end = start + len;
    const word = str.slice(start, end);

    res.push(word);

    i = end;
  }

  return res;
};