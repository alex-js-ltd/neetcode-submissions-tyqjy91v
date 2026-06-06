

function Solution () {};

    /**
     * @param {string} s
     * @return {boolean}
     */
Solution.prototype.isPalindrome = function (s) {

    let l = 0;
    let r = s.length - 1;

    while(l < r) {

        while(l < r && !this.isAlpha(s[l])) {
          l += 1;
        }

        while(r > l && !this.isAlpha(s[r])) {
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

Solution.prototype.isAlpha = function (char) {

    if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
        return true;
    }

    return false;
};
