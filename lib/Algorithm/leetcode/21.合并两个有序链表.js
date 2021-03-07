/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * 解法一：自己想的，解法不够简洁
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1

  let newList = null

  if (l1.val >= l2.val) {
    newList = l2
    l2 = l2.next
  } else {
    newList = l1
    l1 = l1.next
  }
  let temp = newList

  while (l1 !== null && l2 !== null) {
    if (l1.val >= l2.val) {
      temp.next = l2
      l2 = l2.next
    } else {
      temp.next = l1
      l1 = l1.next
    }
    temp = temp.next
  }

  while (l1 !== null) {
    temp.next = l1
    l1 = l1.next
    temp = temp.next
  }

  while (l2 !== null) {
    temp.next = l2
    l2 = l2.next
    temp = temp.next
  }

  return newList
}

/**
 * 解法二：标准解法
 */
var mergeTwoLists = function (l1, l2) { 

}
// @lc code=end

