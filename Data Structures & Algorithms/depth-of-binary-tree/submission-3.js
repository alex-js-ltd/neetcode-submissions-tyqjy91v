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
     * @return {number}
     */

Solution.prototype.maxDepth = function (root) {

  if(root == null) {
    return 0;
  }

  const left = this.maxDepth(root.left);
  const right = this.maxDepth(root.right);

  return 1 + Math.max(left, right);


};