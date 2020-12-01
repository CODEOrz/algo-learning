/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// 注意该题要求O（1）的时间复杂度
// 下列解法有O（1）的额外空间开销
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteNode = function (head, val) {
  if (head === null) {
    return
  }
  let vHead = new ListNode(null)
  vHead.next = head
  let vHeadDummy = vHead
  
  while (vHead.next !== null) {
    if (vHead.next.val === val) {
      vHead.next = vHead.next.next
      break
    }
    vHead = vHead.next
  }

  return vHeadDummy.next
}