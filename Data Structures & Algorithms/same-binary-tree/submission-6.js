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
     * @param {TreeNode} a
     * @param {TreeNode} b
     * @return {boolean}
     */
Solution.prototype.isSameTree = function (a, b) {

  return this.deepEqual(a, b);

};

Solution.prototype.deepEqual = function (a, b) {

  const bothTreeNode = this.isTreeNode(a) && this.isTreeNode(b);

  if(bothTreeNode) {
    const entriesA = Object.entries(a);
    const entriesB = Object.entries(b);

    if(entriesA.length !== entriesB.length) {
      return false;
    }

    return entriesA.every(([k,v]) => {
      return Object.hasOwn(b,k) && this.deepEqual(v, b[k]);
    })
  }

  return Object.is(a, b);

};

Solution.prototype.isTreeNode = function (val) {

  if(val == null) {
    return false;
  }

  return typeof val === 'object' && Object.hasOwn(val, 'val') && Object.hasOwn(val, 'left') && Object.hasOwn(val, 'right');

};