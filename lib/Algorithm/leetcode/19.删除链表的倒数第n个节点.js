/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  let vHead = new ListNode(null) // 虚拟头节点
  vHead.next = head

  if (head === null || n <= 0) { // 边界情况1
    return
  }

  let slow = vHead
  let fast = vHead

  for (let i = 0; i < n; ++i) {
    if (fast === null) { // 边界情况2， 若为Null，说明n大于链表长度，返回
      return
    }
    fast = fast.next
  }

  while (fast.next !== null) { // 边界情况3: 移动到链表最后一个元素
    slow = slow.next
    fast = fast.next
  }

  slow.next = slow.next.next // 删除
  
  return vHead.next
}
// @lc code=end

