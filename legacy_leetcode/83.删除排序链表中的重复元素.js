/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
/**
 * 解法一： 自己想的，递归解法
 */
// var deleteDuplicates = function (head) {
//   function del(head, lastVal) {
//     if (head === null) return head
//     if (head.val === lastVal) {
//       head = del(head.next, head.val)
//     } else {
//       head.next = del(head.next, head.val)
//     }
//     return head
//   }
//   return del(head, null)
// }
/**
 * 解法二： 标准解法, 使用一个辅助指针
 */
var deleteDuplicates = function (head) {
  let current = head
  while (current !== null) {
    while (
      current.next !== null &&
      current.val === current.next.val
    ) {
      current.next = current.next.next
    }
    current = current.next
  }
  return head
}
// @lc code=end

