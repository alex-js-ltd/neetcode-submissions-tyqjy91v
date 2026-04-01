/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

function Solution () {};

    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
Solution.prototype.isSameTree = function(a, b) {

    const bothObject = this.isObject(a) && this.isObject(b);

    if(bothObject) {

    const entriesA = Object.entries(a);
    const entriesB = Object.entries(b);

    if(entriesA.length !== entriesB.length) {
        return false;
    }

    return entriesA.every(([k,v]) => {
        return Object.hasOwn(b, k) && this.isSameTree(v, b[k]);
    })

    }

    return Object.is(a, b);

};

Solution.prototype.isObject = function isObject(value) {
  if (value == null) {
    return false;
  }

  return typeof value === "object";
}