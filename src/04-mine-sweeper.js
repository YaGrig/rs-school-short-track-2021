/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrixs = matrix.slice();
  const result = [];
  for (let i = 0; i < matrixs.length; i++) {
    result.push(matrixs[i].slice());
  }
  let count = 0;
  let YoN = false;
  for (let i = 0; i < matrixs.length; i++) {
    for (let u = 0; u < matrixs[i].length; u++) {
      if (matrixs[i][u + 1] === true) {
        count++;
        YoN = true;
      }
      if (matrixs[i][u - 1] === true) {
        count++;
        YoN = true;
      }
      if (matrixs[i - 1] !== undefined) {
        if (matrixs[i - 1][u] === true) {
          count++;
          YoN = true;
        }
      }
      if (matrixs[i + 1] !== undefined) {
        if (matrixs[i + 1][u] === true) {
          count++;
          YoN = true;
        }
      }
      if (count >= 2) {
        result[i][u] = count;
      } else {
        result[i][u] = 1;
      }
      count = 0;
    }
  }
  if (YoN === false) {
    for (let i = 0; i < matrixs.length; i++) {
      for (let u = 0; u < matrixs[i].length; u++) {
        result[i][u] = 0;
      }
    }
  }
  return result;
}
module.exports = minesweeper;
