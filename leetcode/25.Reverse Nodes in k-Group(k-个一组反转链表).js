/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
// var reverseKGroup = function (head, k) {
//     function reverse(a, b) {
//         let pre = null
//         let cur = a
//         let nxt = null

//         while (cur !== b) {
//             nxt = cur.next
//             cur.next = pre
//             pre = cur
//             cur = nxt
//         }
//         return pre
//     }

//     if (head === null) return null
//     let a = head
//     let b = head
//     for (let i = 0; i < k; ++i) {
//         if (b === null) return head
//         b = b.next
//     }

//     let newHead = reverse(a, b)
//     a.next = reverseKGroup(b, k)
//     return newHead
// }

/** 第2次：210209
 *  思路更清晰，且时间开销较少的一种解法
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

// @lc code=end
