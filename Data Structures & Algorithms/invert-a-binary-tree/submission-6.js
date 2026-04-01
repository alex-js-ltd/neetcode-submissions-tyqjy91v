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

Solution.prototype.invertTree = function (root) {
    
    function dfs(node) {
        
        if(node == null) {
          return null;
        }

        const left = dfs(node.left);
        const right = dfs(node.right);

        node.left = right;
        node.right = left;

        return node;
    }

    dfs(root);

    return root;
};