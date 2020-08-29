/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * 解法一：多一个Flag辅助变量
 */
// var detectCycle = function (head) {
//   if (head === null || head.next === null) {
//     return null
//   }

//   let slow = head
//   let fast = head
//   let flag = true
//   while (slow !== fast || flag) {
//     flag = false
//     slow = slow.next
//     if (fast === null || fast.next === null) {
//       return null
//     }
//     fast = fast.next.next
//   }

//   slow = head
//   fast = fast
//   while (slow !== fast) {
//     slow = slow.next
//     fast = fast.next
//   }
//   return slow
// }

/**
 * 解法二：细微差别，最好使用这种解法，可以少一个Flag辅助变量
 */
var detectCycle = function (head) {
  if (head === null || head.next === null) {
    return null
  }

  let slow = head
  let fast = head.next
  let flag = true
  while (slow !== fast) {
    flag = false
    slow = slow.next
    if (fast === null || fast.next === null) {
      return null
    }
    fast = fast.next.next
  }

  slow = head
  fast = fast.next
  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}
// @lc code=end

