var reverseList = function (head) {
  let pre = null, cur = head, nxt = null
  while (cur !== null) {
    nxt = cur.next
    cur.next = pre
    pre = cur
    cur = nxt
  }
  return pre
}