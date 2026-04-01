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

Solution.prototype.maxDepth = function(root) {

  if(root == null) {
    return 0;
  }

  const stack = [[root, 1]];

  let maxDepth = 0;

  while(stack.length) {

    const [node, depth] = stack.pop();

    if(node == null) {
      continue;
    }

    maxDepth = Math.max(maxDepth, depth);

    stack.push([node.left, depth + 1]);
    stack.push([node.right, depth + 1]);

  }

  return maxDepth;

};
