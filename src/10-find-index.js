/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let low = 0;
  let high = array.length - 1;
  let mid = 0;
  while (high >= low) {
    mid = Math.floor((low + high) / 2);
    const buf = array[mid];
    if (buf === value) {
      return mid;
    }
    if (buf > value) {
      high = --mid;
    } else {
      low = ++mid;
    }
  }
  return null;
}

module.exports = findIndex;
