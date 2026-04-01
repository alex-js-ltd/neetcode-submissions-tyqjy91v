function Solution() {};

    /**
     * @param {string} s
     * @return {boolean}
     */
Solution.prototype.isValid = function(str) {

    const stack = [];

const closeToOpen = {
  ')': '(',
  ']': '[',
  '}': '{'
};

    for(const char of str) {

        if(closeToOpen[char]) {

            if(stack.length > 0 && stack[stack.length -1] === closeToOpen[char]) {
                stack.pop();
            } else {
                return false;
            }
        }

        else {
            stack.push(char);
        }

 
    }

    return stack.length === 0;
}