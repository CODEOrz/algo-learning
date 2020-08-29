/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

const { reverse } = require("lodash")

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  function reverseList(head) {
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
  }

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

  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  function mergeLists(l1, l2) {
    let vHead = new ListNode(null)
    head = vHead
    let toggle = true
    while (l1 !== null && l2 !== null) {
      if (toggle) {
        head.next = l1
        l1 = l1.next
      } else {
        head.next = l2
        l2 = l2.next
      }
      toggle = !toggle
      head = head.next
    }
    while (l1 !== null) {
      head.next = l1
      head = head.next
      l1 = l1.next
    }
    while (l2 !== null) {
      head.next = l2
      head = head.next
      l2 = l2.next
    }
  }

  if (head === null) return
  const mid = findMid(head)
  const tail = reverseList(mid.next)
  mid.next = null
  head = mergeLists(head, tail)
}
// @lc code=end

