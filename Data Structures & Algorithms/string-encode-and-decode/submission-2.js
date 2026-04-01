

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
  
  while(i <str.length) {
  
  let hashIndex = i;

  while(str[hashIndex] !== '#') {
   hashIndex += 1;
  }

  const length = parseInt(str.substring(i, hashIndex));

  let start = hashIndex + 1;
  let end = start + length;

  result.push(str.substring(start, end));

  i = end;

  }
  



  return result;
};