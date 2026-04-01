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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
Solution.prototype.lowestCommonAncestor = function(root, p, q) {

    if(root == null) {
        return null;
    }

    const parentVal = root.val;
    const pVal = p.val;
    const qVal = q.val;

    if(pVal < parentVal && qVal < parentVal) {
        return this.lowestCommonAncestor(root.left, p, q);
    }

    if(pVal > parentVal && qVal > parentVal) {
        return this.lowestCommonAncestor(root.right, p, q);
    }

    return root;

}