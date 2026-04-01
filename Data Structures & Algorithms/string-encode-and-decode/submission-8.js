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

  return str;

};

    /**
     * @param {string} str
     * @returns {string[]}
     */

Solution.prototype.decode = function (str) {

  let res = []; 
  let i = 0;

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