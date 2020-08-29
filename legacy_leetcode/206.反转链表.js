/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

const { curry } = require("lodash")

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
var reverseList = function (head) {
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
// @lc code=end

