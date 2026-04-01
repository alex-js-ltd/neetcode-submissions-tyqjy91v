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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
Solution.prototype.isSubtree = function (root, subRoot) {

    if(subRoot == null) {
        return true;
    }

    if(root == null) {
        return false;
    }

 
    if(this.deepEqual(root, subRoot)) {
        return true;
    }


  
  return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);

};

Solution.prototype.deepEqual = function (a, b) {

    const bothObjects = this.isObject(a) && this.isObject(b);

    if(bothObjects) {

        const entriesA = Object.entries(a);
        const entriesB = Object.entries(b);

        if(entriesA.length !== entriesB.length) {
            return false;
        }

        return entriesA.every(([k,v]) => {
            return Object.hasOwn(b, k) && this.deepEqual(v, b[k]);
        })
    }

    return Object.is(a, b);

};

Solution.prototype.isObject = function (val) {

    if(val == null) {
        return false;
    }

    return typeof val === 'object'
};


