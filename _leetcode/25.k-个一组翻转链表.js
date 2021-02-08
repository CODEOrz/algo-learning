/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
const reverseLinkList = (head) => {
    if (head.next === null) {
        return head
    }

    let tail = reverseLinkList(head.next)
    head.next.next = head
    head.next = null
    return tail
}

const reverseKGroup = (head, k) => {
    if (head === null) {
        return null
    }

    let _vhead = head

    let _prev = null
    let _curr = head
    let _next = null

    for (let i = 0; i < k; ++i) {
        if (_curr === null) {
            return reverseLinkList(_prev)
        }
        _next = _curr.next
        _curr.next = _prev
        _prev = _curr
        _curr = _next
    }

    _vhead.next = reverseKGroup(_curr, k)

    return _prev
}

// [1,2,3,4,5]\n3
// @lc code=end
