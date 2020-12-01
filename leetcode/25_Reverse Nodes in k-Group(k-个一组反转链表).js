/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
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
var reverseKGroup = function (head, k) {
  function reverse(a, b) {
    let pre = null
    let cur = a
    let nxt = null

    while (cur !== b) {
      nxt = cur.next
      cur.next = pre
      pre = cur
      cur = nxt
    }
    return pre
  }

  if (head === null) return null
  let a = head
  let b = head
  for (let i = 0; i < k; ++i) {
    if (b === null) return head
    b = b.next
  }

  let newHead = reverse(a, b)
  a.next = reverseKGroup(b, k)
  return newHead
}
// @lc code=end

