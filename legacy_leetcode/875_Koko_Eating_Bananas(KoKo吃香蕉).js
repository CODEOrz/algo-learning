/**
 * 解法一: 自己想的
 * 168 ms, faster than 15.95%
 * 42.6 MB, less than 6.01% 
 */

/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function (piles, H) {
  let left = Math.floor(piles.reduce((prev, curr) => prev + curr) / H) // the limited slowest speed
  let right = Math.max(...piles)

  /** 判断当前速度是否满足要求 */
  const canFinish = speed => piles.map(i => Math.ceil(i / speed)).reduce((prev, curr) => prev + curr) <= H

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    canFinish(mid) ? right = mid - 1 : left = mid + 1
  }

  return left
}

export default minEatingSpeed
/*****************************************************************************************************************************************************
[Description]

Koko loves to eat bananas.  There are N piles of bananas, the i-th pile has piles[i] bananas.  The guards have gone and will come back in H hours.
Koko can decide her bananas-per-hour eating speed of K.  Each hour, she chooses some pile of bananas, and eats K bananas from that pile.  If the pile has less than K bananas, she eats all of them instead, and won't eat any more bananas during this hour.
Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back.
Return the minimum integer K such that she can eat all the bananas within H hours.

Example 1:

Input: piles = [3,6,7,11], H = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], H = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], H = 6
Output: 23

Constraints:

1 <= piles.length <= 10^4
piles.length <= H <= 10^9
1 <= piles[i] <= 10^9
********************************************************************************************************************************************************
[Comment]



********************************************************************************************************************************************************/
