/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const array = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let u = 0; u < matrix[i].length; u++) {
      if (matrix[i][u] !== 0 && matrix[i][u] !== 'a') {
        array.push(matrix[i][u]);
      } else if (matrix[i][u] === 0) {
        for (let s = 0; s < matrix.length; s++) {
          matrix[s].splice(u, 1, 'a');
        }
      }
    }
  }
  if (array.length !== 0) {
    return array.reduce((count, next) => count + next);
  } return 0;
}
module.exports = getMatrixElementsSum;
