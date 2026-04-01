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
     * @return {number}
     */

Solution.prototype.maxDepth = function (root) {

  function dfs (node)  {
    if (node == null) {
        return 0;
    }


    // do logic
    const left = dfs(node.left);
    const right = dfs(node.right);


    return 1 + Math.max(left, right);
}

return dfs(root);

}
