/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(str) {
  return (str.match(/[\w-]+\.\w+$/)).join('');
}

module.exports = getEmailDomain;
