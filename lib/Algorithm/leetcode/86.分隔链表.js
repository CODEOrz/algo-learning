/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
/**
 * 解法一： 自己想的，有额外的空间开销
 */
// var partition = function (head, x) {
//   function ListNode(val) {
//     this.val = val;
//     this.next = null;
//   }

//   let headDummy = new ListNode(null)
//   let tailDummy = new ListNode(null)

//   let temp1_head = headDummy
//   let tail = tailDummy

//   while (head !== null) {
//     if (head.val >= x) {
//       headDummy.next = head
//       headDummy = headDummy.next
//     } else {
//       tailDummy.next = head
//       tailDummy = tailDummy.next
//     }
//     head = head.next
//   }

//   headDummy.next = null
//   tailDummy.next = null

//   tailDummy.next = temp1_head.next
//   return tail.next
// }

/**
 * 解法二： 标准解法
 */
var partition = function (head, x) { 
    function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  let headDummy = new ListNode(null)
  let tailDummy = new ListNode(null)

  headDummy.next = head
  head = headDummy

  let tail = tailDummy

  while (head.next !== null) {
    if (head.next.val >= x) { // Key 1： 在给tail添加节点的同时，在head链表中删除该节点
      let t = head.next
      head.next = head.next.next
      tail.next = t
      tail = tail.next
    } else {
      head = head.next
    }
  }

  tail.next = null // Key 2： tail.next还存在head中节点，需将这部分节点删除掉
  head.next = tailDummy.next
  return headDummy.next
}
// @lc code=end

