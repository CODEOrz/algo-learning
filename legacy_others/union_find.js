/**
 * 并查集
 */
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


