/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
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

  let slow = head
  let fast = head
  // 快慢指针找到链表的中点
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  //如果fast指针没有指向null，说明链表长度为奇数，slow还要再前进一步
  if (fast !== null) slow = slow.next

  let left = head
  let right = reverseList(slow)
  while (right !== null) {
    if (left.val !== right.val) return false
    left = left.next
    right = right.next
  }
  return true
}

/** 
 * 第2次解答 210209 
 */
const reverseLinkList = head => {
    if (head === null) {
        return null
    }
    let _prev = null
    let _curr = head
    let _next = null

    while (!!_curr) {
        _next = _curr.next
        _curr.next = _prev
        _prev = _curr
        _curr = _next
    }

    return _prev
}

var isPalindrome = function (head) {
    if (head === null) {
        return true
    }

    let _slow = head
    let _fast = head

    while (!!_fast && !!_fast.next) {
        _slow = _slow.next
        _fast = _fast.next.next
    }

    let theOtherHalfPart = reverseLinkList(_slow)

    while (!!theOtherHalfPart) {
        if (theOtherHalfPart.val !== head.val) {
            return false
        }
        theOtherHalfPart = theOtherHalfPart.next
        head = head.next
    }

    return true
}
// @lc code=end

