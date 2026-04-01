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
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */

Solution.prototype.kthSmallest = function(root, k) {

    const values = [];

    function dfs(node) {

        if(node == null) {
            return;
        }

      
        dfs(node.left);
        values.push(node.val);
        dfs(node.right);

    }

    dfs(root);

    console.log('in order', values);

    return values[k -1];

}