
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    let a = matrix;
    if (a === undefined) {
      return arr;
    }
    for (let i = 0; i < a.length; i = i + 1) {
      if (i % 2 == 0) {
        arr = arr.concat(a[i]);
      } else {
        arr = arr.concat(a[i].reverse());
      }
    }
    return arr;
  }