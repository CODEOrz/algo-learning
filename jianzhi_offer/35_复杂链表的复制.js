/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
/**
 * 解法一： 通过辅助数组记录Random所在位置，此法不够灵活
 */
// var copyRandomList = function (header) {
//   function Node(val, next, random) {
//     this.val = val;
//     this.next = next === undefined ? null : next;
//     this.random = random === undefined ? null : random;
//   }

//   if (header === null) return null

//   let newHead = new Node(null)
//   let randomMap = []
//   let head = header

//   // 第一次遍历
//   while (head !== null) {
//     randomMap.push(head.random)
//     head = head.next
//   }
//   // 第二次遍历
//   let newHeadDummy = newHead
//   head = header

//   while (head !== null) {
//     let newNode = new Node(head.val)
//     newHead.next = newNode

//     while (true) {
//       const randomIndex = randomMap.indexOf(head)
//       if (randomIndex === -1) break
//       randomMap[randomIndex] = newNode
//     }

//     head = head.next
//     newHead = newHead.next
//   }

//   head = newHeadDummy.next
//   // 第三次遍历
//   while (head !== null) {
//     head.random = randomMap.shift()
//     head = head.next
//   }

//   return newHeadDummy.next
// }

/**
 * 解法二： 
 */
var copyRandomList = function (head) {
  function Node(val, next, random) {
    this.val = val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }

  if (head === null) {
    return head
  }

  // 复制节点，紧挨到到后面
	// 1->2->3  ==>  1->1'->2->2'->3->3'
  let cur = head
  while (cur !== null) {
    let clone = new Node(cur.val, cur.next)
    let temp = cur.next
    cur.next = clone
    cur = temp
  }
  // 处理random指针
  cur = head
  while (cur !== null) {
    if (cur.random !== null) { // random可能为null
      cur.next.random =cur.random.next // 此骚操作是该题解的关键
    }
    cur = cur.next.next
  }
  // 分离两个链表, 链表基本操作
  cur = head
  let cloneHead = cur.next
  while (cur !== null && cur.next !== null) {
    let temp = cur.next
    cur.next = cur.next.next
    cur = temp
  }

  return cloneHead
}
// @lc code=end

