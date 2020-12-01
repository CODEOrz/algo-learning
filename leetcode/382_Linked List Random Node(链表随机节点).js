/*
 * @lc app=leetcode.cn id=382 lang=javascript
 *
 * [382] 链表随机节点
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
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.head = head
};

/**
* Returns a random node's value.
* @return {number}
*/
Solution.prototype.getRandom = function () {
  let idx = 1
  let res = 0
  let p = this.head
  while (p !== null) {
         const randomSignal = Math.floor(Math.random() * idx)
         if (randomSignal === 0) {
                res = p.val
         }
         idx++
         p = p.next
  }
  return res
}

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(head)
* var param_1 = obj.getRandom()
*/
// @lc code=end

