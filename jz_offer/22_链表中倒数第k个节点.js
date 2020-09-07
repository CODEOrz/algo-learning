/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  if (head === null || k <= 0) {
    return null
  }

  let slow = head
  let fast = head

  for (let i = 0; i < k - 1; ++i) {
    if (fast.next === null) {
      return null
    }
    fast = fast.next
  }
  while (fast.next !== null) {
    slow = slow.next
    fast = fast.next
  }

  return slow
}