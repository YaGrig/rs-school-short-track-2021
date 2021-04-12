/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let number = 0;
  const result = [];
  const index = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      index.push(i);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      number = Math.max.apply(null, arr);
      result.push(number);
      arr.splice(arr.indexOf(number), 1);
      i -= 1;
    }
  }
  const resultend = result.reverse();
  for (let i = 0; i < index.length; i++) {
    resultend.splice(index[i], 0, -1);
  }
  return resultend;
}

module.exports = sortByHeight;
