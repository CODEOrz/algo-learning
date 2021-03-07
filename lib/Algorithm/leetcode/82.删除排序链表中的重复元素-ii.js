/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  if (head === null) return head

  let vHead = new ListNode(null)  // 关键1： 设置虚拟头节点
  vHead.next = head

  let curr = vHead
  let rmVal = null // 关键2： 记录已删除的值用于后续节点判断

  while (curr.next !== null && curr.next.next !== null) {
    if (curr.next.val === curr.next.next.val) { // 关键3： 根据next.val与next.next.val的相等性确定curr是否移动
      rmVal = curr.next.val
      while (curr.next !== null && curr.next.val === rmVal) {
        curr.next = curr.next.next
      }
    } else {
      curr = curr.next // 只有当遇到不重复元素时，才移动curr
    }
  }

  return vHead.next
}
// @lc code=end

