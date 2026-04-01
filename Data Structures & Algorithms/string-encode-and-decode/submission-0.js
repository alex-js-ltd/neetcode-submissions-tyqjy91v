

// "Hello" length 5 → 5#Hello

// "World" length 5 → 5#World

function Solution () {

}

Solution.prototype.encode = function (strs) {
  let out = '';
  for (const s of strs) out += s.length + '#' + s;
  return out;
};

Solution.prototype.decode = function (s) {
  const res = [];
  let i = 0;

  while (i < s.length) {
    let j = i;
    while (s[j] !== '#') j++;

    const len = Number(s.slice(i, j));
    const start = j + 1;
    const end = start + len;

    res.push(s.slice(start, end));
    i = end;
  }

  return res;
};