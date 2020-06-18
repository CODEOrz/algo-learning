/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

/**
 * 解法一: 自解
 * 84 ms, faster than 38.72%
 * 39.1 MB, less than 5.54%
 */

var floodFill = function (image, sr, sc, newColor) {
  const oldColor = parseInt(image[sr][sc])

  function fill(image, sr, sc, newColor) {
    /* out of range */
    if (image[sr] === undefined) {
      return
    } else if (image[sr][sc] === undefined) {
      return
    }

    if (
      image[sr][sc] === newColor ||  /* current pixel has been newColor */
      image[sr][sc] === -1 ||        /* current pixel has been visited */
      image[sr][sc] !== oldColor     /* current pixel is not oldColor */
    ) {
      return
    }

    image[sr][sc] = -1
    fill(image, sr + 1, sc, newColor)
    fill(image, sr - 1, sc, newColor)
    fill(image, sr, sc + 1, newColor)
    fill(image, sr, sc - 1, newColor)
    image[sr][sc] = newColor
  }

  fill(image, sr, sc, newColor)
  return image
}

export default floodFill

/*****************************************************************************************************************************************************
An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.

Example 1:
Input:
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation:
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
Note:

The length of image and image[0] will be in the range [1, 50].
The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
The value of each color in image[i][j] and newColor will be an integer in [0, 65535].
********************************************************************************************************************************************************
[Comment]



********************************************************************************************************************************************************/
