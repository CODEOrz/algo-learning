/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
// 快慢指针 判断 fast 及 fast.Next 是否为 nil 值
// 递归 mergeSort 需要断开中间节点
// 递归返回条件为 head 为 nil 或者 head.Next 为 nil
var sortList = function (head) {
  function findMid(head) {
    let slow = head
    let fast = head.next
    while (
      fast !== null
      && fast.next !== null // fast指向链表的最后一个节点
    ) {
      slow = slow.next
      fast = fast.next.next
    }
    return slow
  }

  function mergeTwoLists(l1, l2) {
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

  function sortHelper(head) {
    if (head === null || head.next === null) {
      return head
    }

    const middle = findMid(head)
    const tail = middle.next
    middle.next = null
    
    const left = sortHelper(head)
    const right = sortHelper(tail)

    return mergeTwoLists(left, right)
  }

  const ans = sortHelper(head)
  return ans
}
// @lc code=end

