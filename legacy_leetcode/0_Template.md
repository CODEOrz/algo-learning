# 字符串、模拟法




# 二分法
int binarySearch(int[] nums, int target) {
int left = 0, right = ...;

    while(...) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            ...
        } else if (nums[mid] < target) {
            left = ...
        } else if (nums[mid] > target) {
            right = ...
        }
    }
    return ...;

}




# 二叉树




# 链表




# 递归




# DFS/回溯
但是必须说明的是，不管怎么优化，都符合回溯框架，而且时间复杂度都不可能低于 O(N!)，因为穷举整棵决策树是无法避免的。这也是回溯算法的一个特点，不像动态规划存在重叠子问题可以优化，回溯算法就是纯暴力穷举，复杂度一般都很高。

result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return

    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择


# BFS
int BFS(Node start, Node target) {
Queue<Node> q; // 核心数据结构
Set<Node> visited

    q.offer(start); // 将起点加入队列
    visited.add(start);
    int step = 0;

    while (q not empty) {
        int sz = q.size();
        /* 将当前队列中的所有节点向四周扩散 */
        for (int i = 0; i < sz; i++) {
            Node cur = q.poll();
            /* 判断是否到达终点 */
            if (cur is target)
                return step;
            /* 将 cur 的相邻节点加入队列 */
            for (Node x : cur.adj())
                if (x not in visited) {
                    q.offer(x);
                    visited.add(x);
                }
        }
        /* 更新步数 */
        step++;
    }

}

# 拓扑排序

# 堆（优化队列）

# 哈希表

# 双指针

# 动态规划
dp[0][0][...] = base
// 进行状态转移
for 状态 1 in 状态 1 的所有取值：
   for 状态 2 in 状态 2 的所有取值：
      for ...
        dp[状态 1][状态2][...] = 求最值(选择 1，选择 2...)




# 字典树




# 并查集
