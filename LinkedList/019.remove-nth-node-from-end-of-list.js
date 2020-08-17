/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    
    // create first, second
    let first = dummy;
    let second = dummy;
    
    // move second n spaces up
    for (let i = 0; i < n; i++) {
        second = second.next;
    }
    
    // iterate till end of list
    while (second.next != null) {
        first = first.next;
        second = second.next;
    }
    // while set first.next to first.next.next
    first.next = first.next.next;
    // return head
    return dummy.next;
};