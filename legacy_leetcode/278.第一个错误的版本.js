/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let start = 1
        let end = n
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)
            if (isBadVersion(mid)) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        return start
    }
}
// @lc code=end

