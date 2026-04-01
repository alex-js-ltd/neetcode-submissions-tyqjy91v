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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
Solution.prototype.buildTree = function (preorder, inorder) {

    if(!preorder.length || !inorder.length) {
        return null;
    }

    const root = new this.TreeNode(preorder[0]);
    const mid = inorder.indexOf(preorder[0]);

    const leftTree = this.buildTree(preorder.slice(1, mid +1), inorder.slice(0, mid));
    const rightTree = this.buildTree(preorder.slice(mid + 1), inorder.slice(mid +1));

    root.left = leftTree;
    root.right = rightTree;

    return root;

};

Solution.prototype.TreeNode = function (val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
};
