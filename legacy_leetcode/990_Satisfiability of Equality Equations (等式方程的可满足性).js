/*
 * @lc app=leetcode.cn id=990 lang=javascript
 *
 * [990] 等式方程的可满足性
 */

// @lc code=start

class UF {
  constructor(n) {
    this.count = n
    this.parent = []
    this.size = []
    for (let i = 0; i < n; ++i) {
      this.parent[i] = i
      this.size[i] = 1
    }
  }

  union(p, q) {
    const rootP = this.findRoot(p)
    const rootQ = this.findRoot(q)
    if (rootP === rootQ) return
    if (this.size[rootP] > this.size[rootQ]) { // 树的平衡性优化
      this.parent[rootQ] = rootP
      this.size[rootP] += this.size[rootQ]
    } else {
      this.parent[rootP] = rootQ
      this.size[rootQ] += this.size[rootP]
    }
    --this.count
  }

  connected(p, q) {
    const rootP = this.findRoot(p)
    const rootQ = this.findRoot(q)
    return rootP === rootQ
  }

  findRoot(x) {
    while (this.parent[x] != x) {
      this.parent[x] = this.parent[this.parent[x]] // 路径压缩,用于限制树整体的高度
      x = this.parent[x]
    }
    return x
  }

  count() {
    return this.count
  }
}


/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  let uf = new UF(26)
  // 遍历所有等式，建立联通关系
  for (let eq of equations) {
    if (eq.charAt(1) === '=') {
      const x = eq.charAt(0)
      const y = eq.charAt(3)
      uf.union(x.charCodeAt() - 'a'.charCodeAt(), y.charCodeAt() - 'a'.charCodeAt())
    }
  }

  for (let eq of equations) {
    if (eq.charAt(1) == '!') {
      const x = eq.charAt(0)
      const y = eq.charAt(3)
      if (uf.connected(x.charCodeAt() - 'a'.charCodeAt(), y.charCodeAt() - 'a'.charCodeAt())) {
        return false
      }
    }
  }

  return true
}
// @lc code=end

