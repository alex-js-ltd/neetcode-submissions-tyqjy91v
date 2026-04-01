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
     * @param {TreeNode} root
     * @return {boolean}
     */
Solution.prototype.isValidBST = function (root) {


    function dfs (node, min = -Infinity, max = Infinity) {

        if(node == null) {
            return true;
        }

        if(node.val <= min || node.val >= max) {
            return false;
        } 

        const leftTree = dfs(node.left, min, node.val);
        const rightTree = dfs(node.right, node.val, max);

        return leftTree && rightTree;

    }

    return dfs(root, -Infinity, Infinity);

};