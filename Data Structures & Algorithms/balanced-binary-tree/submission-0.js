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

function Solution() {}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
Solution.prototype.isBalanced = function (root) {
  const self = this;

  function dfs(node) {
    if (node == null) {
      return true;
    }

    const left = self.maxDepth(node.left);
    const right = self.maxDepth(node.right);

    const isBal = Math.abs(left - right) <= 1;

    if (!isBal) {
      return false;
    }

    return dfs(node.left) && dfs(node.right);
  }

  return dfs(root);
};

Solution.prototype.maxDepth = function (root) {
  function dfs(node) {
    if (node == null) {
      return 0;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    return 1 + Math.max(left, right);
  }

  return dfs(root);
};
