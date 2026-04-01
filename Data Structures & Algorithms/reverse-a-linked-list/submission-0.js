/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */



function Solution () {};
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
Solution.prototype.reverseList = function (head) {

    if(!head || !head.next) return head;

    const newHead = this.reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;


};
