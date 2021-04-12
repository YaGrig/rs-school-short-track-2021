/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domain = domains.slice();
  for (let i = 0; i < domain.length; i++) {
    domain[i] = domain[i].split('.').reverse().join('.');
    domain[i] = `.${domain[i]}`;
  }
  const count = [];
  for (let i = 0; i < domain.length; i++) {
    count.push(domain[i].match(/^\.\w+/g));
    count.push(domain[i].match(/(\.\w+){3}/g));
    count.push(domain[i].match(/(\.\w+){2}/g));
  }
  let result = count.filter((x) => x !== null);
  result = result.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  return result;
}

module.exports = getDNSStats;
