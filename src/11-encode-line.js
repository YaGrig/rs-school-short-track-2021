/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    let count = '';
    if (str[i] === str[i + 1]) {
      count = 1;
      for (let u = i + 1; u < str.length; u++) {
        if (str[i] === str[u]) {
          count++;
        }
      }
      result.push(`${count}${str[i]}`);
      count--;
    } else {
      result.push(str[i]);
    }
    i += +count;
  }
  return result.join('');
}

module.exports = encodeLine;
