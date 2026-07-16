/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */


function Solution () {};

    /**
     * @param {Node} node
     * @return {Node}
     */
Solution.prototype.cloneGraph = function (node) {

    if(node == null) {
        return null;
    }

    const seen = new Map();

    function dfs(node) {

        if(seen.has(node)) {
            return seen.get(node);
        }

        const copy = new Node(node.val);

        seen.set(node, copy);

        for(const neighbor of node.neighbors) {
            copy.neighbors.push(dfs(neighbor))
        }

        return copy;
    }

    const res = dfs(node);

    return res;
};