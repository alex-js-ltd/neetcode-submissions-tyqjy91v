function Solution () {};

    /**
     * @param {string} s
     * @return {boolean}
     */
Solution.prototype.isPalindrome = function (s) {

    let l = 0;
    let r = s.length - 1;

    while(l < r) {


        if(l < r && !this.isAlpha(s[l])) {
            l += 1;
            continue;
        }

        if(r > l && !this.isAlpha(s[r])) {
            r -= 1;
            continue;
        }

        const left = s[l].toLowerCase();
        const right = s[r].toLowerCase();

        if(left !== right) {
            return false;
        }

        l += 1;
        r -= 1;


    }

    return true;
};

Solution.prototype.isAlpha = function (char) {
    return (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z' || char >= '0' && char <= '9');
};