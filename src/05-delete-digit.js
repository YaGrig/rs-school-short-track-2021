/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(str) {
  const numbers = [];
  const strCoppy = (String(str)).split('');
  let str1 = strCoppy.slice();
  for (let i = 0; i < strCoppy.length; i++) {
    str1.splice(i, 1);
    numbers.push(str1.join(''));
    str1 = strCoppy.slice();
  }
  return Math.max.apply(null, numbers);
}

module.exports = deleteDigit;
