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



function Solution() {};
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
Solution.prototype.isSameTree = function(a,b) {

    if(a == null && b == null) {
        return true;
    }

    if(a == null || b == null) {
        return false;
    }

    if(a.val !== b.val) {
        return false;
    }


    return this.isSameTree(a.left, b.left) && this.isSameTree(a.right, b.right);


};