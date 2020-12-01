/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null
  let cur = head
  let nxt = null

  while (cur !== null) {
    nxt = cur.next
    cur.next = pre
    pre = cur
    cur = nxt
  }

  return pre
};