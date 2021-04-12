/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const name = names.slice();
  const newarr = [];
  let count = 1;
  for (let i = 0; i < name.length; i++) {
    if (!newarr.includes(name[i])) {
      newarr.push(name[i]);
      name.splice(i, 1);
      i -= 1;
    } else if (newarr.includes(name[i])) {
      if (newarr.includes(`${name[i]}(${count})`)) {
        name[i] = `${name[i]}(${count + 1})`;
        newarr.push(name[i]);
      } else {
        name[i] = `${name[i]}(${count})`;
        newarr.push(name[i]);
      }
    }
    count = 1;
  }
  return newarr;
}

module.exports = renameFiles;
