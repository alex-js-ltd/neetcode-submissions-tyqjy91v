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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
Solution.prototype.isSubtree = function(root, subRoot) {

    if(root == null) {
        return false;
    }

    if(subRoot == null) {
        return false;
    }

   if(this.isSameTree(root, subRoot)) {
    return true;
   }

   return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);

};

Solution.prototype.isSameTree = function(a, b) {

    const bothObject = this.isObject(a) && this.isObject(b);

    if(bothObject) {

        const entriesA = Object.entries(a);
        const entriesB = Object.entries(b);

        if(entriesA.length !== entriesB.length) {
            return false;
        }

        return entriesA.every(([k,v]) => {
            return Object.hasOwn(b, k) && this.isSameTree(v, b[k]);
        })
    }

    return Object.is(a, b);

};

Solution.prototype.isObject = function(value) {
    if(value == null) {
        return false;
    }

    return typeof value === 'object';
};