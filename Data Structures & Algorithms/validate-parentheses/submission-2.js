function Solution() {};

    /**
     * @param {string} str
     * @return {boolean}
     */

Solution.prototype.isValid = function(str) {

    const mappings = new Map();

    mappings.set(')', '(');
    mappings.set('}', '{');
    mappings.set(']', '[');

    const stack = [];

    for(const char of str) {

        if(mappings.has(char)) {

            const topElement = stack.length ? stack.pop() : '#'

            if(topElement !== mappings.get(char)) {
                return false;
            }
        }

        else {
            stack.push(char);
        }
    }

    return stack.length === 0;

}