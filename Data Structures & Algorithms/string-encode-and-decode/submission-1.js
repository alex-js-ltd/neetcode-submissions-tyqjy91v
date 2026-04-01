

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
  
  let end = i;

  while(str[end] !== '#') {
    end += 1;
  }

  const length = parseInt(str.substring(i, end));

  i = end + 1;
  end = i + length;

  result.push(str.substring(i, end));

  i = end;

  }
  



  return result;
};