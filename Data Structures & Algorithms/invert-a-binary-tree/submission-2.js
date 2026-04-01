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
     * @return {TreeNode}
     */
Solution.prototype.invertTree = function (root) {

  if(root == null) {
    return null
  }

  const left = this.invertTree(root.left);
  const right = this.invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;

}