

// "Hello" length 5 → 5#Hello

// "World" length 5 → 5#World

function Solution () {

}

Solution.prototype.encode = function (strs) {
  
  let out = '';

  for (const s of strs) {
    out += s.length + '#' + s;
  }
  
  return out;
};

Solution.prototype.decode = function (str) {

  const result = [];

  let i = 0;

  while(i < str.length) {

    let hash = i;

    while(str[hash] !== '#') {
      hash += 1;
    }

    const len = Number(str.substring(i, hash));

    const start = hash + 1;
    const end = start + len;

    const word = str.slice(start, end);

    result.push(word);

    i = end;
  }

  return result;
};