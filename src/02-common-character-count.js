/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function createObj(String) {
  const obj = {};
  String.split('').forEach((e) => {
    obj[e] = (obj[e] || 0) + 1;
  });
  return obj;
}

function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  const string1 = createObj(s1);
  const string2 = createObj(s2);
  for (let i = 0; i < Object.keys(string1).length; i++) {
    if (string2[Object.keys(string1)[i]]) {
      counter += Math.min(
        string1[Object.keys(string1)[i]],
        string2[Object.keys(string1)[i]],
      );
    }
  }
  return counter;
}

module.exports = getCommonCharacterCount;
