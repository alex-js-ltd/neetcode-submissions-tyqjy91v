function Solution() {};

    /**
     * @param {string} s
     * @return {boolean}
     */
Solution.prototype.isValid = function(str) {

    const stack = [];

    const mappings = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

    for(const char of str) {
        if(mappings[char]) {

            const topElement = stack.length ? stack.pop() : '#';

            if(topElement !== mappings[char]) {
                return false;
            }
        }

        else {
            stack.push(char);
        }
    }


    return stack.length === 0;
}