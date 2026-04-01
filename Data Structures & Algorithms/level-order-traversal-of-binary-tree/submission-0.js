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
     * @return {number[][]}
     */
Solution.prototype.levelOrder = function(root) {


const result = [];

    function dfs(node, level = 0) {

        if(node == null) {
            return;
        }

        if(!result[level]) {
            result[level] = [];
        }

        result[level].push(node.val);

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);


    }

    dfs(root, 0);
    console.log(result);
    return result;

};
