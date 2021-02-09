/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @param {ListNode} head
 * @return {boolean}
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

    let theOtherPart = reverseLinkList(_slow)

    while (!!theOtherPart) {
        if (theOtherPart.val !== head.val) {
            return false
        }
        theOtherPart = theOtherPart.next
        head = head.next
    }

    return true
}
// @lc code=end
