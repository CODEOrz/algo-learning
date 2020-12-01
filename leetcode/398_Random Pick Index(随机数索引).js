/*
 * @lc app=leetcode.cn id=398 lang=javascript
 *
 * [398] 随机数索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
       this.nums = nums
     };
     
     /** 
      * @param {number} target
      * @return {number}
      */
     Solution.prototype.pick = function (target) {
       let idx = 1
       let res = 0
       for (let i = 0; i < this.nums.length; ++i) {
         if (this.nums[i] === target) {
           if (idx === 1) {
             res = i
           } else {
             if (Math.floor(Math.random() * idx) === 0) {
               res = i
             }
           }
           idx++
         }
       }
       return res
     };
     
     /**
      * Your Solution object will be instantiated and called as such:
      * var obj = new Solution(nums)
      * var param_1 = obj.pick(target)
      */
     // @lc code=end
     
     