/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = (head, start, end) => {
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  if (head === null) return head

  const vHead = new ListNode(null)
  vHead.next = head

  let pre = null
  let cur = head
  let nxt = null
  let ancor_A = vHead
  let ancor_B = null

  for (let i = 1; i < start; ++i) {
    cur = cur.next
    ancor_A = ancor_A.next
  }
  ancor_B = cur

  for (let i = 0; i <= end - start; ++i) {
    nxt = cur.next
    cur.next = pre
    pre = cur
    cur = nxt
  }
  ancor_A.next = pre
  ancor_B.next = cur

  return vHead.next
}
// @lc code=end

