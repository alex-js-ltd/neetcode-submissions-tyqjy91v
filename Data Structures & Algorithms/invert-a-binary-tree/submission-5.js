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
Solution.prototype.invertTree = function(root) {

  if(root == null) {
    return null
  }

  const stack = [root];

  while(stack.length) {

    const node = stack.pop();

    if(node == null) {
      continue;
    }

   const {left, right} = node;

    node.left = right;
    node.right = left;

    stack.push(node.left);
    stack.push(node.right);


  }

  return root;

};
