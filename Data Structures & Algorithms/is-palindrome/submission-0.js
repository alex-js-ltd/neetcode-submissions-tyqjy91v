function Solution () {};

/**
     * @param {string} s
     * @return {boolean}
*/

Solution.prototype.isPalindrome = function(s) {
     
     let l = 0;
     let r = s.length - 1;

     while(l < r) {
          
          while(l < r && !this.isAlphaNum(s[l])) {
               l += 1;
          }

          while(r > l && !this.isAlphaNum(s[r])) {
               r -= 1;
          }

          if(s[l].toLowerCase() !== s[r].toLowerCase()) {
               return false;
          }

          l += 1;
          r -= 1;
     }

     return true;
};

Solution.prototype.isAlphaNum = function (char) {
  return (
    (char >= "a" && char <= "z") ||
    (char >= "A" && char <= "Z") ||
    (char >= "0" && char <= "9")
  );
};
