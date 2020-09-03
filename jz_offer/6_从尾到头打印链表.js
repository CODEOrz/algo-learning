/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// 解法一： 时间复杂度和空间复杂度均不是最优，有额外的空间开销
// var reversePrint = function (head) {
//   let ans = []
//   while (head !== null) {
//     ans.unshift(head.val)
//     head = head.next
//   }
//   return ans
// }

// 解法二： 递归调用
var reversePrint = function (head) {
  function recurve(head) {
    if (head === null) {
      return
    } else {
      recurve(head.next)
      ans.push(head.val)
    }
  }
  let ans = []
  return ans
}